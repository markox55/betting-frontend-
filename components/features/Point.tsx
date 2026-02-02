"use client";

import { useState } from "react";

export default function Point() {
  const [pointAmount, setPointAmount] = useState("");
  const [selectedBonus, setSelectedBonus] = useState("no data");

  const handleAmountClick = (amount: string) => {
    if (amount === "Reset") {
      setPointAmount("");
    } else if (amount === "MAX") {
      setPointAmount("20000");
    } else {
      setPointAmount(amount);
    }
  };

  return (
    <div className="w-full h-full md:px-10 pt-4 md:pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">POINT</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Content */}
      <div className="md:bg-white md:text-black md:shadow-lg md:rounded-lg md:mb-6 md:p-6 shrink-0">
        {/* Info Box */}
        <div className="bg-gray-200 p-3 md:p-4 rounded-lg mb-4">
          <p className="text-sm md:text-base mb-2">
            * Please process a full money recovery before applying for withdrawal.
          </p>
          <p className="text-sm md:text-base mb-2">
            * When you convert points, they will be moved to your balance.
          </p>
          <p className="text-sm md:text-base">
            * The minimum points to convert is 100 points.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-200 rounded-lg p-2 md:p-1 lg:p-4 mt-4 font-bold">
          {/* Balance */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] text-sm md:text-base">Balance:</label>
            <span className="text-red-500 text-sm md:text-base">$20,000</span>
          </div>

          {/* Profile/withdrawAmount */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[120px] md:min-w-[180px] mb-2 text-sm md:text-base">Profile/withdrawAmount:</label>
            <div className="flex gap-0">
              <input
                type="text"
                value={pointAmount}
                onChange={(e) => setPointAmount(e.target.value)}
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

          {/* profile/rechargeBonus */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[120px] md:min-w-[180px] mb-2 text-sm md:text-base">profile/rechargeBonus:</label>
            <select
              value={selectedBonus}
              onChange={(e) => setSelectedBonus(e.target.value)}
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
            >
              <option>no data</option>
              <option>no data</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4 pb-3">
          <button
            type="submit"
            className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-2 px-4 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
          >
            Profile/Apply Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

