"use client";

interface MobileBottomNavProps {
  onPageChange?: (page: string) => void;
  currentPage?: string;
}

export default function MobileBottomNav({
  onPageChange,
  currentPage,
}: MobileBottomNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, page?: string) => {
    e.preventDefault();
    if (page && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 py-2 bg-white border-t border-gray-200 z-10 rounded-t-xl">
      <div className="flex">
        <a
          href="#"
          onClick={(e) => handleClick(e, "deposit")}
          className={`flex flex-col flex-1 items-center px-1 pt-0.5 text-gray-500 hover:text-primary transition-colors ${
            currentPage === "deposit" ? "text-primary" : ""
          }`}
        >
          <i className="fa fa-money-bill text-lg"></i>
          <span className="text-xs">Deposit</span>
        </a>
        <a
          href="#"
          onClick={(e) => handleClick(e, "withdraw")}
          className={`flex flex-col flex-1 items-center px-1 pt-0.5 text-gray-500 hover:text-primary transition-colors ${
            currentPage === "withdraw" ? "text-primary" : ""
          }`}
        >
          <i className="fa fa-hand-holding-usd text-lg"></i>
          <span className="text-xs">Withdraw</span>
        </a>
        <a
          href="#"
          onClick={(e) => handleClick(e, "home")}
          className={`flex flex-col flex-1 items-center px-1 pt-0.5 text-gray-500 hover:text-primary transition-colors ${
            currentPage === "home" ? "text-primary" : ""
          }`}
        >
          <i className="fa fa-home text-xl"></i>
          <span className="text-xs">Home</span>
        </a>
        <a
          href="#"
          onClick={(e) => handleClick(e, "event")}
          className={`flex flex-col flex-1 items-center px-1 pt-0.5 text-gray-500 hover:text-primary transition-colors ${
            currentPage === "event" ? "text-primary" : ""
          }`}
        >
          <i className="fa fa-gift text-lg"></i>
          <span className="text-xs">Event</span>
        </a>
        <a
          href="#"
          onClick={(e) => handleClick(e, "qna")}
          className={`flex flex-col flex-1 items-center px-1 pt-0.5 text-gray-500 hover:text-primary transition-colors ${
            currentPage === "qna" ? "text-primary" : ""
          }`}
        >
          <i className="fa fa-question-circle text-lg"></i>
          <span className="text-xs">QNA</span>
        </a>
      </div>
    </nav>
  );
}

