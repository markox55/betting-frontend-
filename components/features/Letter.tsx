"use client";

import { useState, Fragment } from "react";

interface LetterRow {
  id: number;
  title: string;
  date: string;
  expanded: boolean;
}

export default function Letter() {
  const [letters, setLetters] = useState<LetterRow[]>([
    { id: 1, title: "The match you bet on has already ended, please check.", date: "2025-8-3 21:42:40", expanded: false },
    { id: 2, title: "The match you bet on has already ended, please check.", date: "2025-8-3 21:42:40", expanded: false },
    { id: 3, title: "The match you bet on has already ended, please check.", date: "2025-8-3 21:42:40", expanded: false },
  ]);

  const toggleLetter = (id: number) => {
    setLetters(letters.map(letter => 
      letter.id === id ? { ...letter, expanded: !letter.expanded } : letter
    ));
  };

  return (
    <div className="w-full h-full md:px-10 flex flex-col pt-4 md:pt-6">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">LETTER</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Content */}
      <div className="md:bg-white md:text-black md:shadow-lg md:rounded-lg md:mb-6 md:p-6 shrink-0">
        {/* Table */}
        <div className="overflow-x-auto mb-4 mt-2">
          <table className="min-w-full bg-gray-100 text-xs md:text-sm">
            <thead>
              <tr>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Number</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Title</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Date</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Action</th>
              </tr>
            </thead>
            <tbody>
              {letters.map((letter) => (
                <Fragment key={letter.id}>
                  <tr
                    className="hover:bg-[#fffed5]/30"
                  >
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{letter.id}</td>
                    <td
                      onClick={() => toggleLetter(letter.id)}
                      className="p-2 md:p-3 text-center border-b border-gray-600/50 cursor-pointer"
                    >
                      {letter.title}
                    </td>
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{letter.date}</td>
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">
                      <button className="text-[#f87171] p-1 cursor-pointer transition-colors hover:text-[#ef4444]">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  {letter.expanded && (
                    <tr key={`${letter.id}-detail`}>
                      <td colSpan={4} className="bg-gray-100 p-0">
                        <div className="p-3 md:p-4 border border-[#ffe600] bg-white">
                          <p className="text-sm md:text-base">
                            Hello, the match you bet on at 14:21:15 on August 4, 2025, has ended.
                            <br /> Please check it.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 mb-3 gap-1 pb-3">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] transition-colors hover:bg-[#faf5a9] opacity-50 cursor-not-allowed">
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#faf5a9] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

