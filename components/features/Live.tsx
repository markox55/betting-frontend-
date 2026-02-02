"use client";

import { useState, useEffect } from "react";
import { LeftSidebar, RightSidebar } from "../sidebar";
import SportTypeFilter from "./SportTypeFilter";

export default function Live() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [quickBetEnabled, setQuickBetEnabled] = useState(false);
  const [quickBetAmount, setQuickBetAmount] = useState<string>("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  // Sample live game data
  const games = [
    {
      id: "game1",
      sport: "football",
      sportIcon: "/images/sports/football.png",
      country: "Country-1",
      countryFlag: "/images/cflags/101.png",
      league: "Champions-1",
      date: "11-10 14:00",
      quarters: [
        {
          id: "game1-q1",
          status: "2nd Quarter",
          time: "11-11 20:53",
          scoreA: 7,
          scoreB: 13,
          teamA: "TEAM A",
          teamB: "TEAM B",
          moreCount: 3,
          details: {
            handicap: [
              { team: "TEAM A", value: "-1.5", odds: 2.48 },
              { team: "TEAM A", value: "1.5", odds: 1.43 },
            ],
          },
        },
        {
          id: "game1-q2",
          status: "3rd Quarter",
          time: "11-11 23:40",
          scoreA: 25,
          scoreB: 10,
          teamA: "TEAM C",
          teamB: "TEAM D",
          moreCount: 1,
          details: {
            handicap: [
              { team: "TEAM D", value: "-0.5", odds: 1.94 },
              { team: "TEAM D", value: "0.5", odds: 2.29 },
            ],
          },
        },
      ],
    },
    {
      id: "game2",
      sport: "basketball",
      sportIcon: "/images/sports/basketball.png",
      country: "Country-2",
      countryFlag: "/images/cflags/88.png",
      league: "Champions-2",
      date: "11-10 14:00",
      quarters: [
        {
          id: "game2-q1",
          status: "4th Quarter",
          time: "11-12 20:00",
          scoreA: 54,
          scoreB: 32,
          teamA: "TEAM A",
          teamB: "TEAM B",
          moreCount: 1,
          details: {
            handicap: [
              { team: "TEAM A", value: "-1.5", odds: 2.48 },
              { team: "TEAM A", value: "1.5", odds: 1.43 },
            ],
          },
        },
      ],
    },
  ];

  const schedule = [
    {
      time: "11-12 01:00",
      sport: "basketball",
      sportIcon: "/images/sports/basketball.png",
      country: "Country-1",
      league: "Champions-1",
      teamA: "Team A",
      teamB: "Team B",
    },
    {
      time: "11-12 02:00",
      sport: "esports",
      sportIcon: "/images/sports/esports.png",
      country: "Country-2",
      league: "Champions-2",
      teamA: "Team C",
      teamB: "Team D",
    },
  ];

  useEffect(() => {
    // Initialize desktop state
    const desktop = typeof window !== "undefined" && window.innerWidth >= 990;
    setIsDesktop(desktop);
    if (desktop) {
      setIsLeftOpen(true);
      setIsRightOpen(true);
      if (games.length > 0) {
        setActiveDetail(games[0].id);
      }
    }

  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 990;
      setIsDesktop(desktop);
      if (desktop) {
        setIsLeftOpen(true);
        setIsRightOpen(true);
        if (!activeDetail && games.length > 0) {
          setActiveDetail(games[0].id);
        }
      } else {
        setIsLeftOpen(false);
        setIsRightOpen(false);
        setActiveDetail(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeDetail]);

 
  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-1rem)] md:h-[calc(100vh-1rem)] bg-[#f3f4f6] md:pl-22 pt-14 md:pt-[114px]">
      {/* Overlay for mobile */}
      {(isLeftOpen || isRightOpen) && (
        <div
          className="fixed inset-0 bg-white/50 z-30 md:hidden"
          onClick={() => {
            setIsLeftOpen(false);
            setIsRightOpen(false);
          }}
        />
      )}

      {/* Left Sidebar */}
      <LeftSidebar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-h-0">
        {/* Sport Type Filter */}
        <div className="shrink-0">
          <SportTypeFilter />
        </div>

        {/* Game Cards and Detail Container */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden gap-1 min-h-0">
          {/* Game Cards List */}
          <div
            className={`w-full overflow-y-auto px-1 ${
              activeDetail ? "md:w-4/7" : "md:flex-1"
            }`}
          >
            {/* Mobile Quick Bet & League Toggle */}
            <div className="flex items-center justify-between font-bold md:hidden mb-2">
              <div className="flex items-center">
                <span className="text-[14px] ml-1 mr-2">
                  <span className="inline-flex items-center h-8">Quick Bet</span>
                  <div className="relative inline-block group ml-2">
                    <i className="fa fa-circle-exclamation text-orange-500 text-lg cursor-pointer"></i>
                    <span className="absolute left-1/2 -translate-x-1/2 top-full px-3 py-1.5 bg-gray-100 text-gray-600 text-[11px] rounded-md opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible w-48 z-50">
                      Quick Bet allows you to place a single type of bet more easily and quickly.
                      After setting the bet amount, click the selected bet option to place your bet
                      immediately. (Single bet only)
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-gray-100"></span>
                    </span>
                  </div>
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={quickBetEnabled}
                    onChange={(e) => setQuickBetEnabled(e.target.checked)}
                  />
                  <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full transition-all duration-300 peer-checked:bg-yellow-300"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-4"></div>
                  <input
                    type="text"
                    placeholder="0"
                    value={quickBetAmount}
                    onChange={(e) => setQuickBetAmount(e.target.value)}
                    className={`w-32 bg-gray-200 ml-2 px-2 rounded transition-opacity duration-300 ${
                      quickBetEnabled ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  />
                </label>
              </div>
              <div
                className="text-[#4f2b01] mr-1 inline-flex items-center h-8 cursor-pointer"
                onClick={() => setIsLeftOpen(true)}
              >
                <span className="mr-1">League</span>
                <span className="w-8 h-8 bg-[#ffe600]/30 rounded-full text-center pt-0.5">
                  <i className="fa fa-list text-xl"></i>
                </span>
              </div>
            </div>

            {/* Game Cards */}
            {games.map((game) => (
              <div
                key={game.id}
                className="mb-1 bg-white border border-[#dedede] rounded-[10px] overflow-hidden text-[0.8rem] md:text-[0.75rem]"
              >
                {/* Game Title */}
                <div className="bg-[#14142615] flex justify-between font-bold h-10 items-center px-2 mb-2">
                  <span className="inline-flex items-center">
                    <img src={game.sportIcon} alt={game.sport} className="mr-1 rounded-sm max-w-[25px] h-5" />
                    <img src={game.countryFlag} alt={game.country} className="mr-1 rounded-sm max-w-[25px] h-5" />
                    {game.country}
                    <span className="text-red-700 mx-1">
                      <i className="fa fa-chevron-right"></i>
                      <i className="fa fa-chevron-right"></i>
                    </span>
                    {game.league}
                  </span>
                  <span>{game.date}</span>
                </div>

                {/* Live Quarters */}
                {game.quarters.map((quarter) => (
                  <div
                    key={quarter.id}
                    className="flex flex-col md:items-center mx-0 my-5 md:m-5 border border-gray-400 border-t z-10 relative mb-1"
                  >
                    {/* Status Button */}
                    <button className="z-50 absolute left-5 -top-3 bg-white py-1.5 px-3 border border-gray-400 text-xs">
                      Status: {quarter.status}
                    </button>
                    {/* More Options Button */}
                    <button
                      onClick={() => {
                        if (isDesktop) {
                          setActiveDetail(quarter.id);
                        }
                      }}
                      className={`z-50 absolute right-5 -top-3 bg-white py-1.5 px-3 border border-gray-400 hover:bg-yellow-300 text-xs ${
                        activeDetail === quarter.id ? "bg-yellow-300" : ""
                      }`}
                    >
                      <span>+{quarter.moreCount}</span>
                      <span className="ml-1">Additional Bet Options</span>
                    </button>

                    {/* Live Time */}
                    <h3 className="text-center w-full mt-3 text-sm">{quarter.time}</h3>

                    {/* Live Scores */}
                    <div className="flex justify-between text-2xl m-3">
                      <span className="flex flex-1 justify-end font-bold">{quarter.scoreA}</span>
                      <span className="w-40 text-center">vs</span>
                      <span className="flex flex-1 justify-start font-bold">{quarter.scoreB}</span>
                    </div>

                    {/* Locked Bet Options */}
                    <div className="flex flex-1 justify-between items-center gap-0.5 mb-1 w-full opacity-60">
                      <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-not-allowed border border-[#d3d9e1] rounded-lg">
                        <span>{quarter.teamA}</span>
                        <span>
                          <i className="fa fa-lock mr-1"></i>0
                        </span>
                      </div>
                      <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white border border-[#d3d9e1] rounded-lg cursor-not-allowed">
                        VS
                      </div>
                      <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-not-allowed border border-[#d3d9e1] rounded-lg">
                        <span>
                          0<i className="fa fa-lock ml-1"></i>
                        </span>
                        <span>{quarter.teamB}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-6 pb-3">
              <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#faf5a9] rounded-lg opacity-50 cursor-not-allowed">
                <i className="fa fa-angle-left"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#faf5a9] text-[#2a313d] rounded-lg mx-1">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#faf5a9] rounded-lg hover:bg-[#faf5a9] hover:text-[#2a313d] mx-1 transition-colors">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#faf5a9] rounded-lg hover:bg-[#faf5a9] hover:text-[#2a313d] mx-1 transition-colors">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#faf5a9] rounded-lg hover:bg-[#faf5a9] hover:text-[#2a313d] mx-1 transition-colors">
                <i className="fa fa-angle-right"></i>
              </button>
            </div>

            {/* Live Game Schedule Table */}
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-[#c6c6c650] text-left text-[0.8rem]">
                <thead>
                  <tr>
                    <th colSpan={2} className="p-2.5 border border-[#bfbfbf] text-base">
                      Live Game Schedule
                      <i className="fa fa-calendar-days ml-2"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 border border-[#bfbfbf] bg-[#c6c6c650]">
                        {item.time}
                      </td>
                      <td className="p-2.5 border border-[#bfbfbf] bg-[#c6c6c650]">
                        <div className="inline-flex items-center gap-1">
                          <span className="w-5 h-5">
                            <img src={item.sportIcon} alt={item.sport} className="max-w-full" />
                          </span>
                          <span>
                            <i className="fa fa-chevron-right"></i>
                            <i className="fa fa-chevron-right"></i>
                          </span>
                          <span>{item.country} - {item.league}</span>
                        </div>
                        <div>
                          <span>{item.teamA}</span>
                          <span className="text-blue-500 mx-1">VS</span>
                          <span>{item.teamB}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Desktop Detail Container */}
          {activeDetail && (
            <div
              className="hidden md:block md:w-3/7 overflow-y-auto bg-white rounded-md p-1"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#d1d5db #f3f4f6",
              }}
            >
              <LiveDetailView
                game={games.find((g) => g.id === activeDetail) || games[0]}
                quarter={games.find((g) => g.id === activeDetail)?.quarters.find((q) => q.id === activeDetail) || games[0].quarters[0]}
              />
            </div>
          )}
        </div>
      </main>

      {/* Right Sidebar */}
      <RightSidebar isOpen={isRightOpen} onClose={() => setIsRightOpen(false)} cartItemCount={2} />

      {/* Mobile Cart Button */}
      <button
        className="fixed bottom-3 right-3 bg-yellow-300/50 text-[#4f2b01] rounded-full p-3 border-2 border-[#4f2b01] shadow-lg hover:shadow-xl hover:scale-105 transition-all md:hidden z-20"
        onClick={() => setIsRightOpen(true)}
      >
        <i className="fa fa-shopping-cart text-xl"></i>
        <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
      </button>
    </div>
  );
}

// Live Detail View Component
function LiveDetailView({ game, quarter }: { game: any; quarter: any }) {
  const [activeType, setActiveType] = useState("All");

  return (
    <div className=" p-1">
      {/* Team Names */}
      <div
        className="flex justify-between items-center mb-1 rounded-[15px] border border-[#d1d1d1] bg-white md:h-20 h-[60px] text-[0.8rem] md:text-[1.2rem]"
        style={{
          backgroundImage: "url(/images/sports/vs.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "auto 100%",
          fontWeight: 700,
        }}
      >
        <span className="flex items-center justify-center w-1/2">{quarter.teamA}</span>
        <span className="flex items-center justify-center w-1/2">{quarter.teamB}</span>
      </div>

      {/* Bet Type Tabs */}
      <div className="flex items-center gap-1 text-sm text-center overflow-x-auto mb-1">
        {["All", "Under/Over", "Handicap", "Other"].map((type) => (
          <span
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-3 py-1 rounded-lg cursor-pointer transition-colors border-2 text-[0.75rem] ${
              activeType === type
                ? "bg-[#faf5a9] border-[#ffe600] text-[#2a313d]"
                : "bg-white border-[#ffe600] hover:bg-[#faf5a9]"
            }`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Handicap Section */}
      {quarter.details?.handicap && (activeType === "All" || activeType === "Handicap") && (
        <div className="mb-1 bg-white border border-[#dedede] rounded-[10px] overflow-hidden">
          <div className="bg-[#14142615] flex justify-between font-bold h-10 items-center px-2 mb-2">
            <span className="inline-flex items-center">
              <img src={game.sportIcon} alt="" className="mr-1 rounded-sm max-w-[25px] h-5" />
              Handicap
            </span>
          </div>
          <div className="px-1 mb-2">
            <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
              {quarter.details.handicap.map((h: any, idx: number) => (
                <div
                  key={idx}
                  className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                >
                  <span>
                    {h.team}
                    <span className="text-blue-300">[{h.value}]</span>
                  </span>
                  <span>{h.odds}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

