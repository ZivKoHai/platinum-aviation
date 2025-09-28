import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { Seamless } from "./components/Seamless";
import { FAQ } from "./components/Faq";
import { GlobalAirport } from "./components/GlobalAirport";
import { Contact } from "./components/Contact";
import BlogLatestPosts from "./components/Blog";
import { Metadata } from "next";
import Benefits2 from "./components/benefits-2";
import ServicesSection from "./components/services-section";

//----------------------------------------

const faq = [
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, cancellations or modifications are allowed according to our terms and conditions. Please contact us directly for assistance.",
  },
  {
    question: "What is the price for a VIP airport service?",
    answer:
      "The price for a VIP airport service depends on the service you choose.",
  },
  {
    question: "how do i contact you?",
    answer:
      "You can contact us by phone or email. Our phone numbers are +1-(929)-563-2500 and +972052-777-2564. Our email is vip@bengurionairport.com.",
  },
  {
    question: "why should i use fast track at Ben Gurion Airport?",
    answer:
      "Fast Track at Ben Gurion Airport allows you to skip the long lines at security and passport control, ensuring a smoother, faster airport experience.",
  },
];

export const metadata: Metadata = {
  title: "Sky VIP",
  description:
    "Elevate your airport experience with our VIP services. Enjoy access to a private lounge and skip the queues with our fast track service. Our team ensures a seamless and stress-free travel experience for you, and they will provide assistance with VIP service Ben Gurion airport.",
  keywords:
    "Sky VIP, luxury transportation, private car service, VIP service, Ben Gurion airport, VIP service Ben Gurion airport",
  openGraph: {
    title: "Sky VIP",
    description:
      "Elevate your airport experience with our VIP services. Enjoy access to a private lounge and skip the queues with our fast track service. Our team ensures a seamless and stress-free travel experience for you, and they will provide assistance with VIP service Ben Gurion airport.",
    images: "/hero.png",
    type: "website",
    url: "https://airportfastrack.com/",
    siteName: "Sky VIP",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky VIP",
    description:
      "Elevate your airport experience with our VIP services. Enjoy access to a private lounge and skip the queues with our fast track service. Our team ensures a seamless and stress-free travel experience for you, and they will provide assistance with VIP service Ben Gurion airport.",
    images: "/hero.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://airportfastrack.com/",
  },
};

export default async function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Benefits2 />
      <Seamless />
      <BlogLatestPosts />
      <FAQ faqItems={faq} />
      <GlobalAirport />
      <Contact />
    </>
  );
}
