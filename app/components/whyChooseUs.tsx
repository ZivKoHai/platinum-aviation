import Image from "next/image";

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface WhyChooseUsProps {
  benefits: Feature[];
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function WhyChooseUs({
  benefits,
  title,
  subtitle,
  description,
  image,
}: WhyChooseUsProps) {
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-accent">{title}</h2>
              <p className="mt-2 text-pretty text-4xl font-medium font-serif tracking-tight text-textColor sm:text-5xl">
                {subtitle}
              </p>
              <p className="mt-6 text-lg/8 text-textColor">{description}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-textColor lg:max-w-none">
                {benefits.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-textColor">
                      <feature.icon
                        aria-hidden={true}
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
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
            sizes="100vw"
            className="w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
