"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onOpenLogin }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    userId: "",
    nickname: "",
    password: "",
    password2: "",
    bank: "CK",
    accountNumber: "",
    holderName: "",
    phone: "",
    birthday: "",
    securityPwd: "",
    referral: "",
    usdtAddress: "",
    favouriteItems: {
      casino: false,
      slot: false,
      mini: false,
    },
    agreement: false,
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith("favourite")) {
        const item = name.split("-")[1];
        setFormData((prev) => ({
          ...prev,
          favouriteItems: {
            ...prev.favouriteItems,
            [item]: checked,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleLoginClick = () => {
    onClose();
    onOpenLogin();
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
        <div className="p-6 max-h-[calc(90%)] overflow-y-auto">
          <div className="grid grid-cols-1 gap-4">
            {/* First Column */}
            <div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">UserID</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md flex-1 focus:border-[#ffe600] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    className="px-5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-lg w-[80px] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)] flex items-center justify-center"
                  >
                    Check
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Nickname</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md flex-1 focus:border-[#ffe600] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    className="px-5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-lg w-[80px] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)] flex items-center justify-center"
                  >
                    Check
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Password2</label>
                <input
                  type="password"
                  name="password2"
                  value={formData.password2}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Saving Bank</label>
                <div className="flex gap-2">
                  <select
                    name="bank"
                    value={formData.bank}
                    onChange={handleInputChange}
                    className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-[100px] focus:border-[#ffe600] focus:outline-none transition-colors"
                  >
                    <option value="SB">SB</option>
                    <option value="CK">CK</option>
                    <option value="CN">CN</option>
                  </select>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md flex-1 focus:border-[#ffe600] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Holder Name</label>
                <input
                  type="text"
                  name="holderName"
                  value={formData.holderName}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Second Column */}
            <div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Phone</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md flex-1 focus:border-[#ffe600] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    className="px-5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-lg w-[90px] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)] flex items-center justify-center"
                  >
                    SendSMS
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Security Pwd</label>
                <input
                  type="text"
                  name="securityPwd"
                  value={formData.securityPwd}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Referral</label>
                <input
                  type="text"
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">Favourite items</label>
                <div className="mt-2 h-[40px] flex items-center flex-wrap gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="favourite-casino"
                      checked={formData.favouriteItems.casino}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-[#ffe600] bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-[#ffe600]"
                    />
                    <span className="ml-2">Casino</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="favourite-slot"
                      checked={formData.favouriteItems.slot}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-[#ffe600] bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-[#ffe600]"
                    />
                    <span className="ml-2">Slot</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="favourite-mini"
                      checked={formData.favouriteItems.mini}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-[#ffe600] bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-[#ffe600]"
                    />
                    <span className="ml-2">Mini</span>
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-secondary mb-0.5 text-sm font-bold">USDT Address</label>
                <input
                  type="text"
                  name="usdtAddress"
                  value={formData.usdtAddress}
                  onChange={handleInputChange}
                  className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Agreement checkbox */}
          <div className="my-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
                className="h-5 w-5 text-[#ffe600] bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-[#ffe600]"
              />
              <span className="ml-2">
                I have read the <a href="#" className="hover:underline">agreement</a>
              </span>
            </label>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-1 mt-4">
            <button
              type="button"
              className="px-5 py-2.5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-md hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase rounded-md hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

