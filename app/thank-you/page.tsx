"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // BASIC VALIDATION TO MAKE SURE THE USER DIDN'T JUST TYPE IN THE URL
    if (
      !searchParams.get("name") ||
      !searchParams.get("email") ||
      !searchParams.get("phone") ||
      !searchParams.get("flight") ||
      !searchParams.get("numberOfPassengers") ||
      !searchParams.get("flightTime")
    ) {
      router.push("/");
    }
  }, [searchParams, router]);

  // Get parameters after the useEffect
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const flight = searchParams.get("flight");
  const numberOfPassengers = searchParams.get("numberOfPassengers");
  const flightTime = searchParams.get("flightTime");

  // If any required data is missing, return null (will redirect in useEffect)
  if (
    !name ||
    !email ||
    !phone ||
    !flight ||
    !numberOfPassengers ||
    !flightTime
  ) {
    return null;
  }

  const features = [
    {
      name: "Name",
      description: name,
    },
    {
      name: "Email",
      description: email,
    },
    {
      name: "Phone",
      description: phone,
    },
    {
      name: "Flight",
      description: flight,
    },
    {
      name: "Number of Passengers",
      description: numberOfPassengers,
    },
    {
      name: "Flight Time",
      description: flightTime,
    },
  ];

  return (
    <div className="bg-background">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Buckle up!
          </h2>
          <p className="mt-4 text-foreground">
            We have received your request and will get back to you as soon as
            possible.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-black pt-4">
                <dt className="font-medium text-foreground">{feature.name}</dt>
                <dd className="mt-2 text-sm text-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="/ben-gurion-vip-4.png"
            width={500}
            height={500}
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="/benefits-2.png"
            width={500}
            height={500}
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Side of walnut card tray with card groove and recessed card area."
            src="/arbel-lounge.jpg"
            width={500}
            height={500}
            className="rounded-lg bg-gray-100"
          />
          <Image
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="/luxury-transportation.jpeg"
            width={500}
            height={500}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
