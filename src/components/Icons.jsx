// Minimal hand-rolled SVG icon set — avoids pulling in a large icon library.
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconMenu = (props) => (
  <svg {...base} {...props}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);
export const IconClose = (props) => (
  <svg {...base} {...props}><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg>
);
export const IconPin = (props) => (
  <svg {...base} {...props}><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const IconPhone = (props) => (
  <svg {...base} {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>
);
export const IconWhatsapp = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.25-1.37a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 18.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.26-8.24 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.55-3.71 8.23-8.26 8.23zm4.52-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.4.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.3-.23.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
);
export const IconInstagram = (props) => (
  <svg {...base} {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>
);
export const IconTiktok = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}><path d="M16.5 2h-3v13.5a2.75 2.75 0 1 1-2.75-2.75c.26 0 .5.03.75.08V9.6a5.94 5.94 0 0 0-.75-.05A5.95 5.95 0 1 0 16.5 15.5V8.2a8.16 8.16 0 0 0 4.5 1.35V6.55A5.13 5.13 0 0 1 16.5 2z"/></svg>
);
export const IconArrowRight = (props) => (
  <svg {...base} {...props}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
export const IconSearch = (props) => (
  <svg {...base} {...props}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
export const IconCheck = (props) => (
  <svg {...base} {...props}><polyline points="20 6 9 17 4 12" /></svg>
);
export const IconPlus = (props) => (
  <svg {...base} {...props}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
export const IconSparkle = (props) => (
  <svg {...base} {...props}><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" /></svg>
);
export const IconMedal = (props) => (
  <svg {...base} {...props}><circle cx="12" cy="9" r="6" /><path d="M8.2 14.5L6 22l6-3 6 3-2.2-7.5" /></svg>
);
export const IconCamera = (props) => (
  <svg {...base} {...props}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
);
export const IconLeaf = (props) => (
  <svg {...base} {...props}><path d="M11 20A7 7 0 0 1 4 13c0-6 7-11 15-11 0 8-5 15-11 15 0 1.5 0 3 0 3z" /></svg>
);
export const IconFlower = (props) => (
  <svg {...base} {...props}><circle cx="12" cy="12" r="3" /><path d="M12 2a3 3 0 0 1 0 6 3 3 0 0 1 0-6zm0 14a3 3 0 0 1 0 6 3 3 0 0 1 0-6zM2 12a3 3 0 0 1 6 0 3 3 0 0 1-6 0zm14 0a3 3 0 0 1 6 0 3 3 0 0 1-6 0z" /></svg>
);
export const IconRing = (props) => (
  <svg {...base} {...props}><circle cx="12" cy="15" r="6" /><path d="M9 9l3-6 3 6" /></svg>
);
export const IconClock = (props) => (
  <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
);
export const IconScissorsComb = (props) => (
  <svg {...base} {...props}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="8.5" y1="8" x2="20" y2="19" /><line x1="8.5" y1="16" x2="20" y2="5" /></svg>
);

export const iconMap = {
  sparkle: IconSparkle,
  medal: IconMedal,
  camera: IconCamera,
  leaf: IconLeaf,
  flower: IconFlower,
  ring: IconRing,
};
