"use client";
import Image from "next/image";
import { Paviation } from "./ui/Paviation";
import { H2Aviation } from "./ui/H2Aviation";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import {
  Timer,
  UserCheck,
  CheckCircle,
  Shield,
  GlassWater,
  Car,
  Coffee,
  Lock,
  Luggage,
  User,
  MapPin,
  ShieldCheck,
  Eye,
  Sliders,
  Plane,
  Crown,
} from "lucide-react";

//----------------------------------------
type ServiceDetail = {
  icon: string;
  title: string;
  description: string;
};

type Service = {
  title: string;
  description: string;
  image: React.ReactNode;
  link: string;
  serviceDetails?: ServiceDetail[];
};

const Services: Service[] = [
  {
    title: "Fast Track",
    description:
      "Tired of waiting in long airport queues? Let us handle everything with our fast-track service!",
    image: (
      <Image
        src="/fast-track.webp"
        alt="fast-track"
        fill
        className="object-cover rounded-[10px]"
      />
    ),
    link: "/fastTrack",
    serviceDetails: [
      {
        icon: "Timer",
        title: "Save Time",
        description:
          "Skip long lines at security, check-in, and passport control.",
      },
      {
        icon: "UserCheck",
        title: "Personal Assistance",
        description:
          "Our dedicated VIP staff will guide you every step of the way.",
      },
      {
        icon: "CheckCircle",
        title: "Stress-Free",
        description: "Enjoy a smooth, hassle-free airport experience.",
      },
    ],
  },
  {
    title: "Fattal Terminal",
    description:
      "Enjoy a VIP airport experience with fast-track check-in, private drivers, an endless buffet, an open bar, and duty-free shopping.",
    image: (
      <Image
        src="/fattal-terminal.webp"
        alt="fattal-terminal"
        fill
        className="object-cover rounded-[10px]"
      />
    ),
    link: "/fattalTerminal",
    serviceDetails: [
      {
        icon: "Shield",
        title: "Private Security & Check-In",
        description:
          "Complete all procedures in a private and secure environment.",
      },
      {
        icon: "GlassWater",
        title: "Relax in Luxury",
        description:
          "Unwind with gourmet food, beverages, and premium lounge access.",
      },
      {
        icon: "Car",
        title: "Luxury Transfer",
        description: "Get driven directly to your aircraft in a private car.",
      },
    ],
  },
  {
    title: "Arbel Lounge",
    description:
      "Relax in the Arbel VIP Lounge and let us take care of everything before your flight.",
    image: (
      <Image
        src="/arbel-lounge.jpg"
        alt="arbel-lounge"
        fill
        className="object-cover rounded-[10px]"
      />
    ),
    link: "/arbelLounge",
    serviceDetails: [
      {
        icon: "Coffee",
        title: "Exclusive Lounge",
        description: "Enjoy comfortable seating, snacks, meals, and drinks.",
      },
      {
        icon: "Lock",
        title: "Private Procedures",
        description:
          "Passport control and security handled discreetly inside the lounge.",
      },
      {
        icon: "Luggage",
        title: "Full Assistance",
        description:
          "Our VIP agent manages check-in, luggage, and escorts you to duty-free.",
      },
    ],
  },
  {
    title: "Luxury Transportation",
    description:
      "Travel in style with our premium vehicles and professional drivers, ensuring a seamless, comfortable, and stress-free journey.",
    image: (
      <Image
        src="/luxury-transportation.jpeg"
        alt="luxury-transportation"
        fill
        className="object-cover rounded-[10px]"
      />
    ),
    link: "/luxuryTransportation",
    serviceDetails: [
      {
        icon: "Car",
        title: "Premium Fleet",
        description:
          "Choose from our modern, luxury vehicles for maximum comfort.",
      },
      {
        icon: "User",
        title: "Professional Drivers",
        description:
          "Our courteous chauffeurs ensure safe and seamless transfers.",
      },
      {
        icon: "MapPin",
        title: "Door-to-Door",
        description:
          "Convenient pick-up and drop-off service for all your travel needs.",
      },
    ],
  },
  {
    title: "Private Security",
    description:
      "Our private security service provides a safe and secure environment for your journey, ensuring your peace of mind and protection.",
    image: (
      <Image
        src="/private-security.png"
        alt="private-security"
        fill
        className="object-cover rounded-[10px]"
      />
    ),
    link: "/privateSecurity",
    serviceDetails: [
      {
        icon: "ShieldCheck",
        title: "Maximum Safety",
        description: "Travel knowing you are fully protected by professionals.",
      },
      {
        icon: "Eye",
        title: "Discreet Protection",
        description: "Security agents provide peace of mind without intrusion.",
      },
      {
        icon: "Sliders",
        title: "Tailored Service",
        description: "Security adapted to your personal or business needs.",
      },
    ],
  },
  {
    title: "Jet Service",
    description:
      "Take your travel to new heights with our private jet service, offering flexibility, privacy, and unparalleled luxury for every journey.",
    image: (
      <Image
        src="/private-jet.jpg"
        alt="jet-service"
        fill
        className="object-cover rounded-[10px]"
      />
    ),
    link: "/privateJet",
    serviceDetails: [
      {
        icon: "Plane",
        title: "Full Flexibility",
        description:
          "Fly on your own schedule with complete freedom of routes.",
      },
      {
        icon: "Lock",
        title: "Exclusive Privacy",
        description: "Enjoy your journey with only your chosen guests onboard.",
      },
      {
        icon: "Crown",
        title: "Ultimate Luxury",
        description:
          "Experience unmatched comfort and premium in-flight services.",
      },
    ],
  },
];

export default function ServicesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceType, setServiceType] = useState<string | null>(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(serviceType: string) {
    setServiceType(serviceType);
    setIsOpen(true);
  }
  return (
    <>
      <section id="services" className="wDyn h-fit py-10 text-textColor">
        <div className="flex flex-col items-center justify-center gap-4">
          <H2Aviation>our services</H2Aviation>
          <Paviation>
            Elevate your airport experience with our VIP services. Enjoy access
            to a private lounge and skip the queues with our fast track service.
            Our team ensures a seamless and stress-free travel experience for
            you, and they will provide assistance with VIP service Ben Gurion
            airport.
          </Paviation>
        </div>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-black dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className="h-52 flex flex-col justify-center items-center rounded-t-xl relative w-full">
                  {service.image}
                </div>
                <div className="p-4 md:p-6">
                  <span className="block mb-1 text-xs font-semibold uppercase text-primary dark:text-primary">
                    {service.title}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto flex  border-gray-200   dark:border-neutral-700 dark:divide-neutral-700">
                  <button
                    onClick={() => openModal(service.title)}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-background dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    View service
                  </button>
                  <Link
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-background dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href={service.link}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* End Grid */}
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            {/* Modal */}
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className="relative w-full h-48">
                      {
                        Services.find(
                          (service) => service.title === serviceType
                        )?.image
                      }
                    </div>
                    <div className="p-6">
                      <div className="text-center">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-semibold text-gray-800 mb-4"
                        >
                          {serviceType}
                        </Dialog.Title>
                        <div className="max-w-sm mx-auto">
                          <p className="text-sm text-gray-600">
                            {
                              Services.find(
                                (service) => service.title === serviceType
                              )?.description
                            }
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 space-y-5 divide-y divide-gray-200">
                        {Services.find(
                          (service) => service.title === serviceType
                        )?.serviceDetails?.map((detail, index) => {
                          const IconComponent = {
                            Timer,
                            UserCheck,
                            CheckCircle,
                            Shield,
                            GlassWater,
                            Car,
                            Coffee,
                            Lock,
                            Luggage,
                            User,
                            MapPin,
                            ShieldCheck,
                            Eye,
                            Sliders,
                            Plane,
                            Crown,
                          }[detail.icon];

                          return (
                            <div key={index} className="flex gap-x-5 pt-5">
                              <div className="flex-shrink-0 mt-1 w-7 h-7 text-primary">
                                {IconComponent && (
                                  <IconComponent className="w-full h-full" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 ">
                                  {detail.title}
                                </h4>
                                <p className="mt-1 text-sm text-gray-600 ">
                                  {detail.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-end gap-x-2 py-3 px-6 border-t border-gray-200">
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <Link
                        href={
                          Services.find(
                            (service) => service.title === serviceType
                          )?.link || "#"
                        }
                        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none"
                      >
                        Learn more
                      </Link>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
            {/* End Modal */}
          </Dialog>
        </Transition>
        {/* End Card Blog */}
      </section>
    </>
  );
}
