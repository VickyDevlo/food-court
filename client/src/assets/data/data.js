import { ChefHat, Leaf, Zap, Heart, Star, Clock, Utensils } from "lucide-react";

// ====== EDIT THESE ======
export const CAFE = {
  handle: "your_handle", // Instagram username
  address: "12, Main Road, Gandhinagar, Gujrat - 600001",
  phone: "+91 98765 43210",
  email: "hello@chilichillfoodcourt.com",
  mapQuery: "Chili & Chill Food Court, Your City", // what Google Maps should search for
  hours: [
    {
      label: "Monday - Sunday",
      time: "10:00 AM - 10:00 PM",
    },
  ],
};
// =========================

export const FACTS = [
  [Star, "4.8 rating from 2,000+ guestss"],
  [Clock, "Ready in about 15 minutes"],
  [Utensils, "Dine in, take away or delivery"],
];

export const POINTS = [
  "Every sauce, dressing and patty is made in our own kitchen",
  "Comfortable seating for families, friends and laptop workers",
  "Vegetarian and non-vegetarian menus prepared separately",
];

export const TONE = [
  "bg-chili text-paper md:col-span-4",
  "bg-turmeric md:col-span-2",
  "bg-leaf text-paper md:col-span-2",
  "bg-paper md:col-span-4",
];

export const INSTAGRAM_URL = `https://www.instagram.com/${CAFE.handle}`;
export const PHONE_HREF = `tel:${CAFE.phone.replace(/\s/g, "")}`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CAFE.mapQuery)}`;

export const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMG = {
  burger: "photo-1568901346375-23c9450c58cd",
  coffee: "photo-1461023058943-07fcbe16d735",
  pizza: "photo-1513104890138-7c749659a591",
  fries: "photo-1630384060421-cb20d0e0649d",
  sandwich: "photo-1528735602780-2552fd46c7af",
  shake: "photo-1572490122747-3968b75cc699",
  pasta: "photo-1621996346565-e3dbc646d9a9",
  cafe: "photo-1554118811-1e0d58224f24",
  cafe2: "photo-1559925393-8be0ec4767c8",
};

export const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["menu", "Menu"],
  ["gallery", "Gallery"],
  ["instagram", "Instagram"],
  ["findus", "Find Us"],
];

export const MARQUEE = [
  "Burgers",
  "Cold coffee",
  "Pizza",
  "Milkshakes",
  "Peri peri fries",
  "Grilled sandwiches",
  "Pasta",
];

export const CATS = [
  "All",
  "Burgers & bites",
  "Coffee & shakes",
  "Pizza & pasta",
];
export const MENU = [
  {
    name: "Classic Cheese Burger",
    price: 149,
    tag: "Bestseller",
    cat: "Burgers & bites",
    img: IMG.burger,
    desc: "Juicy patty, melted cheddar, fresh veggies and our house sauce.",
  },
  {
    name: "Grilled Sandwich",
    price: 119,
    tag: "Fresh",
    cat: "Burgers & bites",
    img: IMG.sandwich,
    desc: "Toasted bread packed with veggies, cheese and green chutney.",
  },
  {
    name: "Peri Peri Fries",
    price: 89,
    tag: "Shareable",
    cat: "Burgers & bites",
    img: IMG.fries,
    desc: "Golden fries dusted with peri peri masala.",
  },
  {
    name: "Cold Coffee",
    price: 99,
    tag: "Chilled",
    cat: "Coffee & shakes",
    img: IMG.coffee,
    desc: "Strong coffee blended with milk and a scoop of vanilla ice cream.",
  },
  {
    name: "Chocolate Milkshake",
    price: 129,
    tag: "Sweet",
    cat: "Coffee & shakes",
    img: IMG.shake,
    desc: "Thick chocolate shake topped with whipped cream.",
  },
  {
    name: "Margherita Pizza",
    price: 219,
    tag: "Veg",
    cat: "Pizza & pasta",
    img: IMG.pizza,
    desc: "Hand-stretched base, tomato sauce, mozzarella and basil.",
  },
  {
    name: "Creamy Alfredo Pasta",
    price: 199,
    tag: "Comfort",
    cat: "Pizza & pasta",
    img: IMG.pasta,
    desc: "Penne in a garlicky white sauce with herbs.",
  },
];

export const GALLERY = [
  IMG.cafe,
  IMG.pasta,
  IMG.cafe2,
  IMG.burger,
  IMG.pizza,
  IMG.shake,
  IMG.fries,
];

export const WHY = [
  {
    icon: ChefHat,
    title: "Cooked when you order",
    text: "Nothing sits under a heat lamp. Your burger hits the grill after you pay for it.",
  },
  {
    icon: Leaf,
    title: "Ingredients we can name",
    text: "Vegetables from the morning market and coffee beans roasted nearby.",
  },
  {
    icon: Zap,
    title: "Ready in about 15 minutes",
    text: "Fast enough for a lunch break, relaxed enough to stay and chat.",
  },
  {
    icon: Heart,
    title: "Run by a family",
    text: "Everyone who serves you is part of the family or has been here for years.",
  },
];

export const POSTS = [
  {
    img: IMG.burger,
    likes: 1245,
    caption: "Double cheese, extra crispy. Delivered hot to Anna Nagar.",
  },
  {
    img: IMG.shake,
    likes: 982,
    caption: "Three chocolate shakes for a birthday table.",
  },
  {
    img: IMG.pizza,
    likes: 1410,
    caption: "Friday pizza night order, still steaming.",
  },
  {
    img: IMG.fries,
    likes: 764,
    caption: "Peri peri fries for the office lunch group.",
  },
  {
    img: IMG.sandwich,
    likes: 655,
    caption: "Grilled sandwich combo, packed and on the way.",
  },
];
