"use client";

import { useState } from "react";

interface SportType {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const sportTypes: SportType[] = [
  { id: "all", name: "All", icon: "/images/sports/sports-all.png", count: 165 },
  { id: "football", name: "Football", icon: "/images/sports/football.png", count: 45 },
  { id: "tennis", name: "Tennis", icon: "/images/sports/tennis.png", count: 10 },
  { id: "basketball", name: "Basketball", icon: "/images/sports/basketball.png", count: 2 },
  { id: "volleyball", name: "Volleyball", icon: "/images/sports/volleyball.png", count: 0 },
  { id: "hockey", name: "Hockey", icon: "/images/sports/ice.png", count: 11 },
  { id: "esports", name: "Esports", icon: "/images/sports/esports.png", count: 29 },
  { id: "soccer", name: "Soccer", icon: "/images/sports/soccer.png", count: 0 },
  { id: "boxing", name: "Boxing", icon: "/images/sports/boxing.png", count: 0 },
];

export default function SportTypeFilter() {
  const [activeSport, setActiveSport] = useState<string>("all");

  return (
    <div className="left-0 right-0 bg-white z-30 border-b border-gray-200">
      <div className="flex items-center gap-1 p-1 text-sm text-center overflow-x-auto">
        {sportTypes.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setActiveSport(sport.id)}
            className={`
              relative border-2 rounded-lg w-20 min-w-[60px] pt-0.5 px-0.5 pb-0 text-[0.75rem] font-bold
              transition-colors cursor-pointer whitespace-nowrap
              ${
                activeSport === sport.id
                  ? "bg-[#faf5a9] border-[#ffe600] text-[#4f2b01]"
                  : "bg-white border-[#ffe600] text-[#4f2b01] hover:bg-[#faf5a9]"
              }
            `}
          >
            <span className="flex justify-center">
              <img src={sport.icon} alt={sport.name} className="h-5" />
            </span>
            <span className="block">{sport.name}</span>
            <span className="absolute top-0 right-0 w-[25px] h-[18px] bg-black/50 rounded-tr-lg rounded-bl-lg flex items-center justify-center text-[0.75rem] leading-[0.8rem] text-white z-10">
              {sport.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

