"use client";

import { useState } from "react";

export default function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleAmountClick = (amount: string) => {
    if (amount === "Reset") {
      setWithdrawAmount("");
    } else if (amount === "MAX") {
      setWithdrawAmount("20000");
    } else {
      setWithdrawAmount(amount);
    }
  };

  return (
    <div className="w-full h-full md:px-10 pt-4 md:pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">WITHDRAW</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Content */}
      <div className="md:bg-white md:text-black md:shadow-lg md:rounded-lg md:mb-6 md:p-6 shrink-0">
        {/* Info Box */}
        <div className="bg-gray-200 p-3 md:p-4 rounded-lg mb-4">
          <p className="text-sm md:text-base mb-2">
            * You must deposit under the name you entered when signing up for processing
          </p>
          <p className="text-sm md:text-base">
            * Deposits maybe delayed during bank inspection times.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-200 rounded-lg p-2 md:p-1 lg:p-4 mt-4 font-bold">
          {/* Balance */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] text-sm md:text-base">Balance:</label>
            <span className="text-red-500 text-sm md:text-base">$20,000</span>
          </div>

          {/* Withdraw Amount */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Withdraw Amount:</label>
            <div className="flex gap-0">
              <input
                type="text"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="0"
                className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-l-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              />
              <button
                onClick={() => handleAmountClick("MAX")}
                className="px-2 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white cursor-pointer whitespace-nowrap shrink-0 bg-[#698ab8] border border-[#26395f] border-l-0 rounded-r-md hover:bg-[#374151] transition-colors"
              >
                MAX
              </button>
            </div>
            <div className="mt-2">
              <div className="flex flex-wrap gap-0 w-full">
                {["1,000", "5,000", "10,000", "50,000", "100,000", "500,000", "Reset"].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`px-2 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white cursor-pointer whitespace-nowrap shrink-0 border border-[#26395f] transition-colors ${
                      amount === "Reset"
                        ? "bg-[#e53939] rounded-r-md hover:bg-[#374151]"
                        : "bg-[#698ab8] hover:bg-[#374151]"
                    } ${amount === "1,000" ? "rounded-l-md" : ""} ${amount === "Reset" ? "" : "border-l-0"}`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4">
          <button
            type="submit"
            className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-2 px-4 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
          >
            Apply Withdraw
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-4 mt-4">
          <table className="min-w-full bg-gray-100 text-xs md:text-sm">
            <thead>
              <tr>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Number</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Withdraw Amount</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Date</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Situation</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01] hidden md:table-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((num) => (
                <tr key={num} className="hover:bg-[#fffed5]/30">
                  <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{num}</td>
                  <td className="p-2 md:p-3 text-center border-b border-gray-600/50">10000</td>
                  <td className="p-2 md:p-3 text-center border-b border-gray-600/50">2025-8-3 21:42:40</td>
                  <td className="p-2 md:p-3 text-center border-b border-gray-600/50 text-green-400">Approved</td>
                  <td className="p-2 md:p-3 text-center border-b border-gray-600/50 hidden md:table-cell">
                    <button className="text-[#f87171] p-1 cursor-pointer transition-colors hover:text-[#ef4444]">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 mb-3 gap-1 p-3">
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

