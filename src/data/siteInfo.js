// Central business information — update here and it reflects across the whole site.
export const siteInfo = {
  businessName: "AS.PRO ARTIST",
  tagline: "Hair & Beauty Salon",
  slogan: "Your Beauty, Our Artistry.",
  founder: "Nadiya",
  experienceYears: "15+",
  address: "443 Stratford Rd, Birmingham B11 4LB",
  addressShort: "Birmingham, UK",
  phoneDisplay: "+44 7448 638746",
  phoneDial: "+447448638746",
  whatsappNumber: "447448638746",
  instagramHandle: "@as.proartist",
  instagramUrl: "https://www.instagram.com/as.proartist",
  tiktokHandle: "@asproartist",
  tiktokUrl: "https://www.tiktok.com/@asproartist",
  mapsQuery: "443 Stratford Rd, Birmingham B11 4LB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=443+Stratford+Rd%2C+Birmingham+B11+4LB",
  bridalDepositNote:
    "Bridal bookings require a 50% deposit to secure your date.",
  openingHours: [
    { days: "Monday – Friday", hours: "09:30 AM – 6:00 PM" },
    { days: "Saturday – Sunday", hours: "10:00 AM – 6:00 PM" },
  ],
  whatsappMessages: {
    general:
      "Hello AS.PRO ARTIST, I would like to enquire about booking an appointment.",
    bridal:
      "Hello Nadiya, I would like to enquire about bridal makeup and check availability for my wedding date.",
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const callLink = () => `tel:${siteInfo.phoneDial}`;

export const brandStory = {
  paragraphs: [
    "Nadiya is the founder and lead artist behind AS.PRO ARTIST. With over 15+ years of professional experience in the beauty industry, she has trained with renowned names including Lubna Rafiq, Naeem Khan, P. Louise and MAC, and has worked with Asiana Magazine.",
    "She spent 8+ years at Parveen's Salon in Alum Rock before opening her own salon.",
    "AS.PRO ARTIST represents her passion for hair, makeup, skincare and bridal artistry. Her goal is to provide professional, skilled, caring and personal beauty services while using premium, organic and herbal treatments where appropriate.",
  ],
  trainedWith: ["Lubna Rafiq", "Naeem Khan", "P. Louise", "MAC"],
  worksWith: ["Asiana Magazine"],
  previousSalon: "Parveen's Salon, Alum Rock",
};

export const whyChooseUs = [
  { title: "15+ Years Experience", icon: "sparkle" },
  { title: "Trained with Industry Experts", icon: "medal" },
  { title: "Ex-Asiana Magazine Artist", icon: "camera" },
  { title: "24 Specialised Facial Treatments", icon: "leaf" },
  { title: "Premium Organic & Herbal Products", icon: "flower" },
  { title: "Bridal Makeup Expertise", icon: "ring" },
];

export const featuredFacials = [
  "Luxury Facial",
  "Gold Facial",
  "Jessica 24K Gold Facial",
  "Vitamin C Skin Therapy",
  "Collagen Anti-Ageing Treatment",
  "Luxury Bridal Glow Facial",
  "Zafarani Pure Organic Facial",
  "Golden Pearl Facial",
];

export const bridalOffer = {
  title: "Bridal Makeup Special",
  discount: "30% OFF + FREE Facial",
  fromPrice: "£450",
  previousPrice: "£562.50",
  note: siteInfo.bridalDepositNote,
};

export const currentOffers = [
  {
    id: "bridal-special",
    title: "Bridal Makeup Special",
    description: "30% OFF + FREE Facial",
    fromPrice: "£450",
    previousPrice: "£562.50",
    active: true,
  },
];
