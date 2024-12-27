import { H2Aviation } from "./ui/H2Aviation";
import { Paviation } from "./ui/Paviation";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqItems: FaqItem[];
  title?: string;
  footerText?: string;
}

export const FAQ = ({
  faqItems,
  title = "Frequently Asked Questions",
  footerText = "Can't find the question you were looking for? You're just a click away from your answer!",
}: FaqProps) => {
  return (
    <div className="wDyn py-20">
      <div>
        <H2Aviation>{title}</H2Aviation>
      </div>
      <div className="flex flex-col gap-4 min-h-[300px] mt-10">
        {faqItems.map((item, index) => (
          <details
            key={index}
            className="border-b-[1px] py-2 border-black hover:cursor-pointer"
          >
            <summary className="sm:text-lg text-base font-light">
              {item.question}
            </summary>
            <p className="sm:text-base text-sm font-light py-2">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
      {footerText && (
        <div className="mt-10">
          <Paviation>{footerText}</Paviation>
        </div>
      )}
    </div>
  );
};
