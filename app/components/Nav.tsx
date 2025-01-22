import Link from "next/link";
import { Logo } from "./ui/Logo";

export function Nav() {
  const Links = [
    { name: "Fast Track", href: "/fastTrack" },
    { name: "Arbel Lounge", href: "/arbelLounge" },
    { name: "Fattal Terminal", href: "/fattalTerminal" },
    { name: "Luxury Transportation", href: "/LuxuryTransportation" },
    { name: "Private Jet", href: "/privateJet" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="z-50 h-16 bg-color-1 flex justify-between items-center py-10 rounded-lg mx-3 px-5">
      <Link href={"/"} className="h-10">
        <Logo color="#000" size={9} />
      </Link>

      {/* <!-- Toggle Button for Mobile --> */}
      <input type="checkbox" id="sidebar-active" className="hidden" />
      <label
        htmlFor="sidebar-active"
        className="open-sidebar-button p-5 md:hidden cursor-pointer"
      >
        {/* <!-- Hamburger Icon --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-text-color h-8 w-8"
          viewBox="0 -960 960 960"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      {/* <!-- Navigation Links --> */}
      <div className="links-container h-full w-full flex flex-row items-center justify-end sm:justify-center z-50">
        {/* <!-- Close Button for Mobile --> */}
        <label
          htmlFor="sidebar-active"
          className="close-sidebar-button p-5 md:hidden cursor-pointer"
        >
          {/* <!-- Close Icon --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-text-color h-8 w-8"
            viewBox="0 -960 960 960"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>

        {/* <!-- Navigation Links --> */}
        {Links.map((link, index) => (
          <Link
            key={index}
            className="px-5 flex h-20 items-center text-black capitalize no-underline hover:bg-accent-color hover:text-color-1"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="button-container flex flex-row items-center gap-2 whitespace-nowrap">
        <button className="bg-color-1 text-text-color px-5 py-2 rounded-full whitespace-nowrap bg-black text-white">
          Book Now
        </button>
      </div>
    </nav>
  );
}
