import { Button } from "./ui/Button";
import { Process } from "./ui/Process";

export const Seamless = () => {
  const Tabs = [
    {
      name: "Arrival",
      process: [
        {
          name: "Greeting",
          description:
            "Meeting you at the aircraft exit with our greeter (or at a previously discussed point).",
        },
        {
          name: "Guiding",
          description:
            "Escorting and guiding you through the airport, including migration and security; a buggy is optional.",
        },
        {
          name: "Airport Process",
          description:
            "Accelerating all procedures, including fast security checks, expedited check-in, and priority baggage handling.",
        },
        {
          name: "Luggage",
          description: "Assisting with luggage handling for your convenience",
        },
        {
          name: "Chauffeur",
          description:
            "Connecting you with your chauffeur for a smooth transition (chauffeur optional based on your selected service).",
        },
      ],
    },
    {
      name: "Departure",
      process: [
        {
          name: "Greeting",
          description: "Meeting you as soon as you reach the airport.",
        },
        {
          name: "Luggage Assistance",
          description: "Assisting with luggage, if necessary.",
        },
        {
          name: "Airport Guidance",
          description: "Guiding you through the airport.",
        },
        {
          name: "Fast Track",
          description: "Expediting all procedures as much as possible.",
        },
        {
          name: "Final Assistance",
          description: "Accompanying you to your lounge and/or boarding gate.",
        },
      ],
    },
  ];
  return (
    <section className="wDyn mt-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <h2 className="text-4xl font-bold text-left">
            Seamless Travel, Elevated Comfort
          </h2>
          <Button>Book Now</Button>
        </div>
        <div>
          <p>
            Experience unparalleled luxury and efficiency with our VIP airport
            services at Ben Gurion Airport. From fast-track check-in and
            security procedures to exclusive access to the Arbel and Fattal
            lounges, we ensure a seamless journey from arrival to departure. Our
            premium offerings include private luxury car transfers, personalized
            luggage assistance, and access to endless buffets and open bars.
            With over 20 years of experience and a global network of partners,
            we cater to travelers from all backgrounds, communicating in
            multiple languages to meet your needs. Trust us to make your travel
            experience smooth, comfortable, and truly exceptional.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h4 className="text-2xl font-medium">Our process - step by step</h4>
        </div>
      </div>
      <Process tabs={Tabs} isTab={true} />
    </section>
  );
};
