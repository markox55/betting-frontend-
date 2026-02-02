"use client";

import { Fragment, useState } from "react";
import Image from "next/image";

interface EventRow {
  id: number;
  title: string;
  date: string;
  expanded: boolean;
}

export default function Event() {
  const [events, setEvents] = useState<EventRow[]>([
    { id: 1, title: "20% off on recharges for New Year activities", date: "2025-8-3 21:42:40", expanded: false },
    { id: 2, title: "20% off on recharges for New Year activities", date: "2025-8-3 21:42:40", expanded: false },
    { id: 3, title: "20% off on recharges for New Year activities", date: "2025-8-3 21:42:40", expanded: false },
    { id: 4, title: "20% off on recharges for New Year activities", date: "2025-8-3 21:42:40", expanded: false },
    { id: 5, title: "20% off on recharges for New Year activities", date: "2025-8-3 21:42:40", expanded: false },
  ]);

  const toggleEvent = (id: number) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, expanded: !event.expanded } : event
    ));
  };

  return (
    <div className="w-full h-full md:px-10 pt-4 md:pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 w-full p-2 z-1">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">EVENT</h2>
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
              {events.map((event) => (
                <Fragment key={event.id}>
                  <tr
                    
                    onClick={() => toggleEvent(event.id)}
                    className="hover:bg-[#fffed5]/30 cursor-pointer"
                  >
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{event.id}</td>
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{event.title}</td>
                    <td className="p-2 md:p-3 text-center border-b border-gray-600/50">{event.date}</td>
                  </tr>
                  {event.expanded && (
                    <tr key={`${event.id}-detail`}>
                      <td colSpan={3} className="bg-gray-100 p-0">
                        <div className="p-3 md:p-4 border border-[#ffe600] bg-white">
                          <h2 className="text-lg md:text-xl mb-2 font-bold">Event Title</h2>
                          <p className="text-sm md:text-base mb-2">Event Date: 2025-12-31</p>
                          <p className="text-sm md:text-base mb-4">Recharge at 20% off</p>
                          <div className="flex justify-center">
                            <Image
                              src="/images/main/bg-drawer.png"
                              alt="Event Image"
                              width={400}
                              height={200}
                              className="mx-auto max-w-full h-auto"
                            />
                          </div>
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

