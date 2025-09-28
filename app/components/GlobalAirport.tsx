import GlobalAirports from "./global-airports";
import { H1Aviation } from "./ui/H1Aviation";

//----------------------------------------

export const GlobalAirport = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/global-airports.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <H1Aviation className="text-center">
            {" "}
            for any inquiries about specific global airports,please contact us
          </H1Aviation>
        </div>
        <GlobalAirports />
      </div>
    </div>
  );
};
