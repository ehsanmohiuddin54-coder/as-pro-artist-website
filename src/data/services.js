// Central service/price data — add or edit a service here and it will
// automatically appear on the Services page, search, and category filters.
// Prices match the official AS.PRO ARTIST printed price list.
// Fields: category, name, price, description, featured, bookingAvailable, duration (optional)

export const categories = [
  { id: "threading", label: "Threading & Face Waxing" },
  { id: "waxing", label: "Waxing" },
  { id: "massage", label: "Massage & Body" },
  { id: "hair", label: "Hair" },
  { id: "colour", label: "Colour Treatments" },
  { id: "facials", label: "Facials" },
  { id: "makeup", label: "Makeup & Bridal" },
  { id: "packages", label: "Exclusive Packages" },
];

export const services = [
  // THREADING
  { category: "threading", name: "Eyebrows Tidy", price: "£5.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Eyebrows Reshape", price: "£7.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Upper Lips", price: "£3.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Full Face", price: "£15.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Face Wax + Eyebrows", price: "£17.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Henna Brows", price: "From £8.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Eyebrow Tint", price: "£7.00", featured: false, bookingAvailable: true },

  // WAXING
  { category: "waxing", name: "Full Legs", price: "£15.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Half Legs", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Arms", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Half Arms", price: "£8.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Under Arms", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Bikini", price: "£15.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Bikini", price: "£20.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Stomach", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Back", price: "£10.00", featured: false, bookingAvailable: true },
  {
    category: "waxing",
    name: "Full Body",
    price: "£50.00",
    description: "Arms, Legs, Underarms, Bikini",
    featured: true,
    bookingAvailable: true,
  },
  { category: "waxing", name: "Full Body + Back & Stomach", price: "£70.00", featured: false, bookingAvailable: true },

  // MASSAGE & BODY
  { category: "massage", name: "Back, Neck & Shoulder Massage", price: "£25.00", duration: "30 min", featured: false, bookingAvailable: true },
  { category: "massage", name: "Full Body Relaxing Massage", price: "£45.00", duration: "60 min", featured: true, bookingAvailable: true },
  { category: "massage", name: "Full Body Massage", price: "£60.00", duration: "90 min", featured: false, bookingAvailable: true },
  { category: "massage", name: "Indian Head Massage", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "massage", name: "Foot & Leg Massage", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "massage", name: "Body Scrub & Body Polish", price: "£60.00", featured: false, bookingAvailable: true },

  // HAIR
  { category: "hair", name: "Dry Cut", price: "From £25.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Fringe Trim", price: "From £10.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Wash, Cut & Blow Dry", price: "From £40.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Trim", price: "From £20.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Child Cut", price: "From £15.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Hair Treatments (all)", price: "£30.00", featured: false, bookingAvailable: true },

  // COLOUR TREATMENTS
  { category: "colour", name: "Full Head Colour", price: "From £50.00", featured: false, bookingAvailable: true },
  { category: "colour", name: "Root Touch-Up", price: "From £40.00", featured: false, bookingAvailable: true },
  { category: "colour", name: "Full Head Highlights", price: "From £120.00", featured: false, bookingAvailable: true },

  // FACIALS
  { category: "facials", name: "Luxury Facial", price: "£30.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Whitening Facial", price: "£35.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Gold Facial", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Skin Polish", price: "£15.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Dermacos Facial", price: "£45.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Golden Pearl Facial", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Zafarani Pure Organic Facial", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Jessica 24K Gold Facial", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Vitamin C Skin Therapy Facial", price: "£28.00", featured: true, bookingAvailable: true },
  {
    category: "facials",
    name: "All Bleach",
    price: "£35.00",
    description: "Dermatology / Golden Pearl / Whitening",
    featured: false,
    bookingAvailable: true,
  },
  { category: "facials", name: "Skin Lightening Organic Facial", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "ETAE Treatment", price: "£32.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Yeast & Hyaluronic Acid Treatment", price: "Enquire", featured: false, bookingAvailable: true },
  { category: "facials", name: "Rice Brightening & Nourishing Facial", price: "£40.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Zafarani Ubtan (Saeed Ghani) Facial", price: "£28.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Charcoal Facial", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Husn-e-Yousaf Facial", price: "£32.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Complexion Enhancing Facial", price: "Enquire", featured: false, bookingAvailable: true },
  { category: "facials", name: "Whitening Cream — Sensitive Areas", price: "£20.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Organic & Growth Water", price: "Enquire", featured: false, bookingAvailable: true },
  { category: "facials", name: "Hair Oil Treatment — Mughziat", price: "£20.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Vitamin E Facial Treatment", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Elina 1,2,3 Whitening Treatment", price: "£35.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Whitening Treatment — Intensive", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Collagen Treatment — Anti-Ageing", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Herbal Facial — Pure & Natural", price: "£35.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Anti-Ageing Facial", price: "£35.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Luxury Bridal Glow Facial", price: "£50.00", featured: true, bookingAvailable: true },

  // MAKEUP & BRIDAL
  { category: "makeup", name: "Party Makeup", price: "From £50.00", featured: false, bookingAvailable: true },
  { category: "makeup", name: "Party Hair & Makeup", price: "From £75.00", featured: false, bookingAvailable: true },
  {
    category: "makeup",
    name: "Bridal Hair & Makeup",
    price: "From £600.00",
    featured: true,
    bookingAvailable: true,
  },

  // EXCLUSIVE PACKAGES
  {
    category: "packages",
    name: "Bridal Glow Package",
    price: "£150.00",
    description: "Facial + Mani + Pedi + Full Body Wax",
    featured: true,
    bookingAvailable: true,
  },
  {
    category: "packages",
    name: "Relax & Glow Package",
    price: "£65.00",
    description: "60 min Massage + Luxury Facial",
    featured: true,
    bookingAvailable: true,
  },
  {
    category: "packages",
    name: "Self-Care Full Package",
    price: "£85.00",
    description: "Massage + Facial + Manicure",
    featured: true,
    bookingAvailable: true,
  },
  {
    category: "packages",
    name: "Party Ready Package",
    price: "£100.00",
    description: "Full Face Makeup + Hair + Glow Facial",
    featured: true,
    bookingAvailable: true,
  },
];

export const getServicesByCategory = (categoryId) =>
  services.filter((s) => s.category === categoryId);

export const searchServices = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return services;
  return services.filter((s) => s.name.toLowerCase().includes(q));
};

export const signatureServices = [
  {
    key: "bridal",
    title: "Bridal Makeup & Hair",
    blurb: "Traditional and modern Asian bridal artistry, tailored to you.",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "facials",
    title: "Facials",
    blurb: "28 specialised facial treatments using premium, organic ingredients.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "hair",
    title: "Hair Services",
    blurb: "Cuts, colour and styling crafted with precision and care.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "threading",
    title: "Threading",
    blurb: "Precise, gentle brow and face threading.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "waxing",
    title: "Waxing",
    blurb: "Smooth, comfortable waxing for face and body.",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "makeup",
    title: "Makeup",
    blurb: "Flawless party and occasion makeup artistry.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "massage",
    title: "Massage & Body",
    blurb: "Relaxing massage, body scrubs and polishing treatments.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "packages",
    title: "Exclusive Packages",
    blurb: "Bundled treatments at a better price — bridal, relax and party ready.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
];
