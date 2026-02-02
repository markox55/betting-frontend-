"use client";

import { useState, useEffect } from "react";
import { LeftSidebar, RightSidebar } from "../sidebar";
import SportTypeFilter from "./SportTypeFilter";

export default function Domestic() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [quickBetEnabled, setQuickBetEnabled] = useState(false);
  const [quickBetAmount, setQuickBetAmount] = useState<string>("");
  const [isDesktop, setIsDesktop] = useState(false);

  // Sample game data - replace with actual API data
  const games = [
    {
      id: "game1",
      sport: "basketball",
      sportIcon: "/images/sports/basketball.png",
      country: "Country-1",
      countryFlag: "/images/cflags/115.png",
      league: "Champions-1",
      date: "11-10 14:00",
      teamA: "TEAM A",
      teamB: "TEAM B",
      oddsA: 2.22,
      oddsDraw: 3.32,
      oddsB: 2.76,
      handicap: [
        { team: "TEAM A", value: "0.0", oddsA: 1.70, oddsB: 2.05 },
      ],
      overUnder: [
        { value: "0.0", oddsA: 1.85, trendA: "down", oddsB: 1.90, trendB: "up" },
      ],
      combos: [
        { label: "AA & BB [1.5]", odds: 2.21 },
        { label: "AA & CC [1.5]", odds: 5.50 },
        { label: "BB & CC [1.5]", odds: 6.10 },
      ],
    },
    {
      id: "game2",
      sport: "hockey",
      sportIcon: "/images/sports/ice.png",
      country: "Country-2",
      countryFlag: "/images/cflags/128.png",
      league: "Champions-2",
      date: "11-11 16:00",
      teamA: "TEAM C",
      teamB: "TEAM D",
      oddsA: 1.01,
      oddsDraw: null,
      oddsB: 6.54,
      isLocked: true,
      handicap: [
        { team: "TEAM C", value: "0.0", oddsA: 1.65, oddsB: 2.15 },
      ],
      overUnder: [
        { value: "3.2", oddsA: 1.45, trendA: "down", oddsB: 1.75, trendB: "up" },
      ],
    },
    {
      id: "game3",
      sport: "soccer",
      sportIcon: "/images/sports/soccer.png",
      country: "Country-3",
      countryFlag: "/images/cflags/138.png",
      league: "Champions-3",
      date: "11-12 14:00",
      teamA: "TEAM E",
      teamB: "TEAM F",
      oddsA: 2.22,
      oddsDraw: 3.32,
      oddsB: 2.76,
      handicap: [
        { team: "TEAM E", value: "0.0", oddsA: 1.70, oddsB: 2.05 },
      ],
      overUnder: [
        { value: "0.0", oddsA: 1.85, trendA: "down", oddsB: 1.90, trendB: "up" },
      ],
      combos: [
        { label: "AA & BB [1.5]", odds: 2.21 },
        { label: "AA & CC [1.5]", odds: 5.50 },
        { label: "BB & CC [1.5]", odds: 6.10 },
      ],
    },
    {
      id: "game4",
      sport: "volleyball",
      sportIcon: "/images/sports/volleyball.png",
      country: "Country-4",
      countryFlag: "/images/cflags/86.png",
      league: "Champions-4",
      date: "11-12 18:00",
      teamA: "TEAM G",
      teamB: "TEAM H",
      oddsA: 2.22,
      oddsDraw: 3.32,
      oddsB: 2.76,
      handicap: [
        { team: "TEAM G", value: "0.0", oddsA: 1.70, oddsB: 2.05 },
      ],
      overUnder: [
        { value: "0.0", oddsA: 1.85, trendA: "down", oddsB: 1.90, trendB: "up" },
      ],
    },
  ];

  useEffect(() => {
    const desktop = typeof window !== "undefined" && window.innerWidth >= 990;
    setIsDesktop(desktop);
    if (desktop) {
      setIsLeftOpen(true);
      setIsRightOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 990;
      setIsDesktop(desktop);
      if (desktop) {
        setIsLeftOpen(true);
        setIsRightOpen(true);
      } else {
        setIsLeftOpen(false);
        setIsRightOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        {/* Game Cards List */}
        <div
          className="flex-1 overflow-y-auto px-1"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d1d5db #f3f4f6",
          }}
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
                  <span className="text-red-500 mx-1">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  {game.league}
                </span>
                <span>{game.date}</span>
              </div>

              {/* Win/Draw/Lose Bet */}
              <div className="px-1 mb-1">
                <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                  <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold text-xs">
                    {game.oddsDraw !== null ? "Win/Draw/Lose" : "Win/Lose"}
                  </div>
                  <div className={`h-10 flex justify-between items-center flex-1 px-2 cursor-pointer border border-[#d3d9e1] rounded-lg ${
                    game.isLocked ? "bg-white opacity-60 cursor-not-allowed" : "bg-[#faf5a9]"
                  }`}>
                    <span>{game.teamA}</span>
                    <span>
                      {game.isLocked && <i className="fa fa-lock mr-1"></i>}
                      {game.oddsA}
                    </span>
                  </div>
                  {game.oddsDraw !== null ? (
                    <div className={`h-10 flex items-center justify-center w-[80px] max-w-[10%] cursor-pointer border border-[#d3d9e1] rounded-lg ${
                      game.isLocked ? "bg-white opacity-60 cursor-not-allowed" : "bg-white hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                    }`}>
                      {game.oddsDraw}
                    </div>
                  ) : (
                    <div className={`h-10 flex items-center justify-center w-[80px] max-w-[10%] border border-[#d3d9e1] rounded-lg ${
                      game.isLocked ? "bg-white opacity-60 cursor-not-allowed" : "bg-white"
                    }`}>
                      VS
                    </div>
                  )}
                  <div className={`h-10 flex justify-between items-center flex-1 px-2 cursor-pointer border border-[#d3d9e1] rounded-lg ${
                    game.isLocked ? "bg-white opacity-60 cursor-not-allowed" : "bg-white hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                  }`}>
                    <span>
                      {game.oddsB}
                      {game.isLocked && <i className="fa fa-lock ml-1"></i>}
                    </span>
                    <span>{game.teamB}</span>
                  </div>
                </div>
              </div>

              {/* Handicap Bet */}
              {game.handicap && game.handicap.length > 0 && (
                <div className="px-1 mb-1">
                  <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                    <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold text-xs">
                      Handicap
                    </div>
                    <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]">
                      <span>{game.handicap[0].team}</span>
                      <span>
                        <span className="text-green-200 mr-1">[H]</span>
                        {game.handicap[0].oddsA}
                      </span>
                    </div>
                    <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white border border-[#d3d9e1] rounded-lg">
                      {game.handicap[0].value}
                    </div>
                    <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]">
                      <span>
                        {game.handicap[0].oddsB}
                        <span className="text-green-200 ml-1">[H]</span>
                      </span>
                      <span>{game.teamB}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Under/Over Bet */}
              {game.overUnder && game.overUnder.length > 0 && (
                <div className="px-1 mb-1">
                  <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                    <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold text-xs">
                      Under/Over
                    </div>
                    <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]">
                      <span>{game.teamA}</span>
                      <span>
                        {game.overUnder[0].trendA === "down" && (
                          <i className="fa fa-arrow-down text-blue-500 mr-1"></i>
                        )}
                        {game.overUnder[0].trendA === "up" && (
                          <i className="fa fa-arrow-up text-red-500 mr-1"></i>
                        )}
                        {game.overUnder[0].oddsA}
                      </span>
                    </div>
                    <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white border border-[#d3d9e1] rounded-lg">
                      {game.overUnder[0].value}
                    </div>
                    <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]">
                      <span>
                        {game.overUnder[0].oddsB}
                        {game.overUnder[0].trendB === "up" && (
                          <i className="fa fa-arrow-up text-red-500 ml-1"></i>
                        )}
                        {game.overUnder[0].trendB === "down" && (
                          <i className="fa fa-arrow-down text-blue-500 ml-1"></i>
                        )}
                      </span>
                      <span>{game.teamB}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Combination Bets */}
              {game.combos && game.combos.length > 0 && (
                <div className="px-1 mb-2">
                  <div className="flex justify-between">
                    <div className="w-64 mb-1 flex items-center justify-center text-[#4f2b01] font-bold px-2">
                      Win/Draw/Lose + Under/Over
                    </div>
                    <div className="flex-1">
                      {Array.from({ length: Math.ceil(game.combos.length / 3) }).map((_, rowIdx) => (
                        <div key={rowIdx} className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                          {game.combos.slice(rowIdx * 3, rowIdx * 3 + 3).map((combo, idx) => (
                            <div
                              key={idx}
                              className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                            >
                              <span>{combo.label}</span>
                              <span>{combo.odds}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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

