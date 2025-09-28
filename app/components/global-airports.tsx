import Image from "next/image";

export default function GlobalAirports() {
  return (
    <>
      {/* Clients */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
          <h2 className="text-textColor">
            Trusted by Thousands of Travellers around the world
          </h2>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 content-around justify-center items-center justify-items-center">
          <Image
            src="/airports-logo/white-heathrow-logo.png"
            alt="heathrow airport logo"
            width={150}
            height={50}
            className="w-36 h-auto"
          />
          <Image
            src="/airports-logo/gatwick-official-airport-parking.svg"
            alt="gatwick airport logo"
            width={150}
            height={50}
            className="w-36 h-auto"
          />
          <Image
            src="/airports-logo/milan.png"
            alt="milan airport logo"
            width={150}
            height={50}
            className="w-36 h-auto"
          />
          <Image
            src="/airports-logo/cdg-airport.svg"
            alt="Paris-Charles de Gaulle airport logo"
            width={150}
            height={50}
            className="w-36 h-auto"
          />
        </div>
        {/* End Grid */}

        {/* <div className="mt-8 text-center">
          <a
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Read case studies
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div> */}
      </div>
      {/* End Clients */}
    </>
  );
}
