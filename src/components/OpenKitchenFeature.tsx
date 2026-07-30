import React from 'react';
import { Eye, UtensilsCrossed, ShieldCheck, Sparkles, Coffee, Flame } from 'lucide-react';
import kitchenImg from '../assets/images/image.jpg';

export const OpenKitchenFeature: React.FC = () => {
  return (
    <section id="open-kitchen" className="py-16 px-4 sm:px-6 bg-[#FAF8F4] text-[#2B1B12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-[#58241B]/10 text-[#58241B] font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
            NAKURU'S ONLY OPEN-KITCHEN
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#2B1B12]">
            Watch Your Meal Come to Life
          </h2>
          <p className="text-[#2B1B12]/80 mt-3 text-base sm:text-lg">
            At BakeMart Coffee House, transparency is our recipe. Experience the sights and aromas of handcrafted pizzas stretched live, baristas pulling rich espresso, and sizzling grills in a clean, welcoming atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Feature Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-[#2B1B12]/10 relative">
            <img
              src={kitchenImg}
              alt="BakeMart Open Kitchen Counter and Barista Station"
              className="w-full h-[360px] sm:h-[450px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#2B1B12]/90 backdrop-blur-md text-[#F2E8D5] p-4 rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#58241B] flex items-center justify-center text-white shrink-0">
                  <Eye className="w-5 h-5 text-[#F2E8D5]" />
                </div>
                <div>
                  <h4 className="font-serif-display font-bold text-sm sm:text-base">100% Transparent Culinary Art</h4>
                  <p className="text-xs text-[#F2E8D5]/70">Located inside Tropical House, Watalii Rd, Nakuru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid Points */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-[#2B1B12]/10 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-[#58241B]/10 text-[#58241B] rounded-xl shrink-0">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-[#2B1B12]">Hand-Stretched Italian Pizza</h3>
                <p className="text-sm text-[#2B1B12]/70 mt-1">
                  Fresh dough kneaded daily, topped with rich mozzarella, capsicum, and roasted meats baked hot to perfection.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#2B1B12]/10 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-[#8B3A2B]/20 text-[#8B3A2B] rounded-xl shrink-0">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-[#2B1B12]">Barista Coffee & Creamy Shakes</h3>
                <p className="text-sm text-[#2B1B12]/70 mt-1">
                  Freshly ground Arabica espresso beans, Dawa immunity teas, and thick signature milkshakes prepared live.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#2B1B12]/10 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-[#58241B]/10 text-[#58241B] rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-[#2B1B12]">Hygiene & Quality Assured</h3>
                <p className="text-sm text-[#2B1B12]/70 mt-1">
                  Strict hygiene standards and fresh daily ingredients sourced directly from Nakuru's rich agricultural farms.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#2B1B12]/10 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-yellow-600/10 text-yellow-700 rounded-xl shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-[#2B1B12]">Low-Carb & Healthy Special Menu</h3>
                <p className="text-sm text-[#2B1B12]/70 mt-1">
                  Dedicated oil-free, sugar-free pan-fried liver, boiled cassava, brown ugali, and fresh local greens line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
