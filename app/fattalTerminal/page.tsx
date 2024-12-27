import { Hero } from "../components/Hero";
import { Process } from "../components/ui/Process";
import { Description } from "../components/ui/Description";
import { FAQ } from "../components/Faq";
import ImagesContainer from "../components/ui/ImagesConatiner";

export const metadata = {
  title: "Fattal Terminal | VIP Airport Services",
  description:
    "Experience the luxury of Fattal Terminal at Ben Gurion Airport. Enjoy exclusive amenities, gourmet dining, and premium services in our world-class airport lounge.",
  keywords:
    "Fattal Terminal, Ben Gurion Airport, VIP lounge, airport services, luxury travel",
};

const Tabs = [
  {
    name: "Lounge Hall",
    process: [
      {
        name: "Warm Welcome",
        description:
          "Upon arrival at the private terminal entrance, our team warmly welcomes you, escorts you to the lounge hall, and handles your luggage.",
      },
      {
        name: "Private Security Procedure",
        description:
          "After seating comfortably, a private security procedure is conducted within the lounge hall.",
      },
      {
        name: "Luggage Check-In",
        description:
          "While you enjoy our special food and beverages, our agent manages your luggage check-in. Handbag security and passport control are completed within the private terminal complex.",
      },
      {
        name: "Duty-Free Access",
        description:
          "For your convenience, after crossing the border, you can explore the duty-free shop located in the terminal complex.",
      },
      {
        name: "Luxury Transfer to Aircraft",
        description:
          "Before boarding, we transport you by luxury car through the airspace directly to your gate or aircraft.",
      },
    ],
  },
  {
    name: "Private Rooms",
    process: [
      {
        name: "Exclusive Room Access",
        description:
          "Experience luxury in our newly decorated state-of-the-art rooms, each equipped with a private bathroom, multichannel flat-screen TV, Wi-Fi, amenities, and optional room and butler services.",
      },
      {
        name: "Complimentary Refreshments",
        description:
          "Enjoy complimentary fresh food and beverages tailored to your preferences during your stay.",
      },
      {
        name: "Refreshing Shower Facilities",
        description:
          "A refreshing shower is conveniently located next to your room, allowing you to rejuvenate before or after your flight.",
      },
      {
        name: "Personalized Services",
        description:
          "Our VIP service ensures a personalized and elevated travel experience, with options to upgrade your stay on demand.",
      },
    ],
  },
  {
    name: "Accommodation",
    process: [
      {
        name: "Luxurious Hotel-Standard Rooms",
        description:
          "Stay in state-of-the-art rooms designed to provide the ultimate comfort and privacy, equipped with premium amenities including multichannel flat-screen TVs, private bathrooms, and high-speed Wi-Fi.",
      },
      {
        name: "24/7 Room Service",
        description:
          "Enjoy round-the-clock room service with personalized attention, offering a wide range of fresh food and beverages tailored to your preferences.",
      },
      {
        name: "Stay Without Leaving the Terminal",
        description:
          "Experience the convenience of staying at Ben Gurion Airport without ever leaving the private terminal, ensuring a seamless and stress-free journey.",
      },
      {
        name: "Refreshing Shower Facilities",
        description:
          "Rejuvenate with access to private shower facilities, conveniently located near your room for maximum comfort and convenience.",
      },
      {
        name: "Personalized Luxury Experience",
        description:
          "Our VIP service ensures a highly personalized experience, with optional upgrades like private butler services and enhanced room features available on demand.",
      },
    ],
  },
];

const TabsArrival = [
  {
    name: "Arrival",
    process: [
      {
        name: "Luxury Vehicle Transfer",
        description:
          "A luxury vehicle awaits you at the exit of the airplane to drive you directly to the terminal through the airspace, ensuring a seamless and private transition.",
      },
      {
        name: "Personalized Greeting and Fast-Track Procedures",
        description:
          "Upon arrival at the terminal, you’ll be greeted by our dedicated staff who will fast-track all airport procedures, including passport control and security checks.",
      },
      {
        name: "Relaxation at the Lounge Hall",
        description:
          "Enjoy the exclusive lounge amenities, including a gourmet buffet, cigar bar, and other luxurious comforts while awaiting your luggage.",
      },
      {
        name: "Seamless Exit with Chauffeur Option",
        description:
          "Once your luggage arrives, you can leave the private terminal effortlessly. Additionally, we offer a private chauffeur service, ready to take you to any destination of your choice.",
      },
    ],
  },
];

const faq = [
  {
    question: "What is the Fattal Terminal?",
    answer:
      "The Fattal Terminal is a private terminal at Ben Gurion Airport offering exclusive VIP services, including fast-track airport procedures, luxurious lounges, and private transportation.",
  },
  {
    question: "Who can use the Fattal Terminal?",
    answer:
      "The Fattal Terminal is available for all passengers, regardless of airline or ticket class, who wish to enhance their travel experience with premium services.",
  },
  {
    question: "What services are included in the Fattal Terminal experience?",
    answer:
      "The services include private security checks, fast-track passport control, luxurious lounge access with a buffet and cigar bar,private duty free shop, and private transportation to or from the aircraft.",
  },
  {
    question: "Can I book the terminal for both arrival and departure?",
    answer:
      "Yes, the Fattal Terminal services are available for both arrival and departure, as well as layovers, ensuring a seamless and luxurious experience throughout your journey.",
  },
  {
    question: "Do I need to book the Fattal Terminal in advance?",
    answer:
      "Yes, advance booking is highly recommended to ensure availability and a smooth experience tailored to your needs.",
  },
  {
    question: "Are private rooms available at the Fattal Terminal?",
    answer:
      "Yes in extra cost, the Fattal Terminal offers private rooms with hotel-standard amenities, 24/7 room service, and refreshing shower facilities for ultimate privacy and comfort.",
  },
  {
    question:
      "Are special accommodations available for passengers with specific needs?",
    answer:
      "Yes, the Fattal Terminal provides personalized assistance for passengers with mobility challenges, dietary requirements, or other specific needs. Please inform us in advance to accommodate your requests.",
  },
];

const ImagesTwo: { src: string; alt: string }[] = [
  {
    src: "/fattal-terminal/fattal-terminal-4.jpg",
    alt: "fattal terminal",
  },
  {
    src: "/fattal-terminal/fattal-terminal-5.jpeg",
    alt: "fattal terminal",
  },
  {
    src: "/fattal-terminal/fattal-terminal-6.jpeg",
    alt: "fattal terminal",
  },
];

const Images: { src: string; alt: string }[] = [
  {
    src: "/fattal-terminal/fattal-terminal-1.jpeg",
    alt: "fattal terminal",
  },
  {
    src: "/fattal-terminal/fattal-terminal-2.jpg",
    alt: "fattal terminal",
  },
  {
    src: "/fattal-terminal/fattal-terminal-3.jpeg",
    alt: "fattal terminal",
  },
];

const ImagesThree: { src: string; alt: string }[] = [
  {
    src: "/fattal-terminal/corporate-solutions-1.jpg",
    alt: "fattal terminal corporate solutions",
  },
  {
    src: "/fattal-terminal/corporate-solutions-2.jpeg",
    alt: "fattal terminal corporate solutions",
  },
  {
    src: "/fattal-terminal/corporate-solutions-3.jpg",
    alt: "fattal terminal corporate solutions",
  },
];

export default function FattalTerminal() {
  return (
    <>
      <Hero
        title="Fattal Terminal"
        description="Experience exclusive and personalized hospitality at Fattal Terminal tlv, the first of its kind in Israel. Our private terminal is tailored to meet your unique needs, whether you’re arriving or departing from Israel on a private or commercial flight, or are a member of an aircrew from anywhere in the world."
        backgroundImage="/fattal-terminal/fattal-terminal-1.jpeg"
      />
      <Description
        title="luxury at the airport terminal"
        description="Our passengers at Fattal lounge tlv follow a seamless process before their departure. This includes a warm welcome at the terminal by our crew, followed by a security check, check-in, security mirroring, passport control, and finally, The passengers is chauffeured to their gate/aircraft in luxury by a private driver. We offer various waiting options, as stated below."
      />
      <section id="departures" className="wDyn h-fit py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl text-left w-full font-medium">Departures</h2>
          <p className="text-base tracking-tight">
            Our passengers at Fattal lounge tlv follow a seamless process before
            their departure. This includes a warm welcome at the terminal by our
            crew, followed by a security check, check-in, security mirroring,
            passport control, and finally, The passengers is chauffeured to
            their gate/aircraft in luxury by a private driver. We offer various
            waiting options, as stated below.
          </p>
        </div>
        <Process tabs={Tabs} isTab={true} />
      </section>
      <section className="wDyn my-20 flex flex-row gap-4">
        <ImagesContainer images={Images} />
      </section>
      <section id="arrival" className="wDyn h-fit py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl text-left w-full font-medium">Arrivals</h2>
          <p className="text-base tracking-tight">
            Our passengers at the Fattal Lounge TLV enjoy a seamless arrival
            process designed for maximum comfort and efficiency. Upon landing,
            they are welcomed by a luxury vehicle at the aircraft exit and
            chauffeured through the airspace to the private terminal. Inside the
            terminal, our dedicated crew fast-tracks all arrival procedures,
            including passport control and luggage handling. While waiting,
            passengers can relax in the lounge, enjoying premium amenities such
            as a gourmet buffet and cigar bar. For added convenience, a private
            chauffeur can be arranged to take them to any destination upon
            departure from the terminal.
          </p>
        </div>
        <Process tabs={TabsArrival} isTab={true} />
      </section>
      <section className="wDyn my-20 flex flex-row gap-4">
        <ImagesContainer images={ImagesTwo} />
      </section>
      <Description
        title="corporate solutions"
        description="Fattal lounge ben gurion airport advanced business center has multiple meeting rooms with projection and amplification systems, video conference, and high-speed internet. It’s perfect for press conferences, launches, and business events.
        At fattal prive terminal we also offers a comfortable and sophisticated environment for business people to unwind, indulge in fine dining and drinks, and enjoy a premium cigar lounge."
      />
      <section className="wDyn my-20 flex flex-row gap-4">
        <ImagesContainer images={ImagesThree} />
      </section>
      <FAQ faqItems={faq} />
    </>
  );
}
