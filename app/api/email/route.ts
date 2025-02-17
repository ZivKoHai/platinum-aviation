"use server";

import { Resend } from "resend";
import SubmissionEmail from "@/app/emails/submission-template";
import { NextResponse } from "next/server";

import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  flight: z.string().min(1, "Flight number is required"),
  numberOfPassengers: z.string().min(1, "Number of passengers is required"),
  flightTime: z.string().min(1, "Flight time is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = formSchema.parse(body);

    // Validate the incoming data
    if (!validatedData) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    // Check if the score is too low (potentially a bot)
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // disable it for testing..
    // 1. Send an email
    const { data, error } = await resend.emails.send({
      from: "VIP Service <system@airportfastrack.com>",
      to: ["vip@bengurionairport.com"],
      subject: "New VIP Form Submission",
      react: SubmissionEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        flight: validatedData.flight,
        numberOfPassengers: validatedData.numberOfPassengers,
        flightTime: validatedData.flightTime,
      }),
    });

    if (error) {
      return NextResponse.json(
        { error: "Email sending failed", data },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
