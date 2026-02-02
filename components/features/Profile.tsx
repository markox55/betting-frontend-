"use client";

import Image from "next/image";

interface ProfileProps {
  onClose?: () => void;
}

export default function Profile({ onClose }: ProfileProps) {
  return (
    <div className="w-full h-full md:px-10 pt-4 md:pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">PROFILE</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Profile Form */}
      <div className="bg-white md:p-6 text-black shadow-lg rounded-lg mb-6 flex-shrink-0">
        <div className="bg-gray-200 rounded-lg mt-2 md:mt-4 font-bold lg:p-4">
          {/* Level Progress */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block max-w-[60px] md:max-w-[80px]">
              <Image
                src="/images/level/lv12.png"
                alt="Level 12"
                width={100}
                height={100}
                className="w-full"
              />
            </label>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-yellow-500 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* ID */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">ID:</label>
            <input
              type="text"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              placeholder="2546"
              disabled
            />
          </div>

          {/* Nickname */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Nickname:</label>
            <input
              type="text"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              placeholder="Jack Son"
              disabled
            />
          </div>

          {/* Bank */}
          <div className="p-2 md:p-3 border-b border-gray-600/60 ">
            <label className="inline-block min-w-[100px] md:min-w-[150px] text-sm md:text-base">Bank:</label>
            <select defaultValue="CK" className="w-full md:w-auto flex-1 md:flex-initial px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base">
              <option value="SB">SB</option>
              <option value="CK">CK</option>
              <option value="CN">CN</option>
            </select>
          </div>

          {/* Holder Name */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Holder Name:</label>
            <input
              type="text"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              placeholder="Jack Son"
              disabled
            />
          </div>

          {/* Account Number */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Account Number:</label>
            <input
              type="text"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              placeholder="200 500 785 1254"
              disabled
            />
          </div>

          {/* Phone */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Phone:</label>
            <input
              type="text"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
              placeholder="784 48765"
              disabled
            />
          </div>

          {/* Current Password */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Current password:</label>
            <input
              type="password"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* New Password */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">New password:</label>
            <input
              type="password"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* Password2 */}
          <div className="p-2 md:p-3 border-b border-gray-600/60">
            <label className="inline-block min-w-[100px] md:min-w-[150px] mb-2 text-sm md:text-base">Password2:</label>
            <input
              type="password"
              className="w-full md:w-auto px-3 md:px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none text-sm md:text-base"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4 pb-3">
          <button
            type="submit"
            className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-2 px-4 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
          >
            Submit
          </button>
          <button
            type="button"
            className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-2 px-4 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

