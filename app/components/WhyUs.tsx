import { H2Aviation } from "./ui/H2Aviation";

import { Paviation } from "./ui/Paviation";
import {
  BuildingOfficeIcon,
  LifebuoyIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { WhyChooseUs } from "./whyChooseUs";

export function WhyUs() {
  const benefits = [
    {
      name: "1k",
      description:
        "Sky Vip gave sevice for more than 1,000 client in ben gurion airport",
      icon: BuildingOfficeIcon,
    },
    {
      name: "1M+",
      description:
        "Sky Vip chauffeurs went through more then 10 million miles with clients in the back",
      icon: LifebuoyIcon,
    },
    {
      name: "100",
      description:
        "Sky Vip crew members are waiting for your arrival at ben gurion airport to welcome you into our vip",
      icon: UserIcon,
    },
  ];
  return (
    <WhyChooseUs
      title="Award-Winning Service"
      subtitle="Setting the Standard for Luxury Travel"
      description="we gave service for multiple individuals and companies in bengurion airpot"
      benefits={benefits}
      image={{
        src: "/benefits-1.png",
        alt: "ben gurion airport",
        width: 2432,
        height: 1442,
      }}
    />
  );

  return (
    <section id="why-us" className="wDyn h-fit py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <H2Aviation>say goodbye to the lines</H2Aviation>
        <Paviation>
          With over 20 years of experience, we ensure a stress-free journey
          through our VIP meet and greet service, allowing you to skip lines and
          enjoy fast-track access. Our certified airport agents have access to
          all airport areas, ensuring efficiency in all procedures.
        </Paviation>
      </div>
      <div className="mt-20 flex md:flex-row flex-col items-end justify-end gap-4">
        <div className="md:w-1/3 w-full sm:h-[300px] h-[200px] bg-black rounded-[10px] flex flex-col justify-between p-8">
          <div>
            <span className="font-bold text-white text-2xl">1k</span>
          </div>
          <div>
            <span className="font-normal text-white text-xl">
              Sky Vip gave sevice for more than 1,000 client in ben gurion
              airport
            </span>
          </div>
        </div>
        <div className="md:w-1/3 w-full sm:h-[500px] h-[200px] bg-primary rounded-[10px] flex flex-col justify-between p-8">
          <div>
            <span className="font-bold text-white text-2xl">1M+</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-white text-2xl">
              Miles our clients passed
            </span>
            <span className="font-normal text-white text-xl">
              Sky Vip chauffeurs went through more then 10 million miles with
              clients in the back
            </span>
          </div>
        </div>
        <div className="md:w-1/3 w-full sm:h-[400px] h-[300px] bg-accent rounded-[10px] flex flex-col justify-between p-8">
          <div>
            <span className="font-bold text-white text-2xl">100</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-white text-2xl">crew members</span>
            <span className="font-normal text-white text-xl">
              Sky Vip crew members are waiting for your arrival at ben gurion
              airport to welcome you into our vip
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
