"use client";

import { useState } from "react";
import Image from "next/image";

interface HistoryRecord {
  id: string;
  date: string;
  sportIcon: string;
  countryFlag: string;
  leagueName: string;
  homeTeam: string;
  homeOdds: string;
  draw: string;
  awayTeam: string;
  awayOdds: string;
  pick: "home" | "away";
  type: string;
  result: string;
  periodScore: string;
  matchScore: string;
  odds: string;
  status: "Win" | "Lose";
}

const historyRecords: HistoryRecord[] = [
  {
    id: "1",
    date: "2025-10-01 03:00:00",
    sportIcon: "/images/sports/basketball.png",
    countryFlag: "/images/cflags/115.png",
    leagueName: "champions-1",
    homeTeam: "Team A",
    homeOdds: "2.74",
    draw: "3.91",
    awayTeam: "Team B",
    awayOdds: "1.36",
    pick: "away",
    type: "Type-1",
    result: "Away Win",
    periodScore: "0:1",
    matchScore: "0:1",
    odds: "2,000",
    status: "Win",
  },
  {
    id: "2",
    date: "2025-10-01 03:00:00",
    sportIcon: "/images/sports/basketball.png",
    countryFlag: "/images/cflags/115.png",
    leagueName: "champions-1",
    homeTeam: "Team A",
    homeOdds: "2.74",
    draw: "3.91",
    awayTeam: "Team B",
    awayOdds: "1.36",
    pick: "home",
    type: "Type-1",
    result: "Away Win",
    periodScore: "0:1",
    matchScore: "0:1",
    odds: "2,000",
    status: "Win",
  },
  {
    id: "3",
    date: "2025-10-01 03:00:00",
    sportIcon: "/images/sports/soccer.png",
    countryFlag: "/images/cflags/116.png",
    leagueName: "champions-1",
    homeTeam: "Team A",
    homeOdds: "2.74",
    draw: "3.91",
    awayTeam: "Team B",
    awayOdds: "1.36",
    pick: "away",
    type: "Type-1",
    result: "Away Win",
    periodScore: "0:1",
    matchScore: "0:1",
    odds: "2,000",
    status: "Lose",
  },
  {
    id: "4",
    date: "2025-10-01 03:00:00",
    sportIcon: "/images/sports/basketball.png",
    countryFlag: "/images/cflags/115.png",
    leagueName: "champions-1",
    homeTeam: "Team A",
    homeOdds: "2.74",
    draw: "3.91",
    awayTeam: "Team B",
    awayOdds: "1.36",
    pick: "away",
    type: "Type-1",
    result: "Away Win",
    periodScore: "0:1",
    matchScore: "0:1",
    odds: "2,000",
    status: "Win",
  },
];

const games = ["Game1", "Game2", "Game3", "Game4", "Game5", "Game6", "Game7"];

export default function History() {
  const [activeGame, setActiveGame] = useState("Game1");

  return (
    <div className="bg-[#f3f4f6] max-w-[1440px] mx-auto px-1 md:pt-[20px]">
      {/* Header Section */}
      <div className="flex items-center space-x-3 w-full p-4">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">HISTORY</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white md:p-6 text-black shadow-lg rounded-lg mb-6">
        {/* Game Tabs */}
        <div className="flex items-center gap-1 text-sm text-center overflow-x-auto mb-1 scrollable-area">
          {games.map((game) => (
            <span
              key={game}
              onClick={() => setActiveGame(game)}
              className={`border-2 border-[#ffe600] bg-white cursor-pointer rounded-[20px] py-[5px] px-[5px] w-[100px] text-[0.75rem] font-bold text-[#4f2b01] hover:bg-[#faf5a9] transition-colors ${
                activeGame === game ? "bg-[#faf5a9]" : ""
              }`}
            >
              {game}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-1 text-sm text-center overflow-x-auto mb-1">
          <span className="border-2 border-[#ffe600] bg-white cursor-pointer rounded-[20px] py-[5px] px-[5px] w-[100px] text-[0.75rem] font-bold text-[#4f2b01] hover:bg-[#faf5a9] transition-colors">
            <i className="fas fa-trash-alt"></i> Delete
          </span>
          <span className="border-2 border-[#ffe600] bg-white cursor-pointer rounded-[20px] py-[5px] px-[5px] w-[100px] text-[0.75rem] font-bold text-[#4f2b01] hover:bg-[#faf5a9] transition-colors">
            <i className="fas fa-question-circle"></i> QNA
          </span>
          <span className="border-2 border-[#ffe600] bg-white cursor-pointer rounded-[20px] py-[5px] px-[5px] w-[100px] text-[0.75rem] font-bold text-[#4f2b01] hover:bg-[#faf5a9] transition-colors">
            <i className="fas fa-pencil-alt"></i> Write
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-4 scrollable-area">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Data
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  League Name
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Home Team
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Draw
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Away team
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Type
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Result
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Period score
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Match Score
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Odds
                </th>
                <th className="text-center text-[0.7rem] md:text-[1rem] bg-[#ead61f50] py-[5px] px-[10px] border border-[#9d9d9e]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {historyRecords.map((record) => (
                <tr key={record.id}>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.date}
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    <span className="flex flex-wrap items-center gap-1 justify-center">
                      <Image
                        src={record.sportIcon}
                        alt="sport"
                        width={20}
                        height={20}
                        className="h-5"
                      />
                      <Image
                        src={record.countryFlag}
                        alt="country"
                        width={16}
                        height={16}
                        className="h-4"
                      />
                      <span>{record.leagueName}</span>
                    </span>
                  </td>
                  <td
                    className={`text-center text-[0.7rem] md:text-[0.8rem] py-[15px] px-[5px] border border-[#d1d1d4] ${
                      record.pick === "home"
                        ? "bg-[#ffe600]"
                        : "bg-[#d3d3d350]"
                    }`}
                  >
                    {record.homeTeam}
                    <span className="text-blue-500">[{record.homeOdds}]</span>
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.draw}
                  </td>
                  <td
                    className={`text-center text-[0.7rem] md:text-[0.8rem] py-[15px] px-[5px] border border-[#d1d1d4] ${
                      record.pick === "away"
                        ? "bg-[#ffe600]"
                        : "bg-[#d3d3d350]"
                    }`}
                  >
                    {record.awayTeam}
                    <span className="text-blue-500">[{record.awayOdds}]</span>
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.type}
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.result}
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.periodScore}
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.matchScore}
                  </td>
                  <td className="text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4]">
                    {record.odds}
                  </td>
                  <td
                    className={`text-center text-[0.7rem] md:text-[0.8rem] bg-[#d3d3d350] py-[15px] px-[5px] border border-[#d1d1d4] ${
                      record.status === "Win" ? "text-green-200" : "text-red-400"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bet Information */}
        <div className="flex items-center gap-2 ml-2">
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs">
            Bet Time: 2025-09-30 22:53:31 Expected Win: (Bet 10,000 x Odds 15.20) = 152,000 Result Win: 0 Pending
          </span>
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

