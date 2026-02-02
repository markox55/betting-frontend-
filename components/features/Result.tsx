"use client";

import Image from "next/image";

interface ResultRecord {
  id: string;
  sportIcon: string;
  countryFlag: string;
  country: string;
  league: string;
  betType: string;
  date: string;
  betTime: string;
  teamA: string;
  teamAIndicator?: string;
  teamAArrow?: "down" | "up";
  value: string;
  teamB: string;
  teamBIndicator?: string;
  teamBArrow?: "down" | "up";
  score: string;
  pick: "teamA" | "teamB";
}

const resultRecords: ResultRecord[] = [
  {
    id: "1",
    sportIcon: "/images/sports/ice.png",
    countryFlag: "/images/cflags/128.png",
    country: "Country-2",
    league: "Champions-2 [Handicap (1st Quarter)]",
    betType: "Handicap",
    date: "11-11 16:00",
    betTime: "10-19 16:30:00",
    teamA: "TEAM C",
    teamAIndicator: "[H]",
    value: "-0.5",
    teamB: "TEAM D",
    teamBIndicator: "[H]",
    score: "81:55",
    pick: "teamA",
  },
  {
    id: "2",
    sportIcon: "/images/sports/basketball.png",
    countryFlag: "/images/cflags/58.png",
    country: "Country-1",
    league: "Champions-1 [Win/Draw/Lose]",
    betType: "Win/Draw/Lose",
    date: "11-11 18:00",
    betTime: "10-19 16:40:00",
    teamA: "TEAM A",
    teamAArrow: "down",
    value: "39.5",
    teamB: "TEAM B",
    teamBArrow: "up",
    score: "78:29",
    pick: "teamA",
  },
  {
    id: "3",
    sportIcon: "/images/sports/ice.png",
    countryFlag: "/images/cflags/128.png",
    country: "Country-2",
    league: "Champions-2 [Handicap (1st Quarter)]",
    betType: "Handicap",
    date: "11-11 16:00",
    betTime: "10-19 16:30:00",
    teamA: "TEAM C",
    teamAIndicator: "[H]",
    value: "-0.5",
    teamB: "TEAM D",
    teamBIndicator: "[H]",
    score: "81:55",
    pick: "teamA",
  },
  {
    id: "4",
    sportIcon: "/images/sports/basketball.png",
    countryFlag: "/images/cflags/58.png",
    country: "Country-1",
    league: "Champions-1 [Win/Draw/Lose]",
    betType: "Win/Draw/Lose",
    date: "11-11 18:00",
    betTime: "10-19 16:40:00",
    teamA: "TEAM A",
    teamAArrow: "down",
    value: "39.5",
    teamB: "TEAM B",
    teamBArrow: "up",
    score: "78:29",
    pick: "teamA",
  },
  {
    id: "5",
    sportIcon: "/images/sports/ice.png",
    countryFlag: "/images/cflags/128.png",
    country: "Country-2",
    league: "Champions-2 [Handicap (1st Quarter)]",
    betType: "Handicap",
    date: "11-11 16:00",
    betTime: "10-19 16:30:00",
    teamA: "TEAM C",
    teamAIndicator: "[H]",
    value: "-0.5",
    teamB: "TEAM D",
    teamBIndicator: "[H]",
    score: "81:55",
    pick: "teamB",
  },
  {
    id: "6",
    sportIcon: "/images/sports/basketball.png",
    countryFlag: "/images/cflags/58.png",
    country: "Country-1",
    league: "Champions-1 [Win/Draw/Lose]",
    betType: "Win/Draw/Lose",
    date: "11-11 18:00",
    betTime: "10-19 16:40:00",
    teamA: "TEAM A",
    teamAArrow: "down",
    value: "39.5",
    teamB: "TEAM B",
    teamBArrow: "up",
    score: "78:29",
    pick: "teamA",
  },
];

export default function Result() {
  return (
    <div className="bg-[#f3f4f6] max-w-[1440px] mx-auto px-1 md:pt-[20px]">
      {/* Header Section */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">RESULT</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white md:p-6 text-black shadow-lg rounded-lg mb-6">
        <div className="flex flex-col sport-page">
          {resultRecords.map((record) => (
            <div
              key={record.id}
              className="text-[0.75rem] md:text-[0.8rem] leading-4 bg-white border border-[#dedede] rounded-[10px] overflow-hidden mb-1"
            >
              {/* Cube Title */}
              <div className="bg-[#14142615] flex justify-between font-bold h-10 items-center px-2 mb-2">
                <span className="inline-flex items-center leading-5">
                  <Image
                    src={record.sportIcon}
                    alt="sport"
                    width={25}
                    height={20}
                    className="mr-1 rounded-sm max-w-[25px] h-5"
                  />
                  <Image
                    src={record.countryFlag}
                    alt="country"
                    width={25}
                    height={20}
                    className="mr-1 rounded-sm max-w-[25px] h-5"
                  />
                  {record.country}
                  <span className="text-red-500 mx-1">
                    <i className="fa fa-chevron-right"></i>
                    <i className="fa fa-chevron-right"></i>
                  </span>
                  {record.league}
                </span>
                <span>{record.date}</span>
              </div>

              {/* Bet List */}
              <div className="mb-0.5 px-1 flex md:items-center justify-between">
                <div className="flex flex-1 justify-between items-center gap-0.5 mb-1">
                  {/* Bet Time */}
                  <div className="h-10 flex items-center justify-center w-[110px] max-w-[10%] text-[#222] font-bold">
                    {record.betTime}
                  </div>

                  {/* Team A Pick */}
                  <div
                    className={`h-10 flex justify-between items-center flex-1 px-[0.3rem] md:px-[0.6rem] rounded-lg border border-[#d3d9e1] ${
                      record.pick === "teamA"
                        ? "bg-[#faf5a9]"
                        : "bg-white"
                    } ${record.pick !== "teamA" ? "cursor-default" : "cursor-pointer"} ${
                      record.pick === "teamA"
                        ? "hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                        : ""
                    }`}
                  >
                    <span>
                      {record.teamA}
                      {record.teamAIndicator && (
                        <span className="text-green-200 ml-1">
                          {record.teamAIndicator}
                        </span>
                      )}
                      {record.teamAArrow === "down" && (
                        <i className="fa fa-arrow-down text-blue-500 ml-1"></i>
                      )}
                      {record.teamAArrow === "up" && (
                        <i className="fa fa-arrow-up text-red-500 ml-1"></i>
                      )}
                    </span>
                    <span></span>
                  </div>

                  {/* Value/Odds */}
                  <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white border border-[#d3d9e1] rounded-lg cursor-default">
                    {record.value}
                  </div>

                  {/* Team B Pick */}
                  <div
                    className={`h-10 flex justify-between items-center flex-1 px-[0.3rem] md:px-[0.6rem] rounded-lg border border-[#d3d9e1] ${
                      record.pick === "teamB"
                        ? "bg-[#faf5a9]"
                        : "bg-white"
                    } ${record.pick !== "teamB" ? "cursor-default" : "cursor-pointer"} ${
                      record.pick === "teamB"
                        ? "hover:bg-[linear-gradient(135deg,#fffab8_0%,#faf5a9_100%)]"
                        : ""
                    }`}
                  >
                    <span></span>
                    <span>
                      {record.teamBIndicator && (
                        <span className="text-green-200 mr-1">
                          {record.teamBIndicator}
                        </span>
                      )}
                      {record.teamBArrow === "down" && (
                        <i className="fa fa-arrow-down text-blue-500 mr-1"></i>
                      )}
                      {record.teamBArrow === "up" && (
                        <i className="fa fa-arrow-up text-red-500 mr-1"></i>
                      )}
                      {record.teamB}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="h-10 flex items-center justify-center w-[80px] max-w-[10%] bg-white border border-[#d3d9e1] rounded-lg cursor-default">
                    {record.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 pb-3 gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#cecece] text-[#2a313d] opacity-50 cursor-not-allowed">
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#faf5a9] text-[#2a313d]">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#cecece] text-[#2a313d] hover:bg-[#faf5a9] hover:text-[#2a313d] transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#cecece] text-[#2a313d] hover:bg-[#faf5a9] hover:text-[#2a313d] transition-colors">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#cecece] text-[#2a313d] hover:bg-[#faf5a9] hover:text-[#2a313d] transition-colors">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

