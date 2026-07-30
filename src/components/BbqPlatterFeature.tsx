import React from 'react';
import { Flame, ShoppingBag, Users, CheckCircle2 } from 'lucide-react';
import bbqImg from '../assets/images/bakemart_bbq_platter_1785319075551.jpg';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';

export const BbqPlatterFeature: React.FC = () => {
  const { addToCart } = useCart();

  const bbq1 = MENU_ITEMS.find((item) => item.id === 'bbq1');
  const bbq2 = MENU_ITEMS.find((item) => item.id === 'bbq2');

  return (
    <section id="bbq-section" className="py-16 px-4 sm:px-6 bg-[#2B1B12] text-[#F2E8D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#58241B]/50">
              <img
                src={bbqImg}
                alt="BakeMart Sizzling Mbuzi Choma and Kuku Choma Barbecue Platter"
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#58241B] text-[#F2E8D5] text-xs font-mono font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>NAKURU'S FAVORITE BBQ PLATTERS</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-[#1A0E08]/90 backdrop-blur-md text-[#F2E8D5] px-4 py-2 rounded-xl border border-[#E8B4A0]/30 text-xs font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-[#E8B4A0]" />
                <span>Generous Portion for 2+ Guests</span>
              </div>
            </div>
          </div>

          {/* Content & Options Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <span className="text-[#E8B4A0] font-mono text-xs uppercase tracking-widest font-bold">
                FAMILY & SHARING SPECIAL
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#F2E8D5] mt-1 mb-3">
                Sizzling Barbecue Platters
              </h2>
              <p className="text-[#F2E8D5]/80 text-base sm:text-lg leading-relaxed">
                Enjoy authentic Kenyan open-flame grilled Mbuzi Choma (Goat) & Kuku Choma (Chicken) accompanied by golden fries, wedges, ugali, soft chapati, fresh kachumbari and signature sauces.
              </p>
            </div>

            {/* Platter Cards */}
            <div className="space-y-4">
              {/* Platter 1 */}
              {bbq1 && (
                <div className="bg-[#140B06] p-5 sm:p-6 rounded-2xl border border-[#58241B]/40 hover:border-[#58241B] transition-colors">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="font-serif-display font-bold text-xl text-[#F2E8D5]">
                        {bbq1.name}
                      </h3>
                      <span className="text-xs text-[#E8B4A0] font-semibold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Serves 2 People
                      </span>
                    </div>
                    <span className="font-mono font-bold text-xl text-[#E8B4A0] whitespace-nowrap bg-[#58241B]/40 px-3 py-1 rounded-lg">
                      KSh {bbq1.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-[#F2E8D5]/70 mb-4 leading-relaxed">
                    Mbuzi Choma, Kuku Choma, Sausage, Chips, Wedges, Ugali, Chapati, Salad Sauce.
                  </p>
                  <button
                    onClick={() => addToCart(bbq1)}
                    className="w-full bg-[#58241B] hover:bg-[#6E2E23] text-[#F2E8D5] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md border border-white/10"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Platter #1 to Cart (KSh 1,500)</span>
                  </button>
                </div>
              )}

              {/* Platter 2 */}
              {bbq2 && (
                <div className="bg-[#140B06] p-5 sm:p-6 rounded-2xl border border-[#58241B]/40 hover:border-[#58241B] transition-colors">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="font-serif-display font-bold text-xl text-[#F2E8D5]">
                        {bbq2.name}
                      </h3>
                      <span className="text-xs text-[#E8B4A0] font-semibold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Serves 2–3 People (Grand Feast)
                      </span>
                    </div>
                    <span className="font-mono font-bold text-xl text-[#E8B4A0] whitespace-nowrap bg-[#58241B]/40 px-3 py-1 rounded-lg">
                      KSh {bbq2.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-[#F2E8D5]/70 mb-4 leading-relaxed">
                    Mbuzi Choma, Kuku Choma, Swahili Pilau, Wedges, Sausages, Chips Masala, Fried Cassava, Greens, Sauce.
                  </p>
                  <button
                    onClick={() => addToCart(bbq2)}
                    className="w-full bg-[#58241B] hover:bg-[#6E2E23] text-[#F2E8D5] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md border border-white/10"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Grand Feast #2 to Cart (KSh 2,000)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
