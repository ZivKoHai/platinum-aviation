"use client";
import React from "react";

interface ProcessProps {
  tabs: {
    name: string;
    process: {
      name: string;
      description: string;
    }[];
  }[];
  isTab: boolean;
}

export const Process = ({ tabs, isTab }: ProcessProps) => {
  const [tabActive, setTabActive] = React.useState(0);

  return (
    <div className="flex flex-col mt-10">
      {isTab && (
        <div className="h-14 sm:max-w-[50%] py-3 px-2 rounded-[10px] justify-start flex flex-row gap-10">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`h-full basis-1/3 flex items-center justify-center font-medium cursor-pointer transition-all duration-300 ease-in-out ${
                tabActive === index ? "border-b-[1px] pb-4 border-black" : ""
              }`}
              onClick={() => setTabActive(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>
      )}
      <div className="my-10">
        <ol className="relative border-s border-[#1E1E1E]">
          {Object.entries(tabs[tabActive].process).map(([key, value]) => (
            <li key={key} className="mb-10 ms-8">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-[#1E1E1E]">
                {value.name}
              </time>
              <p className="font-medium text-xl text-black tracking-tight">
                {value.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
