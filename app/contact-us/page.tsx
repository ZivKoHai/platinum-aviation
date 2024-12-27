import { Hero } from "../components/Hero";
import { Description } from "../components/ui/Description";
import { Contact } from "../components/Contact";

export default function ContactUs() {
  return (
    <>
      <Hero
        title="Contact Us"
        description="We are here to help you with any questions or concerns you may have. Please fill out the form below and we will get back to you as soon as possible."
        backgroundImage="/contact-us-hero.png"
      />
      <Description
        title="Contact Us"
        description="We are here to help you with any questions or concerns you may have. Please fill out the form below and we will get back to you as soon as possible."
      />
      <Contact />
    </>
  );
}
