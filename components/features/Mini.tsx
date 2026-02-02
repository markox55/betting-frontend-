"use client";

import Image from "next/image";

interface MiniGame {
  id: string;
  name: string;
  image: string;
}

const miniGames: MiniGame[] = [
  { id: "eos1pb", name: "eos1pb", image: "/images/mini/eos1pb.png" },
  { id: "eos2pb", name: "eos2pb", image: "/images/mini/eos2pb.png" },
  { id: "eos3pb", name: "eos3pb", image: "/images/mini/eos3pb.png" },
  { id: "eos4pb", name: "eos4pb", image: "/images/mini/eos4pb.png" },
  { id: "eos5pb", name: "eos5pb", image: "/images/mini/eos5pb.png" },
  { id: "bepick", name: "bepick", image: "/images/mini/bepick.png" },
  { id: "dhpowerball", name: "dhpowerball", image: "/images/mini/dhpowerball.png" },
  { id: "poverballgame", name: "poverballgame", image: "/images/mini/poverballgame.png" },
  { id: "powerball", name: "powerball", image: "/images/mini/powerball.png" },
];

export default function Mini() {
  return (
    <div className="bg-[#f3f4f6] max-w-[1440px] mx-auto px-1 pt-14 md:pt-[114px]">
      {/* Header Section */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">MINI</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="w-full md:w-[40%] md:mt-4">
          <div className="relative w-full">
            <Image
              src="/images/main/main-mini.png"
              alt="Mini"
              width={600}
              height={400}
              className="w-full"
              priority
            />
          </div>
        </div>

        {/* Right Games Grid Section */}
        <div className="w-full md:w-[60%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {miniGames.map((game) => (
            <div key={game.id} className="rounded-2xl overflow-hidden cursor-pointer group">
              <Image
                src={game.image}
                alt={game.name}
                width={300}
                height={300}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

