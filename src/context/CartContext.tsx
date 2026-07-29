import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (item: MenuItem, selectedOptionName?: string, optionPrice?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  deliveryMode: 'pickup' | 'delivery';
  setDeliveryMode: (mode: 'pickup' | 'delivery') => void;
  deliveryAddress: string;
  setDeliveryAddress: (addr: string) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  generateWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bakemart_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  const addToCart = (item: MenuItem, selectedOptionName?: string, optionPrice?: number) => {
    const finalPrice = optionPrice !== undefined ? optionPrice : item.price;
    const optionLabel = selectedOptionName || '';
    const cartItemId = `${item.id}${optionLabel ? '-' + optionLabel : ''}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            menuItemId: item.id,
            name: item.name,
            selectedOption: optionLabel || undefined,
            price: finalPrice,
            quantity: 1,
            category: item.category
          }
        ];
      }
    });

    // Auto open cart toast or drawer on mobile if desired
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateWhatsAppUrl = () => {
    const phoneNumber = '254752114450'; // BakeMart Official WhatsApp line
    let text = `*NEW ORDER - BAKEMART COFFEE HOUSE*\n`;
    text += `------------------------------------\n`;
    
    if (customerName) text += `*Customer:* ${customerName}\n`;
    if (customerPhone) text += `*Phone:* ${customerPhone}\n`;
    text += `*Service:* ${deliveryMode === 'delivery' ? 'Delivery (Nakuru City)' : 'Self Pickup at Tropical House'}\n`;
    if (deliveryMode === 'delivery' && deliveryAddress) {
      text += `*Delivery Address:* ${deliveryAddress}\n`;
    }
    text += `------------------------------------\n`;
    text += `*ORDER ITEMS:*\n`;

    cart.forEach((item, idx) => {
      const optionText = item.selectedOption ? ` (${item.selectedOption})` : '';
      text += `${idx + 1}. ${item.name}${optionText} x${item.quantity} - KSh ${(item.price * item.quantity).toLocaleString()}\n`;
    });

    text += `------------------------------------\n`;
    text += `*GRAND TOTAL: KSh ${totalAmount.toLocaleString()}*\n`;

    if (orderNotes.trim()) {
      text += `------------------------------------\n`;
      text += `*Special Instructions:* ${orderNotes.trim()}\n`;
    }

    text += `------------------------------------\n`;
    text += `Thank you! Please confirm item availability and estimated time.`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phoneNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
