"use client";

import { useState, useEffect } from "react";
import { LeftSidebar, RightSidebar } from "../sidebar";
import SportTypeFilter from "./SportTypeFilter";

interface BetOption {
  type: string;
  teamA: string;
  teamB: string;
  oddsA: number;
  oddsB: number;
  handicap?: string;
  overUnder?: string;
  isLocked?: boolean;
  hasHandicap?: boolean;
  trendA?: "up" | "down";
  trendB?: "up" | "down";
}

interface GameMatch {
  id: string;
  sport: string;
  sportIcon: string;
  country: string;
  countryFlag: string;
  league: string;
  date: string;
  matches: {
    teamA: string;
    teamB: string;
    mainBet: BetOption;
    moreBets: BetOption[];
    moreCount: number;
  }[];
}

export default function Special() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [quickBetEnabled, setQuickBetEnabled] = useState(false);
  const [quickBetAmount, setQuickBetAmount] = useState<string>("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [expandedMatches, setExpandedMatches] = useState<Set<string>>(new Set());

  // Sample game data - replace with actual API data
  const games: GameMatch[] = [
    {
      id: "champion1",
      sport: "basketball",
      sportIcon: "/images/sports/basketball.png",
      country: "Country-1",
      countryFlag: "/images/cflags/115.png",
      league: "Champions-1",
      date: "11-10 14:00",
      matches: [
        {
          teamA: "TEAM A",
          teamB: "TEAM B",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM A",
            teamB: "TEAM B",
            oddsA: 2.22,
            oddsB: 2.76,
            handicap: "-6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
            {
              type: "Under/Over (1st Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Under/Over (2nd Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
            {
              type: "Handicap (3rd Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Under/Over (3rd Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
            {
              type: "Handicap (4th Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Under/Over (4th Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
          ],
          moreCount: 8,
        },
        {
          teamA: "TEAM C",
          teamB: "TEAM D",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM C",
            teamB: "TEAM D",
            oddsA: 1.86,
            oddsB: 1.86,
            handicap: "6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM C",
              teamB: "TEAM D",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM C",
              teamB: "TEAM D",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
            {
              type: "Under/Over (1st Quarter)",
              teamA: "TEAM C",
              teamB: "TEAM D",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
          ],
          moreCount: 3,
        },
      ],
    },
    {
      id: "champion2",
      sport: "football",
      sportIcon: "/images/sports/football.png",
      country: "Country-2",
      countryFlag: "/images/cflags/123.png",
      league: "Champions-2",
      date: "11-10 14:00",
      matches: [
        {
          teamA: "TEAM A",
          teamB: "TEAM B",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM A",
            teamB: "TEAM B",
            oddsA: 2.22,
            oddsB: 2.76,
            handicap: "-6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
          ],
          moreCount: 2,
        },
        {
          teamA: "TEAM C",
          teamB: "TEAM D",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM C",
            teamB: "TEAM D",
            oddsA: 1.86,
            oddsB: 1.86,
            handicap: "6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM C",
              teamB: "TEAM D",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM C",
              teamB: "TEAM D",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
            {
              type: "Under/Over (1st Quarter)",
              teamA: "TEAM C",
              teamB: "TEAM D",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
          ],
          moreCount: 3,
        },
      ],
    },
    {
      id: "champion3",
      sport: "soccer",
      sportIcon: "/images/sports/soccer.png",
      country: "Country-3",
      countryFlag: "/images/cflags/129.png",
      league: "Champions-3",
      date: "11-10 14:00",
      matches: [
        {
          teamA: "TEAM A",
          teamB: "TEAM B",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM A",
            teamB: "TEAM B",
            oddsA: 2.22,
            oddsB: 2.76,
            handicap: "-6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
          ],
          moreCount: 2,
        },
      ],
    },
    {
      id: "champion4",
      sport: "tennis",
      sportIcon: "/images/sports/tennis.png",
      country: "Country-4",
      countryFlag: "/images/cflags/176.png",
      league: "Champions-4",
      date: "11-10 14:00",
      matches: [
        {
          teamA: "TEAM A",
          teamB: "TEAM B",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM A",
            teamB: "TEAM B",
            oddsA: 2.22,
            oddsB: 2.76,
            handicap: "-6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
          ],
          moreCount: 2,
        },
      ],
    },
    {
      id: "champion5",
      sport: "hockey",
      sportIcon: "/images/sports/ice.png",
      country: "Country-5",
      countryFlag: "/images/cflags/212.png",
      league: "Champions-5",
      date: "11-10 14:00",
      matches: [
        {
          teamA: "TEAM A",
          teamB: "TEAM B",
          mainBet: {
            type: "Handicap (First Half)",
            teamA: "TEAM A",
            teamB: "TEAM B",
            oddsA: 2.22,
            oddsB: 2.76,
            handicap: "-6.0",
            isLocked: true,
            hasHandicap: true,
          },
          moreBets: [
            {
              type: "Under/Over (First Half)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.86,
              oddsB: 1.84,
              overUnder: "119.0",
              trendA: "down",
              trendB: "up",
            },
            {
              type: "Handicap (1st Quarter)",
              teamA: "TEAM A",
              teamB: "TEAM B",
              oddsA: 1.83,
              oddsB: 1.87,
              handicap: "-2.5",
              isLocked: true,
              hasHandicap: true,
            },
          ],
          moreCount: 2,
        },
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

  const toggleMatchExpansion = (matchId: string) => {
    const newExpanded = new Set(expandedMatches);
    if (newExpanded.has(matchId)) {
      newExpanded.delete(matchId);
    } else {
      newExpanded.add(matchId);
    }
    setExpandedMatches(newExpanded);
  };

  const renderBetRow = (
    bet: BetOption,
    matchId: string,
    isMainBet: boolean,
    moreBets?: BetOption[],
    moreCount?: number
  ) => {
    const isExpanded = expandedMatches.has(matchId);
    const isHandicap = bet.hasHandicap && bet.handicap;
    const isOverUnder = bet.overUnder !== undefined;

    return (
      <div className="flex flex-col md:items-center justify-between w-full ">
        <div className="flex flex-1 justify-between items-center gap-0.5 mb-1 w-full">
          {/* Bet Type Label - bet-btn0 */}
          <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold text-xs shrink-0">
            {bet.type}
          </div>

          {/* Team A Bet - bet-pick */}
          <div
            className={`h-10 flex justify-between items-center flex-1 px-[0.3rem] md:px-[0.6rem] cursor-pointer border border-[#d3d9e1] rounded-lg transition-colors ${
              bet.isLocked
                ? "bg-white opacity-60 cursor-not-allowed"
                : "bg-[#faf5a9] hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
            }`}
          >
            <span className="text-xs md:text-sm truncate p-1">{bet.teamA}</span>
            <span className="text-xs md:text-sm font-semibold whitespace-nowrap p-1">
              {isHandicap && <span className="text-green-500 mr-1">[H]</span>}
              {bet.trendA === "down" && (
                <i className="fa fa-arrow-down text-blue-500 mr-1"></i>
              )}
              {bet.trendA === "up" && (
                <i className="fa fa-arrow-up text-red-500 mr-1"></i>
              )}
              {bet.oddsA}
            </span>
          </div>

          {/* Handicap/OverUnder Value - bet-btn1 */}
          <div
            className={`h-10 flex items-center justify-center w-[80px] max-w-[10%] border border-[#d3d9e1] rounded-lg text-xs md:text-sm font-semibold shrink-0 ${
              bet.isLocked ? "bg-white opacity-60" : "bg-white"
            }`}
          >
            {isHandicap ? bet.handicap : isOverUnder ? bet.overUnder : ""}
            {bet.isLocked && <i className="fa fa-lock ml-1 text-gray-400"></i>}
          </div>

          {/* Team B Bet - bet-pick */}
          <div
            className={`h-10 flex justify-between items-center flex-1 px-[0.3rem] md:px-[0.6rem] cursor-pointer border border-[#d3d9e1] rounded-lg transition-colors ${
              bet.isLocked
                ? "bg-white opacity-60 cursor-not-allowed"
                : "bg-white hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
            }`}
          >
            <span className="text-xs md:text-sm font-semibold whitespace-nowrap p-1">
              {bet.oddsB}
              {isHandicap && <span className="text-green-500 ml-1">[H]</span>}
              {bet.trendB === "up" && (
                <i className="fa fa-arrow-up text-red-500 ml-1"></i>
              )}
              {bet.trendB === "down" && (
                <i className="fa fa-arrow-down text-blue-500 ml-1"></i>
              )}
            </span>
            <span className="text-xs md:text-sm truncate p-1">{bet.teamB}</span>
          </div>

          {/* More Button - bet-btn2 */}
          <div
            className={`h-10 flex items-center justify-center w-[50px] border border-[#d3d9e1] rounded-lg text-xs md:text-sm font-bold transition-colors shrink-0 ${
              isMainBet && moreBets && moreBets.length > 0
                ? "bg-white hover:bg-[#faf5a9] cursor-pointer"
                : "bg-white"
            }`}
            onClick={() =>
              isMainBet && moreBets && moreBets.length > 0 && toggleMatchExpansion(matchId)
            }
          >
            {isMainBet && moreBets && moreBets.length > 0
              ? isExpanded
                ? "−"
                : `+${moreCount || moreBets.length}`
              : ""}
          </div>
        </div>

        {/* Expanded More Bets */}
        {isMainBet && isExpanded && moreBets && moreBets.length > 0 && (
          <div className="w-full">
            {moreBets.map((moreBet, moreIndex) => {
              const moreIsHandicap = moreBet.hasHandicap && moreBet.handicap;
              const moreIsOverUnder = moreBet.overUnder !== undefined;
              return (
                <div
                  key={moreIndex}
                  className="flex flex-1 justify-between items-center gap-0.5 mb-1 w-full"
                >
                  <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold text-xs shrink-0">
                    {moreBet.type}
                  </div>
                  <div
                    className={`h-10 flex justify-between items-center flex-1 px-[0.3rem] md:px-[0.6rem] cursor-pointer border border-[#d3d9e1] rounded-lg transition-colors ${
                      moreBet.isLocked
                        ? "bg-white opacity-60 cursor-not-allowed"
                        : "bg-white hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                    }`}
                  >
                    <span className="text-xs md:text-sm truncate p-1">{moreBet.teamA}</span>
                    <span className="text-xs md:text-sm font-semibold whitespace-nowrap p-1">
                      {moreIsHandicap && (
                        <span className="text-green-500 mr-1">[H]</span>
                      )}
                      {moreBet.trendA === "down" && (
                        <i className="fa fa-arrow-down text-blue-500 mr-1"></i>
                      )}
                      {moreBet.trendA === "up" && (
                        <i className="fa fa-arrow-up text-red-500 mr-1"></i>
                      )}
                      {moreBet.oddsA}
                    </span>
                  </div>
                  <div
                    className={`h-10 flex items-center justify-center w-[80px] max-w-[10%] border border-[#d3d9e1] rounded-lg text-xs md:text-sm font-semibold shrink-0 ${
                      moreBet.isLocked ? "bg-white opacity-60" : "bg-white"
                    }`}
                  >
                    {moreIsHandicap
                      ? moreBet.handicap
                      : moreIsOverUnder
                      ? moreBet.overUnder
                      : ""}
                    {moreBet.isLocked && (
                      <i className="fa fa-lock ml-1 text-gray-400"></i>
                    )}
                  </div>
                  <div
                    className={`h-10 flex justify-between items-center flex-1 px-[0.3rem] md:px-[0.6rem] cursor-pointer border border-[#d3d9e1] rounded-lg transition-colors ${
                      moreBet.isLocked
                        ? "bg-white opacity-60 cursor-not-allowed"
                        : "bg-white hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                    }`}
                  >
                    <span className="text-xs md:text-sm font-semibold whitespace-nowrap p-1">
                      {moreBet.oddsB}
                      {moreIsHandicap && (
                        <span className="text-green-500 ml-1">[H]</span>
                      )}
                      {moreBet.trendB === "up" && (
                        <i className="fa fa-arrow-up text-red-500 ml-1"></i>
                      )}
                      {moreBet.trendB === "down" && (
                        <i className="fa fa-arrow-down text-blue-500 ml-1"></i>
                      )}
                    </span>
                    <span className="text-xs md:text-sm truncate p-1">{moreBet.teamB}</span>
                  </div>
                  <div className="h-10 flex items-center justify-center w-[50px] border border-[#d3d9e1] rounded-lg shrink-0 bg-white"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-1rem)] md:h-[calc(100vh-1rem)] bg-[#f3f4f6] md:pl-22 pt-14 md:pt-[114px] ">
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
      <main className="flex-1 flex flex-col overflow-hidden min-h-0 md:mx-1 bg-white text-gray-700 shadow-md ">
        {/* Sport Type Filter */}
        <div className="shrink-0">
            <SportTypeFilter />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row gap-1 overflow-y-auto">
            {/* Special List */}
            <div 
            className="w-full md:h-[calc(100vh-3.5rem)] px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
                    <img
                        src={game.sportIcon}
                        alt={game.sport}
                        className="mr-1 rounded-sm max-w-[25px] h-5"
                    />
                    <img
                        src={game.countryFlag}
                        alt={game.country}
                        className="mr-1 rounded-sm max-w-[25px] h-5"
                    />
                    {game.country}
                    <span className="text-red-500 mx-1">
                        <i className="fa fa-chevron-right"></i>
                        <i className="fa fa-chevron-right"></i>
                    </span>
                    {game.league}
                    </span>
                    <span>{game.date}</span>
                </div>

                {/* Matches */}
                {game.matches.map((match, matchIndex) => {
                    const matchId = `${game.id}-${matchIndex}`;
                    return (
                    <div
                        key={matchIndex}
                        className="flex flex-col md:items-center justify-between px-1 mb-2"
                    >
                        {/* Main Bet */}
                        {renderBetRow(
                        match.mainBet,
                        matchId,
                        true,
                        match.moreBets,
                        match.moreCount
                        )}
                    </div>
                    );
                })}
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
        </div>
       
      </main>

      {/* Right Sidebar */}
      <RightSidebar
        isOpen={isRightOpen}
        onClose={() => setIsRightOpen(false)}
        cartItemCount={2}
      />

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

