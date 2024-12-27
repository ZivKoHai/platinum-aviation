import Image from "next/image";
import { H2Aviation } from "./ui/H2Aviation";
import EmblaCarousel from "./ui/EmblaCarousel";

export const Benefits = () => {
  const slides = [
    {
      src: "/ben-gurion-vip-1.png",
      alt: "Ben Gurion VIP Service 1",
    },
    {
      src: "/ben-gurion-vip-2.png",
      alt: "Ben Gurion VIP Service 2",
    },
    {
      src: "/ben-gurion-vip-3.png",
      alt: "Ben Gurion VIP Service 3",
    },
    {
      src: "/ben-gurion-vip-4.png",
      alt: "Ben Gurion VIP Service 4",
    },
    {
      src: "/ben-gurion-vip-5.png",
      alt: "Ben Gurion VIP Service 5",
    },
  ];

  return (
    <div className="wDyn py-20">
      <H2Aviation>why choose our vip service</H2Aviation>
      <div className="mt-10 grid sm:grid-cols-3 grid-cols-1 gap-4 w-full h-fit">
        <div className="rounded-[10px] min-h-[300px] p-5 relative overflow-hidden">
          <Image
            src="/benefits-1.png"
            alt="benefit"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-[10px] min-h-[300px] bg-black overflow-hidden p-5 flex flex-col justify-end gap-2">
          <h4 className="text-xl font-bold text-white">
            Comfort and Convenience
          </h4>
          <p className="text-sm tracking-tight text-white">
            Relax with access to exclusive lounges, open bars, and private
            transportation for seamless travel.
          </p>
        </div>
        <div className="rounded-[10px] min-h-[300px] relative overflow-hidden">
          <Image
            src="/benefits-2.png"
            alt="benefit"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-[10px] bg-primary min-h-[300px] overflow-hidden p-5 flex flex-col justify-end gap-2">
          <h4 className="text-xl font-bold text-white">
            Save Time and Skip Lines
          </h4>
          <p className="text-sm tracking-tight text-white">
            Enjoy fast-track check-in, security, and passport control,
            eliminating long waits.
          </p>
        </div>
        <div className="rounded-[10px] min-h-[300px] relative overflow-hidden ">
          <Image
            src="/benefits-3.jpeg"
            alt="benefit"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-[10px] min-h-[300px] bg-primary overflow-hidden p-5 flex flex-col justify-end gap-2">
          <h4 className="text-xl font-bold text-white">
            Personalized Attention
          </h4>
          <p className="text-sm tracking-tight text-white">
            Receive tailored assistance from our dedicated team, ensuring your
            experience is seamless and stress-free.
          </p>
        </div>
      </div>
      <EmblaCarousel slides={slides} />
    </div>
  );
};
