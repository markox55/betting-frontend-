"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
  onMobileMenuClick: () => void;
  onPageChange?: (page: string) => void;
  onOpenLogin?: () => void;
  onOpenRegister?: () => void;
}

export default function Header({ onMobileMenuClick, onPageChange, onOpenLogin, onOpenRegister }: HeaderProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLanguageDropdownOpen, setIsMobileLanguageDropdownOpen] = useState(false);

  const handlePageClick = (page: string) => {
    onPageChange?.(page);
  };

  return (
    <header className="bg-yellow-300 h-14 md:h-14 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 h-full flex items-center justify-between relative">
        {/* Mobile menu button */}
        <button
          id="mobile-menu-button"
          className="md:hidden focus:outline-none p-2"
          onClick={onMobileMenuClick}
          aria-label="Open mobile menu"
        >
          <i className="fa fa-bars text-lg"></i>
        </button>

        {/* Mobile logo */}
        <div className="md:hidden flex justify-center items-center">
          <a href="/" className="">
            <Image
              src="/images/main/logo.png"
              alt="ToTo Club Logo"
              width={40}
              height={40}
              className="h-40 w-auto"
            />
          </a>
        </div>

        {/* Mobile right buttons */}
        <div className="flex justify-between items-center">
          {/* Mobile language selector */}
          <div className="md:hidden relative group rounded-lg mr-0">
            <button
              className="relative p01 text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-2 rounded-lg before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-br before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600] flex items-center"
              onClick={() => setIsMobileLanguageDropdownOpen(!isMobileLanguageDropdownOpen)}
            >
              <Image
                src="/images/main/flag-01.png"
                alt="Language"
                width={28}
                height={20}
                className="w-6 h-4 rounded-sm"
              />
              <i className="fa fa-angle-down text-xs ml-0.5"></i>
            </button>
            {(isMobileLanguageDropdownOpen || false) && (
              <div className="absolute right-0 mt-2 bg-white/80 rounded-lg shadow-lg z-40">
                <button className="flex items-center px-3 py-3 text-base text-yellow-900 hover:bg-yellow-100/80 w-full">
                  <Image
                    src="/images/main/flag-02.png"
                    alt="中文"
                    width={28}
                    height={20}
                    className="w-7 h-5 mt-0.5 mr-2 rounded-sm"
                  />
                </button>
                <button className="flex items-center px-3 py-3 text-base text-yellow-900 hover:bg-yellow-100/80 w-full">
                  <Image
                    src="/images/main/flag-01.png"
                    alt="English"
                    width={28}
                    height={20}
                    className="w-7 h-5 mt-0.5 mr-2 rounded-sm"
                  />
                </button>
                <button className="flex items-center px-3 py-3 text-base text-yellow-900 hover:bg-yellow-100/80 w-full">
                  <Image
                    src="/images/main/flag-03.png"
                    alt="Language"
                    width={28}
                    height={20}
                    className="w-7 h-5 mt-0.5 mr-2 rounded-sm"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Mobile profile button */}
          <div className="md:hidden relative">
            <button
              className="p-1 text-md"
              onClick={() => handlePageClick("profile")}
              aria-label="Profile"
            >
              <i className="fa fa-user"></i>
            </button>
          </div>
        </div>
        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-between w-full items-center text-sm">
          <div className="hidden font-bold ml-16 lg:flex items-center gap-6 ">
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("letter")}
            >
              LETTER
            </button>
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("deposit")}
            >
              DEPOSIT
            </button>
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("withdraw")}
            >
              WITHDRAW
            </button>
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("point")}
            >
              POINT
            </button>
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("notice")}
            >
              NOTICE
            </button>
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("event")}
            >
              EVENT
            </button>
            <button
              className="hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              onClick={() => handlePageClick("qna")}
            >
              QNA
            </button>
          </div>

          <div className="flex items-center justify-end flex-nowrap">
            {/* User info (when logged in) */}
            <div className="flex items-center text-[17px] font-black">
              <span className="mr-1.5">Jonny</span>
              <Image
                src="/images/level/lv5.png"
                alt="Level 5"
                width={80}
                height={80}
                className="w-20 mr-1.5"
              />
              <span className="mr-1.5">
                <i className="fa fa-coins mr-1"></i>2,000
              </span>
              <span className="mr-1.5">
                <i className="fa fa-won-sign"></i>8,000
              </span>
            </div>

            {/* Login/Register buttons */}
            <button
              onClick={onOpenLogin}
              className="relative p-1 text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-1 rounded-lg mr-2 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600]"
            >
              <i className="fa fa-right-to-bracket mr-2"></i>LOGIN
            </button>
            <button
              onClick={onOpenRegister}
              className="relative p-1 text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-1 rounded-lg mr-2 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg  before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600]"
            >
              <i className="fa fa-user-plus mr-2"></i>REGISTER
            </button>
            <button className="relative p-1 text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-1 rounded-lg mr-6 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg  before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600]">
              <i className="fa fa-comments mr-2"></i>CONSULT
            </button>

            {/* Desktop language selector */}
            <div className="relative group rounded-lg">
              <button
                className="relative p-1 text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-5 py rounded-lg before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600] flex items-center"
                onMouseEnter={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                onMouseLeave={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <Image
                  src="/images/main/flag-01.png"
                  alt="English"
                  width={28}
                  height={20}
                  className="w-7 h-5 mr-1 rounded-sm"
                />
                ENGLISH
                <i className="fa fa-angle-down ml-2 text-sm"></i>
              </button>
              {(isLanguageDropdownOpen || false) && (
                <div className="absolute right-0 mt-2 w-36 bg-white/80 rounded-lg shadow-lg z-40">
                  <button className="flex items-center px-5 py-3 text-base text-yellow-900 hover:bg-yellow-100/80 w-full">
                    <Image
                      src="/images/main/flag-02.png"
                      alt="中文"
                      width={28}
                      height={20}
                      className="w-7 h-5 mt-0.5 mr-2 rounded-sm"
                    />
                    中文
                  </button>
                  <button className="flex items-center px-3 py-3 text-base text-yellow-900 hover:bg-yellow-100/80 w-full">
                    <Image
                      src="/images/main/flag-01.png"
                      alt="English"
                      width={28}
                      height={20}
                      className="w-7 h-5 mt-0.5 mr-2 rounded-sm"
                    />
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

