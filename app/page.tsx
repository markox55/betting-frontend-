"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import LeftMenu from "@/components/layout/LeftMenu";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import MainContent from "@/components/features/MainContent";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Header
        onMobileMenuClick={handleMobileMenuToggle}
        onPageChange={handlePageChange}
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />
      <LeftMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onPageChange={handlePageChange}
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />
      <Navbar onPageChange={handlePageChange} />
      <MainContent currentPage={currentPage} onPageChange={handlePageChange} />
      <MobileBottomNav onPageChange={handlePageChange} currentPage={currentPage} />
      
      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLogin}
        onOpenRegister={handleOpenRegister}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseRegister}
        onOpenLogin={handleOpenLogin}
      />
    </div>
  );
}
