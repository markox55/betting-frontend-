"use client";

import { useState, useEffect } from "react";

export default function Attendance() {
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [checkInCount, setCheckInCount] = useState(0);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      if (currentYear === 2025) return;
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      if (currentYear === 2026) return;
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const days = [];

    for (let i = 0; i < totalCells; i++) {
      const day = i - firstDay + 1;
      const isCurrentMonth = day >= 1 && day <= daysInMonth;

      days.push(
        <div
          key={i}
          className={`h-20 md:h-24 flex items-end justify-center text-sm border border-gray-200 p-1 ${
            i % 7 !== 0 ? "border-l-0" : ""
          } ${
            isCurrentMonth ? "text-gray-800 bg-white" : "bg-gray-50 text-gray-200"
          }`}
        >
          {isCurrentMonth ? day : ""}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full h-full md:px-10 pt-4 md:pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">CHECKIN</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Content */}
      <div className="md:bg-white md:text-black md:shadow-lg md:rounded-lg md:mb-6 md:p-6 shrink-0">
        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 px-2 md:px-4 gap-4">
          <select
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            className="px-4 md:px-6 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={goToPrevMonth}
              className="p-2 md:p-4 rounded-full hover:bg-gray-100 transition-colors text-xl md:text-2xl"
            >
              <i className="fa-solid fa-chevron-left text-gray-700"></i>
            </button>
            <h2 className="text-sm md:text-base font-bold text-gray-800">
              {months[currentMonth]} {currentYear}
            </h2>
            <button
              onClick={goToNextMonth}
              className="p-2 md:p-4 rounded-full hover:bg-gray-100 transition-colors text-xl md:text-2xl"
            >
              <i className="fa-solid fa-chevron-right text-gray-700"></i>
            </button>
          </div>

          <div>
            <button className="p-1 border-none bg-[#ffe600] text-[#4f2b01] text-sm md:text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out text-center uppercase py-1.5 md:py-2 px-2 md:px-3 rounded-full hover:bg-[#ffe600] hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]">
              Check-in Count: {checkInCount}
            </button>
          </div>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-7 mb-0 px-2 md:px-4">
          {weekdays.map((day) => (
            <div
              key={day}
              className={`text-center text-gray-600 font-bold py-3 md:py-4 text-base md:text-xl border border-gray-200 border-b-0 bg-gray-50 ${
                day !== "Sun" ? "border-l-0" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 px-2 md:px-4">
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
}

