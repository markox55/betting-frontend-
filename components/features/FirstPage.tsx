"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FirstPageProps {
  onPageChange?: (page: string) => void;
}

export default function FirstPage({ onPageChange }: FirstPageProps) {
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [activeHoverImage, setActiveHoverImage] = useState(1);
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const casinoSliderRef = useRef<HTMLDivElement>(null);
  const slotSliderRef = useRef<HTMLDivElement>(null);
  const logoSliderRef = useRef<HTMLDivElement>(null);
  const casinoContainerRef = useRef<HTMLDivElement>(null);
  const slotContainerRef = useRef<HTMLDivElement>(null);
  
  // Drag state
  const [isDraggingCasino, setIsDraggingCasino] = useState(false);
  const [isDraggingSlot, setIsDraggingSlot] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  
  // Auto-scroll pause state
  const casinoAutoScrollPaused = useRef(false);
  const slotAutoScrollPaused = useRef(false);
  const casinoAutoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const slotAutoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const carouselImages = [
    "/images/main/banner-01.png",
    "/images/main/banner-02.png",
    "/images/main/banner-03.png",
  ];

  const hoverImages = [
    { id: 1, src: "/images/main/main-casino.png", page: "casino" },
    { id: 2, src: "/images/main/main-slot.png", page: "slot" },
    { id: 3, src: "/images/main/main-mini.png", page: "mini" },
    { id: 4, src: "/images/main/main-sport.png", page: "domestic" },
    { id: 5, src: "/images/main/main-live.png", page: "live" },
  ];

  const casinoGames = [
    { logo: "/images/casino/logo/7mojos.png", wrapper: "/images/casino/wrapper/7mojos.png", name: "7mojos" },
    { logo: "/images/casino/logo/ag.png", wrapper: "/images/casino/wrapper/ag.png", name: "ag" },
    { logo: "/images/casino/logo/allbet.png", wrapper: "/images/casino/wrapper/allbet.png", name: "allbet" },
    { logo: "/images/casino/logo/betgames.png", wrapper: "/images/casino/wrapper/betgames.png", name: "betgames" },
    { logo: "/images/casino/logo/bota.png", wrapper: "/images/casino/wrapper/bota.png", name: "bota" },
    { logo: "/images/casino/logo/dowin.png", wrapper: "/images/casino/wrapper/dowin.png", name: "dowin" },
    { logo: "/images/casino/logo/dreamgaming.png", wrapper: "/images/casino/wrapper/dreamgaming.png", name: "dream" },
    { logo: "/images/casino/logo/evolution.png", wrapper: "/images/casino/wrapper/evolution.png", name: "evolution" },
    { logo: "/images/casino/logo/ezugi.png", wrapper: "/images/casino/wrapper/ezugi.png", name: "ezugi" },
    { logo: "/images/casino/logo/hilton.png", wrapper: "/images/casino/wrapper/hilton.png", name: "hilton" },
    { logo: "/images/casino/logo/onetouch.png", wrapper: "/images/casino/wrapper/onetouch.png", name: "onetouch" },
    { logo: "/images/casino/logo/playtech.png", wrapper: "/images/casino/wrapper/playtech.png", name: "playtech" },
    { logo: "/images/casino/logo/alg.png", wrapper: "/images/casino/wrapper/alg.png", name: "alg" },
    { logo: "/images/casino/logo/pragmatic.png", wrapper: "/images/casino/wrapper/pragmatic.png", name: "pragmatic" },
    { logo: "/images/casino/logo/sexy.png", wrapper: "/images/casino/wrapper/sexy.png", name: "sexy" },
    { logo: "/images/casino/logo/skywind.png", wrapper: "/images/casino/wrapper/skywind.png", name: "skywind" },
    { logo: "/images/casino/logo/taishan.png", wrapper: "/images/casino/wrapper/taishan.png", name: "taishan" },
    { logo: "/images/casino/logo/vivo.png", wrapper: "/images/casino/wrapper/vivo.png", name: "vivo" },
    { logo: "/images/casino/logo/wm.png", wrapper: "/images/casino/wrapper/wm.png", name: "wm" },
  ];

  const slotGames = [
    { logo: "/images/slot/logo/1x2.png", wrapper: "/images/slot/wrapper/1x2.png", name: "1x2" },
    { logo: "/images/slot/logo/7777.png", wrapper: "/images/slot/wrapper/7777.png", name: "7777" },
    { logo: "/images/slot/logo/7mojos.png", wrapper: "/images/slot/wrapper/7mojos.png", name: "7mojos" },
    { logo: "/images/slot/logo/asian.png", wrapper: "/images/slot/wrapper/asian.png", name: "asian" },
    { logo: "/images/slot/logo/avatarux.png", wrapper: "/images/slot/wrapper/avatarux.png", name: "avatarux" },
    { logo: "/images/slot/logo/bgaming.png", wrapper: "/images/slot/wrapper/bgaming.png", name: "bgaming" },
    { logo: "/images/slot/logo/blueprint.png", wrapper: "/images/slot/wrapper/blueprint.png", name: "blueprint" },
    { logo: "/images/slot/logo/booming.png", wrapper: "/images/slot/wrapper/booming.png", name: "booming" },
    { logo: "/images/slot/logo/booongo.png", wrapper: "/images/slot/wrapper/booongo.png", name: "booongo" },
    { logo: "/images/slot/logo/btg.png", wrapper: "/images/slot/wrapper/btg.png", name: "btg" },
    { logo: "/images/slot/logo/caleta.png", wrapper: "/images/slot/wrapper/caleta.png", name: "caleta" },
    { logo: "/images/slot/logo/cq9.png", wrapper: "/images/slot/wrapper/cq9.png", name: "cq9" },
    { logo: "/images/slot/logo/dreamtech.png", wrapper: "/images/slot/wrapper/dreamtech.png", name: "dreamtech" },
    { logo: "/images/slot/logo/eagaming.png", wrapper: "/images/slot/wrapper/eagaming.png", name: "eagaming" },
    { logo: "/images/slot/logo/evoplay.png", wrapper: "/images/slot/wrapper/evoplay.png", name: "evoplay" },
    { logo: "/images/slot/logo/fantasma.png", wrapper: "/images/slot/wrapper/fantasma.png", name: "fantasma" },
    { logo: "/images/slot/logo/fils.png", wrapper: "/images/slot/wrapper/fils.png", name: "fils" },
    { logo: "/images/slot/logo/gameart.png", wrapper: "/images/slot/wrapper/gameart.png", name: "gameart" },
    { logo: "/images/slot/logo/habanero.png", wrapper: "/images/slot/wrapper/habanero.png", name: "habanero" },
    { logo: "/images/slot/logo/hacksaw.png", wrapper: "/images/slot/wrapper/hacksaw.png", name: "hacksaw" },
    { logo: "/images/slot/logo/mancala.png", wrapper: "/images/slot/wrapper/mancala.png", name: "mancala" },
    { logo: "/images/slot/logo/micro.png", wrapper: "/images/slot/wrapper/micro.png", name: "micro" },
    { logo: "/images/slot/logo/netent.png", wrapper: "/images/slot/wrapper/netent.png", name: "netent" },
    { logo: "/images/slot/logo/netgame.png", wrapper: "/images/slot/wrapper/netgame.png", name: "netgame" },
    { logo: "/images/slot/logo/netgaming.png", wrapper: "/images/slot/wrapper/netgaming.png", name: "netgaming" },
    { logo: "/images/slot/logo/nolimit.png", wrapper: "/images/slot/wrapper/nolimit.png", name: "nolimit" },
    { logo: "/images/slot/logo/novomatic.png", wrapper: "/images/slot/wrapper/novomatic.png", name: "novomatic" },
    { logo: "/images/slot/logo/pariplay.png", wrapper: "/images/slot/wrapper/pariplay.png", name: "pariplay" },
    { logo: "/images/slot/logo/pgsoft.png", wrapper: "/images/slot/wrapper/pgsoft.png", name: "pgsoft" },
    { logo: "/images/slot/logo/platin.png", wrapper: "/images/slot/wrapper/platin.png", name: "platin" },
    { logo: "/images/slot/logo/platipus.png", wrapper: "/images/slot/wrapper/platipus.png", name: "platipus" },
    { logo: "/images/slot/logo/playngo.png", wrapper: "/images/slot/wrapper/playngo.png", name: "playngo" },
    { logo: "/images/slot/logo/playstar.png", wrapper: "/images/slot/wrapper/playstar.png", name: "playstar" },
    { logo: "/images/slot/logo/playtech.png", wrapper: "/images/slot/wrapper/playtech.png", name: "playtech" },
    { logo: "/images/slot/logo/pragmatic.png", wrapper: "/images/slot/wrapper/pragmatic.png", name: "pragmatic" },
    { logo: "/images/slot/logo/quickspin.png", wrapper: "/images/slot/wrapper/quickspin.png", name: "quickspin" },
    { logo: "/images/slot/logo/redrake.png", wrapper: "/images/slot/wrapper/redrake.png", name: "redrake" },
    { logo: "/images/slot/logo/redtiger.png", wrapper: "/images/slot/wrapper/redtiger.png", name: "redtiger" },
    { logo: "/images/slot/logo/relax.png", wrapper: "/images/slot/wrapper/relax.png", name: "relax" },
    { logo: "/images/slot/logo/retro.png", wrapper: "/images/slot/wrapper/retro.png", name: "retro" },
    { logo: "/images/slot/logo/rtg.png", wrapper: "/images/slot/wrapper/rtg.png", name: "rtg" },
    { logo: "/images/slot/logo/skywind.png", wrapper: "/images/slot/wrapper/skywind.png", name: "skywind" },
    { logo: "/images/slot/logo/slotmill.png", wrapper: "/images/slot/wrapper/slotmill.png", name: "slotmill" },
    { logo: "/images/slot/logo/smartsoft.png", wrapper: "/images/slot/wrapper/smartsoft.png", name: "smartsoft" },
    { logo: "/images/slot/logo/spinomenal.png", wrapper: "/images/slot/wrapper/spinomenal.png", name: "spinomenal" },
    { logo: "/images/slot/logo/thunder.png", wrapper: "/images/slot/wrapper/thunder.png", name: "thunder" },
    { logo: "/images/slot/logo/wazdan.png", wrapper: "/images/slot/wrapper/wazdan.png", name: "wazdan" },
    { logo: "/images/slot/logo/yggdrasil.png", wrapper: "/images/slot/wrapper/yggdrasil.png", name: "yggdrasil" },
  ];

  const logoImages = [
    "/images/casino/logo/7mojos.png",
    "/images/casino/logo/ag.png",
    "/images/casino/logo/allbet.png",
    "/images/casino/logo/betgames.png",
    "/images/casino/logo/bota.png",
    "/images/casino/logo/dowin.png",
    "/images/casino/logo/evolution.png",
    "/images/casino/logo/ezugi.png",
    "/images/casino/logo/onetouch.png",
    "/images/casino/logo/playtech.png",
    "/images/casino/logo/pragmatic.png",
    "/images/casino/logo/sexy.png",
    "/images/casino/logo/skywind.png",
    "/images/casino/logo/taishan.png",
    "/images/casino/logo/vivo.png",
    "/images/casino/logo/wm.png",
  ];

  const mobileGames = [
    { img: "/images/main/domestic.png", name: "Domestic", page: "domestic" },
    { img: "/images/main/abroad.png", name: "Abroad", page: "abroad" },
    { img: "/images/main/live.png", name: "Live", page: "live" },
    { img: "/images/main/special.png", name: "Special", page: "special" },
    { img: "/images/main/casino.png", name: "Casino", page: "" },
    { img: "/images/main/slot.png", name: "Slot", page: "slot" },
    { img: "/images/main/mini.png", name: "Mini", page: "mini" },
    { img: "/images/main/result.png", name: "Result", page: "result" },
    { img: "/images/main/history.png", name: "History", page: "history" },
    { img: "/images/main/deposit.png", name: "Deposit", page: "deposit" },
    { img: "/images/main/withdraw.png", name: "Withdraw", page: "withdraw" },
    { img: "/images/main/point.png", name: "Point", page: "point" },
    { img: "/images/main/notice.png", name: "Notice", page: "notice" },
    { img: "/images/main/event.png", name: "Event", page: "event" },
    { img: "/images/main/qna.png", name: "Qna", page: "qna" },
    { img: "/images/main/letter.png", name: "Letter", page: "letter" },
    { img: "/images/main/profile.png", name: "Profile", page: "profile" },
    { img: "/images/main/partner.png", name: "Partner", page: "" },
  ];

  // Carousel auto-play
  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCurrentCarouselSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [carouselImages.length]);

  const handleCarouselPrev = () => {
    if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
    setCurrentCarouselSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    carouselIntervalRef.current = setInterval(() => {
      setCurrentCarouselSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
  };

  const handleCarouselNext = () => {
    if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
    setCurrentCarouselSlide((prev) => (prev + 1) % carouselImages.length);
    carouselIntervalRef.current = setInterval(() => {
      setCurrentCarouselSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
  };

  // Casino drag handlers
  const handleCasinoMouseDown = (e: React.MouseEvent) => {
    if (!casinoContainerRef.current) return;
    casinoAutoScrollPaused.current = true;
    setIsDraggingCasino(true);
    dragStartX.current = e.pageX - casinoContainerRef.current.offsetLeft;
    dragScrollLeft.current = casinoContainerRef.current.scrollLeft;
    casinoContainerRef.current.style.cursor = "grabbing";
    casinoContainerRef.current.style.userSelect = "none";
  };

  const handleCasinoMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingCasino || !casinoContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - casinoContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 2; // Scroll speed multiplier
    casinoContainerRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleCasinoMouseUp = () => {
    if (!casinoContainerRef.current) return;
    setIsDraggingCasino(false);
    casinoContainerRef.current.style.cursor = "grab";
    casinoContainerRef.current.style.userSelect = "auto";
    // Resume auto-scroll after 3 seconds
    setTimeout(() => {
      casinoAutoScrollPaused.current = false;
    }, 3000);
  };

  const handleCasinoMouseLeave = () => {
    if (!casinoContainerRef.current) return;
    setIsDraggingCasino(false);
    casinoContainerRef.current.style.cursor = "grab";
    casinoContainerRef.current.style.userSelect = "auto";
    // Resume auto-scroll after 3 seconds
    setTimeout(() => {
      casinoAutoScrollPaused.current = false;
    }, 3000);
  };

  // Slot drag handlers
  const handleSlotMouseDown = (e: React.MouseEvent) => {
    if (!slotContainerRef.current) return;
    slotAutoScrollPaused.current = true;
    setIsDraggingSlot(true);
    dragStartX.current = e.pageX - slotContainerRef.current.offsetLeft;
    dragScrollLeft.current = slotContainerRef.current.scrollLeft;
    slotContainerRef.current.style.cursor = "grabbing";
    slotContainerRef.current.style.userSelect = "none";
  };

  const handleSlotMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingSlot || !slotContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - slotContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 2; // Scroll speed multiplier
    slotContainerRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleSlotMouseUp = () => {
    if (!slotContainerRef.current) return;
    setIsDraggingSlot(false);
    slotContainerRef.current.style.cursor = "grab";
    slotContainerRef.current.style.userSelect = "auto";
    // Resume auto-scroll after 3 seconds
    setTimeout(() => {
      slotAutoScrollPaused.current = false;
    }, 3000);
  };

  const handleSlotMouseLeave = () => {
    if (!slotContainerRef.current) return;
    setIsDraggingSlot(false);
    slotContainerRef.current.style.cursor = "grab";
    slotContainerRef.current.style.userSelect = "auto";
    // Resume auto-scroll after 3 seconds
    setTimeout(() => {
      slotAutoScrollPaused.current = false;
    }, 3000);
  };

  // Arrow navigation handlers
  const scrollCasino = (direction: "left" | "right") => {
    if (!casinoContainerRef.current) return;
    casinoAutoScrollPaused.current = true;
    const scrollAmount = 500;
    casinoContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    // Resume auto-scroll after 3 seconds of inactivity
    setTimeout(() => {
      casinoAutoScrollPaused.current = false;
    }, 3000);
  };

  const scrollSlot = (direction: "left" | "right") => {
    if (!slotContainerRef.current) return;
    slotAutoScrollPaused.current = true;
    const scrollAmount = 500;
    slotContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    // Resume auto-scroll after 3 seconds of inactivity
    setTimeout(() => {
      slotAutoScrollPaused.current = false;
    }, 3000);
  };

  // Auto-scrolling sliders
  useEffect(() => {
    const slideSlider = (
      sliderRef: React.RefObject<HTMLDivElement | null>,
      itemCount: number,
      intervalTime: number
    ): (() => void) | undefined => {
      if (!sliderRef.current) return;
      
      let currentSlide = 0;
      const slider = sliderRef.current;
      const firstItem = slider.querySelector("div");
      if (!firstItem) return;

      const itemWidth = firstItem.offsetWidth;
      const gap = 12; // gap-3 = 0.75rem = 12px
      const itemWidthWithGap = itemWidth + gap;

      const slide = () => {
        if (!sliderRef.current) return;
        currentSlide++;
        sliderRef.current.style.transform = `translateX(-${currentSlide * itemWidthWithGap}px)`;
        sliderRef.current.style.transition = "transform 0.5s ease";

        if (currentSlide >= itemCount) {
          setTimeout(() => {
            if (!sliderRef.current) return;
            sliderRef.current.style.transition = "none";
            sliderRef.current.style.transform = "translateX(0)";
            currentSlide = 0;
            setTimeout(() => {
              if (!sliderRef.current) return;
              sliderRef.current.style.transition = "transform 0.5s ease";
            }, 50);
          }, 500);
        }
      };

      let intervalId: NodeJS.Timeout | null = null;
      const timeoutId = setTimeout(() => {
        intervalId = setInterval(slide, intervalTime);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
        if (intervalId) clearInterval(intervalId);
      };
    };

    const logoCleanup = slideSlider(logoSliderRef, 16, 1500);

    return () => {
      logoCleanup?.();
    };
  }, []);

  // Auto-scroll for casino and slot with pause support
  useEffect(() => {
    const autoScrollCasino = () => {
      if (casinoAutoScrollPaused.current || !casinoContainerRef.current || !casinoSliderRef.current) return;
      
      const container = casinoContainerRef.current;
      const slider = casinoSliderRef.current;
      
      // Check if we've scrolled to the end (with some tolerance)
      if (container.scrollLeft >= slider.scrollWidth - container.clientWidth - 10) {
        // Reset to start smoothly
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollBy({ left: 1, behavior: "auto" });
      }
    };

    const autoScrollSlot = () => {
      if (slotAutoScrollPaused.current || !slotContainerRef.current || !slotSliderRef.current) return;
      
      const container = slotContainerRef.current;
      const slider = slotSliderRef.current;
      
      // Check if we've scrolled to the end (with some tolerance)
      if (container.scrollLeft >= slider.scrollWidth - container.clientWidth - 10) {
        // Reset to start smoothly
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollBy({ left: 1, behavior: "auto" });
      }
    };

    // Start auto-scroll after a delay
    const timeoutId = setTimeout(() => {
      casinoAutoScrollInterval.current = setInterval(autoScrollCasino, 20);
      slotAutoScrollInterval.current = setInterval(autoScrollSlot, 20);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (casinoAutoScrollInterval.current) clearInterval(casinoAutoScrollInterval.current);
      if (slotAutoScrollInterval.current) clearInterval(slotAutoScrollInterval.current);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="px-1 md:px-0">
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-lg mb-2">
          <div className="relative w-full h-40 md:h-[32rem]">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  index === currentCarouselSlide
                    ? "opacity-100 scale-100 z-[2] pointer-events-auto"
                    : "opacity-0 scale-50 z-[1] pointer-events-none"
                }`}
                style={{ transformOrigin: "center center" }}
              >
                <Image
                  src={img}
                  alt={`Banner ${index + 1}`}
                  fill
                  className="object-cover opacity-0"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={handleCarouselPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-10"
          >
            <i className="fa fa-angle-left text-xl"></i>
          </button>
          <button
            onClick={handleCarouselNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-10"
          >
            <i className="fa fa-angle-right text-xl"></i>
          </button>
        </div>

        {/* Content with horizontal padding */}
        <div className="px-4 md:px-6 lg:px-8">
          {/* Notice Scroll */}
          <div className="w-full overflow-hidden max-w-[1440px] mx-auto mb-2">
            <div className="bg-yellow-50/80 border-l-4 border-brown-500 rounded-r-md py-2 px-2 overflow-hidden font-bold">
              <div className="flex items-center whitespace-nowrap">
                <div className="shrink-0 mr-3">
                  <i className="fa-solid fa-bullhorn text-brown-500 text-base"></i>
                </div>
                <div className="overflow-hidden w-full">
                  <div className="whitespace-nowrap">
                    <div className="animate-scroll-x text-secondary/60">
                      Welcome to ToTo Club,Wish you a good time!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Hover Section - Desktop */}
          <div className="hidden md:flex flex-col md:flex-row overflow-hidden mb-6 mt-3">
          <div className="w-full md:w-[30%] bg-gray-50 p-4 flex flex-col space-y-4 py-8 rounded-lg">
            {hoverImages.map((item, index) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveHoverImage(item.id)}
                onClick={() => item.page && onPageChange?.(item.page)}
                className={`h-20 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md bg-gray-200 border border-gray-50 rounded-xl px-4 flex justify-between items-end cursor-pointer ${
                  activeHoverImage === item.id ? "active" : ""
                }`}
                style={{
                  backgroundImage: activeHoverImage === item.id
                    ? "linear-gradient(45deg, rgba(66, 153, 225, 0.05) 25%, transparent 25%, transparent 50%, rgba(66, 153, 225, 0.05) 50%, rgba(66, 153, 225, 0.05) 75%, transparent 75%, transparent)"
                    : "linear-gradient(45deg, rgba(66, 153, 225, 0.02) 25%, transparent 25%, transparent 50%, rgba(66, 153, 225, 0.02) 50%, rgba(66, 153, 225, 0.02) 75%, transparent 75%, transparent)",
                }}
              >
                <div className="h-20 font-bold text-xl text-secondary flex items-center">
                  <i className={`fa ${index === 0 ? "fa-dice" : index === 1 ? "fa-crown" : index === 2 ? "fa-gamepad" : index === 3 ? "fa-football" : "fa-basketball"} text-4xl mr-3`}></i>
                  <span>{index === 3 ? "SPORT" : item.page.toUpperCase()}</span>
                </div>
                <Image src={item.src} alt={item.page} width={80} height={80} className="h-20 mr-3 object-contain" />
              </button>
            ))}
          </div>

          <div className="w-full md:w-[70%] p-4 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                {hoverImages.map((item) => (
                  <Image
                    key={item.id}
                    id={`image-${item.id}`}
                    src={item.src}
                    alt={item.page}
                    width={600}
                    height={400}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                      activeHoverImage === item.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Casino Section */}
          <div className="font-bold text-xl text-secondary mt-3">
            <i className="fa fa-dice mr-2"></i>CASINO
          </div>
          <div className="mb-4 w-full overflow-hidden pb-4 -mt-[30px] relative">
            <button
              onClick={() => scrollCasino("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-20"
              aria-label="Scroll left"
            >
              <i className="fa fa-angle-left text-xl"></i>
            </button>
            <button
              onClick={() => scrollCasino("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-20"
              aria-label="Scroll right"
            >
              <i className="fa fa-angle-right text-xl"></i>
            </button>
            <div
              ref={casinoContainerRef}
              onMouseDown={handleCasinoMouseDown}
              onMouseMove={handleCasinoMouseMove}
              onMouseUp={handleCasinoMouseUp}
              onMouseLeave={handleCasinoMouseLeave}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            >
              <div
                ref={casinoSliderRef}
                className="flex gap-3"
                id="casinoSlider"
                style={{ width: "max-content" }}
              >
                {[...casinoGames, ...casinoGames.slice(0, 6)].map((game, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden transition-all duration-300 cursor-pointer shrink-0 group"
                    style={{
                      height: "190px",
                      borderRadius: "10px",
                      background: "linear-gradient(170deg, #151428 0, #393678)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                      width: "230px",
                      marginTop: "50px",
                      border: "1px solid #fffab8",
                    }}
                  >
                    <Image
                      src={game.logo}
                      alt={game.name}
                      width={92}
                      height={33}
                      className="absolute h-[20%] max-w-[50%] min-w-[40%] left-[3%] top-[10%] z-[3]"
                    />
                    <Image
                      src={game.wrapper}
                      alt={game.name}
                      width={161}
                      height={165}
                      className="absolute w-[70%] right-[-3%] bottom-0 transition-all duration-300 ease-out"
                    />
                    <div className="absolute z-[2] bottom-[10%] left-[6%] uppercase font-bold text-[#f0e6ff] text-sm">{game.name}</div>
                    <div className="absolute bg-[#ff000045] rounded px-2 py-1.5 z-[5] left-1/2 top-1/2 -translate-x-1/2 translate-y-0 transition-all duration-500 opacity-0 flex items-center text-white border border-[#fffab8] justify-center group-hover:opacity-100 group-hover:-translate-y-1/2 text-[13px] font-bold">
                      Play
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slot Section */}
          <div className="font-bold text-xl text-secondary">
            <i className="fa fa-crown mr-2"></i>SLOT
          </div>
          <div className="mb-4 w-full overflow-hidden pb-4 -mt-[30px] relative">
            <button
              onClick={() => scrollSlot("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-20"
              aria-label="Scroll left"
            >
              <i className="fa fa-angle-left text-xl"></i>
            </button>
            <button
              onClick={() => scrollSlot("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-20"
              aria-label="Scroll right"
            >
              <i className="fa fa-angle-right text-xl"></i>
            </button>
            <div
              ref={slotContainerRef}
              onMouseDown={handleSlotMouseDown}
              onMouseMove={handleSlotMouseMove}
              onMouseUp={handleSlotMouseUp}
              onMouseLeave={handleSlotMouseLeave}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            >
              <div
                ref={slotSliderRef}
                className="flex gap-3"
                id="slotSlider"
                style={{ width: "max-content" }}
              >
                {[...slotGames, ...slotGames.slice(0, 6)].map((game, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden transition-all duration-300 cursor-pointer shrink-0 group"
                    style={{
                      height: "190px",
                      borderRadius: "10px",
                      background: "linear-gradient(170deg, #151428 0, #393678)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                      width: "230px",
                      marginTop: "50px",
                      border: "1px solid #fffab8",
                    }}
                  >
                    <Image
                      src={game.logo}
                      alt={game.name}
                      width={92}
                      height={33}
                      className="absolute h-[20%] max-w-[50%] min-w-[40%] left-[3%] top-[10%] z-[3]"
                    />
                    <Image
                      src={game.wrapper}
                      alt={game.name}
                      width={161}
                      height={165}
                      className="absolute w-[70%] right-[-3%] bottom-0 transition-all duration-300 ease-out"
                    />
                    <div className="absolute z-[2] bottom-[10%] left-[6%] uppercase font-bold text-[#f0e6ff] text-sm">{game.name}</div>
                    <div className="absolute bg-[#ff000045] rounded px-2 py-1.5 z-[5] left-1/2 top-1/2 -translate-x-1/2 translate-y-0 transition-all duration-500 opacity-0 flex items-center text-white border border-[#fffab8] justify-center group-hover:opacity-100 group-hover:-translate-y-1/2 text-[13px] font-bold">
                      Play
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Cards - Desktop */}
          <div className="hidden md:flex items-center justify-center w-full mt-24">
          <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent via-[#4f2b01] to-transparent"></div>
          <div className="text-center px-6">
            <h2 className="text-3xl font-bold text-secondary">Excellent Service</h2>
            <p className="text-sm text-secondary/40 mt-0.5 italic">Provides high-quality service</p>
          </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent via-[#4f2b01] to-transparent"></div>
          </div>

          <div className="hidden md:grid md:grid-cols-4 gap-6 mx-auto my-7">
          <div className="bg-gray-200/80 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full border-2 border-secondary bg-primary/20 flex items-center justify-center mb-4">
              <i className="fa-solid fa-briefcase text-3xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold text-secondary uppercase mb-1">Professional</h3>
            <p className="text-gray-600 text-sm">Experience over 1,000 thrilling and new varieties of real-time sports, live casino, slots, mini-games, and other unique and perfect services provided by ToTo.</p>
          </div>

          <div className="bg-gray-200/80 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full border-2 border-secondary bg-primary/20 flex items-center justify-center mb-4">
              <i className="fa-solid fa-shield-halved text-3xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold text-secondary uppercase mb-1">Safety</h3>
            <p className="text-gray-600 text-sm">We always strive to ensure the safety of our services by using cutting-edge security technology to protect our most important customers' information and funds.</p>
          </div>

          <div className="bg-gray-200/80 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full border-2 border-secondary bg-primary/20 flex items-center justify-center mb-4">
              <i className="fa-solid fa-handshake-angle text-3xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold text-secondary uppercase mb-2">Convenient</h3>
            <p className="text-gray-600 text-sm">A carefully designed system for user comfort, featuring unique technology optimized for WEB and Mobile to ensure high satisfaction.</p>
          </div>

          <div className="bg-gray-200/80 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full border-2 border-secondary bg-primary/20 flex items-center justify-center mb-4">
              <i className="fa-solid fa-rocket text-3xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold text-secondary uppercase mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">We provide fast and stable deposit and withdrawal services with a unique financial system, and deliver a seamless gaming experience through our self-developed network technology.</p>
          </div>
          </div>

          {/* Mobile Game Grid */}
          <div className="grid md:hidden grid-cols-3 gap-1 mb-2 font-bold text-secondary bg-[#f7f9b2]">
            {mobileGames.map((game, index) => (
              // <button
              //   key={index}
              //   onClick={() => game.page && onPageChange?.(game.page)}
              //   className="relative z-[1] transition-all duration-300 text-center uppercase rounded-md p-[2px]"
              //   style={{
              //     background: "linear-gradient(135deg, #fffab8 0%, #faf5a9 50%, #ffe600 100%)",
              //     WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              //     WebkitMaskComposite: "xor",
              //     maskComposite: "exclude",
              //   }}
              // >
                <div key={index} className=" bg-white p-3 rounded-md z-[1]">
                  <div className="flex justify-center">
                    <Image src={game.img} alt={game.name} width={80} height={80} className="w-2/3" />
                  </div>
                  <div className="mt-2 text-center">{game.name}</div>
                </div>
              // </button>
            ))}
          </div>
        </div>

        {/* Footer Logo Slider */}
        <div className="bg-gray-200/80">
          <div className="w-full overflow-hidden bg-[#151428]">
            <div
              ref={logoSliderRef}
              className="flex transition-all duration-500 gap-12 m-3"
              id="logoSlider"
            >
              {[...logoImages, ...logoImages].map((logo, index) => (
                <div key={index} className="w-[100px] shrink-0">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
          </div>
          <div className = "pb-2">
              <div className="flex justify-center mb-6 pt-2">
                <Image
                  src="/images/main/logo.png"
                  alt="ToTo Club Logo"
                  width={200}
                  height={200}
                  className="w-[200px]"
                />
              </div>
              <p className=" text-center font-bold">Copyright ⓒ2025 ToTo Club All rights reserved</p>
            </div>
        </div>
      </div>
    </div>
  );
}

