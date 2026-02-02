"use client";

import Image from "next/image";

interface CasinoGame {
  id: string;
  name: string;
  logo: string;
  wrapper: string;
}

const casinoGames: CasinoGame[] = [
  { id: "7mojos", name: "7mojos", logo: "/images/casino/logo/7mojos.png", wrapper: "/images/casino/wrapper/7mojos.png" },
  { id: "ag", name: "ag", logo: "/images/casino/logo/ag.png", wrapper: "/images/casino/wrapper/ag.png" },
  { id: "allbet", name: "allbet", logo: "/images/casino/logo/allbet.png", wrapper: "/images/casino/wrapper/allbet.png" },
  { id: "betgames", name: "betgames", logo: "/images/casino/logo/betgames.png", wrapper: "/images/casino/wrapper/betgames.png" },
  { id: "bota", name: "bota", logo: "/images/casino/logo/bota.png", wrapper: "/images/casino/wrapper/bota.png" },
  { id: "dowin", name: "dowin", logo: "/images/casino/logo/dowin.png", wrapper: "/images/casino/wrapper/dowin.png" },
  { id: "dreamgaming", name: "dream", logo: "/images/casino/logo/dreamgaming.png", wrapper: "/images/casino/wrapper/dreamgaming.png" },
  { id: "evolution", name: "evolution", logo: "/images/casino/logo/evolution.png", wrapper: "/images/casino/wrapper/evolution.png" },
  { id: "ezugi", name: "ezugi", logo: "/images/casino/logo/ezugi.png", wrapper: "/images/casino/wrapper/ezugi.png" },
  { id: "hilton", name: "hilton", logo: "/images/casino/logo/hilton.png", wrapper: "/images/casino/wrapper/hilton.png" },
  { id: "onetouch", name: "onetouch", logo: "/images/casino/logo/onetouch.png", wrapper: "/images/casino/wrapper/onetouch.png" },
  { id: "playtech", name: "playtech", logo: "/images/casino/logo/playtech.png", wrapper: "/images/casino/wrapper/playtech.png" },
  { id: "alg", name: "alg", logo: "/images/casino/logo/alg.png", wrapper: "/images/casino/wrapper/alg.png" },
  { id: "pragmatic", name: "pragmatic", logo: "/images/casino/logo/pragmatic.png", wrapper: "/images/casino/wrapper/pragmatic.png" },
  { id: "sexy", name: "sexy", logo: "/images/casino/logo/sexy.png", wrapper: "/images/casino/wrapper/sexy.png" },
  { id: "skywind", name: "skywind", logo: "/images/casino/logo/skywind.png", wrapper: "/images/casino/wrapper/skywind.png" },
  { id: "taishan", name: "taishan", logo: "/images/casino/logo/taishan.png", wrapper: "/images/casino/wrapper/taishan.png" },
  { id: "vivo", name: "vivo", logo: "/images/casino/logo/vivo.png", wrapper: "/images/casino/wrapper/vivo.png" },
  { id: "wm", name: "wm", logo: "/images/casino/logo/wm.png", wrapper: "/images/casino/wrapper/wm.png" },
];

export default function Casino() {
  return (
    <div className="bg-[#f3f4f6] max-w-[1440px] mx-auto px-1 pt-14 md:pt-[114px]">
      {/* Header Section */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">CASINO</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col md:flex-row z-1000 mb-5">
        {/* Left Image Section */}
        <div className="w-full md:w-[40%] md:mt-4">
          <div className="relative w-full">
            <Image
              src="/images/main/main-casino.png"
              alt="Casino"
              width={600}
              height={400}
              className="w-full"
              priority
            />
          </div>
        </div>

        {/* Right Games Grid Section */}
        <div className="w-full md:w-[60%] md:h-[calc(100vh-50px)] md:overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-x-hidden">
          {casinoGames.map((game) => (
            <div
              key={game.id}
              className="h-[200px] md:h-[181px] rounded-[10px] shadow-md relative cursor-pointer transition-all duration-400 min-w-[30px] mt-[30px] md:mt-[50px] shrink-0 border border-color1 group"
              style={{
                background: "linear-gradient(170deg, #4f2b01 0%, #ffe600 100%)",
              }}
            >
              {/* Logo */}
              <div className="absolute h-[20%] max-w-[50%] min-w-[10px] md:min-w-[40%] left-[3%] top-[10%] z-[3]">
                <Image
                  src={game.logo}
                  alt={`${game.name} logo`}
                  width={100}
                  height={45}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Model/Wrapper Image */}
              <div className="w-auto md:w-[70%] transition-all duration-300 ease-out absolute right-[-3%] bottom-0 max-h-[230px] min-w-[10px]">
                <Image
                  src={game.wrapper}
                  alt={`${game.name} wrapper`}
                  width={200}
                  height={220}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Game Name Text */}
              <div className="absolute z-[2] bottom-[10%] left-[6%] uppercase font-bold text-[#f0e6ff]">
                {game.name}
              </div>

              {/* Play Button - appears on hover */}
              <div className="absolute bg-[#ff000045] rounded-[5px] z-[5] left-1/2 top-1/2 -translate-x-1/2 translate-y-0 transition-all duration-500 opacity-0 flex items-center text-white py-[6px] px-2 border border-color1 justify-center group-hover:opacity-100 group-hover:-translate-y-1/2 text-[13px] font-bold">
                Play
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

