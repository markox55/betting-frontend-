"use client";

import { useState, useEffect } from "react";

interface LeftSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface SportCategory {
  name: string;
  icon: string;
  count: number;
  countries?: {
    name: string;
    flag: string;
    count: number;
    champions?: {
      name: string;
      count: number;
    }[];
  }[];
}

interface MajorMatch {
  name: string;
  icon: string;
  count: number;
}

export default function LeftSidebar({ isOpen = true, onClose }: LeftSidebarProps) {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Update current time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleCountry = (countryKey: string) => {
    const newExpanded = new Set(expandedCountries);
    if (newExpanded.has(countryKey)) {
      newExpanded.delete(countryKey);
    } else {
      newExpanded.add(countryKey);
    }
    setExpandedCountries(newExpanded);
  };

  // Sample data - replace with actual data from props or API
  const sportCategories: SportCategory[] = [
    {
      name: "Football",
      icon: "/images/sports/football.png",
      count: 175,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/1.png",
          count: 69,
          champions: [
            { name: "champions-1", count: 3 },
            { name: "champions-2", count: 52 },
            { name: "champions-3", count: 6 },
            { name: "champions-4", count: 11 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/103.png",
          count: 75,
          champions: [
            { name: "champions-1", count: 43 },
            { name: "champions-2", count: 11 },
          ],
        },
        {
          name: "country-3",
          flag: "/images/cflags/146.png",
          count: 96,
          champions: [
            { name: "champions-1", count: 43 },
            { name: "champions-2", count: 11 },
          ],
        },
      ],
    },
    {
      name: "Tennis",
      icon: "/images/sports/tennis.png",
      count: 25,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/116.png",
          count: 10,
          champions: [
            { name: "champions-1", count: 3 },
            { name: "champions-2", count: 2 },
            { name: "champions-3", count: 6 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/168.png",
          count: 20,
          champions: [
            { name: "champions-1", count: 16 },
            { name: "champions-2", count: 4 },
          ],
        },
      ],
    },
    {
      name: "Basketball",
      icon: "/images/sports/basketball.png",
      count: 35,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/131.png",
          count: 10,
          champions: [
            { name: "champions-1", count: 3 },
            { name: "champions-2", count: 2 },
            { name: "champions-3", count: 6 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/115.png",
          count: 20,
          champions: [
            { name: "champions-1", count: 16 },
            { name: "champions-2", count: 4 },
          ],
        },
      ],
    },
    {
      name: "Volleyball",
      icon: "/images/sports/volleyball.png",
      count: 0,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/131.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
            { name: "champions-3", count: 0 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/115.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
          ],
        },
      ],
    },
    {
      name: "Ice Hockey",
      icon: "/images/sports/ice.png",
      count: 0,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/131.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
            { name: "champions-3", count: 0 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/115.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
          ],
        },
      ],
    },
    {
      name: "Esports",
      icon: "/images/sports/esports.png",
      count: 0,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/131.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
            { name: "champions-3", count: 0 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/115.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
          ],
        },
      ],
    },
    {
      name: "Soccer",
      icon: "/images/sports/soccer.png",
      count: 0,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/131.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
            { name: "champions-3", count: 0 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/115.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
          ],
        },
      ],
    },
    {
      name: "Boxing",
      icon: "/images/sports/boxing.png",
      count: 0,
      countries: [
        {
          name: "country-1",
          flag: "/images/cflags/131.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
            { name: "champions-3", count: 0 },
          ],
        },
        {
          name: "country-2",
          flag: "/images/cflags/115.png",
          count: 0,
          champions: [
            { name: "champions-1", count: 0 },
            { name: "champions-2", count: 0 },
          ],
        },
      ],
    },
  ];

  const majorMatches: MajorMatch[] = [
    { name: "UFC Fight Night", icon: "/images/sports/ufc.png", count: 3 },
    { name: "MLB", icon: "/images/sports/tennis.png", count: 25 },
    { name: "NBA", icon: "/images/sports/basketball.png", count: 163 },
    { name: "KBL", icon: "/images/sports/basketball.png", count: 9 },
    { name: "KHL", icon: "/images/sports/ice.png", count: 0 },
    { name: "NFL", icon: "/images/sports/soccer.png", count: 2 },
    { name: "Saudi League", icon: "/images/sports/football.png", count: 30 },
  ];

  // Convert CSS classes to Tailwind equivalents
  // btn-solid: bg-[#ffe600] text-[#4f2b01] font-bold uppercase px-2 py-1 rounded transition-all hover:shadow-md
  // btn-hollow: bg-white border border-[#faf5a9] relative before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-br before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-10

  return (
    <aside
      className={`
        bg-white text-[#4f2b01] border-r border-gray-300 px-1
        fixed top-16 left-0 w-full z-40
        md:static md:w-72
        h-[calc(100vh-4rem)] md:h-[calc(100vh-130px)]
        transition-transform duration-300 ease-in-out
        shadow-lg md:shadow-none
        flex flex-col
        ${!isOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
      `}
    >
      {/* Mobile title */}
      <div className="flex justify-between items-center p-2 md:hidden border-b border-gray-200 shrink-0">
        <div className="text-[#4f2b01] font-bold text-xl ml-2">LEAGUE INFO</div>
        <button
          onClick={onClose}
          className="text-yellow-900 focus:outline-none bg-yellow-300 p-1 rounded-full w-10 h-10 hover:bg-yellow-300 transition-colors"
          aria-label="Close sidebar"
        >
          <i className="fa fa-times text-2xl"></i>
        </button>
      </div>

      <div 
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#d1d5db #f3f4f6",
        }}
      >
        {/* Search */}
        <div className="flex justify-between items-center mt-1 text-[13px]">
          <input
            type="text"
            placeholder="search game"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 py-1 rounded-l-sm bg-white text-[#4f2b01] border border-[#faf5a9] w-full focus:outline-none focus:border-[#ffe600]"
          />
          <button className="bg-[#ffe600] text-[#4f2b01] font-bold uppercase px-2 py-1 rounded-r-sm whitespace-nowrap text-xs hover:shadow-md transition-all">
            Search
          </button>
        </div>

        {/* Today's Match */}
        <h2 className="text-sm font-semibold py-1 px-2 text-[#4f2b01] mt-2 mb-1 bg-[#ffe600]/30 rounded-lg flex justify-between">
          Today&apos;s Match
          <span className="text-[11px] font-medium">{currentTime}</span>
        </h2>

        {/* Sport Categories */}
        <ul className="bg-white text-[13px] rounded-lg border border-gray-200">
          {sportCategories.map((category, categoryIdx) => (
            <li key={category.name} className="border-b border-gray-200 last:border-b-0">
              <div
                onClick={() => toggleCategory(category.name)}
                className="flex justify-between items-center h-10 px-2 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="h-5 w-5 mr-1"
                  />
                  {category.name}
                </span>
                <button
                  className="bg-white border border-[#faf5a9] relative px-2 py-0.5 rounded-md text-[13px] font-bold uppercase hover:border-[#ffe600] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCategory(category.name);
                  }}
                >
                  {category.count}
                </button>
              </div>
              {category.countries && (
                <ul
                  className={`${
                    expandedCategories.has(category.name) ? "block" : "hidden"
                  }`}
                >
                  {category.countries.map((country, countryIdx) => {
                    const countryKey = `${category.name}-${country.name}`;
                    return (
                      <li key={country.name}>
                        <div
                          onClick={() => toggleCountry(countryKey)}
                          className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <span className="flex items-center">
                            <img
                              src={country.flag}
                              alt={country.name}
                              className="h-3 w-3 mr-1"
                            />
                            {country.name}
                          </span>
                          <button>{country.count}</button>
                        </div>
                        {country.champions && (
                          <ul
                            className={`${
                              expandedCountries.has(countryKey) ? "block" : "hidden"
                            }`}
                          >
                            {country.champions.map((champion, champIdx) => (
                              <li
                                key={champion.name}
                                className="flex justify-between items-center px-8 py-1 hover:bg-gray-50 cursor-pointer transition-colors"
                              >
                                <span>{champion.name}</span>
                                <button>{champion.count}</button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Major Matches */}
        <h2 className="text-sm font-semibold py-1 px-2 text-[#4f2b01] mt-2 mb-1 bg-[#ffe600]/30 rounded-lg">
          Major Matches
        </h2>

        <ul className="bg-white text-[13px] rounded-lg border border-gray-200">
          {majorMatches.map((match) => (
            <li
              key={match.name}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div className="flex justify-between items-center h-10 px-2 hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="flex items-center">
                  <img
                    src={match.icon}
                    alt={match.name}
                    className="h-5 w-5 mr-1"
                  />
                  》 {match.name}
                </span>
                <button className="bg-white border border-[#faf5a9] relative px-2 py-0.5 rounded-md text-[13px] font-bold uppercase hover:border-[#ffe600] transition-colors">
                  {match.count}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

