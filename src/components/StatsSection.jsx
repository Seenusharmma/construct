import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "Last Year Turnover",
    sub: "YEARLY",
    value: 49, // in Crores
    suffix: " Cr+",
  },
  {
    label: "My Clients",
    sub: "THIS YEAR",
    value: 120,
    suffix: "+",
  },
  {
    label: "Employees",
    sub: "STRONG TEAM",
    value: 250,
    suffix: "+",
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="w-full bg-green-50 py-16 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center relative">
          {/* Faint background number */}
          <h1 className="absolute -z-10 text-[140px] md:text-[200px] font-bold text-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {stat.value}
          </h1>

          {/* Label above */}
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-1 hover:text-xl">
            {stat.sub}
          </p>

          {/* CountUp number */}
          <h2 className="text-5xl font-bold text-yellow-400 hover:text-yellow-600">
            {inView ? (
              <CountUp end={stat.value} duration={3} />
            ) : (
              "0"
            )}
            {stat.suffix || ""}
          </h2>

          {/* Label below */}
          <p className="text-2xl font-semibold text-black mt-2 hover:text-yellow-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
