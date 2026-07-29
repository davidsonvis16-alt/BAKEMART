import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageSquare, MapPin, Truck, Store, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalAmount,
    deliveryMode,
    setDeliveryMode,
    deliveryAddress,
    setDeliveryAddress,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    orderNotes,
    setOrderNotes,
    generateWhatsAppUrl
  } = useCart();

  if (!isOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const url = generateWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#2B1B12] text-[#F2E8D5] shadow-2xl flex flex-col justify-between border-l border-[#8B3A2B]/30">
          
          {/* Header */}
          <div className="p-5 bg-[#1F130D] border-b border-[#8B3A2B]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#8B3A2B] text-white rounded-lg">
                <ShoppingBag className="w-5 h-5 text-[#F2E8D5]" />
              </div>
              <div>
                <h2 className="font-serif-display font-bold text-xl text-[#F2E8D5]">Your Order</h2>
                <p className="text-xs text-[#E8B4A0]">BakeMart Coffee House Nakuru</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#F2E8D5]/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8B3A2B]/20 text-[#E8B4A0] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display font-bold text-xl text-[#F2E8D5]">Your cart is empty</h3>
                <p className="text-sm text-[#F2E8D5]/70 max-w-xs mx-auto">
                  Browse our open-kitchen menu and add delicious milkshakes, pizzas, burgers, or BBQ platters!
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#8B3A2B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:bg-[#8B3A2B]/90"
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono text-[#E8B4A0] border-b border-white/10 pb-2">
                    <span>ITEM SUMMARY</span>
                    <button
                      onClick={clearCart}
                      className="text-red-400 hover:underline flex items-center gap-1"
                    >
                      Clear All
                    </button>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#1F130D] p-3.5 rounded-xl border border-[#8B3A2B]/20 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif-display font-bold text-sm text-[#F2E8D5] truncate">
                          {item.name}
                        </h4>
                        {item.selectedOption && (
                          <span className="text-[11px] font-mono text-[#E8B4A0] block">
                            Option: {item.selectedOption}
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#7A8B5A] font-semibold">
                          KSh {item.price.toLocaleString()} each
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#2B1B12] px-2 py-1 rounded-lg border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#F2E8D5]/70 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono font-bold text-xs w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#F2E8D5]/70 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Total & Remove */}
                      <div className="text-right">
                        <span className="font-mono font-bold text-sm text-[#E8B4A0] block">
                          KSh {(item.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-400/80 hover:text-red-400 mt-1"
                        >
                          <Trash2 className="w-3.5 h-3.5 inline" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Mode Selector */}
                <div className="bg-[#1F130D] p-4 rounded-xl border border-[#8B3A2B]/20 space-y-3">
                  <label className="block text-xs font-mono text-[#E8B4A0] font-bold uppercase">
                    Fulfillment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMode('pickup')}
                      className={`p-3 rounded-lg text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                        deliveryMode === 'pickup'
                          ? 'bg-[#8B3A2B] text-white shadow-md'
                          : 'bg-[#2B1B12] text-[#F2E8D5]/70 hover:text-white'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Self Pickup</span>
                      <span className="text-[10px] font-normal opacity-80">Tropical House</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryMode('delivery')}
                      className={`p-3 rounded-lg text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                        deliveryMode === 'delivery'
                          ? 'bg-[#8B3A2B] text-white shadow-md'
                          : 'bg-[#2B1B12] text-[#F2E8D5]/70 hover:text-white'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Nakuru Delivery</span>
                      <span className="text-[10px] font-normal opacity-80">Direct or Glovo</span>
                    </button>
                  </div>

                  {deliveryMode === 'delivery' && (
                    <div className="pt-2">
                      <label className="block text-xs text-[#F2E8D5]/80 mb-1">
                        Delivery Address in Nakuru City *
                      </label>
                      <input
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="e.g. Milimani, Section 58, Kenyatta Ave, Kiamunyi..."
                        className="w-full bg-[#2B1B12] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                      />
                    </div>
                  )}
                </div>

                {/* Customer Info Form */}
                <div className="bg-[#1F130D] p-4 rounded-xl border border-[#8B3A2B]/20 space-y-3">
                  <label className="block text-xs font-mono text-[#E8B4A0] font-bold uppercase">
                    Customer Details (For WhatsApp Confirmation)
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-[#F2E8D5]/70 mb-1">Your Name</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-[#2B1B12] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-[#F2E8D5]/70 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 0712 345678"
                        className="w-full bg-[#2B1B12] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#F2E8D5]/70 mb-1">Special Preparation Instructions</label>
                    <textarea
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="e.g. Less sugar in milkshake, extra chili kachumbari, well done pizza crust..."
                      rows={2}
                      className="w-full bg-[#2B1B12] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-white/30 focus:border-[#8B3A2B] focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer / Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 bg-[#1F130D] border-t border-[#8B3A2B]/30 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#F2E8D5]/70 text-xs">
                  <span>Subtotal</span>
                  <span className="font-mono">KSh {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#F2E8D5]/70 text-xs">
                  <span>Fulfillment</span>
                  <span>{deliveryMode === 'pickup' ? 'Free Self Pickup' : 'To Be Confirmed on WhatsApp'}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-[#F2E8D5] pt-2 border-t border-white/10">
                  <span>Grand Total</span>
                  <span className="font-mono text-[#E8B4A0]">
                    KSh {totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#4E5C3B] hover:bg-[#5C6D46] text-[#F2E8D5] font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-xl border border-white/10 transition-transform active:scale-98"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Order via WhatsApp (0752 114450)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#F2E8D5]/60 font-mono">
                Clicking opens WhatsApp pre-filled with your order itemization for instant BakeMart kitchen processing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
