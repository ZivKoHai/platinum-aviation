import Image from "next/image";
import { Hero } from "../components/Hero";
import { Button } from "../components/ui/Button";

import { Process } from "../components/ui/Process";
import { FAQ } from "../components/Faq";
import { Metadata } from "next";
import {
  BuildingOfficeIcon,
  UserPlusIcon,
  BellSnoozeIcon,
} from "@heroicons/react/20/solid";
import { WhyChooseUs } from "../components/whyChooseUs";
import { globalConfig } from "@/global-config";

export const metadata: Metadata = {
  title: `${globalConfig.appName} | Fast Track`,
  description: "Fast Track at Ben Gurion Airport",
  keywords: "Fast Track, Ben Gurion Airport, VIP Service, Airport Experience",
  openGraph: {
    title: `${globalConfig.appName} | Fast Track`,
    description: "Fast Track at Ben Gurion Airport",
    images: [{ url: "/fast-track.webp" }],
    type: "website",
    url: `${globalConfig.siteUrl}/fastTrack`,
    siteName: globalConfig.appName,
    locale: "en_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: `${globalConfig.appName} | Fast Track`,
    description: "Fast Track at Ben Gurion Airport",
    images: "/fast-track.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${globalConfig.siteUrl}/fastTrack`,
  },
};

const arrivalProcess = [
  {
    name: "Arrival",
    process: [
      {
        name: "Meeting You at the Aircraft Exit",
        description:
          "Our agent greets you as you exit the aircraft, providing a seamless welcome.",
      },
      {
        name: "Escorting and Guiding You Through the Airport",
        description:
          "You are accompanied through the airport with personalized guidance to fast-track procedures.",
      },
      {
        name: "Accelerating All Airport Procedures",
        description:
          "Fast-track services are provided for passport control, security, and other necessary steps.",
      },
      {
        name: "Connecting You with Your Chauffeur",
        description:
          "A private chauffeur is arranged to take you to your destination, ensuring a smooth exit.",
      },
    ],
  },
];

const departureProcess = [
  {
    name: "Departure",
    process: [
      {
        name: "Meeting You at the Airport",
        description:
          "Our agent greets you upon arrival at the airport for a hassle-free start.",
      },
      {
        name: "Assisting with Luggage, If Necessary",
        description:
          "We provide help with luggage handling to make your departure stress-free.",
      },
      {
        name: "Accelerating All Airport Procedures",
        description:
          "Fast-track services are provided for security checks, check-in, and passport control.",
      },
      {
        name: "Accompanying You to Your Lounge and/or Boarding Gate",
        description:
          "You are escorted to your lounge or directly to the boarding gate for a seamless experience.",
      },
    ],
  },
];

const faq = [
  {
    question: "What is Fast Track VIP Service at Ben Gurion Airport?",
    answer:
      "Fast Track VIP Service allows you to skip the long lines at security and passport control, ensuring a smoother, faster airport experience.",
  },
  {
    question:
      "Can I book Fast Track VIP Service for both arrivals and departures?",
    answer:
      "Yes, our VIP fast-track services are available for both arrivals and departures at Ben Gurion Airport.",
  },
  {
    question: "Is luxury ground transportation included?",
    answer:
      "Optional VIP services, including luxury ground transportation, are available to enhance your experience.",
  },
  {
    question: "How does the Fast Track Departure Service work?",
    answer:
      "Upon arrival at the airport, our VIP greeter will meet you, assist with check-in and baggage handling, escort you through fast-track security and passport control, and guide you to the duty-free area or your departure gate.",
  },
  {
    question: "How does the Fast Track Arrival Service work?",
    answer:
      "Upon landing, our greeter will meet you at the aircraft gate, assist you through fast-track passport control, help with luggage collection, expedite customs procedures, and escort you to your luxury transportation.",
  },
  {
    question: "What are the benefits of using Fast Track VIP Service?",
    answer:
      "Benefits include time-saving by avoiding long queues, enhanced comfort and luxury with personalized assistance, and a seamless airport experience tailored to your needs.",
  },
];

const benefits = [
  {
    name: "personal greeter",
    description:
      "Enjoy a peaceful and private atmosphere like no other in our lounge. Your privacy is our priority. away from the hustle and bustle of the airport",
    icon: UserPlusIcon,
  },
  {
    name: "private hall",
    description:
      "private hall for the most crowded process of the journey - check in",
    icon: BuildingOfficeIcon,
  },
  {
    name: "comfort",
    description:
      "The greeter takes care of all the challenging tasks—you simply follow their lead, and everything will be handled as quickly and efficiently as possible.",
    icon: BellSnoozeIcon,
  },
];

export default function FastTrack() {
  return (
    <>
      <Hero
        title="fast track"
        subtitle="travel smarter , not harder"
        description="Experience the ultimate in luxury and convenience with our VIP Fast Track service at Ben-Gurion Airport. Our seamless reservation process, coupled with our team of dedicated professionals, ensures that you receive personalized and attentive service from the moment you arrive until you board your flight."
        backgroundImage="/fast-track.webp"
      />
      <div className="wDyn py-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 justify-center ">
          <h2 className="text-4xl text-left w-full font-medium font-serif">
            Your Travel Begins Here.
          </h2>
          <p className="text-base tracking-tight">
            We take the hassle out of airport travel, providing you with a
            stress-free experience that will leave you feeling like a VIP.
            Don&apos;t settle for anything less than the best – choose our Fast
            Track airport VIP service for an unforgettable airport experience.
          </p>
          <Button>Book Now</Button>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/fast-track.webp"
            alt="fast-track"
            width={500}
            height={500}
            className="rounded-[10px]"
          />
        </div>
      </div>
      <section className="h-fit py-10">
        <WhyChooseUs
          title="Award-Winning Service"
          subtitle="why choose fast track?"
          description="From the moment you step into Ben Gurion Airport, our TLV
                    Airport Meet and Greet service sets the tone for a premium
                    experience. Our friendly and professional staff will be
                    there to welcome you, guiding you through every step of your
                    airport journey. With our specialized assistance, you can
                    bypass the usual stresses of airport procedures."
          benefits={benefits}
          image={{
            src: "/benefits-1.png",
            alt: "ben gurion airport",
            width: 2432,
            height: 1442,
          }}
        />
      </section>
      <section id="arrival" className="wDyn h-fit py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl text-left w-full font-medium font-serif">
            Arrivals
          </h2>
          <p className="text-base tracking-tight">
            Experience a warm and hassle-free arrival with our Fast Track
            Service. From the moment you step off the aircraft, our dedicated
            agent will greet you and ensure every step of your journey through
            the airport is smooth and efficient. Say goodbye to long lines as we
            fast-track all airport procedures, including passport control and
            security checks.
          </p>
        </div>
        <Process tabs={arrivalProcess} isTab={true} />
      </section>
      <section id="departures" className="wDyn h-fit py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl text-left w-full font-medium font-serif">
            Departures
          </h2>
          <p className="text-base tracking-tight">
            Transform your airport departure into a luxurious experience with
            our Fast Track Service. From the moment you arrive, our professional
            agent will greet you and assist with your luggage, ensuring
            you&apos;re free to relax. Skip the queues with our expedited
            security, check-in, and passport control services. Once the
            formalities are complete, you&apos;ll be escorted to your lounge or
            directly to your boarding gate, enjoying the peace of mind that
            everything has been expertly handled. Start your journey with ease,
            elegance, and unparalleled comfort.
          </p>
        </div>
        <Process tabs={departureProcess} isTab={true} />
      </section>

      <FAQ faqItems={faq} />
    </>
  );
}
