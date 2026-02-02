"use client";

import { useState, Fragment } from "react";
import Image from "next/image";

interface NoticeRow {
  id: number;
  title: string;
  date: string;
  expanded: boolean;
}

export default function Notice() {
  const [notices, setNotices] = useState<NoticeRow[]>([
    { id: 1, title: "Welcome to ToTo Club", date: "2025-8-3 21:42:40", expanded: false },
    { id: 2, title: "Welcome to ToTo Club", date: "2025-8-3 21:42:40", expanded: false },
    { id: 3, title: "Welcome to ToTo Club", date: "2025-8-3 21:42:40", expanded: false },
    { id: 4, title: "Welcome to ToTo Club", date: "2025-8-3 21:42:40", expanded: false },
    { id: 5, title: "Welcome to ToTo Club", date: "2025-8-3 21:42:40", expanded: false },
  ]);

  const toggleNotice = (id: number) => {
    setNotices(notices.map(notice => 
      notice.id === id ? { ...notice, expanded: !notice.expanded } : notice
    ));
  };

  return (
    <div className="w-full h-full md:px-10 flex flex-col pt-4 md:pt-6">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">NOTICE</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>


      {/* Content */}
      <div className="md:bg-white md:text-black md:shadow-lg md:rounded-lg md:mb-6 md:p-6 shrink-0">
        {/* Table */}
        <div className="overflow-x-auto mb-4 mt-2">
          <table className="min-w-full bg-gray-100 text-xs md:text-sm">
            <thead>
              <tr>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Number</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Title</th>
                <th className="p-2 md:p-3 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">Date</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <Fragment key={notice.id}>
                  <tr
                    onClick={() => toggleNotice(notice.id)}
                    className="hover:bg-[#fffed5]/30 cursor-pointer"
                  >
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{notice.id}</td>
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{notice.title}</td>
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{notice.date}</td>
                  </tr>
                  {notice.expanded && (
                    <tr key={`${notice.id}-detail`}>
                      <td colSpan={3} className="bg-gray-100 p-0">
                        <div className="p-3 md:p-4 border border-[#ffe600] bg-white">
                          <h2 className="text-lg md:text-xl mb-2 font-bold">Welcome to ToTo Club</h2>
                          <p className="text-sm md:text-base mb-2">Welcome to ToTo Club,</p>
                          <div className="flex justify-center my-4">
                            <Image
                              src="/images/main/model-bg1.png"
                              alt="Notice Image"
                              width={300}
                              height={200}
                              className="w-[300px] max-w-full h-auto mx-auto"
                            />
                          </div>
                          <p className="text-sm md:text-base mb-1">we are glad to have you here.</p>
                          <p className="text-sm md:text-base mb-1">We will always provide you with the best service possible.</p>
                          <p className="text-sm md:text-base mb-1">If you have any questions,</p>
                          <p className="text-sm md:text-base">please feel free to contact us.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 mb-3 gap-1 pb-3">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] transition-colors hover:bg-[#faf5a9] opacity-50 cursor-not-allowed">
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#faf5a9] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#cecece] text-[#2a313d] cursor-pointer transition-colors hover:bg-[#faf5a9]">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

