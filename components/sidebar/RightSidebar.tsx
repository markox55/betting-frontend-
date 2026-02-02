"use client";

import { useState } from "react";

interface RightSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  cartItemCount?: number;
}

interface CartItem {
  id: string;
  match: string;
  selection: string;
  odds: number;
}

interface BettingRecord {
  id: string;
  folderCount: number;
  date: string;
  bets: {
    match: string;
    status: "won" | "lost";
    betType: string;
    selection: string;
    odds: number;
    date: string;
  }[];
  totalOdds: number;
  betAmount: number;
  expectedWin: number;
  status: "won" | "lost";
}

export default function RightSidebar({
  isOpen = true,
  onClose,
  cartItemCount = 2,
}: RightSidebarProps) {
  const [quickBetEnabled, setQuickBetEnabled] = useState(false);
  const [quickBetAmount, setQuickBetAmount] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"cart" | "record">("cart");
  const [betAmount, setBetAmount] = useState<string>("");

  // Sample data - replace with actual data from props or API
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", match: "Team A VS Team B", selection: "Team A", odds: 2.02 },
    { id: "2", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "3", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "4", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "5", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "6", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "7", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "8", match: "Team C VS Team D", selection: "Team D", odds: 1.68 },
    { id: "9", match: "Team C VS Team D", selection: "Team D", odds: 1.681111 },
    { id: "10", match: "Team C VS Team D", selection: "Team D", odds: 1.683333 },
  ]);

  const bettingRecords: BettingRecord[] = [
    {
      id: "1",
      folderCount: 2,
      date: "12-02 18:24:00",
      bets: [
        {
          match: "Team A VS Team B",
          status: "lost",
          betType: "Under/Over (1st Quarter)",
          selection: "Away Win",
          odds: 1.78,
          date: "12-01 18:24:00",
        },
        {
          match: "Team C VS Team D",
          status: "won",
          betType: "Handicap (1st Quarter)",
          selection: "Home Win",
          odds: 1.87,
          date: "12-01 18:24:00",
        },
        {
          match: "Team C VS Team D",
          status: "won",
          betType: "Handicap (1st Quarter)",
          selection: "Home Win",
          odds: 1.87,
          date: "12-01 18:24:00",
        },
        {
          match: "Team C VS Team D",
          status: "won",
          betType: "Handicap (1st Quarter)",
          selection: "Home Win",
          odds: 1.87,
          date: "12-01 18:24:00",
        },
        {
          match: "Team C VS Team D",
          status: "won",
          betType: "Handicap (1st Quarter)",
          selection: "Home Win",
          odds: 1.87,
          date: "12-01 18:24:00",
        },
      ],
      totalOdds: 3.32,
      betAmount: 10000,
      expectedWin: 33000,
      status: "lost",
    },
  ];

  const removeCartItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotalOdds = () => {
    if (cartItems.length === 0) return 0;
    return cartItems.reduce((acc, item) => acc * item.odds, 1);
  };

  const calculateExpectedWin = () => {
    const amount = parseFloat(betAmount) || 0;
    return amount * calculateTotalOdds();
  };

  const addAmount = (value: string) => {
    const currentAmount = parseFloat(betAmount) || 0;
    if (value === "max") {
      setBetAmount("1500000"); // Assuming max balance
    } else {
      const addValue = parseFloat(value.replace("+", "").replace("K", "000")) || 0;
      setBetAmount((currentAmount + addValue).toString());
    }
  };

  return (
    <aside
      className={`
        bg-white border-l border-gray-300 p-1
        fixed top-14 right-0 w-full z-40
        md:static md:w-64
        h-[calc(100vh-4rem)] md:h-[calc(100vh-130px)]
        transition-transform duration-300 ease-in-out
        shadow-lg md:shadow-none
        flex flex-col
        ${!isOpen ? "translate-x-full md:translate-x-0" : "translate-x-0"}
      `}
    >
      {/* Quick Bet - Desktop Only */}
      <div className="md:flex items-center hidden mb-2 shrink-0">
        <span className="text-[12px] ml-1 mr-2">
          <span className="inline-flex items-center h-8">Quick Bet</span>
          <div className="relative inline-block group ml-2">
            <i className="fa fa-circle-exclamation text-orange-500 text-lg cursor-pointer"></i>
            <span
              className="absolute left-1/2 -translate-x-1/2 top-full px-3 py-1.5 bg-gray-100 text-gray-600 text-[11px] rounded-md 
                        opacity-0 invisible transition-all duration-300 ease-in-out 
                        group-hover:opacity-100 group-hover:visible 
                        w-48 z-50"
            >
              Quick Bet allows you to place a single type of bet more easily and quickly. After
              setting the bet amount, click the selected bet option to place your bet immediately.
              (Single bet only)
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
            className={`w-24 bg-gray-200 ml-2 px-2 rounded transition-opacity duration-300 ${
              quickBetEnabled ? "opacity-100" : "opacity-0 absolute"
            }`}
          />
        </label>
      </div>

      {/* Mobile title */}
      <div className="flex justify-between items-center px-2 md:hidden border-b border-gray-200 pb-2 shrink-0">
        <div className="text-[#4f2b01] font-bold text-lg">BETTING CART</div>
        <button
          onClick={onClose}
          className="text-yellow-900 focus:outline-none bg-yellow-300 rounded-full w-8 h-8 hover:bg-yellow-300 transition-colors"
          aria-label="Close sidebar"
        >
          <i className="fa fa-times text-2xl"></i>
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 text-[13px] py-1.5 md:mt-2 mt-1 shrink-0">
        <button
          onClick={() => setActiveTab("cart")}
          className={`py-1 rounded-l-xl transition-colors ${
            activeTab === "cart"
              ? "text-[#4f2b01] bg-[#ffe600]/50 hover:bg-[#ffe600]/60"
              : "text-gray-100 bg-gray-400 hover:bg-[#ffe600]/60 hover:text-[#4f2b01]"
          }`}
        >
          Betting Cart
        </button>
        <button
          onClick={() => setActiveTab("record")}
          className={`py-1 rounded-r-xl transition-colors ${
            activeTab === "record"
              ? "text-[#4f2b01] bg-[#ffe600]/50 hover:bg-[#ffe600]/60"
              : "text-gray-100 bg-gray-400 hover:bg-[#ffe600]/60 hover:text-[#4f2b01]"
          }`}
        >
          Betting Record
        </button>
      </div>

      {/* Betting Cart Tab */}
      {activeTab === "cart" && (
        <div className="flex flex-col flex-1 min-h-0 relative">
          <div 
            className="bg-white rounded-md h-full overflow-y-auto flex-1 pb-64"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#d1d5db #f3f4f6",
            }}
          >
            <div className="p-1 bg-white/80 min-h-[60px]">
              {cartItems.length === 0 ? (
                <div className="w-full text-center p-4 text-gray-400 text-[13px]">
                  No selected betting records.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full text-[13px] border border-[#ffe600] rounded-md mb-1"
                  >
                    <div className="flex justify-between items-center px-2 py-0.5 bg-[linear-gradient(45deg,#fffab8_0%,#ffe600_100%)]">
                      <span className="font-bold">{item.match}</span>
                      <button
                        onClick={() => removeCartItem(item.id)}
                        className="cursor-pointer hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <i className="fa fa-remove"></i>
                      </button>
                    </div>
                    <div className="flex justify-between items-center p-2">
                      <span>{item.selection}</span>
                      <span>{item.odds}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Fixed Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#f3f4f6] rounded-lg">
            <div className="grid grid-cols-2 gap-1 p-2 pb-0 text-[12px]">
              <div className="flex flex-col">
                <div className="font-bold">Balance</div>
                <div>
                  <span className="text-yellow-600 mr-1">$1,500,263</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">Points</div>
                <div>
                  <span className="text-yellow-600 mr-1">2,000</span>P
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">Total Odds</div>
                <div>
                  <span className="text-yellow-600 mr-1">{calculateTotalOdds().toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">Expected Win Amount</div>
                <div>
                  <span className="text-yellow-600 mr-1">
                    ${calculateExpectedWin().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[13px] p-1">
              <div className="flex items-center mr-1">
                <span className="font-bold">AMOUNT</span>
                <i className="fa fa-refresh ml-1 cursor-pointer hover:text-[#ffe600] transition-colors"></i>
              </div>
              <input
                type="text"
                placeholder="0"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="px-2 py-1 bg-white text-[#4f2b01] border border-gray-500 rounded-md w-full focus:outline-none focus:border-[#ffe600]"
              />
            </div>
            <div className="grid grid-cols-3 gap-1 text-center text-[11px] md:text-[12px] font-semibold px-1">
              {["+5K", "+10K", "+50K", "+100K", "+500K", "max"].map((value) => (
                <div
                  key={value}
                  onClick={() => addAmount(value)}
                  className="p-1 bg-gray-300 hover:bg-[#ffe600]/50 cursor-pointer rounded transition-colors"
                >
                  {value}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 px-1 mt-1">
              <button className="bg-[#ffe600] text-[#4f2b01] font-bold uppercase text-xs md:text-sm rounded-md py-2 hover:shadow-md transition-all">
                <i className="fa fa-check mr-1"></i> Bet
              </button>
            </div>
            <div className="grid grid-cols-2 p-1 gap-1">
              <button className="bg-[#ffe600] text-[#4f2b01] font-bold uppercase text-xs md:text-sm rounded-md py-2 hover:shadow-md transition-all">
                <i className="fa fa-refresh mr-1"></i> Refresh
              </button>
              <button
                onClick={() => setCartItems([])}
                className="bg-[#ffe600] text-[#4f2b01] font-bold uppercase text-xs md:text-sm rounded-md py-2 hover:shadow-md transition-all"
              >
                <i className="fa fa-trash mr-1"></i> Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Betting Record Tab */}
      {activeTab === "record" && (
        <div 
          className="h-full overflow-y-auto flex-1"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d1d5db #f3f4f6",
          }}
        >
          {bettingRecords.map((record) => (
            <div
              key={record.id}
              className="bg-[#f3f4f6] rounded-xl overflow-hidden text-[12px] text-[#4f2b01] font-bold mb-2"
            >
              <div className="bg-[#ffe600]/50 p-2 flex justify-between">
                <div>{record.folderCount} Folders</div>
                <div>{record.date}</div>
              </div>
              {record.bets.map((bet, index) => (
                <div
                  key={index}
                  className="flex flex-col mt-2 p-2 border-b border-gray-500 border-dashed"
                >
                  <div>
                    <button
                      className={`text-[11px] px-1 py-0.5 rounded-md text-white mr-2 ${
                        bet.status === "won" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {bet.status === "won" ? "Won" : "Lost"}
                    </button>
                    <span className="font-bold">{bet.match}</span>
                  </div>
                  <div className="italic font-bold mt-2">{bet.date}</div>
                  <div className="flex justify-between p-1 border border-[#4f2b01] rounded-md mb-2">
                    <div>{bet.betType}</div>
                    <div>{bet.selection}</div>
                    <div>@ {bet.odds}</div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <div className="flex justify-between p-1">
                  <div>Total Odds {record.totalOdds}</div>
                  <button
                    className={`text-[11px] px-1 py-0.5 rounded-md text-white mr-2 ${
                      record.status === "won" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {record.status === "won" ? "Won" : "Lost"}
                  </button>
                </div>
                <div className="flex justify-between items-center p-1">
                  <div>Bet Amount</div>
                  <div>
                    <span className="text-[15px] text-red-500">
                      ${record.betAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-1">
                  <div>Expected Win</div>
                  <div>
                    <span className="text-[15px] text-red-500">
                      ${record.expectedWin.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  <button className="bg-red-500 px-3 py-1 rounded-md text-white mr-2 hover:bg-red-600 transition-colors">
                    <i className="fa fa-trash mr-1"></i>Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

