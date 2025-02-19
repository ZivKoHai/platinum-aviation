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
      className={`w-full md:w-[calc(100%-5rem)] px-5 md:px-0 h-screen md:mx-auto rounded-none sm:rounded-[10px] flex flex-col justify-center items-center gap-5 relative`}
    >
      <div className="absolute inset-0">
        <Image
          quality={100}
          src={backgroundImage}
          alt="hero background"
          fill
          className="object-cover rounded-none sm:rounded-[10px]"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/30 rounded-none sm:rounded-[10px]" />
      </div>
      <span className="text-lg w-full md:w-auto capitalize font-medium text-left sm:text-center text-textColor z-10">
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
      <p className="text-textColor z-10 w-full md:w-[50%] text-left sm:text-center">
        {description}
      </p>
    </div>
  );
}
