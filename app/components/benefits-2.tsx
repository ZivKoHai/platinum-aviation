import Image from "next/image";

//----------------------------------------

import { Sofa, Timer, UserCheck } from "lucide-react";

const benefits = [
  {
    title: "Comfort and Convenience",
    description:
      "Relax with access to exclusive lounges, open bars, and private transportation for seamless travel.",
    icon: Sofa,
  },
  {
    title: "Save Time and Skip Lines",
    description:
      "Enjoy fast-track check-in, security, and passport control, eliminating long waits.",
    icon: Timer,
  },
  {
    title: "Personalized Attention",
    description:
      "Receive tailored assistance from our dedicated team, ensuring your experience is seamless and stress-free.",
    icon: UserCheck,
  },
];

export default function Benefits2() {
  return (
    <section
      id="benefits"
      className="wDyn max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-6 mb-10"
    >
      <div className="aspect-w-16 aspect-h-7">
        <Image
          className="w-full object-cover rounded-[10px]"
          src="/ben-gurion-vip-2.png"
          alt="Features Image"
          width={500}
          height={500}
        />
      </div>

      {/* Grid */}
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-textColor">
            why choose our vip service
          </h2>
          {/* <p className="mt-2 md:mt-4 text-textColor">
              Besides working with start-up enterprises as a partner for
              digitalization, we have built enterprise products for common pain
              points that we have encountered in various products and projects.
            </p> */}
        </div>
        {/* End Col */}

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {benefits.slice(0, 4).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-x-5">
                  <Icon className="shrink-0 mt-1 size-6 text-primary" />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-textColor">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-textColor">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </section>
  );
}
