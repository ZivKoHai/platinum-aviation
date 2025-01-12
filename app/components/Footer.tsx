import Link from "next/link";
import { Logo } from "./ui/Logo";

export const Footer = () => {
  const serviceLinks = [
    { name: "Fast Track", href: "/fastTrack" },
    { name: "Arbel Lounge", href: "/arbelLounge" },
    { name: "Fattal Terminal", href: "/fattalTerminal" },
    { name: "Luxury Transportation", href: "/LuxuryTransportation" },
    { name: "Private Jet", href: "/privateJet" },
  ];

  const contactLinks = [
    {
      name: "vip@bengurionairport.com",
      href: "mailto:vip@bengurionairport.com",
    },
    { name: "052-777-2564", href: "tel:0527772564" },
  ];

  const socialLinks = [{ name: "Instagram", href: "https://instagram.com" }];

  return (
    <>
      <footer className=" min-h-[500px] mt-20 py-20 px-10 bg-black text-white flex flex-col sm:gap-0 gap-10 sm:flex-row justify-between">
        <div className="overflow-hidden">
          <Logo size={3} color="#fff" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-regular tracking-tight mb-4">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-regular tracking-tight mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-regular tracking-tight mb-4">
              Social Media
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="border-t border-white py-5 h-15 flex sm:flex-row flex-col justify-between w-full bg-black text-white px-10">
        <div>
          <p>© 2025 Ben Gurion Airport VIP Services</p>
        </div>
        <div className="flex flex-row gap-10">
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/cancelPolicy">Cancellation Policy</Link>
        </div>
        <div>
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-600"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};
