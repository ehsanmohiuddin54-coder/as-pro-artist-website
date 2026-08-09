// Central service/price data — add or edit a service here and it will
// automatically appear on the Services page, search, and category filters.
// Fields: category, name, price, description, featured, bookingAvailable, duration (optional)

export const categories = [
  { id: "threading", label: "Threading & Face Waxing" },
  { id: "waxing", label: "Body Waxing" },
  { id: "extras", label: "Extras" },
  { id: "facials", label: "Facials & Skin Treatments" },
  { id: "hair", label: "Hair Services" },
  { id: "makeup", label: "Makeup & Bridal" },
];

export const services = [
  // THREADING & FACE WAXING
  { category: "threading", name: "Eyebrows Tidy", price: "£5.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Eyebrows Re-shape", price: "£6.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Upper Lips", price: "£3.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Full Face", price: "£12.00", featured: false, bookingAvailable: true },
  { category: "threading", name: "Face Wax + Eyebrows", price: "£15.00", featured: false, bookingAvailable: true },

  // BODY WAXING
  { category: "waxing", name: "Full Legs", price: "£13.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Half Legs", price: "£8.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Arms", price: "£7.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Half Arms", price: "£5.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Under Arms", price: "£5.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Bikini", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Bikini", price: "£15.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Stomach", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Back", price: "£10.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Body (Arms, Legs, Underarms, Bikini)", price: "£40.00", featured: false, bookingAvailable: true },
  { category: "waxing", name: "Full Body + Back & Stomach", price: "£60.00", featured: false, bookingAvailable: true },

  // EXTRAS
  { category: "extras", name: "Henna Brows", price: "From £8.00", featured: false, bookingAvailable: true },
  { category: "extras", name: "Eyebrow Tint", price: "£5.00", featured: false, bookingAvailable: true },

  // FACIALS & SKIN TREATMENTS
  { category: "facials", name: "Luxury Facial", price: "£20.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Whitening Facial", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Gold Facial", price: "£30.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Skin Polish", price: "£15.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Dermacos Facial", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Golden Pearl Facial", price: "£28.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Zafarani Pure Organic Facial", price: "£30.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Jessica 24K Gold Facial", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Vitamin C Skin Therapy Facial", price: "£28.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Dermatology Bleach", price: "£20.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Golden Pearl Bleach", price: "£22.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Whitening Bleach", price: "£22.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Skin Lightening Organic Facial", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "ETAE Yeast & Hyaluronic Acid Treatment", price: "£32.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Rice Brightening & Nourishing Facial", price: "£28.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Zafarani Ubtan (Saeed Ghani) Facial", price: "£28.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Charcoal Facial", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Husn-e-Yousaf Complexion Enhancing Facial", price: "£32.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Whitening Cream – Sensitive Areas Treatment", price: "£20.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Organic Hair Growth Water", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Mughziat Hair Oil Treatment", price: "£20.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Vitamin E Facial Treatment", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Elina 1,2,3 Whitening Treatment", price: "£35.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Intensive Whitening Treatment", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Collagen Anti-Ageing Treatment", price: "£35.00", featured: true, bookingAvailable: true },
  { category: "facials", name: "Pure Herbal Facial", price: "£25.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Anti-Ageing Facial", price: "£30.00", featured: false, bookingAvailable: true },
  { category: "facials", name: "Luxury Bridal Glow Facial", price: "£40.00", featured: true, bookingAvailable: true },

  // HAIR SERVICES
  { category: "hair", name: "Dry Cut", price: "From £15.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Fringe Trim", price: "From £5.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Wash, Cut & Blow Dry", price: "From £25.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Trim", price: "From £8.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Child Cut", price: "£8.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Full Head Colour", price: "From £35.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Root Touch Up", price: "From £25.00", featured: false, bookingAvailable: true },
  { category: "hair", name: "Full Head Highlight", price: "From £45.00", featured: false, bookingAvailable: true },

  // MAKEUP & BRIDAL
  { category: "makeup", name: "Party Makeup", price: "From £50.00", featured: false, bookingAvailable: true },
  { category: "makeup", name: "Party Hair & Makeup", price: "From £65.00", featured: false, bookingAvailable: true },
  {
    category: "makeup",
    name: "Bridal Makeup Special",
    price: "From £450.00",
    description: "20% OFF + FREE Facial",
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
    blurb: "24 specialised facial treatments using premium, organic ingredients.",
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
    key: "manicure",
    title: "Manicure & Pedicure",
    blurb: "Polished, elegant hands and feet.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
];
