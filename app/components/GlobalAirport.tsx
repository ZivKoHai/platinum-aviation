import Image from "next/image";
import { Circ } from "./ui/Circ";

export const GlobalAirport = () => {
  return (
    <section className="w-full h-fit py-10 bg-foreground overflow-hidden">
      <div className="wDyn relative min-h-[500px] mt-20 flex flex-col gap-10 sm:flex-row justify-between items-center py-10 text-background">
        <div className="basis-1/2 flex flex-col gap-4 justify-center z-10">
          <h2 className="text-4xl font-bold text-left">
            For any inquiries about specific global airports, please contact us.
          </h2>
        </div>
        <div className="basis-1/2 z-10">
          <div className="relative w-[80%] h-[300px] rounded-[10px] overflow-hidden">
            <Image
              src="/global-section-image.png"
              alt="Global Airport"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 ">
          <Circ size={500} />
        </div>
      </div>
    </section>
  );
};
