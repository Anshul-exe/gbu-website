import React from "react";
import {
  FaUniversity,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaBook,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Schools",
    desc: "Explore our academic schools",
    icon: <FaUniversity className="text-white text-2xl" />,
    color: "bg-green-600",
    link: "/academics/schools",
    external: false,
  },
 
  {
    title: "Fees",
    desc: "Fee structure and payment",
    icon: <FaMoneyCheckAlt className="text-white text-2xl" />,
    color: "bg-blue-800",
    link: "https://preview--fee-wise-campus-pay.lovable.app/",
    external: true,
  },
  {
    title: "Placements",
    desc: "Career opportunities",
    icon: <FaBriefcase className="text-white text-2xl" />,
    color: "bg-orange-600",
    link: "/placements/placement-process",
    external: true,
  },
  {
    title: "faculty",
    desc: "Academic programs",
    icon: <FaBook className="text-white text-2xl" />,
    color: "bg-green-700",
    link: "/admissions/courses-offered",
    external: true,
  },
  {
    title: "Infrastructure",
    desc: "Campus facilities",
    icon: <FaBuilding className="text-white text-2xl" />,
    color: "bg-blue-700",
    link: "https://buddha-university-portal.lovable.app/campus/infrastructure",
    external: true,
  },
];

export default function QuickAccess() {
  return (
    <section
      className="bg-gray-50 py-12 mt-24"
      role="region"
      aria-labelledby="quick-access-heading"
    >
      <h2
        id="quick-access-heading"
        className="text-3xl font-bold text-center text-blue-800 mb-10"
      >
        Quick Access
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {quickLinks.map((item, idx) => {
          const Card = (
            <div
              className="w-72 sm:w-64 bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full"
            >
              <div
                className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full ${item.color} mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          );

          return item.external ? (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {Card}
            </a>
          ) : (
            <Link key={idx} to={item.link} className="block h-full">
              {Card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
