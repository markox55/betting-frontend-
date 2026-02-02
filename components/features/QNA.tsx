"use client";

import { useState, Fragment } from "react";

interface QNARecord {
  id: number;
  title: string;
  date: string;
  answer: string;
  expanded: boolean;
}

export default function QNA() {
  const [qnaRecords, setQnaRecords] = useState<QNARecord[]>([
    {
      id: 1,
      title: "How to recharge",
      date: "2025-8-3 21:42:40",
      answer: "Answer : You can click the deposit button to recharge.<br>Thank you",
      expanded: false,
    },
    {
      id: 2,
      title: "How to recharge",
      date: "2025-8-3 21:42:40",
      answer: "Answer : You can click the deposit button to recharge.<br>Thank you",
      expanded: false,
    },
    {
      id: 3,
      title: "How to recharge",
      date: "2025-8-3 21:42:40",
      answer: "Answer : You can click the deposit button to recharge.<br>Thank you",
      expanded: false,
    },
  ]);

  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const toggleQNA = (id: number) => {
    setQnaRecords(
      qnaRecords.map((record) =>
        record.id === id ? { ...record, expanded: !record.expanded } : record
      )
    );
  };

  const handleDelete = (id: number) => {
    setQnaRecords(qnaRecords.filter((record) => record.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submit:", { formTitle, formDescription });
    // Reset form
    setFormTitle("");
    setFormDescription("");
  };

  return (
    <div className="bg-[#f3f4f6] max-w-[1440px] mx-auto px-1 pt-2 md:pt-[20px]">
      {/* Header Section */}
      <div className="flex items-center space-x-3 w-full p-4">
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <h2 className="text-2xl font-bold text-[#4f2b01]">QNA</h2>
        <div className="w-3 h-3 bg-[#eed600]"></div>
        <div className="grow h-1 bg-[#eed600]"></div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white md:p-6 text-black shadow-lg rounded-lg">
        {/* Table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-[0.75rem] mt-10">
            <thead>
              <tr>
                <th className="p-2 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">
                  Number
                </th>
                <th className="p-2 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">
                  Title
                </th>
                <th className="p-2 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">
                  Date
                </th>
                <th className="p-2 bg-[#fffab8] text-center font-semibold text-[#4f2b01] border-b border-[#4f2b01]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {qnaRecords.map((record) => (
                <Fragment key={record.id}>
                  <tr className="hover:bg-[rgba(255,254,213,0.3)]">
                    <td className="p-2 text-center border-b border-gray-600/50">
                      {record.id}
                    </td>
                    <td
                      className="p-2 text-center border-b border-gray-600/50 cursor-pointer"
                      onClick={() => toggleQNA(record.id)}
                    >
                      {record.title}
                    </td>
                    <td className="p-2 text-center border-b border-gray-600/50">
                      {record.date}
                    </td>
                    <td className="p-2 text-center border-b border-gray-600/50">
                      <button
                        onClick={() => handleDelete(record.id)}
                        className="text-[#f87171] p-1 cursor-pointer transition-colors duration-150 hover:text-[#ef4444]"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  {record.expanded && (
                    <tr key={`${record.id}-detail`}>
                      <td colSpan={4} className="bg-gray-100 p-0">
                        <div className="p-4 border border-[#faf5a9] bg-white">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: record.answer,
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form Section */}
        <div className="bg-gray-200 rounded-lg p-1 lg:p-4 mt-4 font-bold">
          <form onSubmit={handleSubmit}>
            <div className="p-3">
              <label className="inline-block min-w-[150px] mb-2">Title:</label>
              <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md w-full focus:border-[#ffe600] focus:outline-none"
              />
            </div>
            <div className="p-3">
              <label className="inline-block min-w-[150px] mb-2">
                Description:
              </label>
              <textarea
                rows={4}
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full px-4 py-1.5 bg-gray-100 border border-[#faf5a9] rounded-md focus:border-[#ffe600] focus:outline-none"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4 pb-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-4 rounded-full border-none bg-[#ffe600] text-[#4f2b01] text-[15px] font-bold cursor-pointer transition-all duration-300 uppercase hover:text-white hover:shadow-[0_4px_4px_rgba(47,36,0,0.2)]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

