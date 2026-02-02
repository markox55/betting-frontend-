"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SlotProvider {
  id: string;
  name: string;
  logo: string;
}

const slotProviders: SlotProvider[] = [
  { id: "mancala", name: "mancala", logo: "/images/slot/logo/mancala.png" },
  { id: "caleta", name: "caleta", logo: "/images/slot/logo/caleta.png" },
  { id: "platipus", name: "platipus", logo: "/images/slot/logo/platipus.png" },
  { id: "booming", name: "booming", logo: "/images/slot/logo/booming.png" },
  { id: "bgaming", name: "bgaming", logo: "/images/slot/logo/bgaming.png" },
  { id: "spinomenal", name: "spinomenal", logo: "/images/slot/logo/spinomenal.png" },
  { id: "pariplay", name: "pariplay", logo: "/images/slot/logo/pariplay.png" },
  { id: "novomatic", name: "novomatic", logo: "/images/slot/logo/novomatic.png" },
  { id: "eagaming", name: "eagaming", logo: "/images/slot/logo/eagaming.png" },
  { id: "7777", name: "7777", logo: "/images/slot/logo/7777.png" },
  { id: "platin", name: "platin", logo: "/images/slot/logo/platin.png" },
  { id: "smartsoft", name: "smartsoft", logo: "/images/slot/logo/smartsoft.png" },
  { id: "fils", name: "fils", logo: "/images/slot/logo/fils.png" },
  { id: "retro", name: "retro", logo: "/images/slot/logo/retro.png" },
  { id: "7mojos", name: "7mojos", logo: "/images/slot/logo/7mojos.png" },
  { id: "playtech", name: "playtech", logo: "/images/slot/logo/playtech.png" },
  { id: "skywind", name: "skywind", logo: "/images/slot/logo/skywind.png" },
  { id: "netgaming", name: "netgaming", logo: "/images/slot/logo/netgaming.png" },
  { id: "btg", name: "btg", logo: "/images/slot/logo/btg.png" },
  { id: "avatarux", name: "avatarux", logo: "/images/slot/logo/avatarux.png" },
  { id: "wazdan", name: "wazdan", logo: "/images/slot/logo/wazdan.png" },
  { id: "gameart", name: "gameart", logo: "/images/slot/logo/gameart.png" },
  { id: "playstar", name: "playstar", logo: "/images/slot/logo/playstar.png" },
  { id: "netgame", name: "netgame", logo: "/images/slot/logo/netgame.png" },
  { id: "slotmill", name: "slotmill", logo: "/images/slot/logo/slotmill.png" },
  { id: "redtiger", name: "redtiger", logo: "/images/slot/logo/redtiger.png" },
  { id: "hacksaw", name: "hacksaw", logo: "/images/slot/logo/hacksaw.png" },
  { id: "relax", name: "relax", logo: "/images/slot/logo/relax.png" },
  { id: "rtg", name: "rtg", logo: "/images/slot/logo/rtg.png" },
  { id: "thunder", name: "thunder", logo: "/images/slot/logo/thunder.png" },
  { id: "redrake", name: "redrake", logo: "/images/slot/logo/redrake.png" },
  { id: "quickspin", name: "quickspin", logo: "/images/slot/logo/quickspin.png" },
  { id: "fantasma", name: "fantasma", logo: "/images/slot/logo/fantasma.png" },
  { id: "blueprint", name: "blueprint", logo: "/images/slot/logo/blueprint.png" },
  { id: "nolimit", name: "nolimit", logo: "/images/slot/logo/nolimit.png" },
  { id: "1x2", name: "1x2", logo: "/images/slot/logo/1x2.png" },
  { id: "netent", name: "netent", logo: "/images/slot/logo/netent.png" },
  { id: "asian", name: "asian", logo: "/images/slot/logo/asian.png" },
  { id: "booongo", name: "booongo", logo: "/images/slot/logo/booongo.png" },
  { id: "cq9", name: "cq9", logo: "/images/slot/logo/cq9.png" },
  { id: "dreamtech", name: "dreamtech", logo: "/images/slot/logo/dreamtech.png" },
  { id: "evoplay", name: "evoplay", logo: "/images/slot/logo/evoplay.png" },
  { id: "habanero", name: "habanero", logo: "/images/slot/logo/habanero.png" },
  { id: "micro", name: "micro", logo: "/images/slot/logo/micro.png" },
  { id: "pgsoft", name: "pgsoft", logo: "/images/slot/logo/pgsoft.png" },
  { id: "playngo", name: "playngo", logo: "/images/slot/logo/playngo.png" },
  { id: "pragmatic", name: "pragmatic", logo: "/images/slot/logo/pragmatic.png" },
  { id: "yggdrasil", name: "yggdrasil", logo: "/images/slot/logo/yggdrasil.png" },
];

// Sample game data - 9 unique games repeated
const slotGames = Array.from({ length: 27 }, (_, i) => ({
  id: `game-${i + 1}`,
  image: `/images/slot/slot1/${((i % 9) + 1)}.png`,
  name: "Game name",
}));

export default function Slot() {
  const [isGridExpanded, setIsGridExpanded] = useState(false);
  const [activeProvider, setActiveProvider] = useState("mancala");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 990);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const toggleGrid = () => {
    setIsGridExpanded(!isGridExpanded);
  };

  return (
    <div className="bg-[#f3f4f6] max-w-[1440px] mx-auto pl-20 pr-0 pt-14 md:pt-[114px]">
      {/* Slot Logo Zone */}
      <div className="md:relative overflow-y-auto">
        <div
          className={`flex md:grid md:grid-cols-9 gap-x-1 md:gap-3 transition-all duration-500 ease-in-out mt-2 ${
            isGridExpanded ? "md:max-h-[1000px]" : "md:max-h-[210px]"
          } md:overflow-hidden pt-2 pb-2 md:pt-0 md:pb-0 min-w-max md:min-w-0 h-[60px] md:h-auto bg-white md:bg-transparent overflow-x-auto`}
          id="grid-container"
        >
          {slotProviders.map((provider) => {
            const isActive = activeProvider === provider.id;
            return (
              <div
                key={provider.id}
                onClick={() => setActiveProvider(provider.id)}
                className="rounded-[5px] flex flex-col items-center justify-center shadow-md transition-all duration-200 cursor-pointer w-[80px] md:w-auto h-[60px] md:h-auto py-0 md:pt-3 md:pb-3 border border-[#b3b3b3] md:border-[#949494] hover:bg-gradient-to-br hover:from-color1 hover:via-color2 hover:to-color3"
                style={{
                  background: isActive
                    ? "linear-gradient(45deg, #fffab8 0%, #faf5a9 50%, #ffe600 100%)"
                    : isDesktop
                    ? "#a8acb1"
                    : "linear-gradient(180deg, #d1d1d1, #dedede)",
                }}
              >
              <Image
                src={provider.logo}
                alt={provider.name}
                width={60}
                height={20}
                className="w-[75%] h-[20px] md:h-[35px] object-contain"
              />
              <span className="mt-[3px] md:mt-[10px] font-bold uppercase text-[12px] md:text-base">
                {provider.name}
              </span>
            </div>
            );
          })}
        </div>

        {/* Toggle Button - Desktop Only */}
        <label
          htmlFor="toggle-grid"
          className="hidden md:flex items-center space-x-3 justify-center w-full mt-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
          onClick={toggleGrid}
        >
          <div className="grow h-0.5 bg-[#4f2b01]"></div>
          <i
            className={`fa-solid fa-circle-chevron-down text-secondary transition-transform duration-300 ${
              isGridExpanded ? "rotate-180" : ""
            }`}
          ></i>
          <span className="font-bold text-secondary text-2xl" id="toggle-text">
            {isGridExpanded ? "CLOSE" : "OPEN"}
          </span>
          <i
            className={`fa-solid fa-circle-chevron-down text-secondary transition-transform duration-300 ${
              isGridExpanded ? "rotate-180" : ""
            }`}
          ></i>
          <div className="grow h-0.5 bg-[#4f2b01]"></div>
        </label>
      </div>

      {/* Search Input */}
      <div className="relative w-[80%] md:w-[40%] mx-auto mt-4">
        <input
          type="text"
          placeholder="search game..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
        />
        <i className="fa-solid fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-x-2 gap-y-5 font-black mt-4">
        {slotGames.map((game) => (
          <div key={game.id} className="cursor-pointer">
            <Image
              src={game.image}
              alt={game.name}
              width={200}
              height={200}
              className="w-full shadow-md rounded-xl"
            />
            <span className="text-center w-full block">{game.name}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 pb-3">
        <button className="w-8 h-8 flex items-center justify-center bg-[#cecece] text-[#2a313d] rounded-md opacity-50 cursor-not-allowed">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[#faf5a9] text-[#2a313d] rounded-md mx-1">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[#cecece] text-[#2a313d] rounded-md hover:bg-[#faf5a9] hover:text-[#2a313d] mx-1 transition-colors">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[#cecece] text-[#2a313d] rounded-md hover:bg-[#faf5a9] hover:text-[#2a313d] mx-1 transition-colors">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[#cecece] text-[#2a313d] rounded-md hover:bg-[#faf5a9] hover:text-[#2a313d] mx-1 transition-colors">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

