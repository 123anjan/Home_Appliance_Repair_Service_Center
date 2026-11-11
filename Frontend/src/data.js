export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const brand = {
  name: "YourBrand Appliance Care",
  city: "Your City",
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // country code + number, no + or spaces
  whatsappText: "Hello, I need an appliance repair service.",
  email: "support@yourbrand.example",
  address: "123 Sample Street, Your Area, Your City 000000",
  owner: "Owner Name",
  startingPrice: "₹XXX",
  registration: 'Registration No.: XXXX-XXXX',
  poweredBy: 'Your Studio Name',
  poweredByUrl: '#',
  hours: 'Mon - Fri, 8:00 AM - 8:00 PM',
};

export const heroPoints = [
  "Quick Response & Same-Day Service",
  "Experienced & Certified Technicians",
  "Repair Warranty on Every Job",
  "Genuine Spare Parts & Reliable Repairs",
  "Trusted Local Service Centre",
];

export const serviceBlocks = [
  {
    icon: "❄️",
    short: "AC",
    title: "Emergency AC Repair Service",
    images: [asset("/images/AC repair.webp"), asset("/images/AC repair-2.webp")],
    text: "Is your **AC not cooling, leaking water, making unusual noise, or showing error codes**? At **{brand}**, we offer **quick and affordable AC repair** for all major brands. Whether it's a **split AC, window AC, inverter AC, or non-inverter model**, our trained technicians repair every type with precision and care.",
  },
  {
    icon: "🧊",
    short: "Fridge",
    title: "Refrigerator Repair Service",
    images: [
      asset("/images/Refrigerator repair.webp"),
      asset("/images/Refrigerator repair 2.webp"),
    ],
    text: "Fridge **not cooling, freezing too much, leaking, or making noise**? We repair **single-door, double-door and side-by-side refrigerators** at your doorstep with **genuine spare parts** and a clear estimate before work begins.",
  },
  {
    icon: "🧺",
    short: "Washing Machine",
    title: "Washing Machine Repair Service",
    images: [
      asset("/images/Washing machine repair.webp"),
      asset("/images/Washing machine repair 2.webp"),
    ],
    text: "Drum not spinning, water not draining, door lock errors or heavy vibration? Our technicians fix **front-load and top-load washing machines** quickly, with **long-lasting results**.",
  },
  {
    icon: "🚿",
    short: "Geyser",
    title: "Geyser Repair Service",
    images: [
      asset("/images/geyser-repairing-service-500x500.webp"),
      asset("/images/Geyser repair 2.webp"),
    ],
    text: "Facing **no hot water, slow heating, water leakage, or indicator faults**? We handle **instant geysers, storage water heaters, and electric and gas models** safely and accurately.",
  },
];
export const serviceCards = [
  {
    icon: "🧊",
    short: "Refrigerator",
    title: "Refrigerator Repair",
    text: "Cooling problems, leaks and noisy compressors, diagnosed and fixed at your home.",
  },
  {
    icon: "🧺",
    short: "Washing Machine",
    title: "Washing Machine Repair",
    text: "Drum, drain and door-lock faults sorted quickly with dependable fixes.",
  },
  {
    icon: "🍲",
    short: "Microwave Oven",
    title: "Microwave Oven Repair",
    text: "No heating, sparking or a stuck turntable? We repair it safely.",
  },
  {
    icon: "🚿",
    short: "Geyser",
    title: "Geyser Repair",
    text: "No hot water, tripping or leaks handled by on-site technicians.",
  },
  {
    icon: "❄️",
    short: "AC",
    title: "AC Repair & Service",
    text: "Weak cooling, gas leaks or dripping water? Repair and servicing for all brands.",
  },
];
export const brands = [
  "Samsung",
  "LG",
  "Whirlpool",
  "Godrej",
  "Haier",
  "Panasonic",
  "Bosch",
  "Voltas",
  "Daikin",
];

export const whyPoints = [
  "Upfront service charge for any appliance repair",
  "Doorstep service available across {city}",
  "Genuine spare parts for lasting repairs",
  "Experienced, certified technicians for all brands",
  "Same-day visits for urgent breakdowns",
  "Transparent pricing with no hidden charges",
];

export const areas = [
  "Madhyamgram",
  "Barasat",
  "Birati",
  "New Barrackpore",
  "New Town",
  "Lake Town",
  "Sodepur",
  "Barrackpur",
  "Salt Lake",
  "Ballygunge",
  "Tollygunge",
  "Jadavpur",
  "Garia",
  "Dum Dum",
];

export const reviews = [
  [
    "Customer One",
    "Area 1",
    5,
    "Technician arrived on time and fixed my fridge within the hour.",
  ],
  [
    "Customer Two",
    "Area 2",
    4,
    "Very helpful team. They handled everything smoothly.",
  ],
  [
    "Customer Three",
    "Area 3",
    5,
    "Top-notch quality and very responsive. Would recommend.",
  ],
  [
    "Customer Four",
    "Area 4",
    4,
    "Smooth experience end-to-end. Courteous and efficient.",
  ],
  [
    "Customer Five",
    "Area 5",
    5,
    "Clear pricing and a neat finish. Five stars from me.",
  ],
  [
    "Customer Six",
    "Area 6",
    5,
    "My washing machine works like new. Great service.",
  ],
  [
    "Customer Seven",
    "Area 7",
    4,
    "AC cooling is much better after the service.",
  ],
  ["Customer Eight", "Area 8", 5, "Quick booking, polite staff, fair price."],
  ["Customer Nine", "Area 9", 5, "Geyser fixed the same day. Very satisfied."],
].map(([name, area, stars, text]) => ({ name, area, stars, text }));
