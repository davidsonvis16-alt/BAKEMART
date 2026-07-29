import React, { useState, useMemo, useRef } from 'react';
import { Search, Plus, Check, Sparkles, Filter, X, ShoppingBag, Star, ChefHat, Leaf } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuCategoryId, MenuItem } from '../types';
import { useCart } from '../context/CartContext';

export const MenuSection: React.FC = () => {
  const { addToCart, cart } = useCart();
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | 'all'>('bakery-desserts');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterTag, setActiveFilterTag] = useState<'all' | 'popular' | 'special' | 'lowcarb'>('all');
  const [selectedPizzaOptions, setSelectedPizzaOptions] = useState<Record<string, number>>({});

  const tabsRef = useRef<HTMLDivElement>(null);

  // Filter items based on activeCategory, searchQuery, and filterTag
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query) || false;
        if (!matchesName && !matchesDesc) return false;
      }

      // Filter tag match
      if (activeFilterTag === 'popular' && !item.isPopular && item.badge !== 'Popular') return false;
      if (activeFilterTag === 'special' && item.badge !== 'Chef Special') return false;
      if (activeFilterTag === 'lowcarb' && item.category !== 'low-carb-healthy' && item.badge !== 'Low Carb' && item.badge !== 'Healthy') return false;

      return true;
    });
  }, [activeCategory, searchQuery, activeFilterTag]);

  // Group items by category for structured layout if activeCategory === 'all' or default view
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      const cat = CATEGORIES.find((c) => c.id === activeCategory);
      return cat ? [cat] : [];
    }
    return CATEGORIES;
  }, [activeCategory]);

  const handleOptionChange = (itemId: string, optionIndex: number) => {
    setSelectedPizzaOptions((prev) => ({
      ...prev,
      [itemId]: optionIndex
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    if (item.options && item.options.length > 0) {
      const selectedIndex = selectedPizzaOptions[item.id] || 0;
      const option = item.options[selectedIndex];
      addToCart(item, option.name, option.price);
    } else {
      addToCart(item);
    }
  };

  // Helper to count how many of an item (including option variants) are in cart
  const getItemCartQuantity = (itemId: string) => {
    return cart
      .filter((i) => i.menuItemId === itemId)
      .reduce((acc, i) => acc + i.quantity, 0);
  };

  return (
    <section id="menu-section" className="py-12 px-4 sm:px-6 bg-[#FAF8F4] text-[#2B1B12] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Menu Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#58241B] font-bold">
            BAKEMART COFFEE HOUSE MENU
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#2B1B12] mt-1">
            Explore Our Wide Menu
          </h2>
          <p className="text-[#2B1B12]/80 text-sm sm:text-base mt-2">
            Freshly prepared open-kitchen pastries, coffees, Italian pizzas, milkshakes, burgers, BBQ & healthy low-carb meals in Nakuru City.
          </p>
        </div>

        {/* Search Bar & Filter Tag Chips */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#2B1B12]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pizza, milkshakes, beef burger, brown ugali, samosa..."
              className="w-full bg-white text-[#2B1B12] placeholder-[#2B1B12]/40 pl-11 pr-10 py-3.5 rounded-full border-2 border-[#2B1B12]/15 focus:border-[#58241B] focus:outline-none shadow-sm font-medium transition-colors text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[#2B1B12]/50 hover:text-[#2B1B12]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveFilterTag('all')}
              className={`px-3.5 py-1.5 rounded-full transition-colors ${
                activeFilterTag === 'all'
                  ? 'bg-[#2B1B12] text-[#F2E8D5]'
                  : 'bg-white border border-[#2B1B12]/15 text-[#2B1B12] hover:bg-[#2B1B12]/5'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveFilterTag('popular')}
              className={`px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                activeFilterTag === 'popular'
                  ? 'bg-[#58241B] text-[#F2E8D5]'
                  : 'bg-white border border-[#2B1B12]/15 text-[#58241B] hover:bg-[#58241B]/10'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Popular Highlights</span>
            </button>
            <button
              onClick={() => setActiveFilterTag('special')}
              className={`px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                activeFilterTag === 'special'
                  ? 'bg-[#58241B] text-[#F2E8D5]'
                  : 'bg-white border border-[#2B1B12]/15 text-[#2B1B12] hover:bg-[#2B1B12]/5'
              }`}
            >
              <ChefHat className="w-3.5 h-3.5" />
              <span>Chef Specials</span>
            </button>
            <button
              onClick={() => setActiveFilterTag('lowcarb')}
              className={`px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                activeFilterTag === 'lowcarb'
                  ? 'bg-[#4E5C3B] text-[#F2E8D5]'
                  : 'bg-white border border-[#2B1B12]/15 text-[#4E5C3B] hover:bg-[#4E5C3B]/10'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Healthy & Low Carb</span>
            </button>
          </div>
        </div>

        {/* Sticky Ticket / Menu-Board Category Bar */}
        <div className="sticky top-[105px] z-30 bg-[#FAF8F4]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-8 border-y border-[#2B1B12]/10 shadow-sm">
          <div
            ref={tabsRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 max-w-7xl mx-auto"
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 ${
                activeCategory === 'all'
                  ? 'bg-[#2B1B12] text-[#F2E8D5] shadow-md scale-105'
                  : 'bg-white/80 border border-[#2B1B12]/15 text-[#2B1B12] hover:bg-white'
              }`}
            >
              <span>ALL CATEGORIES</span>
              <span className="bg-[#8B3A2B] text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {MENU_ITEMS.length}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const catCount = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#8B3A2B] text-white shadow-md scale-105'
                      : 'bg-white border border-[#2B1B12]/15 text-[#2B1B12] hover:bg-[#8B3A2B]/10'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#2B1B12]/10 text-[#2B1B12]'
                    }`}
                  >
                    {catCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search / Filter Result Counter */}
        {(searchQuery || activeFilterTag !== 'all') && (
          <div className="mb-6 flex justify-between items-center text-sm font-semibold bg-white p-3.5 rounded-xl border border-[#2B1B12]/10 shadow-xs">
            <span>
              Found <strong className="text-[#8B3A2B] font-mono">{filteredItems.length}</strong> items
              {searchQuery && <span> matching "{searchQuery}"</span>}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilterTag('all');
                setActiveCategory('all');
              }}
              className="text-xs text-[#8B3A2B] hover:underline font-bold flex items-center gap-1"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Items Display */}
        {filteredItems.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-[#2B1B12]/10 text-center max-w-md mx-auto my-12 space-y-3">
            <Filter className="w-10 h-10 text-[#2B1B12]/30 mx-auto" />
            <h3 className="font-serif-display font-bold text-xl text-[#2B1B12]">No items found</h3>
            <p className="text-sm text-[#2B1B12]/70">
              Try adjusting your search keyword or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilterTag('all');
                setActiveCategory('all');
              }}
              className="mt-2 bg-[#8B3A2B] text-white font-bold text-xs uppercase px-4 py-2 rounded-lg"
            >
              Show All Menu Items
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedCategories.map((category) => {
              const categoryItems = filteredItems.filter((item) => item.category === category.id);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category.id} className="scroll-mt-36">
                  {/* Category Section Header */}
                  <div className="border-b-2 border-[#2B1B12]/20 pb-3 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#8B3A2B] tracking-wider uppercase">
                        CATEGORY
                      </span>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2B1B12]">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2B1B12]/70 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold bg-[#2B1B12]/10 text-[#2B1B12] px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {categoryItems.length} items
                    </span>
                  </div>

                  {/* Category Items List with Signature Dotted Leader Line */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {categoryItems.map((item) => {
                      const qtyInCart = getItemCartQuantity(item.id);
                      const hasOptions = item.options && item.options.length > 0;
                      const selectedOptionIdx = selectedPizzaOptions[item.id] || 0;
                      const currentPrice = hasOptions
                        ? item.options![selectedOptionIdx].price
                        : item.price;

                      return (
                        <div
                          key={item.id}
                          className="bg-white p-4 sm:p-5 rounded-xl border border-[#2B1B12]/10 hover:border-[#8B3A2B]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex gap-3 sm:gap-4 items-start">
                              {item.image && (
                                <div className="relative shrink-0 overflow-hidden rounded-xl border border-[#2B1B12]/15 shadow-xs w-16 h-16 sm:w-20 sm:h-20 bg-[#F2E8D5] mt-0.5">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                  />
                                </div>
                              )}

                              <div className="flex-1 min-w-0">
                                {/* Item Name & Signature Dotted Leader Line & Price */}
                                <div className="flex items-baseline w-full gap-2 mb-1">
                                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                                    <h4 className="font-serif-display font-bold text-base sm:text-lg text-[#2B1B12] group-hover:text-[#58241B] transition-colors truncate sm:whitespace-normal">
                                      {item.name}
                                    </h4>
                                    {item.badge && (
                                      <span
                                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                                          item.badge === 'Popular'
                                            ? 'bg-[#58241B]/10 text-[#58241B]'
                                            : item.badge === 'Chef Special'
                                            ? 'bg-amber-800/15 text-amber-900'
                                            : item.badge === 'Low Carb' || item.badge === 'Healthy'
                                            ? 'bg-[#4E5C3B]/20 text-[#4E5C3B]'
                                            : 'bg-[#2B1B12]/10 text-[#2B1B12]'
                                        }`}
                                      >
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>

                                  {/* Dotted Leader Line - Paper Menu Style */}
                                  <span className="flex-1 border-b-2 border-dotted border-[#2B1B12]/25 h-0 mx-1 relative -top-1 hidden sm:block" />

                                  {/* Monospace Price Display */}
                                  <span className="font-mono font-bold text-base sm:text-lg text-[#58241B] whitespace-nowrap ml-auto sm:ml-0">
                                    KSh {currentPrice.toLocaleString()}
                                  </span>
                                </div>

                                {/* Item Description */}
                                {item.description && (
                                  <p className="text-xs sm:text-sm text-[#2B1B12]/70 leading-relaxed mb-3">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Options Selector for Pizza or Multi-size items */}
                            {hasOptions && (
                              <div className="mt-2 mb-3 bg-[#FAF8F4] p-2 rounded-lg border border-[#2B1B12]/10 flex items-center justify-between gap-2">
                                <span className="text-xs font-medium text-[#2B1B12]/70">Size Options:</span>
                                <div className="flex gap-1.5 flex-wrap">
                                  {item.options!.map((opt, idx) => (
                                    <button
                                      key={opt.name}
                                      onClick={() => handleOptionChange(item.id, idx)}
                                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold transition-all ${
                                        selectedOptionIdx === idx
                                          ? 'bg-[#58241B] text-[#F2E8D5] shadow-xs'
                                          : 'bg-white text-[#2B1B12] hover:bg-black/5 border border-black/10'
                                      }`}
                                    >
                                      {opt.name} <span className="opacity-90">(KSh {opt.price})</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#2B1B12]/5">
                            <span className="text-[11px] text-[#2B1B12]/50 font-mono">
                              Fresh Open-Kitchen
                            </span>

                            <button
                              onClick={() => handleAddToCart(item)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 transition-all shadow-xs active:scale-95 ${
                                qtyInCart > 0
                                  ? 'bg-[#4E5C3B] text-[#F2E8D5] hover:bg-[#5C6D46]'
                                  : 'bg-[#58241B] text-[#F2E8D5] hover:bg-[#6E2E23]'
                              }`}
                            >
                              {qtyInCart > 0 ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Added ({qtyInCart}) +</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add to Order</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
