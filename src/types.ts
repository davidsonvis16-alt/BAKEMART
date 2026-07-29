export interface MenuItemOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: number; // base price or starting price in KSh
  description?: string;
  options?: MenuItemOption[]; // For pizza medium/large, or sizes
  image?: string;
  badge?: 'Popular' | 'Chef Special' | 'Low Carb' | 'Vegetarian' | 'Healthy' | 'New';
  isPopular?: boolean;
}

export type MenuCategoryId = 
  | 'bakery-desserts'
  | 'milkshakes-icecream'
  | 'hot-cold-drinks'
  | 'breakfast'
  | 'mains-meals'
  | 'light-snacks'
  | 'kienyeji-traditional'
  | 'pizza-pasta'
  | 'sandwiches-wraps'
  | 'bbq-platters'
  | 'low-carb-healthy'
  | 'soups-salads';

export interface Category {
  id: MenuCategoryId;
  name: string;
  icon: string;
  description: string;
}

export interface CartItem {
  id: string; // unique item id in cart (item.id + selectedOption)
  menuItemId: string;
  name: string;
  selectedOption?: string; // e.g. "Medium" or "Large"
  price: number;
  quantity: number;
  notes?: string;
  category: MenuCategoryId;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: string;
  specialRequests?: string;
}
