import { H2Aviation } from "./ui/H2Aviation";

import { Paviation } from "./ui/Paviation";

export function WhyUs() {
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
