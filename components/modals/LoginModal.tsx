"use client";

import Image from "next/image";
import { useEffect } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenRegister }: LoginModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRegisterClick = () => {
    onClose();
    onOpenRegister();
  };

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-secondary"
      onClick={handleOverlayClick}
    >
      {/* Desktop background image */}
      <div className="hidden md:block h-full h-[800px] max-h-[80%] rounded-l-xl overflow-hidden relative">
        <Image
          src="/images/main/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="w-[65%] absolute top-[25%] left-1/2 -translate-x-1/2 z-10"
        />
        <Image
          src="/images/main/model-bg1.png"
          alt="Background"
          width={400}
          height={800}
          className="h-full object-cover"
        />
      </div>

      {/* Modal container */}
      <div
        className="bg-white rounded-xl md:rounded-l-none shadow-xl w-full h-[800px] max-h-[80%] max-w-md transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-2 border-b border-[#f7f8c2] flex justify-between items-center">
          <Image
            src="/images/main/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="w-[40%]"
          />
          <button
            className="hover:opacity-60 transition-opacity"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="fa fa-times text-2xl"></i>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-3">
          <div className="mb-2">
            <label className="block text-secondary mb-0.5 text-sm font-bold">UserID</label>
            <input
              type="text"
              className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
            />
          </div>
          <div className="mb-6">
            <label className="block text-secondary mb-0.5 text-sm font-bold">Password</label>
            <input
              type="password"
              className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-1 mt-4">
            <button
              type="submit"
              className="px-5 py-2.5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-md hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
            >
              Login
            </button>
            <button
              type="button"
              className="px-5 py-2.5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-md hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
          <div className="grid grid-cols-2 gap-1 mt-4">
            <div className="rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/images/main/link-telegram.png"
                alt="Telegram"
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="/images/main/link-kakao.png"
                alt="Kakao"
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

