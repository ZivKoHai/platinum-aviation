import React from "react";
import { H1Aviation } from "./ui/H1Aviation";
import Image from "next/image";

interface HeroProps {
  subtitle?: string;
  title?: string | React.ReactNode;
  description?: string;
  backgroundImage?: string;
}

export function Hero({
  subtitle = "travel smarter , not harder",
  title = "vip airport service \n at ben gurion airport.",
  description = "Whether arriving, departing, or transiting, our VIP services ensure a seamless and stress-free journey.",
  backgroundImage = "/hero.png",
}: HeroProps) {
  return (
    <div
      className={`w-full md:w-[calc(100%-5rem)] px-5 md:px-0 h-screen bg-cover bg-center bg-opacity-50 md:mx-auto rounded-none sm:rounded-[10px] flex flex-col justify-center items-center gap-5 relative before:content-[''] before:absolute before:inset-0 before:bg-black before:sm:rounded-[10px] before:opacity-20`}
    >
      <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-black before:opacity-30 before:sm:rounded-[10px] before:z-40 rounded-none sm:rounded-[10px]">
        <Image
          quality={100}
          src={backgroundImage}
          alt="hero background"
          fill
          className="object-cover rounded-none sm:rounded-[10px]"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <span className="text-lg w-full md:w-auto capitalize font-medium text-left sm:text-center text-white z-10">
        {subtitle}
      </span>
      <H1Aviation>
        {typeof title === "string"
          ? title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))
          : title}
      </H1Aviation>
      <p className="text-white z-10 w-full md:w-[50%] text-left sm:text-center">
        {description}
      </p>
    </div>
  );
}
