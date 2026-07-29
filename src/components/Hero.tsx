import React from 'react';
import { ShoppingBag, Calendar, Star, Utensils, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/image.png';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-[#2B1B12] text-[#F2E8D5] overflow-hidden">
      {/* Hero Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="BakeMart Coffee House Open Kitchen Spread"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/70 to-[#2B1B12]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow Badge & Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#8B3A2B] text-white text-xs font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
              The Only Open-Kitchen Coffee Shop in Nakuru City
            </span>
            <div className="flex items-center gap-1.5 bg-[#2B1B12]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8B4A0]/20 text-xs text-[#F2E8D5]">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="font-bold">5.0</span>
              <span className="text-white/60">(7 Google Reviews)</span>
            </div>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F2E8D5] tracking-tight leading-[1.1] mb-4">
            BakeMart <span className="text-[#E8B4A0]">Coffee House</span>
          </h1>

          <p className="font-mono text-lg sm:text-2xl text-[#E8B4A0] font-semibold tracking-wide mb-6">
            "Beyond Sweetness"
          </p>

          <p className="text-base sm:text-xl text-[#F2E8D5]/90 leading-relaxed mb-8 max-w-2xl font-light">
            Savor authentic Italian pizzas, handcrafted beef burgers, thick creamy milkshakes, sizzling Mbuzi Choma BBQ platters, waffles, and healthy low-carb dining prepared right before your eyes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/menu"
              className="bg-[#8B3A2B] hover:bg-[#8B3A2B]/90 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg flex items-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Explore Menu & Order</span>
            </Link>

            <Link
              to="/reservation"
              className="bg-[#F2E8D5]/10 hover:bg-[#F2E8D5]/20 text-[#F2E8D5] border-2 border-[#F2E8D5]/40 font-bold px-7 py-4 rounded-full text-base sm:text-lg flex items-center gap-2.5 backdrop-blur-sm transition-all hover:border-[#F2E8D5]"
            >
              <Calendar className="w-5 h-5 text-[#E8B4A0]" />
              <span>Reserve Table</span>
            </Link>

            <a
              href="https://wa.me/254752114450"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7A8B5A] hover:bg-[#7A8B5A]/90 text-[#2B1B12] font-bold px-6 py-4 rounded-full text-base flex items-center gap-2 shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Location & Quick Info Strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#F2E8D5]/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8B3A2B] shrink-0" />
              <span>Tropical House, Watalii Rd, Nakuru</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7A8B5A] shrink-0" />
              <span>Open Daily until 8:00 PM</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#E8B4A0] shrink-0" />
              <span>KSh 1–2,000 per person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Banner */}
      <div className="bg-[#1F130D] border-y border-[#8B3A2B]/30 py-4 px-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[700px] text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F2E8D5]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B3A2B]"></span>
            <span>Open-Kitchen Live Cooking</span>
          </div>
          <span className="text-[#8B3A2B]">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7A8B5A]"></span>
            <span>Authentic Wood-Fired Style Pizza</span>
          </div>
          <span className="text-[#8B3A2B]">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8B4A0]"></span>
            <span>Signature Mbuzi & Kuku Choma Platters</span>
          </div>
          <span className="text-[#8B3A2B]">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span>Glovo & Local WhatsApp Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};