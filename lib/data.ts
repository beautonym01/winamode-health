import type { Category, Product } from "@/types";

export const categories: { name: Category; icon: string; color: string }[] = [
  { name: "Vitamins & Supplements", icon: "✳", color: "bg-[#EAF4EF]" },
  { name: "Women's Health", icon: "♡", color: "bg-[#F9EDEC]" },
  { name: "Men's Health", icon: "◈", color: "bg-[#EAF0F5]" },
  { name: "Children's Health", icon: "☼", color: "bg-[#FBF3DF]" },
  { name: "Fitness & Nutrition", icon: "↗", color: "bg-[#EAF3E6]" },
  { name: "Medical Devices", icon: "＋", color: "bg-[#E9F1F4]" },
  { name: "Personal Care", icon: "✧", color: "bg-[#F5EEF7]" },
  { name: "Herbal Products", icon: "❋", color: "bg-[#EEF3E7]" },
  { name: "Pharmacy & Medicines", icon: "⚕", color: "bg-[#EDF2FA]" },
  { name: "Orthopedic & Mobility", icon: "⌁", color: "bg-[#F2EFF8]" },
  { name: "Wound Care", icon: "✚", color: "bg-[#F9EFEA]" },
  { name: "Cleaning & Laboratory Supplies", icon: "✧", color: "bg-[#EDF3EF]" }
];

const img = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const products: Product[] = [
  {
    id: "p-001",
    slug: "vitamin-c-1000mg",
    name: "Vitamin C 1000mg",
    category: "Vitamins & Supplements",
    price: 89,
    originalPrice: 110,
    rating: 4.9,
    reviewCount: 128,
    image: img("photo-1584308666744-24d5c474f2ae"),
    description: "A daily immune-supporting essential made to fit effortlessly into your wellness routine.",
    ingredients: ["Vitamin C (ascorbic acid)", "Rose hip extract", "Vegetable cellulose"],
    usage: "Adults: take one tablet daily with food, or as directed by your healthcare professional.",
    badge: "Bestseller"
  },
  {
    id: "p-002",
    slug: "omega-3-fish-oil",
    name: "Omega-3 Fish Oil",
    category: "Vitamins & Supplements",
    price: 145,
    rating: 4.8,
    reviewCount: 86,
    image: img("photo-1571781926291-c477ebfd024b"),
    description: "Purified omega-3 softgels to complement a balanced diet and an active lifestyle.",
    ingredients: ["Fish oil", "EPA", "DHA", "Gelatin"],
    usage: "Take two softgels daily with a meal. Consult a clinician if you take blood-thinning medication."
  },
  {
    id: "p-003",
    slug: "zinc-25mg",
    name: "Zinc 25mg",
    category: "Vitamins & Supplements",
    price: 72,
    rating: 4.7,
    reviewCount: 54,
    image: img("photo-1550572017-edd951b55104"),
    description: "A thoughtfully formulated zinc supplement for everyday nutritional support.",
    ingredients: ["Zinc gluconate", "Rice flour", "Vegetable capsule"],
    usage: "Take one capsule daily with food. Do not exceed the suggested serving."
  },
  {
    id: "p-004",
    slug: "daily-multivitamin",
    name: "Daily Multivitamin",
    category: "Vitamins & Supplements",
    price: 120,
    originalPrice: 139,
    rating: 4.9,
    reviewCount: 203,
    image: img("photo-1571781926291-c477ebfd024b"),
    description: "A convenient blend of everyday vitamins and minerals for a balanced routine.",
    ingredients: ["Vitamins A, C, D and E", "B-complex vitamins", "Zinc", "Selenium"],
    usage: "Take one tablet daily with a meal."
  },
  {
    id: "p-005",
    slug: "prenatal-multivitamin",
    name: "Prenatal Multivitamin",
    category: "Women's Health",
    price: 168,
    rating: 4.8,
    reviewCount: 71,
    image: img("photo-1608248543803-ba4f8c70ae0b"),
    description: "A prenatal nutrient blend designed to support nutritional needs before and during pregnancy.",
    ingredients: ["Folate", "Iron", "Vitamin D", "Vitamin B12"],
    usage: "Use only after discussing suitability and dose with your healthcare professional."
  },
  {
    id: "p-006",
    slug: "mens-daily-health",
    name: "Men's Daily Health",
    category: "Men's Health",
    price: 132,
    rating: 4.6,
    reviewCount: 42,
    image: img("photo-1547887538-e3a2f32cb1cc"),
    description: "A straightforward daily multinutrient formula for active adults.",
    ingredients: ["Vitamin D", "B vitamins", "Magnesium", "Zinc"],
    usage: "Take one tablet daily with food, or as advised by your healthcare professional."
  },
  {
    id: "p-007",
    slug: "kids-vitamin-gummies",
    name: "Kids' Vitamin Gummies",
    category: "Children's Health",
    price: 98,
    rating: 4.9,
    reviewCount: 119,
    image: img("photo-1607619056574-7b8d3ee536b2"),
    description: "A kid-friendly multivitamin to help make daily routines a little easier.",
    ingredients: ["Vitamins A, C, D and E", "B vitamins", "Pectin"],
    usage: "Follow the age-specific serving instructions on the label. Keep out of children's reach."
  },
  {
    id: "p-008",
    slug: "whey-protein-vanilla",
    name: "Whey Protein · Vanilla",
    category: "Fitness & Nutrition",
    price: 285,
    rating: 4.8,
    reviewCount: 94,
    image: img("photo-1593095948071-474c5cc2989d"),
    description: "Smooth vanilla whey protein to complement your training and balanced nutrition plan.",
    ingredients: ["Whey protein concentrate", "Natural vanilla flavour", "Stevia"],
    usage: "Mix one serving with water or milk after exercise, or as part of a meal."
  },
  {
    id: "p-009",
    slug: "creatine-monohydrate",
    name: "Creatine Monohydrate",
    category: "Fitness & Nutrition",
    price: 199,
    rating: 4.7,
    reviewCount: 61,
    image: img("photo-1579758629938-03607ccdbaba"),
    description: "Unflavoured creatine monohydrate for adults looking to support a consistent training routine.",
    ingredients: ["Micronized creatine monohydrate"],
    usage: "Mix one serving into a drink daily. Ask a healthcare professional if you have a medical condition."
  },
  {
    id: "p-010",
    slug: "digital-blood-pressure-monitor",
    name: "Blood Pressure Monitor",
    category: "Medical Devices",
    price: 420,
    rating: 4.8,
    reviewCount: 37,
    image: img("photo-1584982751601-97dcc096659c"),
    description: "An easy-to-read digital monitor for convenient at-home blood pressure measurements.",
    ingredients: ["Digital monitor", "Adjustable cuff", "Storage case"],
    usage: "Follow the enclosed instructions and confirm readings with a healthcare professional."
  },
  {
    id: "p-011",
    slug: "digital-thermometer",
    name: "Digital Thermometer",
    category: "Medical Devices",
    price: 85,
    rating: 4.7,
    reviewCount: 58,
    image: img("photo-1584362917165-526a968579e8"),
    description: "A compact, easy-to-use digital thermometer for everyday home care.",
    ingredients: ["Digital thermometer", "Protective case"],
    usage: "Use according to the product leaflet. Clean the probe after each use."
  },
  {
    id: "p-012",
    slug: "daily-sunscreen-spf50",
    name: "Daily Sunscreen SPF 50",
    category: "Personal Care",
    price: 155,
    rating: 4.9,
    reviewCount: 144,
    image: img("photo-1556229010-6c3f2c9ca5f8"),
    description: "Lightweight broad-spectrum SPF 50 protection for daily use.",
    ingredients: ["Broad-spectrum UV filters", "Glycerin", "Vitamin E"],
    usage: "Apply generously 15 minutes before sun exposure; reapply every two hours."
  },
  {
    id: "p-013",
    slug: "gentle-face-wash",
    name: "Gentle Face Wash",
    category: "Personal Care",
    price: 95,
    rating: 4.6,
    reviewCount: 66,
    image: img("photo-1608248543803-ba4f8c70ae0b"),
    description: "A gentle daily cleanser that leaves skin feeling fresh and comfortable.",
    ingredients: ["Aloe vera", "Glycerin", "Mild plant-derived cleansers"],
    usage: "Massage onto damp skin and rinse. Avoid direct contact with eyes."
  },
  {
    id: "p-014",
    slug: "aloe-body-lotion",
    name: "Aloe Body Lotion",
    category: "Personal Care",
    price: 110,
    rating: 4.7,
    reviewCount: 73,
    image: img("photo-1601049541289-9b1b7bbbfe19"),
    description: "A daily moisturising lotion with aloe for soft, comfortable-feeling skin.",
    ingredients: ["Aloe vera", "Shea butter", "Vitamin E"],
    usage: "Apply to clean, dry skin as needed."
  },
  {
    id: "p-015",
    slug: "herbal-ginger-tea",
    name: "Ginger & Turmeric Tea",
    category: "Herbal Products",
    price: 78,
    rating: 4.8,
    reviewCount: 52,
    image: img("photo-1544787219-7f47ccb76574"),
    description: "A warming caffeine-free herbal infusion made with ginger and turmeric.",
    ingredients: ["Ginger root", "Turmeric", "Lemongrass"],
    usage: "Steep one tea bag in hot water for 4–5 minutes. Check ingredients for allergies."
  },
  {
    id: "p-016",
    slug: "blood-glucose-meter",
    name: "Blood Glucose Meter",
    category: "Medical Devices",
    price: 310,
    rating: 4.7,
    reviewCount: 29,
    image: img("photo-1576091160399-112ba8d25d1d"),
    description: "A portable glucose meter kit designed to make routine monitoring more convenient.",
    ingredients: ["Glucose meter", "Lancing device", "Starter test strips"],
    usage: "Use with compatible strips and follow the supplied instructions or clinician advice."
  },
  {
    id: "p-017",
    slug: "pharmacy-health-essentials",
    name: "Pharmacy & Health Essentials",
    category: "Pharmacy & Medicines",
    price: 120,
    rating: 4.8,
    reviewCount: 34,
    image: img("photo-1608248543803-ba4f8c70ae0b"),
    description: "A curated selection of pharmacy and non-prescription health essentials, subject to availability.",
    ingredients: ["Please check the individual product label"],
    usage: "Follow the product label and consult a licensed pharmacist. Prescription medicines are supplied only in accordance with Zambian law."
  },
  {
    id: "p-018",
    slug: "orthopedic-rehabilitation-support",
    name: "Orthopedic Rehabilitation Support",
    category: "Orthopedic & Mobility",
    price: 390,
    rating: 4.7,
    reviewCount: 18,
    image: img("photo-1538805060514-97d9cc17730c"),
    description: "Selected orthopedic supports and mobility supplies for home and rehabilitation settings.",
    ingredients: ["Available products and sizes vary"],
    usage: "Ask a qualified healthcare professional to help select appropriate orthopedic and rehabilitation supplies."
  },
  {
    id: "p-019",
    slug: "wound-cleansing-solution",
    name: "Wound-Cleansing Solution",
    category: "Wound Care",
    price: 65,
    rating: 4.8,
    reviewCount: 27,
    image: img("photo-1603398938378-e54eab446dde"),
    description: "A wound-cleansing solution for general wound-care supplies, available subject to product labeling and local regulations.",
    ingredients: ["See the individual product packaging"],
    usage: "Use only as directed on the product label. Seek professional care for deep, infected, or serious wounds."
  },
  {
    id: "p-020",
    slug: "instrument-cleaning-detergent",
    name: "Instrument Cleaning Detergent",
    category: "Cleaning & Laboratory Supplies",
    price: 185,
    rating: 4.6,
    reviewCount: 15,
    image: img("photo-1585421514284-efb74c2b69ba"),
    description: "Detergent and cleaning supplies for laboratory washing and suitable instrument-cleaning workflows.",
    ingredients: ["Refer to the product safety data sheet"],
    usage: "Use in accordance with the manufacturer's directions and safety data sheet. Not a substitute for validated disinfection or sterilization."
  },
  {
    id: "p-021",
    slug: "office-equipment-cleaning-wipes",
    name: "Office Equipment Cleaning Wipes",
    category: "Cleaning & Laboratory Supplies",
    price: 75,
    rating: 4.6,
    reviewCount: 23,
    image: img("photo-1581578731548-c64695cc6952"),
    description: "Cleaning wipes and supplies for maintaining office and computer equipment.",
    ingredients: ["See packaging for material compatibility and use instructions"],
    usage: "Follow label instructions and check compatibility with your equipment before use."
  },
  {
    id: "p-022",
    slug: "multipurpose-disinfectant-cleaner",
    name: "Multipurpose Disinfectant Cleaner",
    category: "Cleaning & Laboratory Supplies",
    price: 110,
    rating: 4.7,
    reviewCount: 31,
    image: img("photo-1563453392212-326f5e854473"),
    description: "General-purpose cleaning and disinfecting supplies for appropriate household and workplace surfaces.",
    ingredients: ["See the product label and safety data sheet"],
    usage: "Follow the label, recommended contact time, ventilation, and personal protective equipment instructions."
  },
  {
    id: "p-023",
    slug: "fitness-resistance-kit",
    name: "Fitness Resistance Band Kit",
    category: "Fitness & Nutrition",
    price: 165,
    rating: 4.8,
    reviewCount: 38,
    image: img("photo-1517836357463-d25dfeac3438"),
    description: "A versatile resistance-band kit for general fitness, home workouts, and mobility exercises.",
    ingredients: ["Resistance bands", "Carry pouch"],
    usage: "Inspect bands before use and choose resistance suited to your ability."
  },
  {
    id: "p-024",
    slug: "general-purpose-cleaning-kit",
    name: "General-Purpose Cleaning Kit",
    category: "Cleaning & Laboratory Supplies",
    price: 220,
    rating: 4.7,
    reviewCount: 19,
    image: img("photo-1527515637462-cff94eecc1ac"),
    description: "A practical kit of general-purpose cleaning supplies and accessories for routine workplace care.",
    ingredients: ["Kit contents vary; check the product listing and packaging"],
    usage: "Follow each item's label and safety instructions. Never mix cleaning chemicals."
  },
  {
    id: "p-025",
    slug: "laboratory-washing-detergent",
    name: "Laboratory Washing Detergent",
    category: "Cleaning & Laboratory Supplies",
    price: 195,
    rating: 4.7,
    reviewCount: 12,
    image: img("photo-1582719478250-c89cae4dc85b"),
    description: "Laboratory washing detergent for compatible instrument-washing and laboratory cleaning applications.",
    ingredients: ["Refer to the product safety data sheet"],
    usage: "Check instrument compatibility and follow the detergent manufacturer's dilution and handling instructions."
  },
  {
    id: "p-026",
    slug: "office-equipment-cleaning-solution",
    name: "Office Equipment Cleaning Solution",
    category: "Cleaning & Laboratory Supplies",
    price: 88,
    rating: 4.6,
    reviewCount: 16,
    image: img("photo-1581578731548-c64695cc6952"),
    description: "A cleaning solution for compatible office and electronic equipment surfaces.",
    ingredients: ["Refer to the product label for ingredients and material compatibility"],
    usage: "Check the equipment manufacturer's care instructions. Apply as directed and avoid spraying into openings."
  }
];

export const featuredProducts = products.slice(0, 12);

export const testimonials = [
  { name: "Chanda M.", city: "Lusaka", quote: "I finally found a wellness shop that feels thoughtful and trustworthy. My order arrived the next day.", stars: 5 },
  { name: "Mwila B.", city: "Ndola", quote: "The team helped me choose the right supplements and the delivery updates were so helpful.", stars: 5 },
  { name: "Zara K.", city: "Kitwe", quote: "Simple to shop, fair prices, and a lovely experience from start to finish.", stars: 5 }
];

export const articles = [
  { title: "Building a simple daily wellness routine", category: "Everyday wellness", date: "May 12, 2025", image: img("photo-1506126613408-eca07ce68773", 700) },
  { title: "What to know before choosing a multivitamin", category: "Nutrition", date: "May 06, 2025", image: img("photo-1490645935967-10de6ba17061", 700) },
  { title: "Small steps for a more active week", category: "Movement", date: "Apr 28, 2025", image: img("photo-1517836357463-d25dfeac3438", 700) }
];

export const businessSupplies: { name: string; description: string; image: string; category: Category }[] = [
  {
    name: "Laboratory & equipment cleaning supplies",
    description: "Laboratory washing detergents, instrument cleaners, surface-cleaning solutions, wipes, kits, and related accessories.",
    image: img("photo-1582719478250-c89cae4dc85b", 700),
    category: "Cleaning & Laboratory Supplies"
  },
  {
    name: "Orthopedic & rehabilitation supplies",
    description: "Orthopedic equipment, mobility and traction supplies, sports-medicine products, and implant supplies available by enquiry.",
    image: img("photo-1576091160399-112ba8d25d1d", 700),
    category: "Orthopedic & Mobility"
  },
  {
    name: "Wound-care & clinical supplies",
    description: "Wound-cleansing solutions and selected clinical-care supplies, subject to product labeling and local requirements.",
    image: img("photo-1584982751601-97dcc096659c", 700),
    category: "Wound Care"
  }
];
