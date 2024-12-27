import Image from "next/image";
import { H2Aviation } from "./ui/H2Aviation";
import { Paviation } from "./ui/Paviation";
import { Card } from "./ui/Card";

export function SubHero() {
  const Services = [
    {
      title: "Fast Track",
      description:
        "Tired of waiting in long airport queues? Let us handle everything with our fast-track service!",
      image: (
        <Image
          src="/fast-track.webp"
          alt="fast-track"
          fill
          className="object-cover rounded-[10px] "
        />
      ),
      link: "/fastTrack",
    },
    {
      title: "Fattal Terminal",
      description:
        "Enjoy a VIP airport experience with fast-track check-in, private drivers, an endless buffet, an open bar, and duty-free shopping.",
      image: (
        <Image
          src="/fattal-terminal.webp"
          alt="fattal-terminal"
          fill
          className="object-cover rounded-[10px] "
        />
      ),
      link: "/fattalTerminal",
    },
    {
      title: "Arbel Lounge",
      description:
        "Tired of waiting in long airport queues? Let us handle everything with our fast-track service!",
      image: (
        <Image
          src="/arbel-lounge.jpg"
          alt="arbel-lounge"
          fill
          className="object-cover rounded-[10px] "
        />
      ),
      link: "/arbelLounge",
    },
    {
      title: "Luxury Transportation",
      description:
        "Travel in style with our premium vehicles and professional drivers, ensuring a seamless, comfortable, and stress-free journey.",
      image: (
        <Image
          src="/luxury-transportation.jpeg"
          alt="luxury-transportation"
          fill
          className="object-cover rounded-[10px] "
        />
      ),
      link: "/luxuryTransportation",
    },
    {
      title: "Private Security",
      description:
        "Our private security service provides a safe and secure environment for your journey, ensuring your peace of mind and protection.",
      image: (
        <Image
          src="/private-security.png"
          alt="private-security"
          fill
          className="object-cover rounded-[10px] "
        />
      ),
      link: "/privateSecurity",
    },
    {
      title: "Jet Service",
      description:
        "Take your travel to new heights with our private jet service, offering flexibility, privacy, and unparalleled luxury for every journey.",
      image: (
        <Image
          src="/private-jet.jpg"
          alt="jet-service"
          fill
          className="object-cover rounded-[10px] "
        />
      ),
      link: "/privateJet",
    },
  ];

  return (
    <section id="services" className="wDyn h-fit py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <H2Aviation>our services</H2Aviation>
        <Paviation>
          Elevate your airport experience with our VIP services. Enjoy access to
          a private lounge and skip the queues with our fast track service. Our
          team ensures a seamless and stress-free travel experience for you, and
          they will provide assistance with VIP service Ben Gurion airport.
        </Paviation>
      </div>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 auto-rows-fr gap-4 h-fit">
        {Services.map((service, index) => (
          <Card
            key={index}
            Image={service.image}
            title={service.title}
            description={service.description}
            bgColor="red"
          />
        ))}
      </div>
    </section>
  );
}
