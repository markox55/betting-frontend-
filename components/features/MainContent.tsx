"use client";

import Profile from "./Profile";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Point from "./Point";
import Attendance from "./Attendance";
import Event from "./Event";
import Notice from "./Notice";
import Letter from "./Letter";
import FirstPage from "./FirstPage";
import Abroad from "./Abroad";
import Domestic from "./Domestic";
import Live from "./Live";
import Special from "./Special";
import Casino from "./Casino";
import Slot from "./Slot";
import Mini from "./Mini";
import History from "./History";
import Result from "./Result";
import QNA from "./QNA";

interface MainContentProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export default function MainContent({ currentPage, onPageChange }: MainContentProps) {
  const renderContent = () => {
    switch (currentPage) {
      case "abroad":
        return <Abroad />;
      case "domestic":
        return <Domestic />;
      case "live":
        return <Live />;
      case "profile":
        return <Profile />;
      case "deposit":
        return <Deposit />;
      case "withdraw":
        return <Withdraw />;
      case "point":
        return <Point />;
      case "attendance":
        return <Attendance />;
      case "event":
        return <Event />;
      case "notice":
        return <Notice />;
      case "letter":
        return <Letter />;
      case "special":
        return <Special />;
      case "casino":
        return <Casino />;
      case "slot":
        return <Slot />;
      case "mini":
        return <Mini />;
      case "history":
        return <History />;
      case "result":
        return <Result />;
      case "qna":
        return <QNA />;
      case "home":
      default:
        return <FirstPage onPageChange={onPageChange} />;
    }
  };

  // Abroad, Domestic, Live, Special, Casino, Slot, and Mini pages need full layout without the MainContent wrapper padding
  if (currentPage === "abroad" || currentPage === "domestic" || currentPage === "live" || currentPage === "special" || currentPage === "casino" || currentPage === "slot" || currentPage === "mini") {
    return renderContent();
  }

  return (
    <main className="w-full pt-14 md:pt-24 pb-20 md:pb-0 px-0 md:pl-24" id="content-container">
      <div className="flex flex-col mx-auto">
        <section className="flex-1 main-content">
          <div className="w-full">
            <div className="px-1 md:px-0">
              {renderContent()}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

