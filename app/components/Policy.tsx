import Image from "next/image";

interface PolicyContent {
  heading: string;
  details: string[];
}

interface PolicySection {
  title: string;
  content: PolicyContent[];
  image: string;
}

interface PolicyProps {
  sections: PolicySection[];
}

export function Policy({ sections }: PolicyProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className={`flex flex-col md:flex-row gap-8 items-center ${index > 0 ? "mt-16" : ""}`}
        >
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-accent">
              {section.title}
            </h3>
            {section.content.map((item) => (
              <div key={item.heading} className="space-y-3">
                <h4 className="text-lg font-medium">{item.heading}</h4>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
