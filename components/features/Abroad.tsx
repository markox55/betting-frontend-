"use client";

import { useState, useEffect } from "react";
import { LeftSidebar, RightSidebar } from "../sidebar";
import SportTypeFilter from "./SportTypeFilter";

export default function Abroad() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [quickBetEnabled, setQuickBetEnabled] = useState(false);
  const [quickBetAmount, setQuickBetAmount] = useState<string>("");
  const [expandedDetails, setExpandedDetails] = useState<Set<string>>(new Set());
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [activeBetType, setActiveBetType] = useState<{ [key: string]: string }>({});
  const [isDesktop, setIsDesktop] = useState(false);

  // Sample game data - replace with actual API data
  const games = [
    {
      id: "game1",
      sport: "football",
      sportIcon: "/images/sports/football.png",
      country: "Country-1",
      countryFlag: "/images/cflags/101.png",
      league: "Champions-1",
      date: "11-10 14:00",
      teamA: "TEAM A",
      teamB: "TEAM B",
      oddsA: 3.5,
      oddsDraw: 4.0,
      oddsB: 6.3,
      moreCount: 8,
      details: {
        handicap: [
          { team: "TEAM A", value: "-1.5", odds: 2.48 },
          { team: "TEAM A", value: "1.5", odds: 1.43 },
          { team: "TEAM A", value: "-1.0", odds: 1.94 },
          { team: "TEAM A", value: "1.0", odds: 1.81 },
          { team: "TEAM A", value: "-0.5", odds: 1.94 },
          { team: "TEAM A", value: "0.5", odds: 2.29 },
        ],
        overUnder: [
          { label: "AA", value: "2.5", odds: 2.48, trend: "down" },
          { label: "BB", value: "2.5", odds: 1.43, trend: "up" },
        ],
        exactScore: [
          { score: "0-0", odds: 8.65 },
          { score: "Any other score", odds: 13.53 },
          { score: "0-1", odds: 11.38 },
          { score: "0-2", odds: 28.15 },
          { score: "0-3", odds: 67.45 },
          { score: "1-0", odds: 5.38 },
          { score: "1-2", odds: 13.53 },
          { score: "2-0", odds: 28.15 },
          { score: "2-1", odds: 67.45 },
          { score: "2-2", odds: 5.38 },
        ],
      },
    },
    {
      id: "game2",
      sport: "basketball",
      sportIcon: "/images/sports/basketball.png",
      country: "Country-2",
      countryFlag: "/images/cflags/121.png",
      league: "Champions-2",
      date: "11-12 14:00",
      teamA: "TEAM C",
      teamB: "TEAM D",
      oddsA: 3.7,
      oddsDraw: null,
      oddsB: 2.8,
      moreCount: 2,
      details: {
        handicap: [
          { team: "TEAM D", value: "-1.5", odds: 2.48 },
          { team: "TEAM D", value: "1.5", odds: 1.43 },
          { team: "TEAM D", value: "-1.0", odds: 1.94 },
          { team: "TEAM D", value: "1.0", odds: 1.81 },
          { team: "TEAM D", value: "-0.5", odds: 1.94 },
          { team: "TEAM D", value: "0.5", odds: 2.29 },
        ],
        overUnder: [
          { label: "AA", value: "2.5", odds: 2.48, trend: "down" },
          { label: "BB", value: "2.5", odds: 1.43, trend: "up" },
        ],
      },
    },
    {
      id: "game2b",
      sport: "basketball",
      sportIcon: "/images/sports/basketball.png",
      country: "Country-2",
      countryFlag: "/images/cflags/121.png",
      league: "Champions-2",
      date: "11-12 14:00",
      teamA: "TEAM E",
      teamB: "TEAM F",
      oddsA: 3.2,
      oddsDraw: null,
      oddsB: 4.6,
      moreCount: 1,
      details: {
        overUnder: [
          { label: "EE", value: "2.5", odds: 5.74, trend: "down" },
          { label: "FF", value: "2.5", odds: 6.12, trend: "up" },
        ],
      },
    },
    {
      id: "game3",
      sport: "volleyball",
      sportIcon: "/images/sports/volleyball.png",
      country: "Country-3",
      countryFlag: "/images/cflags/136.png",
      league: "Champions-3",
      date: "11-12 17:00",
      teamA: "TEAM G",
      teamB: "TEAM H",
      oddsA: 3.4,
      oddsDraw: null,
      oddsB: 1.8,
      moreCount: 1,
      details: {
        handicap: [
          { team: "TEAM D", value: "-1.5", odds: 2.48 },
          { team: "TEAM D", value: "1.5", odds: 1.43 },
          { team: "TEAM D", value: "-1.0", odds: 1.94 },
          { team: "TEAM D", value: "1.0", odds: 1.81 },
          { team: "TEAM D", value: "-0.5", odds: 1.94 },
          { team: "TEAM D", value: "0.5", odds: 2.29 },
        ],
      },
    },
    {
      id: "game3b",
      sport: "volleyball",
      sportIcon: "/images/sports/volleyball.png",
      country: "Country-3",
      countryFlag: "/images/cflags/136.png",
      league: "Champions-3",
      date: "11-12 17:00",
      teamA: "TEAM E",
      teamB: "TEAM F",
      oddsA: 3.2,
      oddsDraw: null,
      oddsB: 4.6,
      moreCount: 1,
      details: {
        overUnder: [
          { label: "EE", value: "2.5", odds: 5.74, trend: "down" },
          { label: "FF", value: "2.5", odds: 6.12, trend: "up" },
        ],
      },
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
    // Handle resize
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

  const toggleDetail = (gameId: string) => {
    if (isDesktop) {
      // Desktop: show in right container
      setActiveDetail(gameId);
    } else {
      // Mobile: toggle inline detail
      const newExpanded = new Set(expandedDetails);
      if (newExpanded.has(gameId)) {
        newExpanded.delete(gameId);
      } else {
        newExpanded.add(gameId);
      }
      setExpandedDetails(newExpanded);
    }
  };

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
                className="mb-1 bg-white border border-gray-300 rounded-[10px] overflow-hidden text-[13px] md:text-sm"
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

                {/* Main Bet Options */}
                <div className="flex flex-col md:flex-row md:items-center justify-between px-1 mb-2">
                  <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                    <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold text-xs">
                      Win/Draw/Lose
                    </div>
                    <div className="h-10 flex justify-between items-center flex-1 px-2 bg-[#faf5a9] cursor-pointer border border-[#d3d9e1] rounded-lg">
                      <span>{game.teamA}</span>
                      <span>{game.oddsA}</span>
                    </div>
                    {game.oddsDraw !== null ? (
                      <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]">
                        <span>{game.oddsDraw}</span>
                      </div>
                    ) : (
                      <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white border border-[#d3d9e1] rounded-lg cursor-not-allowed">
                        <span>VS</span>
                      </div>
                    )}
                    <div className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]">
                      <span>{game.oddsB}</span>
                      <span>{game.teamB}</span>
                    </div>
                    <button
                      onClick={() => toggleDetail(game.id)}
                      className={`h-10 flex items-center justify-center w-10 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[#faf5a9] transition-colors ${
                        expandedDetails.has(game.id) || activeDetail === game.id ? "bg-[#faf5a9]" : ""
                      }`}
                    >
                      +{game.moreCount}
                    </button>
                  </div>

                  {/* Detail View - Mobile (inline) */}
                  {expandedDetails.has(game.id) && (
                    <div className="border border-gray-600 p-1 md:hidden">
                      <BetDetailView game={game} />
                    </div>
                  )}
                </div>
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

          {/* Desktop Detail Container */}
          {activeDetail && (
            <div
              className="hidden md:block md:w-3/7 overflow-y-auto bg-white rounded-md p-1"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#d1d5db #f3f4f6",
              }}
            >
              <BetDetailView
                game={games.find((g) => g.id === activeDetail) || games[0]}
              />
            </div>
          )}
        </div>
      </main>

      {/* Right Sidebar */}
      <RightSidebar isOpen={isRightOpen} onClose={() => setIsRightOpen(false)} />

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

// Bet Detail View Component
function BetDetailView({ game }: { game: any }) {
  const [activeType, setActiveType] = useState("All");

  return (
    <div>
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
        <span className="flex items-center justify-center w-1/2">{game.teamA}</span>
        <span className="flex items-center justify-center w-1/2">{game.teamB}</span>
      </div>

      {/* Bet Type Tabs */}
      <div className="flex items-center gap-1 text-sm text-center overflow-x-auto mb-1">
        {["All", "Under/Over", "Handicap", "Other"].map((type) => (
          <span
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-3 py-1 rounded-lg cursor-pointer transition-colors border-2 ${
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
      {(activeType === "All" || activeType === "Handicap") && (
        <div className="mb-1 bg-white border border-gray-300 rounded-[10px] overflow-hidden">
          <div className="bg-[#14142615] flex justify-between font-bold h-10 items-center px-2 mb-2">
            <span className="inline-flex items-center">
              <img src={game.sportIcon} alt="" className="mr-1 rounded-sm max-w-[25px] h-5" />
              Handicap
            </span>
          </div>
          <div className="px-1 mb-2">
            {/* Display handicap options in pairs (2 per row) */}
            {Array.from({ length: Math.ceil(game.details.handicap.length / 2) }).map(
              (_, rowIdx) => (
                <div key={rowIdx} className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                  {game.details.handicap.slice(rowIdx * 2, rowIdx * 2 + 2).map((h: any, idx: number) => (
                    <div
                      key={idx}
                      className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                    >
                      <span>
                        {h.team}
                        <span className="text-blue-700">[{h.value}]</span>
                      </span>
                      <span>{h.odds}</span>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Under/Over Section */}
      {(activeType === "All" || activeType === "Under/Over") && (
        <div className="mb-1 bg-white border border-gray-300 rounded-[10px] overflow-hidden">
          <div className="bg-[#14142615] flex justify-between font-bold h-10 items-center px-2 mb-2">
            <span className="inline-flex items-center">
              <img src={game.sportIcon} alt="" className="mr-1 rounded-sm max-w-[25px] h-5" />
              Under/Over
            </span>
          </div>
          <div className="px-1 mb-2">
            <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
              {game.details.overUnder.map((ou: any, idx: number) => (
                <div
                  key={idx}
                  className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                >
                  <span>
                    {ou.label}
                    <span className="text-blue-700">[{ou.value}]</span>
                    {ou.trend === "down" && (
                      <i className="fa fa-arrow-down text-blue-500 ml-1"></i>
                    )}
                    {ou.trend === "up" && <i className="fa fa-arrow-up text-red-500 ml-1"></i>}
                  </span>
                  <span>{ou.odds}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Exact Score Section */}
      {(activeType === "All" || activeType === "Other") && game.details.exactScore && (
        <div className="mb-1 bg-white border border-gray-300 rounded-[10px] overflow-hidden">
          <div className="bg-[#14142615] flex justify-between font-bold h-10 items-center px-2 mb-2">
            <span className="inline-flex items-center">
              <img src={game.sportIcon} alt="" className="mr-1 rounded-sm max-w-[25px] h-5" />
              Exact Score
            </span>
          </div>
          <div className="px-1 mb-2">
            {/* Group scores in rows of 3 */}
            {Array.from({ length: Math.ceil(game.details.exactScore.length / 3) }).map(
              (_, rowIdx) => (
                <div key={rowIdx} className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                  {game.details.exactScore.slice(rowIdx * 3, rowIdx * 3 + 3).map(
                    (score: any, idx: number) => (
                      <div
                        key={idx}
                        className="h-10 flex justify-between items-center flex-1 px-2 bg-white cursor-pointer border border-[#d3d9e1] rounded-lg hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                      >
                        <span>
                          <span className="text-blue-700">{score.score}</span>
                        </span>
                        <span>{score.odds}</span>
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

