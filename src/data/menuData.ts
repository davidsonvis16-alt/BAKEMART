import { Category, MenuItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'bakery-desserts',
    name: 'Bakery & Desserts',
    icon: 'Cake',
    description: 'Freshly baked muffins, cakes, waffles, cold cheesecakes and trifles'
  },
  {
    id: 'milkshakes-icecream',
    name: 'Milkshakes & Ice Cream',
    icon: 'Milk',
    description: 'Thick signature milkshakes and Daily Land premium ice cream scoops'
  },
  {
    id: 'hot-cold-drinks',
    name: 'Beverages & Coffee',
    icon: 'Coffee',
    description: 'Espresso coffees, brewed teas, dawa specials, iced drinks and sodas'
  },
  {
    id: 'breakfast',
    name: 'Nakuru Breakfast',
    icon: 'Egg',
    description: 'Fresh eggs, French toast, arrowroots, sweet potatoes and chapatis'
  },
  {
    id: 'mains-meals',
    name: 'Chef Mains & Stews',
    icon: 'UtensilsCrossed',
    description: 'Hearty chicken stew, biryani, pilau, sautee beef and fried rice'
  },
  {
    id: 'light-snacks',
    name: 'Snacks & Burgers',
    icon: 'Beef',
    description: 'Beef burger & chips, samosa specials, wings, chips masala and mshikaki'
  },
  {
    id: 'kienyeji-traditional',
    name: 'Kienyeji Specials',
    icon: 'Flame',
    description: 'Authentic Kenyan Mukimo, Matoke, Githeri, Omena, and Uji Power'
  },
  {
    id: 'pizza-pasta',
    name: 'Italian Pizza & Pastas',
    icon: 'Pizza',
    description: 'Open-kitchen hand-stretched pizzas, bolognese, penne and traditional pies'
  },
  {
    id: 'sandwiches-wraps',
    name: 'Sandwiches & Wraps',
    icon: 'Sandwich',
    description: 'Toasted beef, chicken, tuna sandwiches and filled chapati wraps'
  },
  {
    id: 'bbq-platters',
    name: 'Barbecue Platters',
    icon: 'Drumstick',
    description: 'Sizzling Mbuzi Choma and Kuku Choma platters for sharing'
  },
  {
    id: 'low-carb-healthy',
    name: 'Healthy & Low-Carb',
    icon: 'Leaf',
    description: 'No oil, no sugar wholesome meals prepared fresh from local ingredients'
  },
  {
    id: 'soups-salads',
    name: 'Soups & Salads',
    icon: 'Soup',
    description: 'Fresh kachumbari, garden salads, bone soup and mushroom soup'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // BAKERY & DESSERTS
  { id: 'b1', name: 'Assorted English Muffins', category: 'bakery-desserts', price: 40, description: 'Freshly baked individual muffin' },
  { id: 'b2', name: 'Butter Cookies (1pc)', category: 'bakery-desserts', price: 10, description: 'Crisp rich butter cookie' },
  { id: 'b3', name: 'Butter Cookies (10pc packet)', category: 'bakery-desserts', price: 150, description: 'Freshly packed butter cookies' },
  { id: 'b4', name: 'Butter Cookies (16pc packet)', category: 'bakery-desserts', price: 200, description: 'Family pack crisp butter cookies' },
  { id: 'b5', name: 'English Tea Cake', category: 'bakery-desserts', price: 80, description: 'Classic buttery tea slice' },
  { id: 'b6', name: 'Creamed Rich Cake', category: 'bakery-desserts', price: 100, description: 'Moist vanilla creamed cake slice' },
  { id: 'b7', name: 'Black Forest Cake', category: 'bakery-desserts', price: 200, badge: 'Popular', description: 'Rich chocolate sponge with cherries and cream' },
  { id: 'b8', name: 'White Forest Cake', category: 'bakery-desserts', price: 200, description: 'Vanilla cake layered with whipped cream and white chocolate shavings' },
  { id: 'b9', name: 'Red Velvet Cake Slice', category: 'bakery-desserts', price: 200, badge: 'Popular', description: 'Silky red velvet cake slice with cream cheese frosting' },
  { id: 'b10', name: 'Caramel Cake Slice', category: 'bakery-desserts', price: 200, description: 'Decadent salted caramel glazed sponge' },
  { id: 'b11', name: 'Chocolate Fudge Cake', category: 'bakery-desserts', price: 250, badge: 'Chef Special', description: 'Rich gooey dark chocolate fudge cake' },
  { id: 'b12', name: 'Cheese Cake (Cold)', category: 'bakery-desserts', price: 250, badge: 'Popular', description: 'Creamy cold setting cheesecake with fruit topping' },
  { id: 'b13', name: 'Chocolate & Vanilla Swiss Roll', category: 'bakery-desserts', price: 200, description: 'Soft rolled sponge filled with sweet vanilla cream' },
  { id: 'b14', name: 'Tiramisu Cake Slice', category: 'bakery-desserts', price: 250, description: 'Italian coffee layered dessert slice' },
  { id: 'b15', name: 'Strawberry Cake Slice', category: 'bakery-desserts', price: 200, description: 'Fresh strawberry layered sponge cake' },

  // DESSERTS & WAFFLES & TRIFFLES
  { id: 'd1', name: 'CoupJack (Fruits & Ice Cream)', category: 'bakery-desserts', price: 400, description: 'Tropical fresh fruit medley topped with premium ice cream' },
  { id: 'd2', name: 'Banana Split', category: 'bakery-desserts', price: 400, description: 'Split ripe banana with 3 scoops ice cream, chocolate drizzle and cherries' },
  { id: 'd3', name: 'Tropical Fruits Salad', category: 'bakery-desserts', price: 400, description: 'Fresh Nakuru local seasonal fruits in natural juice' },
  { id: 'd4', name: 'Bakemart Apple Delight', category: 'bakery-desserts', price: 400, badge: 'Chef Special', description: 'Warm baked spiced apples topped with cold vanilla scoop' },
  { id: 'w1', name: 'Vanilla Waffle', category: 'bakery-desserts', price: 350, description: 'Freshly ironed golden waffle with maple drizzle' },
  { id: 'w2', name: 'Chocolate Waffle', category: 'bakery-desserts', price: 350, description: 'Crisp cocoa waffle with hot fudge' },
  { id: 'w3', name: 'Red Velvet Waffle', category: 'bakery-desserts', price: 350, description: 'Signature red velvet waffle with cream sauce' },
  { id: 'w4', name: 'Peanut Butter Waffle', category: 'bakery-desserts', price: 400, description: 'Creamy peanut butter drizzle and crushed nuts' },
  { id: 'w5', name: 'Vegetable Waffle', category: 'bakery-desserts', price: 350, description: 'Savory herb waffle' },
  { id: 'w6', name: 'Waffle Topped with Ice Cream', category: 'bakery-desserts', price: 550, badge: 'Popular', description: 'Warm waffle topped with 2 large scoops of premium ice cream' },
  { id: 'tr1', name: 'Chocolate Triffle', category: 'bakery-desserts', price: 350, description: 'Layered chocolate pudding, sponge and whipped cream' },
  { id: 'tr2', name: 'Fruit Triffle', category: 'bakery-desserts', price: 350, description: 'Custard layered with fresh fruit and soft cake' },
  { id: 'tr3', name: 'Mocca Triffle', category: 'bakery-desserts', price: 350, description: 'Espresso infused dessert layer cup' },
  { id: 'tr4', name: 'Caramel Triffle', category: 'bakery-desserts', price: 350, description: 'Rich buttery caramel layered dessert' },

  // MILKSHAKES & ICE CREAM
  { id: 'm1', name: 'Strawberry Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Strawberry, vanilla ice cream & fresh milk', badge: 'Popular' },
  { id: 'm2', name: 'Banana Honey Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Ripe banana, vanilla ice cream & natural honey' },
  { id: 'm3', name: 'Dates Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Sweet Arabian dates blended with vanilla ice cream' },
  { id: 'm4', name: 'Elizabeth Milkshake', category: 'milkshakes-icecream', price: 500, badge: 'Chef Special', description: 'Fresh avocado, vanilla ice cream & strawberry swirl' },
  { id: 'm5', name: 'Flavor Raver Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Tropical mango, strawberry & vanilla blend' },
  { id: 'm6', name: 'Mocca Coffee Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Espresso coffee shot blended with creamy chocolate ice cream' },
  { id: 'm7', name: 'Chocolate Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Rich chocolate syrup, cocoa & double cream ice cream' },
  { id: 'm8', name: 'Classic Vanilla Milkshake', category: 'milkshakes-icecream', price: 500, description: 'Pure vanilla pod extract, whole milk & vanilla ice cream' },

  // ICE CREAM
  { id: 'ic1', name: 'Vanilla Scoop (Daily Land)', category: 'milkshakes-icecream', price: 250, description: 'Premium Daily Land vanilla scoop' },
  { id: 'ic2', name: 'Chocolate Scoop (Daily Land)', category: 'milkshakes-icecream', price: 250, description: 'Rich dark chocolate ice cream scoop' },
  { id: 'ic3', name: 'Strawberry Scoop (Daily Land)', category: 'milkshakes-icecream', price: 250, description: 'Berry creamy strawberry scoop' },
  { id: 'ic4', name: 'Pina Colada Scoop (Daily Land)', category: 'milkshakes-icecream', price: 250, description: 'Pineapple and coconut infused ice cream scoop' },
  { id: 'ic5', name: 'Cassata (3 Scoops)', category: 'milkshakes-icecream', price: 300, description: 'Traditional 3-layer ice cream slice with candied fruits' },
  { id: 'ic6', name: 'Deep Fried Ice Cream', category: 'milkshakes-icecream', price: 250, badge: 'Popular', description: 'Crispy warm outer crust around a freezing ice cream center' },

  // HOT & COLD BEVERAGES
  { id: 'hb1', name: 'White Coffee', category: 'hot-cold-drinks', price: 250, description: 'Fresh Nakuru roast coffee with steamed whole milk' },
  { id: 'hb2', name: 'Black Coffee', category: 'hot-cold-drinks', price: 250, description: 'Freshly brewed aromatic dark roast coffee' },
  { id: 'hb3', name: 'White Chocolate Hot Drink', category: 'hot-cold-drinks', price: 250, description: 'Velvety melted white chocolate with hot milk' },
  { id: 'hb4', name: 'Instant Baristo Tea', category: 'hot-cold-drinks', price: 250, description: 'Rich barista style spiced milk tea' },
  { id: 'hb5', name: 'Mixed Tea Brew Cup', category: 'hot-cold-drinks', price: 100, description: 'Traditional Kenyan brewed milk tea cup' },
  { id: 'hb6', name: 'Masala Tea Brew', category: 'hot-cold-drinks', price: 150, description: 'Milk tea infused with cardamon, ginger, cloves and cinnamon' },
  { id: 'hb7', name: 'Dawa Special Brew', category: 'hot-cold-drinks', price: 250, badge: 'Popular', description: 'Hot lemon, natural ginger, garlic & pure honey immunity elixir' },
  { id: 'hb8', name: 'Black Tea', category: 'hot-cold-drinks', price: 100, description: 'Steeped Kenyan tea leaves cup' },
  { id: 'hb9', name: 'Lemon Tea', category: 'hot-cold-drinks', price: 100, description: 'Hot black tea infused with fresh lemon juice' },
  { id: 'hb10', name: 'Hot Lemon Water', category: 'hot-cold-drinks', price: 70, description: 'Pure hot water with freshly squeezed lemon' },
  { id: 'hb11', name: 'Milo White', category: 'hot-cold-drinks', price: 200, description: 'Hot malted chocolate drink with whole milk' },
  { id: 'hb12', name: 'Mixed Tea (Heavy Brew)', category: 'hot-cold-drinks', price: 150, description: 'Concentrated full-cream brewed tea' },

  // COLD DRINKS
  { id: 'cd1', name: 'Soda 300ml Glass Bottle', category: 'hot-cold-drinks', price: 60, description: 'Cold Coca-Cola, Fanta, Sprite or Stoney' },
  { id: 'cd2', name: 'Soda 500ml Glass Bottle', category: 'hot-cold-drinks', price: 80, description: 'Chilled 500ml soda' },
  { id: 'cd3', name: 'PET Soda 500ml Bottle', category: 'hot-cold-drinks', price: 90, description: 'Takeaway plastic bottle soda' },
  { id: 'cd4', name: 'Monster Energy Drink', category: 'hot-cold-drinks', price: 300, description: '500ml Monster energy can' },
  { id: 'cd5', name: 'Red Bull Energy Drink', category: 'hot-cold-drinks', price: 250, description: 'Chilled Red Bull 250ml can' },
  { id: 'cd6', name: 'Iced Tea', category: 'hot-cold-drinks', price: 250, description: 'House brewed chilled black tea with peach or lemon' },
  { id: 'cd7', name: 'Iced Coffee', category: 'hot-cold-drinks', price: 300, description: 'Double espresso over ice with milk and vanilla syrup' },
  { id: 'cd8', name: 'Frappuccino', category: 'hot-cold-drinks', price: 350, badge: 'Popular', description: 'Blended iced coffee topped with whipped cream' },
  { id: 'cd9', name: 'Delmonte Fruit Juice 1L', category: 'hot-cold-drinks', price: 350, description: 'Tropical fruit juice box' },
  { id: 'cd10', name: 'Mineral Water 0.5L', category: 'hot-cold-drinks', price: 50, description: 'Chilled pure drinking water' },
  { id: 'cd11', name: 'Mineral Water 1.0L', category: 'hot-cold-drinks', price: 90, description: '1 Liter bottled water' },
  { id: 'cd12', name: 'Mineral Water 1.5L', category: 'hot-cold-drinks', price: 100, description: 'Large 1.5 Liter bottled water' },

  // BREAKFAST
  { id: 'br1', name: 'French Toast Special', category: 'breakfast', price: 400, badge: 'Popular', description: 'Golden French toast served with beef sausage and 2 eggs' },
  { id: 'br2', name: 'Eggs Omelette', category: 'breakfast', price: 350, description: 'Double egg omelette with onions, tomatoes and green pepper' },
  { id: 'br3', name: 'Triple Eggs Omelette', category: 'breakfast', price: 400, description: 'Hearty 3-egg omelette loaded with herbs' },
  { id: 'br4', name: 'Boiled Eggs (2 pcs)', category: 'breakfast', price: 100, description: 'Pair of hard or soft boiled eggs with kachumbari' },
  { id: 'br5', name: 'Beef Sausage (Pair)', category: 'breakfast', price: 100, description: 'Sizzling fried beef sausages' },
  { id: 'br6', name: 'Double Fried Eggs', category: 'breakfast', price: 200, description: 'Two sunny-side or fried eggs' },
  { id: 'br7', name: 'Nduma (Steamed Arrowroots)', category: 'breakfast', price: 250, badge: 'Healthy', description: 'Boiled indigenous Nakuru arrowroot roots' },
  { id: 'br8', name: 'Ngwaci (Sweet Potatoes)', category: 'breakfast', price: 200, badge: 'Healthy', description: 'Naturally sweet steamed orange & white sweet potatoes' },
  { id: 'br9', name: 'Steamed Cassava', category: 'breakfast', price: 200, description: 'Soft boiled cassava served with chili butter' },
  { id: 'br10', name: 'Sweet Breakfast Waffles', category: 'breakfast', price: 350, description: 'Golden crispy waffles served with syrup' },
  { id: 'br11', name: 'Vegetarian Waffles', category: 'breakfast', price: 350, description: 'Savory waffles with sautéed spinach and tomatoes' },
  { id: 'br12', name: 'Samosa (Beef/Veg - Pair)', category: 'breakfast', price: 100, description: 'Crispy fried pastry triangles with spiced filling' },
  { id: 'br13', name: 'Fluffy Pancakes (3 pcs)', category: 'breakfast', price: 200, description: 'Stack of sweet buttermilk pancakes' },
  { id: 'br14', name: 'Mixed Wedges (Potatoes & Nduma)', category: 'breakfast', price: 300, description: 'Fried potato and arrowroot wedges' },
  { id: 'br15', name: 'Soft Layered Chapati', category: 'breakfast', price: 100, description: 'Traditional flaky Kenyan layered chapati' },
  { id: 'br16', name: 'Vegetable Sandwich', category: 'breakfast', price: 200, description: 'Toasted bread filled with cucumber, tomatoes and lettuce' },
  { id: 'br17', name: 'Smocha (Chapati & Smokie)', category: 'breakfast', price: 250, badge: 'Popular', description: 'Warm chapati wrapped around a smokie sausage with kachumbari' },

  // MAINS & MEALS
  { id: 'm1_1', name: 'Ugali & Greens (Managu/Spinach)', category: 'mains-meals', price: 250, description: 'Traditional ugali served with sautéed indigenous greens' },
  { id: 'm1_2', name: 'Ugali Beef Stew', category: 'mains-meals', price: 500, badge: 'Popular', description: 'Tender beef chunks in rich tomato gravy with white ugali' },
  { id: 'm1_3', name: 'Ugali Chicken Stew', category: 'mains-meals', price: 600, description: 'Slow cooked farm chicken in spiced curry gravy with ugali' },
  { id: 'm1_4', name: 'Ugali Fried Double Egg', category: 'mains-meals', price: 350, description: 'Pan fried eggs served with hot ugali and kachumbari' },
  { id: 'm1_5', name: 'Brown Ugali & Greens', category: 'mains-meals', price: 250, badge: 'Low Carb', description: 'Wholesome millet/sorghum ugali with sautéed greens' },
  { id: 'm1_6', name: 'Rice Chicken Stew', category: 'mains-meals', price: 650, description: 'Steamed pishori rice served with savory chicken stew' },
  { id: 'm1_7', name: 'Sautee Potatoes with Beef', category: 'mains-meals', price: 600, description: 'Crispy cubed potatoes sautéed with spicy beef strip gravy' },
  { id: 'm1_8', name: 'Chapati Beef & Greens', category: 'mains-meals', price: 550, description: 'Two layered chapatis with beef stew and managu' },
  { id: 'm1_9', name: 'Pilau Plain', category: 'mains-meals', price: 300, description: 'Fragrant Swahili spiced rice served with kachumbari' },
  { id: 'm1_10', name: 'Kienyeji Kuku Ugali', category: 'mains-meals', price: 600, badge: 'Chef Special', description: 'Authentic free-range local chicken stew served with ugali' },
  { id: 'm2_1', name: 'Keema Minced Beef with Minji & Chapati', category: 'mains-meals', price: 450, badge: 'Popular', description: 'Spiced minced beef cooked with green peas served with 2 chapatis' },
  { id: 'm2_2', name: 'Chicken Tikka Masala', category: 'mains-meals', price: 550, description: 'Roasted chicken tikka in thick aromatic cream tomato masala' },
  { id: 'm2_3', name: 'Beef Chilli Stirfry with Ugali', category: 'mains-meals', price: 550, description: 'Sizzling beef strip stir fry with bell peppers and hot ugali' },
  { id: 'm2_4', name: 'Egg Biryani', category: 'mains-meals', price: 450, description: 'Basmati rice layered with spiced boiled eggs and biryani sauce' },
  { id: 'm2_5', name: 'Chicken Biryani', category: 'mains-meals', price: 650, badge: 'Popular', description: 'Aromatic basmati rice cooked with marinated chicken and Swahili spices' },
  { id: 'm2_6', name: 'Vegetable Biryani', category: 'mains-meals', price: 450, description: 'Saffron rice with garden vegetables and biryani masala' },
  { id: 'm2_7', name: 'Mutton Biryani', category: 'mains-meals', price: 650, description: 'Tender goat mutton cooked in authentic biryani gravy' },
  { id: 'm2_8', name: 'Ugali Omena', category: 'mains-meals', price: 350, description: 'Crispy fried Lake Victoria silver cyprinid in tomato garlic stew with ugali' },
  { id: 'm2_9', name: 'Ugali Maini (Pan Fried Liver)', category: 'mains-meals', price: 650, badge: 'Chef Special', description: 'Tender beef liver sautéed with caramelized onions served with ugali' },
  { id: 'm2_10', name: 'Pilau Beef', category: 'mains-meals', price: 550, badge: 'Popular', description: 'Rich Swahili spiced beef rice served with kachumbari' },
  { id: 'm2_11', name: 'Pilau Kuku', category: 'mains-meals', price: 650, description: 'Spiced pilau rice cooked with tender chicken pieces' },
  { id: 'm2_12', name: 'Chicken Fried Rice', category: 'mains-meals', price: 650, description: 'Wok tossed rice with shredded chicken, veggies and soy' },
  { id: 'm2_13', name: 'Fried Rice Beef', category: 'mains-meals', price: 550, description: 'Savory fried rice with beef cubes and spring onions' },
  { id: 'm2_14', name: 'Chips Masala Beef', category: 'mains-meals', price: 550, description: 'Spicy masala chips topped with tender beef gravy' },
  { id: 'm2_15', name: 'Cassava Beef Stew', category: 'mains-meals', price: 450, description: 'Boiled cassava tossed in rich beef stew' },
  { id: 'm2_16', name: 'Cassava Greens', category: 'mains-meals', price: 300, description: 'Steamed cassava with managu & spinach' },

  // LIGHT MEALS & SNACKS
  { id: 's1', name: 'Samosa Special (3 pcs with Chips)', category: 'light-snacks', price: 350, description: '3 golden beef samosas served with crispy chips and kachumbari' },
  { id: 's2', name: 'Sausage Special (2 pcs with Chips)', category: 'light-snacks', price: 350, description: '2 fried beef sausages served with chips' },
  { id: 's3', name: 'Chicken Wings Special (6 pcs)', category: 'light-snacks', price: 480, badge: 'Popular', description: 'Sticky BBQ or spicy buffalo chicken wings with dipping sauce' },
  { id: 's4', name: 'Fried Eggs Special with Chips', category: 'light-snacks', price: 350, description: '2 fried eggs over French fries' },
  { id: 's5', name: 'Beef Burger & Chips', category: 'light-snacks', price: 580, badge: 'Popular', description: 'Handcrafted beef patty, cheddar, lettuce, tomato & house sauce with golden chips' },
  { id: 's6', name: 'Chips Masala', category: 'light-snacks', price: 400, description: 'French fries tossed in tomato chili masala garlic sauce' },
  { id: 's7', name: 'Classic Chips (French Fries)', category: 'light-snacks', price: 300, description: 'Crispy golden potato fries' },
  { id: 's8', name: 'Smokie Special with Chips', category: 'light-snacks', price: 350, description: 'Pair of smokies with kachumbari & chips' },
  { id: 's9', name: 'Chips Kubwa (Large Chips)', category: 'light-snacks', price: 400, description: 'Extra large portion of French fries' },
  { id: 's10', name: 'Home Fries', category: 'light-snacks', price: 500, description: 'Hand cut seasoned potato wedges pan fried with herbs' },
  { id: 's11', name: 'Chapati Roll', category: 'light-snacks', price: 250, description: 'Flaky chapati wrapped with seasoned scrambled eggs' },
  { id: 's12', name: 'Mixed Grill Skewers (Mshikaki)', category: 'light-snacks', price: 400, badge: 'Chef Special', description: '3 skewers of marinated grilled beef and chicken with pepper sauce' },

  // KIENYEJI TRADITIONAL
  { id: 'k1', name: 'Githeri Special with Beef', category: 'kienyeji-traditional', price: 400, description: 'Traditional corn and beans stew cooked with beef cubes' },
  { id: 'k2', name: 'Mukimo Maize Beef', category: 'kienyeji-traditional', price: 550, badge: 'Popular', description: 'Traditional mashed potatoes, maize, pumpkin leaves served with beef stew' },
  { id: 'k3', name: 'Matoke Stew Beef', category: 'kienyeji-traditional', price: 550, description: 'Green plantain banana stew slow cooked with tender beef' },
  { id: 'k4', name: 'Mashed Potatoes Beef', category: 'kienyeji-traditional', price: 550, description: 'Creamy potato mash served with beef stew' },
  { id: 'k5', name: 'Mashed Potatoes Kuku', category: 'kienyeji-traditional', price: 600, description: 'Creamy mash served with chicken stew' },
  { id: 'k6', name: 'Mashed Matoke Kuku', category: 'kienyeji-traditional', price: 650, description: 'Steamed mashed plantain bananas served with chicken gravy' },
  { id: 'k7', name: 'Ndengu Stew with Rice or Chapati', category: 'kienyeji-traditional', price: 350, description: 'Green grams lentil stew served with rice or 2 chapatis' },
  { id: 'k8', name: 'Njahi Stew with Rice or Chapati', category: 'kienyeji-traditional', price: 350, badge: 'Healthy', description: 'Nutritious black turtle bean stew served with rice or chapati' },
  { id: 'k9', name: 'Uji Wimbi (Traditional Porridge)', category: 'kienyeji-traditional', price: 400, description: 'Nutritious fermented finger millet porridge (half flask)' },
  { id: 'k10', name: 'Uji Power (Cassava & Groundnut Brew)', category: 'kienyeji-traditional', price: 150, badge: 'Popular', description: 'Energy packed cassava, peanut and milk traditional drink' },
  { id: 'k11', name: 'Ugali Samaki Greens', category: 'kienyeji-traditional', price: 500, description: 'Deep fried Tilapia fish served with hot ugali and managu' },
  { id: 'k12', name: 'Nduma Greens', category: 'kienyeji-traditional', price: 350, description: 'Steamed arrowroots with sautéed traditional spinach' },
  { id: 'k13', name: 'Githeri Greens (Vegetarian)', category: 'kienyeji-traditional', price: 250, description: 'Corn and bean stew cooked with fresh spinach and carrots' },
  { id: 'k14', name: 'Coconut Mbaazi with Chapati', category: 'kienyeji-traditional', price: 400, description: 'Swahili pigeon peas cooked in rich coconut cream with 2 chapatis' },

  // BARBECUE PLATTER FOR 2
  {
    id: 'bbq1',
    name: 'Barbecue Platter #1 (Serves 2)',
    category: 'bbq-platters',
    price: 1500,
    badge: 'Chef Special',
    description: 'Sizzling Mbuzi Choma (Grilled Goat), Kuku Choma (Grilled Chicken), Beef Sausages, Chips, Wedges, Ugali, Chapati, Salad & House Sauce'
  },
  {
    id: 'bbq2',
    name: 'Barbecue Grand Feast #2 (Serves 2-3)',
    category: 'bbq-platters',
    price: 2000,
    badge: 'Popular',
    description: 'Generous Mbuzi Choma, Kuku Choma, Swahili Beef Pilau, Wedges, Sausages, Chips Masala, Fried Cassava, Kienyeji Greens & Chilli Sauce'
  },

  // PIZZA & PASTA
  {
    id: 'p1',
    name: 'Margarita Pizza',
    category: 'pizza-pasta',
    price: 1000,
    description: 'Classic open-kitchen pizza with fresh tomato sauce, mozzarella cheese & oregano',
    options: [
      { name: 'Medium (10")', price: 1000 },
      { name: 'Large (12")', price: 1250 }
    ]
  },
  {
    id: 'p2',
    name: 'Chicken Tikka Pizza',
    category: 'pizza-pasta',
    price: 1100,
    badge: 'Popular',
    description: 'Marinated tikka chicken strips, bell peppers, mozzarella and spiced tomato base',
    options: [
      { name: 'Medium (10")', price: 1100 },
      { name: 'Large (12")', price: 1450 }
    ]
  },
  {
    id: 'p3',
    name: 'Vegetable Feast Pizza',
    category: 'pizza-pasta',
    price: 1000,
    description: 'Capsicum, red onion, sweetcorn, mushrooms, black olives & mozzarella',
    options: [
      { name: 'Medium (10")', price: 1000 },
      { name: 'Large (12")', price: 1250 }
    ]
  },
  {
    id: 'p4',
    name: 'Chicken Hawaii Pizza',
    category: 'pizza-pasta',
    price: 1100,
    description: 'Tender chicken pieces, sweet pineapple chunks and melted cheese',
    options: [
      { name: 'Medium (10")', price: 1100 },
      { name: 'Large (12")', price: 1450 }
    ]
  },
  {
    id: 'p5',
    name: 'Fiorentina Pizza',
    category: 'pizza-pasta',
    price: 1000,
    description: 'Fresh spinach, black pepper, garlic drizzle and creamy mozzarella',
    options: [
      { name: 'Medium (10")', price: 1000 },
      { name: 'Large (12")', price: 1250 }
    ]
  },
  {
    id: 'p6',
    name: 'Spicy Arezzo Pizza',
    category: 'pizza-pasta',
    price: 1000,
    description: 'Spiced minced beef, jalapeños, onions and red chili sauce',
    options: [
      { name: 'Medium (10")', price: 1000 },
      { name: 'Large (12")', price: 1250 }
    ]
  },
  {
    id: 'p7',
    name: 'Mix Barbeque Pizza',
    category: 'pizza-pasta',
    price: 1100,
    badge: 'Popular',
    description: 'Loaded with BBQ chicken strips, beef cubes, sweet corn & smokey sauce',
    options: [
      { name: 'Medium (10")', price: 1100 },
      { name: 'Large (12")', price: 1450 }
    ]
  },
  {
    id: 'p8',
    name: 'Garlic Bread with Cheese',
    category: 'pizza-pasta',
    price: 200,
    description: 'Freshly baked pizza dough brushed with herb garlic butter & mozzarella',
    options: [
      { name: 'Medium', price: 200 },
      { name: 'Large', price: 350 }
    ]
  },
  { id: 'pas1', name: 'Spaghetti Bolognese', category: 'pizza-pasta', price: 350, description: 'Al dente spaghetti in slow simmered Italian minced beef tomato sauce' },
  { id: 'pas2', name: 'Penne Pasta Napolitana', category: 'pizza-pasta', price: 400, description: 'Penne tubes tossed in garlic tomato basil sauce' },
  { id: 'pas3', name: 'Penne Pasta with Beef Stroganoff', category: 'pizza-pasta', price: 500, badge: 'Popular', description: 'Creamy mushroom and beef strip sauce served over penne' },
  { id: 'pas4', name: 'Quick Egg Noodles', category: 'pizza-pasta', price: 150, description: 'Pan fried egg noodles with soy & spring onion' },
  { id: 'pas5', name: 'Chef John Traditional Meat Pie', category: 'pizza-pasta', price: 350, badge: 'Chef Special', description: 'Flaky baked golden pastry pie filled with seasoned minced beef' },

  // SANDWICHES & WRAPS
  { id: 'wr1', name: 'Eggs Chapati Wrap', category: 'sandwiches-wraps', price: 250, description: 'Soft chapati rolled with spiced herb omelette' },
  { id: 'wr2', name: 'Hot Dog Chapati Wrap', category: 'sandwiches-wraps', price: 250, description: 'Smokie sausage rolled with chapati & mustard kachumbari' },
  { id: 'wr3', name: 'Vegetable Chapati Wrap', category: 'sandwiches-wraps', price: 250, description: 'Sautéed capsicum, sweetcorn & shredded cabbage wrap' },
  { id: 'wr4', name: 'Keema Minced Beef Wrap', category: 'sandwiches-wraps', price: 400, description: 'Juicy spiced minced beef rolled in warm layered chapati' },
  { id: 'wr5', name: 'Mixed-Grill Chicken Wrap', category: 'sandwiches-wraps', price: 450, badge: 'Popular', description: 'Grilled chicken strips, peppers and garlic mayo in chapati' },
  { id: 'sw1', name: 'Beef Toasted Sandwich', category: 'sandwiches-wraps', price: 350, description: 'Toasted bread loaded with sliced roast beef & mayo' },
  { id: 'sw2', name: 'Chicken Mayo Sandwich', category: 'sandwiches-wraps', price: 400, badge: 'Popular', description: 'Shredded chicken breast with creamy mayo and lettuce' },
  { id: 'sw3', name: 'Ham & Cheese Sandwich', category: 'sandwiches-wraps', price: 400, description: 'Classic ham slice and melted cheddar cheese toastie' },
  { id: 'sw4', name: 'Double Cheese Sandwich', category: 'sandwiches-wraps', price: 400, description: 'Melted cheddar and mozzarella triple decker toast' },
  { id: 'sw5', name: 'Tuna Mayo Sandwich', category: 'sandwiches-wraps', price: 450, description: 'Flaked tuna, capers, sweetcorn & light mayonnaise' },
  { id: 'sw6', name: 'Hot Dog Sandwich', category: 'sandwiches-wraps', price: 400, description: 'Jumbo beef sausage in long bun with caramelized onions' },
  { id: 'sw7', name: 'Kebab Sandwich', category: 'sandwiches-wraps', price: 250, description: 'Minced beef kebab patty in soft bread with tomato' },
  { id: 'sw8', name: 'Egg Toast Sandwich', category: 'sandwiches-wraps', price: 400, description: 'Fried egg, bacon/beef slice and tomato on thick toasted bread' },

  // LOW CARB / NO OIL / NO SUGAR
  { id: 'lc1', name: 'Pan Fried Liver, Kienyeji Greens & Brown Ugali', category: 'low-carb-healthy', price: 600, badge: 'Low Carb', description: 'Lean beef liver pan-cooked without oil, indigenous managu greens and whole millet brown ugali' },
  { id: 'lc2', name: 'Njahi Stew, Steamed Cabbage & Brown Rice', category: 'low-carb-healthy', price: 550, badge: 'Low Carb', description: 'Oil-free black bean stew served with steamed carrot cabbage and brown rice' },
  { id: 'lc3', name: 'Mashed Matoke, Scrambled Eggs & Spinach', category: 'low-carb-healthy', price: 450, badge: 'Healthy', description: 'Steamed plantain mash, oil-free scrambled eggs and fresh steamed spinach' },
  { id: 'lc4', name: 'Boiled Sweet Potatoes, Beans & Greens', category: 'low-carb-healthy', price: 400, badge: 'Low Carb', description: 'Steamed ngwaci, yellow bean stew and managu greens' },
  { id: 'lc5', name: 'Boiled Beef, Green Bananas, Spinach & Rosemary', category: 'low-carb-healthy', price: 500, badge: 'Healthy', description: 'Lean boiled beef broth with matoke, spinach and fresh rosemary' },
  { id: 'lc6', name: 'Beef Stew, Mixed Veges & Pumpkin Cubes', category: 'low-carb-healthy', price: 550, badge: 'Low Carb', description: 'Oil-free tender beef chunks served with steamed pumpkin and broccoli' },
  { id: 'lc7', name: 'Boiled Eggs, Avocado, Spinach & Lentils', category: 'low-carb-healthy', price: 450, badge: 'Healthy', description: 'Protein packed boiled eggs, fresh avocado slices, steamed spinach and brown lentils' },
  { id: 'lc8', name: 'Matoke Minji & Kienyeji Greens', category: 'low-carb-healthy', price: 500, badge: 'Low Carb', description: 'Boiled green bananas cooked with sweet green peas and traditional greens' },
  { id: 'lc9', name: 'Boiled Cassava, Carrot, Eggs & Cabbage', category: 'low-carb-healthy', price: 450, badge: 'Healthy', description: 'Clean boiled cassava, steamed carrots, pan poached egg and cabbage' },
  { id: 'lc10', name: 'Kienyeji Greens, Scrambled Eggs & Nduma', category: 'low-carb-healthy', price: 450, badge: 'Low Carb', description: 'Traditional managu greens, scrambled kienyeji eggs, fresh kachumbari and boiled arrowroot' },

  // SOUPS & SALADS
  { id: 'sp1', name: 'Garden Vegetable Soup', category: 'soups-salads', price: 200, description: 'Clear fresh vegetable broth with celery and herbs' },
  { id: 'sp2', name: 'Chicken Soup', category: 'soups-salads', price: 300, badge: 'Popular', description: 'Warm chicken broth with tender chicken shredding and vegetables' },
  { id: 'sp3', name: 'Rich Beef Broth', category: 'soups-salads', price: 250, description: 'Slow simmered beef bone broth infused with ginger and cilantro' },
  { id: 'sp4', name: 'Cream of Mushroom Soup', category: 'soups-salads', price: 400, description: 'Rich creamy button mushroom soup with garlic croutons' },
  { id: 'sp5', name: 'Bone Soup (Supu ya Supu)', category: 'soups-salads', price: 100, badge: 'Popular', description: 'Traditional piping hot beef bone soup broth' },
  { id: 'sl1', name: 'Garden Salad', category: 'soups-salads', price: 300, description: 'Crisp lettuce, cucumber, tomatoes, bell peppers with vinaigrette' },
  { id: 'sl2', name: 'Chicken Salad', category: 'soups-salads', price: 500, badge: 'Popular', description: 'Grilled chicken strips over fresh garden greens with olive oil dressing' },
  { id: 'sl3', name: 'Tomato & Onion Kachumbari', category: 'soups-salads', price: 250, description: 'Freshly chopped Kenyan tomatoes, red onions, lemon juice & chili' }
];