"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LeftMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPageChange?: (page: string) => void;
  onOpenLogin?: () => void;
  onOpenRegister?: () => void;
}

export default function LeftMenu({ isOpen, onClose, onPageChange, onOpenLogin, onOpenRegister }: LeftMenuProps) {
  const handlePageClick = (page: string) => {
    onPageChange?.(page);
    onClose(); // Close mobile drawer when page is clicked
  };

  const handleLoginClick = () => {
    onOpenLogin?.();
  };

  const handleRegisterClick = () => {
    onOpenRegister?.();
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={`md:hidden drawer fixed top-0 left-0 h-full w-full bg-white z-50 shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3 border-b">
          <div className="flex justify-between items-center h-13">

              <img
                src="/images/main/logo.png"
               alt="ToTo Club Logo"
                className="h-11 w-auto"
              />

            <button
              id="close-drawer"
              className="text-yellow-900 focus:outline-none bg-yellow-300 p-1 rounded-full w-11 h-12 hover:bg-yellow-300 transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <i className="fa fa-times text-2xl"></i>
            </button>
          </div>
        </div>

        <div className="p-2">
          {/* Welcome Section */}
          <div
            className="h-44 rounded-xl pt-10 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/main/bg-drawer.png')" }}
          >
            <h2 className="text-2xl font-bold text-yellow-900 w-full text-center">
              Welcome to ToTo Club!
            </h2>
            <div className="flex justify-center items-center text-lg font-black mb-3">
              <span className="mr-2">Jonny</span>
              <Image
                src="/images/level/lv5.png"
                alt="Level 5"
                width={100}
                height={40}
                className="w-12 mr-1 object-contain"
              />
              <span className="mr-3">
                <i className="fa fa-coins mr-1"></i>2,000
              </span>
              <span className="mr-5">
                <i className="fa fa-won-sign"></i>8,000
              </span>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={handleLoginClick}
                className="text-md relative md:text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-2.5 rounded-lg before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-br before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600]"
              >
                <i className="fa fa-right-to-bracket ml-0"></i>LOGIN
              </button>
              <button
                onClick={handleRegisterClick}
                className="text-md relative p-2 md:text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-2.5 rounded-lg before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-br before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600]"
              >
                <i className="fa fa-user-plus mr-2"></i>REGISTER
              </button>
              <button className="text-md relative p-2 md:text-base font-bold cursor-pointer bg-white border-none z-[1] transition-all duration-300 ease-in-out text-center uppercase px-3 py-2.5 rounded-lg before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-br before:from-[#fffab8] before:via-[#faf5a9] before:to-[#ffe600] before:-z-[1] before:transition-all before:duration-300 before:ease-in-out before:[mask-composite:exclude] before:[webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[webkit-mask-composite:xor] hover:before:bg-gradient-to-t hover:before:from-[#fffab8] hover:before:via-[#faf5a9] hover:before:to-[#ffe600] modal-trigger">
                <i className="fa fa-comments mr-2"></i>CONSULT
              </button>
            </div>
          </div>

          {/* Game Menu Grid */}
          <div className="grid grid-cols-4 mx-auto text-base font-bold border-b border-gray-200 mb-5">
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("abroad")}
            >
              <i className="fa fa-football mr-1 text-3xl mb-1"></i>
              <span className="text-center">ABROAD</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("domestic")}
            >
              <i className="fa fa-basketball mr-1 text-3xl mb-1"></i>
              <span className="text-center">DOMESTIC</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("live")}
            >
              <i className="fa fa-volleyball mr-1 text-3xl mb-1"></i>
              <span className="text-center">LIVE</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("special")}
            >
              <i className="fa fa-baseball mr-1 text-3xl mb-1"></i>
              <span className="text-center">SPECIAL</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("casino")}
            >
              <i className="fa fa-dice mr-1 text-3xl mb-1"></i>
              <span className="text-center">CASINO</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("slot")}
            >
              <i className="fa fa-crown mr-1 text-3xl mb-1"></i>
              <span className="text-center">SLOT</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("mini")}
            >
              <i className="fa fa-gamepad mr-1 text-3xl mb-1"></i>
              <span className="text-center">MINI</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("history")}
            >
              <i className="fa fa-history mr-1 text-3xl mb-1"></i>
              <span className="text-center">HISTORY</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("result")}
            >
              <i className="fa fa-trophy mr-1 text-3xl mb-1"></i>
              <span className="text-center">RESULT</span>
            </button>
          </div>

          {/* Account Menu Grid */}
          <div className="grid grid-cols-4 mx-auto text-base font-bold border-b border-gray-200 mb-5">
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("deposit")}
            >
              <i className="fa fa-money-bill mr-1 text-3xl mb-1"></i>
              <span className="text-center">DEPOSIT</span>
            </button>
            <button
              className="flex flex-col items-center justify-center py-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("withdraw")}
            >
              <i className="fa fa-hand-holding-usd mr-1 text-3xl mb-1"></i>
              <span className="text-[8px] -tracking-[0.1em] leading-none">WITHDRAW</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("point")}
            >
              <i className="fa fa-coins mr-1 text-3xl mb-1"></i>
              <span className="text-center">POINT</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("notice")}
            >
              <i className="fa fa-bell mr-1 text-3xl mb-1"></i>
              <span className="text-center">NOTICE</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("event")}
            >
              <i className="fa fa-gift mr-1 text-3xl mb-1"></i>
              <span className="text-center">EVENT</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("qna")}
            >
              <i className="fa fa-circle-question mr-1 text-3xl mb-1"></i>
              <span className="text-center">QNA</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("letter")}
            >
              <i className="fa fa-envelope mr-1 text-3xl mb-1"></i>
              <span className="text-center">LETTER</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("attendance")}
            >
              <i className="fa fa-calendar-check mr-1 text-3xl mb-1"></i>
              <span className="text-center">CHECKIN</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageClick("profile")}
            >
              <i className="fa fa-user mr-1 text-3xl mb-1"></i>
              <span className="text-center">PROFILE</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors">
              <i className="fa fa-handshake mr-1 text-3xl mb-1"></i>
              <span className="text-center">PARTNER</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-4 mx-auto text-base font-bold border-b border-gray-200">
            <button className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors">
              <i className="fa-brands fa-telegram mr-1 text-3xl mb-1"></i>
              <span className="text-center">TELEGRAM</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 transition-colors">
              <i className="fa-brands fa-kakao-talk mr-1 text-3xl mb-1"></i>
              <span className="text-center">KAKAO</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Left Menu */}
      <div className="fixed top-28 left-0 shadow-lg p-2 z-50 hidden md:block bg-yellow-100/5">

        <div className="flex flex-col gap-2 text-secondary bg-gray-300 px-1 py-1.5 rounded-lg font-black">
       
          <button
            className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("profile")}
          >
            <i className="fa fa-user text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">PROFILE</span>
          </button>

          <button
            className="flex flex-col items-center justify-center w-auto  h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("deposit")}
          >
            <i className="fa fa-money-bill text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">DESPOSIT</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-auto  h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("withdraw")}
          >
            <i className="fa fa-hand-holding-usd text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">WITHDRAW</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("point")}
          >
            <i className="fa fa-coins text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">POINT</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("attendance")}
          >
            <i className="fa fa-calendar-check text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">CHECKIN</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("event")}
          >
            <i className="fa fa-gift text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">EVENT</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]"
            onClick={() => handlePageClick("notice")}
          >
            <i className="fa fa-bell text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">NOTICE</span>
          </button>
        </div>

        <div className="w-full h-px bg-gray-200 my-4"></div>

        <div className="flex flex-col gap-2 text-secondary bg-gray-300 px-1 py-1.5 rounded-lg font-black">
          <button className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]">
            <i className="fa-brands fa-telegram text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">TELEGRAM</span>
          </button>
            <button className="flex flex-col items-center justify-center w-auto h-14 rounded-lg transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-b from-white via-gray-200 to-white border border-gray-300 outline-none hover:bg-[#fffab8]">
            <i className="fa-brands fa-kakao-talk text-xl"></i>
            <span className="text-xs -tracking-[0.1em] leading-none mt-1">KAKAO</span>
          </button>
        </div>
      </div>
    </>
  );
}

