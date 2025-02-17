import { Hero } from "./components/Hero";
import { SubHero } from "./components/SubHero";
import { WhyUs } from "./components/WhyUs";
import { Benefits } from "./components/Benefits";
import { Seamless } from "./components/Seamless";
import { FAQ } from "./components/Faq";
import { GlobalAirport } from "./components/GlobalAirport";
import { Contact } from "./components/Contact";
import BlogLatestPosts from "./components/Blog";
const faq = [
  {
    question: "What is the price for a VIP airport service?",
    answer: "The price for a VIP airport service is $100 per person.",
  },
  {
    question: "What is the price for a VIP airport service?",
    answer: "The price for a VIP airport service is $100 per person.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, cancellations or modifications are allowed according to our terms and conditions. Please contact us directly for assistance.",
  },
  {
    question: "What is the price for a VIP airport service?",
    answer: "The price for a VIP airport service is $100 per person.",
  },
];

export default async function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <WhyUs />
      <Benefits />
      <Seamless />
      <BlogLatestPosts />
      <FAQ faqItems={faq} />
      <GlobalAirport />
      <Contact />
    </>
  );
}
