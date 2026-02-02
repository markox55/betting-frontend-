"use client";

import { useState } from "react";

export default function Deposit() {
  const [depositMethod, setDepositMethod] = useState<"crypto" | "bank">("crypto");
  const [depositAmount, setDepositAmount] = useState("");
  const [selectedBonus, setSelectedBonus] = useState("Unpaid");
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [selectedNetwork, setSelectedNetwork] = useState("Bitcoin");

  const handleAmountClick = (amount: string) => {
    if (amount === "Reset") {
      setDepositAmount("");
    } else {
      setDepositAmount(amount);
    }
  };

  return (
    <div className="w-full h-full md:px-10 pt-4 md:pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">DEPOSIT</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Content */}
      <div className="md:bg-white md:text-black md:shadow-lg md:rounded-lg md:mb-6 md:p-6 shrink-0">
        {/* Deposit Method Tabs */}
        <div className="flex items-center gap-1 text-sm text-center overflow-x-auto mb-4">
          <button
            onClick={() => setDepositMethod("crypto")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors border-2 text-sm md:text-base font-bold ${
              depositMethod === "crypto"
                ? "bg-[#faf5a9] border-[#ffe600] text-[#2a313d]"
                : "bg-white border-[#ffe600] text-[#4f2b01] hover:bg-[#faf5a9]"
            }`}
          >
            Crypto
          </button>
          <button
            onClick={() => setDepositMethod("bank")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors border-2 text-sm md:text-base font-bold ${
              depositMethod === "bank"
                ? "bg-[#faf5a9] border-[#ffe600] text-[#2a313d]"
                : "bg-white border-[#ffe600] text-[#4f2b01] hover:bg-[#faf5a9]"
            }`}
          >
            Bank
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-gray-200 p-3 md:p-4 rounded-lg mb-4">
          {depositMethod === "crypto" ? (
            <>
              <p className="text-sm md:text-base mb-2">
                * Please send only {selectedCrypto} ({selectedNetwork}) to this deposit address.
              </p>
              <p className="text-sm md:text-base mb-2">
                * Sending any other currency to this address may result in the loss of your deposit.
              </p>
              <p className="text-sm md:text-base mb-2">
                * Please ensure you are using the correct network ({selectedNetwork}).
              </p>
              <p className="text-sm md:text-base">
                * Your deposit will be credited after blockchain confirmation.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm md:text-base mb-2">
                * You must deposit under the name you entered when signing up for processing
              </p>
              <p className="text-sm md:text-base mb-2">
                * Deposits maybe delayed during bank inspection times.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm md:text-base">*</span>
                <button className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-sm md:text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-1 md:py-1.5 px-2 md:px-3 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]">
                  Account Inquiry
                </button>
              </div>
              <p className="text-sm md:text-base mt-2">
                You can check the account information below or through the customer center.
              </p>
            </>
          )}
        </div>

        {/* Form */}
        <div className="bg-gray-200 rounded-lg p-2 md:p-1 lg:p-4 mt-4 font-bold">
          {/* Balance */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] text-sm md:text-base">Balance:</label>
            <span className="text-red-500 text-sm md:text-base">$20,000</span>
          </div>

          {depositMethod === "crypto" ? (
            <>
              {/* Crypto Selection */}
              <div className="p-2 md:p-3 border-b border-gray-600/60">
                <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Select Crypto:</label>
                <select
                  value={selectedCrypto}
                  onChange={(e) => {
                    setSelectedCrypto(e.target.value);
                    // Update network based on crypto selection
                    if (e.target.value === "BTC") setSelectedNetwork("Bitcoin");
                    else if (e.target.value === "ETH") setSelectedNetwork("Ethereum");
                    else if (e.target.value === "USDT") setSelectedNetwork("Tron");
                    else if (e.target.value === "USDC") setSelectedNetwork("Ethereum");
                  }}
                  className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
                >
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>USDT</option>
                  <option>USDC</option>
                </select>
              </div>

              {/* Network Selection */}
              <div className="p-2 md:p-3 border-b border-gray-600/60">
                <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Network:</label>
                <select
                  value={selectedNetwork}
                  onChange={(e) => setSelectedNetwork(e.target.value)}
                  className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
                >
                  {selectedCrypto === "BTC" && <option>Bitcoin</option>}
                  {selectedCrypto === "ETH" && <option>Ethereum</option>}
                  {selectedCrypto === "USDT" && (
                    <>
                      <option>Tron</option>
                      <option>Ethereum</option>
                      <option>BSC</option>
                    </>
                  )}
                  {selectedCrypto === "USDC" && (
                    <>
                      <option>Ethereum</option>
                      <option>BSC</option>
                      <option>Polygon</option>
                    </>
                  )}
                </select>
              </div>

              {/* Wallet Address */}
              <div className="p-2 md:p-3 border-b border-gray-600/60">
                <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Deposit Address:</label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                      className="flex-1 px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
                    />
                    <button
                      onClick={() => navigator.clipboard.writeText("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")}
                      className="px-3 md:px-4 py-1.5 bg-[#698ab8] text-white text-sm md:text-base font-medium rounded-md hover:bg-[#374151] transition-colors cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 font-normal">
                    Send only {selectedCrypto} to this address on {selectedNetwork} network
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Deposit Amount */}
              <div className="p-2 md:p-3 border-b border-gray-600/60">
                <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Deposit Amount:</label>
                <input
                  type="text"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
                />
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
            </>
          )}

          {/* Recharge Bonus - Only for Bank deposits */}
          {depositMethod === "bank" && (
            <div className="p-2 md:p-3 border-b border-gray-600/60">
              <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Recharge Bonus:</label>
              <select
                value={selectedBonus}
                onChange={(e) => setSelectedBonus(e.target.value)}
                className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              >
                <option>Domestic/European/Minigame 10% test</option>
                <option>European/Minigame 5% test</option>
                <option>Unpaid</option>
              </select>
            </div>
          )}
        </div>

        {/* Submit Button - Only show for Bank deposits */}
        {depositMethod === "bank" && (
          <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4">
            <button
              type="submit"
              className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-2 px-4 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
            >
              Apply Deposit
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto mb-4 mt-4">
          <table className="min-w-full bg-gray-100 text-xs md:text-sm">
            <thead>
              <tr>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Number</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Deposit Amount</th>
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
        <div className="flex justify-center mt-6 mb-3 gap-1">
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

