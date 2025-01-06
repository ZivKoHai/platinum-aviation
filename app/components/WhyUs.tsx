import Image from "next/image";
import { H2Aviation } from "./ui/H2Aviation";

import { Paviation } from "./ui/Paviation";
import {
  BuildingOfficeIcon,
  LifebuoyIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export function WhyUs() {
  const benefits = [
    {
      name: "1k",
      description:
        "Platinum gave sevice for more than 1,000 client in ben gurion airport",
      icon: BuildingOfficeIcon,
    },
    {
      name: "1M+",
      description:
        "Platinum chauffeurs went through more then 10 million miles with clients in the back",
      icon: LifebuoyIcon,
    },
    {
      name: "100",
      description:
        "Platinum crew members are waiting for your arrival at ben gurion airport to welcome you into our vip",
      icon: UserIcon,
    },
  ];
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-accent">
                Award-Winning Service
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Setting the Standard for Luxury Travel
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                we gave service for multiple individuals and companies in ben
                gurion airpot
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {benefits.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-accent"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="ben gurion airport"
            src="/benefits-1.png"
            width={2432}
            height={1442}
            sizes="100vw"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
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
              platinum gave sevice for more than 1,000 client in ben gurion
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
              platinum chauffeurs went through more then 10 million miles with
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
              platinum crew members are waiting for your arrival at ben gurion
              airport to welcome you into our vip
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
