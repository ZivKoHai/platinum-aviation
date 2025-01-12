import { Policy } from "../components/Policy";

const policySections = [
  {
    title: "Airport Services",
    content: [
      {
        heading: "Cancellation Outside of 48/72 Hours",
        details: [
          "For services at USA airports, cancellations made at least 72 hours before the scheduled service time will be eligible for a full refund.",
          "For all other locations, cancellations made at least 48 hours before the scheduled service time will be eligible for a full refund.",
        ],
      },
      {
        heading: "Cancellation Within 48/72 Hours",
        details: [
          "Cancellations made within 72 hours for USA airport services or within 48 hours for all other locations will not be eligible for a refund. The full cost of the service will be charged.",
        ],
      },
    ],
    image: "/ben-gurion-vip-2.png", // Random image from the folder
  },
  {
    title: "Car Services",
    content: [
      {
        heading: "Cancellation Outside of 24 Hours",
        details: [
          "Cancellations made at least 24 hours before the scheduled car service will be eligible for a full refund.",
        ],
      },
      {
        heading: "Cancellation Within 24 Hours",
        details: [
          "Cancellations made within 24 hours of the scheduled car service will not be eligible for a refund. The full cost of the car service will be charged.",
        ],
      },
      {
        heading: "Refund Process",
        details: [
          "If the service is eligible for a refund, the payment will be processed automatically, and any charged amounts will be refunded within a few business days.",
        ],
      },
    ],
    image: "/luxury-transportation.jpeg", // Random image from the folder
  },
  {
    title: "No-Show Policy",
    content: [
      {
        heading: "No-Show at Airport or Car Service",
        details: [
          "If a passenger does not arrive at the agreed-upon meeting time at the airport or for a car service, the service will be canceled, and no refund will be issued.",
          "The full cost of the service will be charged, and Platinum Aviation / Platinum Airport VIP Ltd will not be held responsible for the non-provision of the service.",
        ],
      },
    ],
    image: "/fast-track.webp", // Random image from the folder
  },
  {
    title: "Third-Party Bookings",
    content: [
      {
        heading: "Booking Made by a Third Party",
        details: [
          "If a third party books a service on behalf of the customer, the agreement is still binding, and cancellations cannot be made within 72 hours for USA airport services, 48 hours for all other locations, or 24 hours for car services.",
        ],
      },
    ],
    image: "/global-airports.png", // Random image from the folder
  },
  {
    title: "Service Quality Complaints and Refunds",
    content: [
      {
        heading: "Service Quality and Refunds",
        details: [
          "Refunds due to subjective complaints regarding service quality will not be considered.",
          "If any additional services or surprises, such as birthday gifts, are expected, they must be communicated in advance to avoid misunderstandings.",
        ],
      },
    ],
    image: "/benefits-3.jpeg", // Random image from the folder
  },
  {
    title: "Passport Control Issues",
    content: [
      {
        heading: "Responsibility for Passport Control Delays",
        details: [
          "Should customers experience delays or issues at passport control or immigration, these circumstances fall outside of our control, and refunds will not be issued.",
          "It is the responsibility of the customer to ensure that all travel documentation (passport, visa, etc.) is valid.",
        ],
      },
    ],
    image: "/ben-gurion-vip-5.png", // Random image from the folder
  },
];

export default function CancelPolicy() {
  return (
    <div className="wDyn py-20 space-y-10">
      <h1 className="text-4xl font-medium mb-8">Cancellation Policy</h1>
      <p className="text-base tracking-tight text-left">
        At Platinum Aviation / Platinum Airport VIP Ltd, we understand that
        plans can change unexpectedly. Please review our cancellation policies
        for airport and car services.
      </p>

      <Policy sections={policySections} />
      <div className="flex justify-start">
        <div className="max-w-md">
          <h3 className="text-xl font-semibold mb-4">Need Support?</h3>
          <p className="text-gray-600">
            Our customer support team is available 24/7:
          </p>
          <ul className="mt-2 space-y-2">
            <li>📱 WhatsApp/Phone: +1 929-884-1960</li>
            <li>📧 Email: info@platinumairportvip.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
