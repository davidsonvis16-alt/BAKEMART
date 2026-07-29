import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Instagram, Facebook, Utensils, Star, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F130D] text-[#F2E8D5] border-t border-[#8B3A2B]/40 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8B3A2B] border-2 border-[#E8B4A0] flex items-center justify-center text-white">
              <Utensils className="w-5 h-5 text-[#F2E8D5]" />
            </div>
            <div>
              <span className="font-serif-display font-bold text-2xl text-[#F2E8D5] block leading-none">
                BakeMart
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#E8B4A0] uppercase block mt-1">
                Beyond Sweetness
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#F2E8D5]/70 leading-relaxed">
            The only open-kitchen coffee shop in Nakuru City. Famous for authentic Italian wood-fired pizza, thick milkshakes, handcrafted burgers, BBQ platters & low-carb traditional cuisine.
          </p>

          <div className="flex items-center gap-2 text-xs text-yellow-400 font-semibold bg-[#2B1B12] px-3 py-1.5 rounded-lg border border-white/10 w-fit">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            <span>5.0 Rating (7 Google Reviews)</span>
          </div>
        </div>

        {/* Location & Contact Details */}
        <div className="space-y-3">
          <h4 className="font-serif-display font-bold text-lg text-[#E8B4A0]">Visit & Contact Us</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#F2E8D5]/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8B3A2B] shrink-0 mt-0.5" />
              <span>Tropical House, Watalii Rd, Nakuru City, Kenya</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#7A8B5A] shrink-0" />
              <a href="tel:0752114450" className="hover:text-white transition-colors">
                0752 114450
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#7A8B5A] shrink-0" />
              <a
                href="https://wa.me/254752114450"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline font-semibold text-[#7A8B5A]"
              >
                WhatsApp Direct: 0752 114450
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#E8B4A0] shrink-0" />
              <span>Open Daily · Closes 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Quick Links & Categories */}
        <div className="space-y-3">
          <h4 className="font-serif-display font-bold text-lg text-[#E8B4A0]">Popular Menu Lines</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#F2E8D5]/70">
            <li>• Authentic Italian Pizza (Med & Lrg)</li>
            <li>• Thick Creamy Milkshakes (KSh 500)</li>
            <li>• Sizzling Mbuzi & Kuku Choma Platters</li>
            <li>• Beef Burger & Golden Chips</li>
            <li>• Low Carb & Healthy No-Oil Menu</li>
            <li>• Mukimo, Matoke & Kienyeji Specials</li>
            <li>• Waffles & Cold Cheesecakes</li>
          </ul>
        </div>

        {/* Social & Delivery Apps */}
        <div className="space-y-4">
          <h4 className="font-serif-display font-bold text-lg text-[#E8B4A0]">Connect & Order Online</h4>
          <p className="text-xs text-[#F2E8D5]/70">
            Follow BakeMart Coffee House on social media or order via Glovo & WhatsApp.
          </p>

          <div className="space-y-2">
            <a
              href="https://instagram.com/bakemartcoffeehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2B1B12] hover:bg-[#8B3A2B] p-2.5 rounded-xl border border-white/10 text-xs text-[#F2E8D5] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#E8B4A0]" />
              <span>Instagram @bakemartcoffeehouse</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2B1B12] hover:bg-[#8B3A2B] p-2.5 rounded-xl border border-white/10 text-xs text-[#F2E8D5] transition-colors"
            >
              <Facebook className="w-4 h-4 text-[#E8B4A0]" />
              <span>Facebook "Bakemart Coffee House"</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </a>

            <div className="p-3 bg-[#7A8B5A]/15 border border-[#7A8B5A]/30 rounded-xl text-xs text-[#F2E8D5]/90 flex items-center justify-between">
              <span>Also listed on <strong>Glovo Kenya</strong></span>
              <span className="bg-[#7A8B5A] text-[#2B1B12] text-[10px] font-bold px-2 py-0.5 rounded">
                Delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F2E8D5]/50">
        <p>© {new Date().getFullYear()} BakeMart Coffee House — Nakuru City. All rights reserved.</p>
        <p className="font-mono">"Beyond Sweetness" • Tropical House, Watalii Rd</p>
      </div>
    </footer>
  );
};
