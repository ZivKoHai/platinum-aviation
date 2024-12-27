import Image from "next/image";
import { Hero } from "../components/Hero";
import { Button } from "../components/ui/Button";
import { Description } from "../components/ui/Description";
import { H2Aviation } from "../components/ui/H2Aviation";
import { Paviation } from "../components/ui/Paviation";
import { ChartItem } from "../components/ui/Chart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Jet | Platinum",
  description:
    "Experience the ultimate in luxury and convenience with our private jet service. We offer a range of aircraft options, from executive jets to luxurious helicopters, ensuring that you have the perfect ride for any occasion.",
  keywords:
    "private jet, luxury jet, executive jet, helicopter, luxury transportation",
};

export default function PrivateJet() {
  return (
    <>
      <Hero
        title="Private Jet"
        description="Experience the ultimate in luxury and convenience with our private jet service. We offer a range of aircraft options, from executive jets to luxurious helicopters, ensuring that you have the perfect ride for any occasion."
        backgroundImage="/private-jet.jpg"
      />
      <Description
        title="Serving Luxury - Business Aviation"
        description="Our private jet service is designed to provide you with the ultimate luxury transportation experience. We offer a wide range of aircraft options, from executive jets to luxurious helicopters, ensuring that you have the perfect ride for any occasion."
      />
      <div className="wDyn py-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 justify-center ">
          <h2 className="text-4xl text-left w-full font-medium">
            Platinum Private Jet Service
          </h2>
          <p className="text-base tracking-tight">
            Our private jet service offers a seamless and luxurious
            transportation experience tailored to your needs. Whether
            you&apos;re attending a business meeting, a special event, or
            exploring a new city, our private jet service ensures a stress-free
            and comfortable ride.
          </p>
          <Button>Book Now</Button>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/platinum-jet-service-2.webp"
            alt="private jet"
            width={500}
            height={500}
            className="rounded-[10px]"
          />
        </div>
      </div>
      <div className="wDyn py-20">
        <div className="flex flex-col gap-4">
          <H2Aviation>why choose our private jet service</H2Aviation>
          <Paviation>
            We provide a variety of tailored options to suit your unique needs,
            ensuring our dedicated team takes care of all the logistics. Travel
            effortlessly in unmatched comfort and luxury, enjoying the privacy
            you deserve.
          </Paviation>
        </div>
        <div className="mt-20 flex md:flex-row flex-col items-end justify-end gap-4">
          <ChartItem
            number="Custom Itineraries"
            description="Craft travel plans tailored to your unique needs, allowing you to maintain complete flexibility and enjoy a truly personalized journey."
            backgroundColor="bg-black"
          />
          <ChartItem
            number="On-Demand Flights"
            description="Book flights that fit your schedule, offering ultimate convenience and ensuring you save time without compromising on luxury."
            height="h-[500px]"
            backgroundColor="bg-primary"
          />
          <ChartItem
            number="Private Jet Charters"
            description="Experience unparalleled privacy and comfort with our private jet charters, ensuring a seamless, luxurious journey for you and your guests."
            height="h-[400px]"
            backgroundColor="bg-accent"
          />
        </div>
      </div>
      <Description id="gallery" title="gallery" />
      <section id="gallery" className="gallery wDyn my-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            src={`/jet-service/Private-jet- (${index + 1}).jpg`}
            alt="private jet israel"
            width={300}
            height={300}
            key={index}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-[10px] overflow-hidden "
          />
        ))}
      </section>
    </>
  );
}