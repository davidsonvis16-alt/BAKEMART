import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, MapPin, Clock, Menu as MenuIcon, X, Utensils, MessageSquare, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import logo4 from '../assets/images/logo4.jpg';

export const Header: React.FC = () => {
  const { totalItems, totalAmount, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2B1B12]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#8B3A2B]/20 text-[#F2E8D5]'
            : 'bg-[#2B1B12] text-[#F2E8D5] py-4 border-b border-[#8B3A2B]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group text-left"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src={logo4}
              alt="BakeMart Coffee House"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="font-serif-display font-bold text-xl sm:text-2xl tracking-tight text-[#F2E8D5] block leading-none">
                BakeMart
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#E8B4A0] uppercase block mt-1">
                Beyond Sweetness
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              to="/menu"
              className="hover:text-[#E8B4A0] transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Full Menu
            </Link>
            <Link
              to="/#bbq-section"
              className="hover:text-[#E8B4A0] transition-colors py-1 flex items-center gap-1.5 text-[#E8B4A0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Flame className="w-4 h-4 text-[#E8B4A0]" />
              BBQ Platters
            </Link>
            <Link
              to="/#open-kitchen"
              className="hover:text-[#E8B4A0] transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Open Kitchen
            </Link>
            <Link
              to="/reservation"
              className="hover:text-[#E8B4A0] transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Table
            </Link>
          </div>

          {/* Right Action Controls (Cart + Contact) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-[#58241B] hover:bg-[#6E2E23] text-[#F2E8D5] px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-lg transition-transform active:scale-95 font-medium text-sm border border-white/10"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#F2E8D5]" />
              <span className="hidden sm:inline font-mono font-bold">
                {totalAmount > 0 ? `KSh ${totalAmount.toLocaleString()}` : 'Cart'}
              </span>
              {totalItems > 0 && (
                <span className="bg-[#1A0E08] text-[#F2E8D5] text-xs font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#F2E8D5] hover:bg-[#8B3A2B]/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2B1B12] border-t border-[#8B3A2B]/30 px-4 py-4 space-y-3">
            <Link
              to="/menu"
              className="block w-full text-left py-2 px-3 text-[#F2E8D5] font-semibold hover:bg-[#8B3A2B]/20 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Full Menu
            </Link>
            <Link
              to="/#bbq-section"
              className="flex items-center gap-2 w-full text-left py-2 px-3 text-[#E8B4A0] font-semibold hover:bg-[#8B3A2B]/20 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Flame className="w-4 h-4 text-[#8B3A2B]" />
              BBQ Platters for 2
            </Link>
            <Link
              to="/#open-kitchen"
              className="block w-full text-left py-2 px-3 text-[#F2E8D5] font-semibold hover:bg-[#8B3A2B]/20 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Open Kitchen Experience
            </Link>
            <Link
              to="/reservation"
              className="block w-full text-left py-2 px-3 text-[#F2E8D5] font-semibold hover:bg-[#8B3A2B]/20 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve a Table
            </Link>
            <a
              href="https://wa.me/254752114450"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#4E5C3B] text-[#F2E8D5] font-bold rounded-lg mt-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Direct Order (0752 114450)
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};