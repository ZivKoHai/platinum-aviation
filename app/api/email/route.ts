"use server";

import { NextResponse } from "next/server";
import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";

import { z } from "zod";

//----------------------------------------

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  flight: z.string().min(1, "Flight number is required"),
  numberOfPassengers: z.string().min(1, "Number of passengers is required"),
  flightTime: z.string().min(1, "Flight time is required"),
});

const client = new SESv2Client({
  region: process.env.REGION as string,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = formSchema.parse(body);
    console.log("sending email..");

    // Validate the incoming data
    if (!validatedData) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, email, phone, flight, numberOfPassengers, flightTime } =
      validatedData;

    const command = new SendEmailCommand({
      FromEmailAddress: "info@airportfastrack.com",
      Destination: {
        ToAddresses: [
          email,
          "vip@bengurionairport.com",
          "ziv.kali656@gmail.com",
        ],
      },
      Content: {
        Simple: {
          Subject: {
            Data: "thank you for your submission",
          },
          Body: {
            Text: {
              Data: "thank you for your submission",
            },
            Html: {
              Data: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <title>Thank You for Your VIP Service Request</title>
                    <style>
                      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                      .header { background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 3px solid #gold; }
                      .content { padding: 30px 20px; background-color: #ffffff; }
                      .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
                      h1 { color: #1a1a1a; margin: 0; font-size: 24px; }
                      .highlight { color: #gold; font-weight: bold; }
                      .button { display: inline-block; padding: 10px 20px; background-color: #gold; color: #ffffff; text-decoration: none; border-radius: 5px; margin-top: 20px; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <div class="header">
                        <h1>Thank You for Choosing Platinum Aviation</h1>
                      </div>
                      <div class="content">
                        <p>Dear ${name},</p>
                        <p>Thank you for requesting our VIP airport services. We have received your submission and our team will review your request shortly.</p>
                        <p>Here's a summary of your request:</p>
                        <ul>
                          <li><strong>Flight Number:</strong> ${flight}</li>
                          <li><strong>Number of Passengers:</strong> ${numberOfPassengers}</li>
                          <li><strong>Flight Time:</strong> ${flightTime}</li>
                          <li><strong>Contact Phone:</strong> ${phone}</li>
                        </ul>
                        <p>Our team will contact you soon to confirm your VIP service arrangements and provide any additional information you may need.</p>
                        <p>If you have any immediate questions, please don't hesitate to contact us.</p>
                      </div>
                      <div class="footer">
                        <p>This is an automated message. Please do not reply to this email.</p>
                        <p>&copy; ${new Date().getFullYear()} Platinum Aviation. All rights reserved.</p>
                      </div>
                    </div>
                  </body>
                </html>
              `,
            },
          },
        },
      },
    });

    const resp = await client.send(command);

    console.log(resp);

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
