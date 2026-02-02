"use client";

import Image from "next/image";

interface NavbarProps {
  onPageChange?: (page: string) => void;
}

export default function Navbar({ onPageChange }: NavbarProps) {
  const handlePageClick = (page: string) => {
    onPageChange?.(page);
  };

  const menuItems = [
    { page: "abroad", icon: "fa-football", label: "ABROAD" },
    { page: "domestic", icon: "fa-basketball", label: "DOMESTIC" },
    { page: "live", icon: "fa-volleyball", label: "LIVE" },
    { page: "special", icon: "fa-baseball", label: "SPECIAL" },
    { page: "casino", icon: "fa-dice", label: "CASINO" },
    { page: "slot", icon: "fa-crown", label: "SLOT" },
    { page: "mini", icon: "fa-gamepad", label: "MINI" },
    { page: "history", icon: "fa-history", label: "HISTORY" },
    { page: "result", icon: "fa-trophy", label: "RESULT" },
  ];

  return (
    <nav className="game-nav hidden md:flex justify-between shadow-md h-14 fixed top-14 left-0 right-0 z-30 bg-white">
      <div className="head-logo ml-10">
        <a href="/" className="block">
          <Image
            src="/images/main/logo.png"
            alt="ToTo Club Logo"
            width={200}
            height={100}
            className="h-11 mt-1 mb-1"
          />
        </a>
      </div>

      <div className="w-full px-6 h-full flex">
        <ul className="flex overflow-x-auto mt-1 items-center font-bold justify-center w-full gap-10">
          {menuItems.map((item) => (
            <li
              key={item.page}
              className="cursor-pointer leading-8 hover:text-primary hover:border-b-2 hover:border-primary transition-all text-lg"
              onClick={() => handlePageClick(item.page)}
            >
              <i className={`fa ${item.icon} mr-2 text-lg`}></i>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

