"use client";

import { Input } from "./Input";
import { SelectInput } from "./SelectInput";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  flight: z.string().min(1, "Flight number is required"),
  numberOfPassengers: z.string().min(1, "Number of passengers is required"),
  flightTime: z.string().min(1, "Flight time is required"),
  numberOfLuggage: z.string().min(1, "Number of luggage is required"),
});

type FormData = z.infer<typeof formSchema>;

export const Form = () => {
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [recaptchaError, setRecaptchaError] = useState<string>("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRecaptchaError("");

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      const validatedData = formSchema.parse(data);

      // Make sure reCAPTCHA is loaded
      if (typeof window === "undefined" || !window.grecaptcha) {
        setRecaptchaError("reCAPTCHA failed to load. Please refresh the page.");
        throw new Error("reCAPTCHA has not loaded");
      }

      // Ensure site key is available
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
        setRecaptchaError(
          "reCAPTCHA configuration error. Please try again later."
        );
        throw new Error("reCAPTCHA site key is missing");
      }

      // Wait for reCAPTCHA to be ready and execute
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, {
              action: "submit",
            });
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });

      // Reset errors if validation passes
      setErrors({});

      // Send to API
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...validatedData, recaptchaToken: token }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Handle success (e.g., show success message, reset form)
      (e.target as HTMLFormElement).reset();
      router.push(
        `/thank-you?name=${encodeURIComponent(validatedData.name)}&email=${encodeURIComponent(validatedData.email)}&phone=${encodeURIComponent(validatedData.phone)}&flight=${encodeURIComponent(validatedData.flight)}&numberOfPassengers=${encodeURIComponent(validatedData.numberOfPassengers)}&flightTime=${encodeURIComponent(validatedData.flightTime)}`
      );
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors into a more usable format
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle other errors (including reCAPTCHA errors)
        if (!recaptchaError) {
          setRecaptchaError("An error occurred. Please try again.");
        }
      }
      console.error("Validation error:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input name="name" type="text" placeholder="Name" />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name}</span>
      )}

      <Input name="email" type="email" placeholder="Email" />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email}</span>
      )}

      <Input name="phone" type="tel" placeholder="Phone Number" />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone}</span>
      )}

      <Input name="flight" type="text" placeholder="Flight Number" />
      {errors.flight && (
        <span className="text-red-500 text-sm">{errors.flight}</span>
      )}

      <div className="flex sm:flex-row flex-col gap-4">
        <SelectInput
          label="Number of Passengers"
          name="numberOfPassengers"
          options={Array.from({ length: 10 }, (_, index) => ({
            value: String(index + 1),
            label: String(index + 1),
          }))}
          placeholder="Select..."
        />
        {errors["numberOfPassengers"] && (
          <span className="text-red-500 text-sm">
            {errors["numberOfPassengers"]}
          </span>
        )}
        <Input name="flightTime" type="text" placeholder="Flight Time" />
        {errors.flightTime && (
          <span className="text-red-500 text-sm">{errors.flightTime}</span>
        )}
      </div>
      <Input
        name="numberOfLuggage"
        type="number"
        placeholder="Number of Luggage"
      />
      {errors.numberOfLuggage && (
        <span className="text-red-500 text-sm">{errors.numberOfLuggage}</span>
      )}
      <button
        type="submit"
        className="bg-black text-white px-5 py-2 rounded-[10px]"
      >
        Submit
      </button>

      {recaptchaError && (
        <span className="text-red-500 text-sm mt-2">{recaptchaError}</span>
      )}
    </form>
  );
};
