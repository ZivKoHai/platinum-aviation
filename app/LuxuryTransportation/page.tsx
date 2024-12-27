import Image from "next/image";
import { Hero } from "../components/Hero";
import { Button } from "../components/ui/Button";
import { Description } from "../components/ui/Description";
import { H2Aviation } from "../components/ui/H2Aviation";
import { Paviation } from "../components/ui/Paviation";
import { FAQ } from "../components/Faq";
import { Metadata } from "next";
import ImagesContainer from "../components/ui/ImagesConatiner";

export const metadata: Metadata = {
  title: "Luxury Transportation | Platinum",
  description:
    "Experience the ultimate in luxury and comfort with Platinum's luxury car service. Whether you're attending a business meeting, a special event, or exploring a new city, our private car service ensures a seamless and luxurious transportation experience tailored to your needs.",
  keywords:
    "luxury transport ben gurion, luxury car service, private car service, luxury transportation, luxury car service ben gurion, private car service ben gurion, luxury transportation ben gurion, luxury car service ben gurion, private car service ben gurion, luxury transportation ben gurion  ",
};

const faq = [
  {
    question: "Does the driver assist with luggage?",
    answer:
      "Yes, our professional drivers will assist you with loading and unloading your luggage to ensure a hassle-free experience.",
  },
  {
    question: "Can I book a car for a specific number of hours?",
    answer:
      "Yes, our hourly service allows you to book a luxury vehicle with a private driver for as long as you need.",
  },
  {
    question: "What types of vehicles are available?",
    answer:
      "Our fleet includes high-end sedans, spacious SUVs, limousines, and larger vehicles for groups, ensuring we can accommodate any travel need.",
  },
  {
    question: "Is transportation available for large groups?",
    answer:
      "Yes, we offer luxury vehicles designed to comfortably accommodate large groups, including buses and spacious vans.",
  },
  {
    question: "Can I request a specific vehicle type?",
    answer:
      "Yes, you can specify your preferred vehicle type during the booking process, and we will do our best to accommodate your request.",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Yes, we offer seamless transportation to and from airports, ensuring a comfortable and stress-free experience.",
  },
  {
    question: "Are the vehicles well-maintained and sanitized?",
    answer:
      "Absolutely. All our vehicles are meticulously maintained and thoroughly sanitized to ensure your safety and comfort.",
  },
  {
    question: "Are the drivers experienced and professional?",
    answer:
      "Yes, our drivers are highly experienced, professional, and dedicated to providing a smooth and enjoyable ride.",
  },
  {
    question: "Can I make multiple stops with the hourly service?",
    answer:
      "Yes, our hourly service allows you to make multiple stops as needed, offering complete flexibility during your journey.",
  },
  {
    question: "Is luxury transportation available internationally?",
    answer:
      "Yes, our private car service is available for destinations worldwide, ensuring a premium experience wherever you travel.",
  },
];

const Images: { src: string; alt: string }[] = [
  {
    src: "/luxury-transport/luxury-transport (1).jpg",
    alt: "luxury transportation",
  },
  {
    src: "/luxury-transport/luxury-transport (2).jpg",
    alt: "luxury transportation",
  },
  {
    src: "/luxury-transport/luxury-transport (3).jpg",
    alt: "luxury transportation",
  },
];

export default function LuxuryTransportation() {
  return (
    <>
      <Hero
        backgroundImage="/luxury-transportation.jpeg"
        title="luxury transportation"
        description="Experience the ultimate in style and comfort with Platinum's luxury car service. Whether you're attending a business meeting, a special event, or exploring a new city, our private car service ensures a seamless and luxurious transportation experience tailored to your needs."
      />
      <Description
        title="Your Ride To Relaxation & Comfort"
        description="Our luxury car service offers a seamless and luxurious transportation experience tailored to your needs. Whether you're attending a business meeting, a special event, or exploring a new city, our private car service ensures a stress-free and comfortable ride."
      />
      <div className="wDyn py-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 justify-center ">
          <h2 className="text-4xl text-left w-full font-medium">
            Platinum Private Car Service
          </h2>
          <p className="text-base tracking-tight">
            From elegant sedans to spacious SUVs, our premium selection ensures
            a comfortable and stylish journey. Driven by experienced
            professionals, our private car service offers seamless
            transportation to and from airports or any destination worldwide.
            Relax and enjoy the ride, knowing you&apos;ll arrive feeling
            refreshed and ready to make the most of your day.
          </p>
          <Button>Book Now</Button>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/platinum-car-service-2.webp"
            alt="luxury transportation"
            width={500}
            height={500}
            className="rounded-[10px]"
          />
        </div>
      </div>
      <div className="wDyn py-20">
        <div className="flex flex-col gap-4">
          <H2Aviation>why choose our luxury transportation</H2Aviation>
          <Paviation>
            Experience premium comfort with our luxury transportation services,
            available by the hour for all your travel needs. Whether you&apos;re
            traveling between the airport and your hotel, exploring destinations
            across the country, or require executive transportation, our
            professional chauffeurs ensure a first-class journey every time.
          </Paviation>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 grid-cols-1 gap-4 w-full h-fit">
          <div className="rounded-[10px] min-h-[300px] p-5 relative overflow-hidden">
            <Image
              src="/luxury-transport/luxury-transport- (6).jpg"
              alt="benefit"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-[10px] min-h-[300px] bg-black overflow-hidden p-5 flex flex-col justify-end gap-2">
            <h4 className="text-xl font-bold text-white">Hourly Service</h4>
            <p className="text-sm tracking-tight text-white">
              Pay by the hour and experience the luxury of having a premium
              vehicle and a private driver at your disposal
            </p>
          </div>
          <div className="rounded-[10px] min-h-[300px] relative overflow-hidden">
            <Image
              src="/luxury-transport/luxury-transport- (10).jpg"
              alt="benefit"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-[10px] bg-primary min-h-[300px] overflow-hidden p-5 flex flex-col justify-end gap-2">
            <h4 className="text-xl font-bold text-white">
              Hotel to Airport (or Vice Versa)
            </h4>
            <p className="text-sm tracking-tight text-white">
              Simplify your travel with our direct transfer service. Whether
              you’re heading to the airport or arriving from a flight, we
              provide a smooth and luxurious ride
            </p>
          </div>
          <div className="rounded-[10px] min-h-[300px] relative overflow-hidden ">
            <Image
              src="/luxury-transport/luxury-transport- (5).jpg"
              alt="luxury transportation"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-[10px] min-h-[300px] bg-primary overflow-hidden p-5 flex flex-col justify-end gap-2">
            <h4 className="text-xl font-bold text-white">Large Groups</h4>
            <p className="text-sm tracking-tight text-white">
              Travel in comfort with your entire group. Our fleet includes
              spacious vehicles designed to accommodate large parties, making it
              easy to travel together in style and convenience
            </p>
          </div>
        </div>
      </div>

      <section className="wDyn my-20">
        <ImagesContainer images={Images} />
      </section>

      <Description
        id="gallery"
        title="Our Fleet"
        description="Our fleet is designed to provide you with the ultimate luxury transportation experience. We offer a wide range of vehicles, from elegant sedans to spacious SUVs, ensuring that you have the perfect ride for any occasion."
      />
      <section className="wDyn my-20 gallery">
        {Array.from({ length: 14 }).map((_, index) => (
          <Image
            key={index}
            src={`/luxury-transport/luxury-transport- (${index + 1}).jpg`}
            alt="luxury transportation"
            width={500}
            height={500}
            className="object-cover rounded-[10px]"
          />
        ))}
      </section>
      <FAQ faqItems={faq} />
    </>
  );
}
