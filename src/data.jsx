/* global window */

// ============================================================
// Konar Bros Tile Company — content
// Fictional company inspired by a Lindross-style presentation.
// Imagery: Unsplash — tile, kitchen, bathroom interiors.
// ============================================================

const BRAND = {
  name: "Konar Bros",
  full: "Konar Bros Tile Co.",
  tagline: "Tampa Bay tile installation — bathrooms, showers, backsplashes, floors.",
  license: "Licensed & Insured",
  phoneTampa: "(813) 439-1652",
  phoneTampaTel: "+18134391652",
  phoneStPete: "(813) 439-1652",
  phoneStPeteTel: "+18134391652",
  email: "hello@konarbros.com",
  address: "Tampa Bay, FL",
  yearsBiz: "10+",
  projects: "250+",
  awards: "Residential",
  features: "Licensed",
  founder: "The Konar Brothers",
  founderNote: "~The Konar Brothers",
};

const PROMISE = [
  "Fully Custom Design",
  "On-Time, On-Budget",
  "Installed by Lifetime Tilers",
];

const DIFFS = [
  {
    kicker: "Designed around your needs.",
    title: "Come home to tile you actually *live* with.",
    body: "We don't pull from a catalog. Every Konar Bros project starts with an in-home measure and a 3D layout built around your light, your grout lines, and your tolerance for maintenance. You'll get expert recommendations you didn't ask for, and can't imagine living without.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    kicker: "Stay up-to-date on every cut.",
    title: "Know *exactly* what's happening in your home.",
    body: "Never wonder which layer's going in today. Our project board shows every tile scheduled, every grout color confirmed, every trade on-site. Check in from your phone, approve changes mid-install, and watch the progress photos stack up — without a single phone-tag loop.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
  },
  {
    kicker: "Be heard, start to finish.",
    title: "A partner who *actually* listens.",
    body: "Big tile projects get overwhelming. We walk you through specification, pattern layout, waterproofing, and schedule — in plain English, in the order you need to decide. You gain a partner, not a vendor. We treat your floors like they're going in our own home.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
];

const SERVICES = [
  {
    slug: "bathrooms",
    name: "Bathrooms",
    short: "Full bathroom tile — floors, walls, tub surrounds, and accent details. Clean lines, proper waterproofing, layouts that hold up.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    scope: ["Floor-to-ceiling wall tile", "Tub surrounds", "Niche & bench detailing", "Waterproofing & prep"],
  },
  {
    slug: "showers",
    name: "Showers",
    short: "Custom shower tile — curbless walk-ins, full wet rooms, glass enclosures. Built to stay dry where it needs to.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
    scope: ["Curbless walk-ins", "Full wet rooms", "Schluter waterproofing", "Linear drain layouts"],
  },
  {
    slug: "backsplashes",
    name: "Kitchen Backsplashes",
    short: "Backsplashes done right. Subway, mosaic, herringbone, slab — laid out with proper grout spacing and clean outlet cuts.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
    scope: ["Full-wall backsplashes", "Under-cabinet runs", "Slab-stone backs", "Hand-cut mosaic patterns"],
  },
  {
    slug: "floors",
    name: "Tile Floors",
    short: "Porcelain, ceramic, stone — kitchens, baths, entries, and whole-home runs. Level substrate, tight grout lines.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    scope: ["Porcelain & ceramic", "Natural stone", "Large-format planks", "Substrate leveling"],
  },
];

const STATS = [
  { num: "10+", label: "Years installing" },
  { num: "250+", label: "Tampa Bay homes" },
  { num: "100%", label: "Residential focus" },
  { num: "L&I", label: "Licensed & Insured" },
];

const TESTIMONIALS = [
  {
    quote: "We get so many compliments on the kitchen — thanks to Konar Bros.",
    body: "I will recommend Konar Bros to everyone I know. They tiled our entire first floor and the kitchen backsplash. Professional, tidy, and on schedule. They stepped in with layout suggestions when I got overwhelmed choosing between three very similar whites. The grout lines are laser-straight. Every installer cleaned up at the end of the day, no short-cuts.",
    author: "Julie Meyers",
    location: "Palma Ceia, Tampa",
    service: "Whole-Home Tile",
  },
  {
    quote: "Ahead of schedule, on budget, and quality that exceeded our expectations.",
    body: "Exceptional from planning through install. My master-bath retile came in ahead of schedule and on budget, and the quality was beyond what I thought possible from a residential crew. I was nervous about living in the house during a full demo — Konar's guys made it seamless. Erin and Miles feel like family now, as do several of their trades.",
    author: "Tammy R.",
    location: "Westchase, FL",
    service: "Bathroom Tile",
  },
  {
    quote: "One of the finest tile outfits we've ever worked with.",
    body: "Our stone supply company has delivered to Konar Bros for a decade across Tampa Bay. They run some of the cleanest jobsites we visit, and their tile setters are respectful, reliable, and know their craft. It's a pleasure to have the relationship we do — we look forward to many more years of delivering pallets to their trucks.",
    author: "K. Koudela",
    location: "Gulf Coast Stone Supply",
    service: "Trade partner",
  },
  {
    quote: "I'd work with them on another project tomorrow.",
    body: "We had a great experience working with Konar to redo our kitchen backsplash and powder bath. They helped us enormously with layout and grout-color decisions — big tile projects are overwhelming for first-timers, and they spent real time talking through things with us. Our kitchen turned out exactly what we wanted. Hire them.",
    author: "Grace Kunkel",
    location: "Carrollwood, Tampa",
    service: "Kitchen Tile",
  },
];

const PROCESS = [
  {
    n: "1",
    word: "Dream",
    d: "We sit down with your space, your goals, and your budget — in your home, over coffee, not a showroom counter.",
  },
  {
    n: "2",
    word: "Design",
    d: "Our tile designer mocks up 3D layouts so you see the grout lines, the transitions, and the stone veining before we cut a single piece.",
  },
  {
    n: "3",
    word: "Transform",
    d: "You stay in the loop through our project app — daily photos, confirmed selections, and a schedule we actually keep.",
  },
];

const PORTFOLIO = [
  { slug: "muirfield", title: "Master Bath Remodel", area: "South Tampa", tag: "Bathroom",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80" },
  { slug: "turtle-creek", title: "Herringbone Backsplash", area: "Clearwater", tag: "Backsplash",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80" },
  { slug: "isle-bayway", title: "Large-Format Floor", area: "St. Petersburg", tag: "Floor",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80" },
  { slug: "party-patio", title: "Curbless Walk-In Shower", area: "South Tampa", tag: "Shower",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80" },
  { slug: "nelson", title: "Guest Bath Retile", area: "St. Petersburg", tag: "Bathroom",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80" },
  { slug: "grudis", title: "Subway Backsplash", area: "Clearwater", tag: "Backsplash",
    img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1400&q=80" },
  { slug: "dashing", title: "Wet Room Shower", area: "Downtown Tampa", tag: "Shower",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80" },
  { slug: "bayshore", title: "Porcelain Plank Floor", area: "Bayshore, Tampa", tag: "Floor",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80" },
  { slug: "harbour", title: "Marble Mosaic Floor", area: "Harbour Island", tag: "Floor",
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=80" },
  { slug: "hyde-park", title: "Zellige Backsplash", area: "Hyde Park, Tampa", tag: "Backsplash",
    img: "https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&w=1400&q=80" },
  { slug: "seminole", title: "Frameless Glass Shower", area: "Seminole Heights", tag: "Shower",
    img: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?auto=format&fit=crop&w=1400&q=80" },
  { slug: "davis", title: "Penny-Round Bath Floor", area: "Davis Islands", tag: "Bathroom",
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80" },
];

// Hero + section imagery
const IMG = {
  hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=80",
  team: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1600&q=80",
  founder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
  newsletter: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
};

Object.assign(window, { BRAND, PROMISE, DIFFS, SERVICES, STATS, TESTIMONIALS, PROCESS, PORTFOLIO, IMG });
