/**
 * CUSTOMER TESTIMONIALS
 *
 * Only real, verifiable client reviews go in this array. Publishing invented
 * reviews is illegal in the UK (Digital Markets, Competition and Consumers Act
 * 2024) and can be reported to Trading Standards, so nothing is written here
 * for you — paste in genuine Google, Facebook or Instagram feedback instead.
 *
 * Shape of each entry:
 *   {
 *     id: "unique-key",
 *     quote: "Exact words the client left, unedited.",
 *     name: "First name + initial, e.g. Sana K.",
 *     service: "Bridal Makeup",        // optional
 *     source: "Google",                // optional — Google / Instagram / Facebook
 *     rating: 5,                       // optional — 1–5
 *   }
 *
 * The Home page section hides itself automatically while this array is empty,
 * so the site never shows blank placeholder cards.
 */
export const testimonials = [
  // { id: "g-1", quote: "...", name: "...", service: "...", source: "Google", rating: 5 },
];

/**
 * PRESS & FEATURED WORK — verified credits taken from published posts.
 * These are real and safe to display as social proof while reviews are
 * being collected.
 */
export const featuredWork = [
  {
    id: "kubra-london-nahi-jaungi",
    image: "/press/kubra-khan-styling.jpg",
    alt: "Hair and makeup for actress Kubra Khan, styled for London Nahi Jaungi promotional events",
    title: "Kubra Khan — London Nahi Jaungi Promo",
    detail:
      "Hair & makeup credit alongside Lubna Rafiq for the actress's London promotional events.",
    credit: "Styled by @zafshabir · Hair & Makeup @officiallubnarafiq and @as.proartist",
  },
  {
    id: "london-promo-tour",
    image: "/press/london-nahi-jaungi-promo.jpg",
    alt: "Cast of London Nahi Jaungi on their London promotional tour",
    title: "London Promo Tour",
    detail: "Working with the cast across the film's London press appearances.",
    credit: "Via @thekubism",
  },
];

export const pressHighlights = [
  "Worked with Asiana Magazine",
  "Trained with Lubna Rafiq, Naeem Khan, P. Louise and MAC",
  "Celebrity hair & makeup credits on London film promo events",
];
