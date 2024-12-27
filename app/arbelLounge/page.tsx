import { FAQ } from "../components/Faq";
import { Hero } from "../components/Hero";
import { ChartItem } from "../components/ui/Chart";
import { H2Aviation } from "../components/ui/H2Aviation";
import { Paviation } from "../components/ui/Paviation";
import { Process } from "../components/ui/Process";
import { Description } from "../components/ui/Description";
import Image from "next/image";

export const metadata = {
  title: "Arbel Lounge | VIP Airport Services",
  description:
    "Experience luxury and comfort at Ben Gurion Airport's Arbel Lounge. Enjoy exclusive amenities, gourmet dining, and premium services in our world-class airport lounge.",
  keywords:
    "Arbel Lounge, Ben Gurion Airport, VIP lounge, airport services, luxury travel",
};

export default function ArbelLounge() {
  const faq = [
    {
      question: "What services are included in the Arbel Lounge experience?",
      answer:
        "The Arbel Lounge offers private security checks, expedited passport control, luxurious waiting rooms with refreshments, and private transportation to your gate.",
    },
    {
      question: "Do I need to book the Arbel Lounge service in advance?",
      answer:
        "Yes, it is recommended to book in advance to ensure availability and a seamless experience.",
    },
    {
      question: "Is the Arbel Lounge accessible for all passengers?",
      answer:
        "Yes, the Arbel Lounge is available to passengers traveling on all airlines, regardless of ticket class.",
    },
    {
      question: "Can I bring guests with me to the Arbel Lounge?",
      answer:
        "Yes, you can bring guests. Please include them in your booking to ensure a smooth process.",
    },
    {
      question:
        "Does the Arbel Lounge provide assistance for special needs passengers?",
      answer:
        "Yes, the lounge staff can accommodate special requests such as mobility assistance and dietary requirements.",
    },
    {
      question: "What happens if my flight is delayed?",
      answer:
        "The Arbel Lounge team monitors your flight schedule and adjusts services accordingly to ensure a stress-free experience.",
    },
    {
      question: "Can I use the lounge for layovers?",
      answer:
        "Yes, the Arbel Lounge service can be tailored for layovers to provide comfort and convenience during your transit.",
    },
  ];

  const Tabs = [
    {
      name: "Departure",
      process: [
        {
          name: "Personalized Greeting",
          description:
            "Upon arrival at the airport, a dedicated Platinum agent will meet you and assist with your luggage.",
        },
        {
          name: "Private Security Check",
          description:
            "Experience a seamless security screening within the comfort of the Arbel Lounge, away from the main terminal crowds.",
        },
        {
          name: "Expedited Passport Control",
          description:
            "Complete passport control procedures privately within the lounge, ensuring a swift and hassle-free process.",
        },
        {
          name: "Baggage Handling",
          description:
            "Your checked luggage will be managed efficiently, allowing you to relax without concerns.",
        },
        {
          name: "Luxurious Lounge Stay",
          description:
            "Unwind in our luxurious waiting rooms equipped with complimentary high-speed Wi-Fi, refreshments, and comfortable seating.",
        },
        {
          name: "Private Transportation to Gate",
          description:
            "When it's time to board, choose to be driven directly to the Duty-Free Hall or your departure gate by a private luxury vehicle.",
        },
      ],
    },
  ];

  return (
    <>
      <Hero
        subtitle="travel smarter , not harder"
        title="arbel lounge"
        description="Experience ultimate comfort and convenience with Arbel Lounge ben gurion. Our private security check, passport control, and baggage handover ensure a seamless journey. Relax in our luxurious waiting rooms with complimentary high-speed Wi-Fi and refreshments, before being driven to the Duty-Free Hall or your gate by private car. Choose Arbel Lounge for an unparalleled airport experience.
"
        backgroundImage="/arbel-lounge.jpg"
      />
      <Description
        title="departure private lounge"
        description="Step into the world of ultimate comfort and convenience with the
            fast Arbel Lounge service, nestled in the heart of Terminal 3. Say
            goodbye to the hassles of navigating multiple checkpoints before
            your flight – Arbel Lounge tel aviv airport offers a seamless
            passenger route without ever having to leave the lounge! From
            security checks to passport control, and even baggage handovers,
            everything can be done privately right here, allowing you to relax
            and unwind before your journey."
      />
      <section className="wDyn">
        <Process tabs={Tabs} isTab={false} />
      </section>
      <section className="wDyn h-fit py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <H2Aviation>why choose arbel for departure?</H2Aviation>
          <Paviation>
            Arbel lounge ben gurion with luxurious waiting rooms, complimentary
            high-speed Wi-Fi with coffee & tea – you’ll feel pampered and ready
            to take on the skies. After finishing the procedure. you’ll get the
            option to be driven to the Duty-Free Hall or to your gate by a
            private car – The choice is all yours. So come, and experience the
            epitome of convenience with Arbel Lounge.
          </Paviation>
        </div>
        <div className="mt-20 flex md:flex-row flex-col items-end justify-end gap-4">
          <ChartItem
            number="Privacy & Security"
            description="Enjoy a peaceful and private atmosphere like no other in our lounge. Your privacy is our priority. away from the hustle and bustle of the airport."
            backgroundColor="bg-black"
          />
          <ChartItem
            number="Travel Faster"
            description="our dedicated team allow you to skip the crowds and save time. our agents ensure you a smooth and hassle-free experience from start to finish."
            height="h-[500px]"
            backgroundColor="bg-primary"
          />
          <ChartItem
            number="100"
            title="Travel Stress-Free"
            description="Arbel Lounge provides stress-free travel with our services, which include luggage assistance for families. Relax in our lounge offering warm drinks"
            height="h-[400px]"
            backgroundColor="bg-accent"
          />
        </div>
      </section>
      <section id="gallery" className="gallery wDyn my-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            src={`/arbel-lounge/arbel-lounge- ${index + 1}.jpg`}
            alt="arbel lounge"
            width={300}
            height={300}
            key={index}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-[10px] overflow-hidden "
          />
        ))}
      </section>
      <section id="faq" className="wDyn mt-20">
        <FAQ faqItems={faq} />
      </section>
    </>
  );
}