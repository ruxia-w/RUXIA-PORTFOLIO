import type { GalleryItem } from "./types";

const BASE = "/gallery";

/** Encodes each path segment so spaces/commas/parens in source filenames resolve correctly. */
function asset(filename: string): string {
  return `${BASE}/${encodeURIComponent(filename)}`;
}

/**
 * Single source of truth for gallery item data. This array's own order is
 * incidental — the Discover and Motion display orders are curated
 * separately in lib/gallery/order.ts (discoverOrder / motionOrder) so
 * reordering either view never requires reshuffling this dataset. Other
 * category filters (Product Design, Industrial Design) fall back to this
 * array's order.
 *
 * thumbnailWidth/thumbnailHeight are each thumbnail's real intrinsic pixel
 * dimensions (verified against the source files) — required by the
 * justified-row layout (lib/gallery/justifiedLayout.ts) to size every tile
 * without distortion.
 */
export const galleryItems: GalleryItem[] = [
{
  "id": "motion-medical",
  "title": "Medical",
  "category": "animation",
  "description": "A digital out-of-home ad motion study for a healthcare app, exploring how headline, portrait, and CTA elements reveal in sequence to hold attention during a brief passerby glance.",
  "thumbnail": "/gallery/motion/medical.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1200,
  "media": [
    {
      "src": "/gallery/motion/medical.mp4",
      "alt": "Medical motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-car",
  "title": "Car",
  "category": "animation",
  "description": "A car-brand hero motion study exploring how a bold display headline, live performance stats, and CTA buttons stagger into view to build momentum before the page settles into its resting state.",
  "thumbnail": "/gallery/motion/car.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1200,
  "media": [
    {
      "src": "/gallery/motion/car.mp4",
      "alt": "Car motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-machine",
  "title": "Machine",
  "category": "animation",
  "description": "A close-up motion study of a control panel's glowing edge light and screen transitions, exploring how subtle illumination and timing communicate an active, powered-on state without any visible buttons.",
  "thumbnail": "/gallery/motion/machine.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1600,
  "media": [
    {
      "src": "/gallery/motion/machine.mp4",
      "alt": "Machine motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-watch",
  "title": "Watch",
  "category": "animation",
  "description": "A smartwatch campaign motion study pairing bold poster typography with on-device watch-face states for time, heart rate, and battery, exploring how one interface reads clearly across both editorial and product contexts.",
  "thumbnail": "/gallery/motion/watch.jpg",
  "thumbnailWidth": 1200,
  "thumbnailHeight": 1600,
  "media": [
    {
      "src": "/gallery/motion/watch.mp4",
      "alt": "Watch motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-quote",
  "title": "Quote",
  "category": "animation",
  "description": "An athletic-brand motion study built around the line 'Progress feels different here,' exploring how bold type, color blocking, and timed reveals turn a static motivational quote into a short-form brand moment.",
  "thumbnail": "/gallery/motion/quote.jpg",
  "thumbnailWidth": 1200,
  "thumbnailHeight": 1600,
  "media": [
    {
      "src": "/gallery/motion/quote.mp4",
      "alt": "Quote motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-presentation-canvas",
  "title": "Presentation Canvas",
  "category": "animation",
  "description": "A translation-app motion study for SAYO, exploring how conversation, transcript, and settings states move across three phone screens to show real-time translation feedback without breaking the user's sense of continuity.",
  "thumbnail": "/gallery/motion/presentation-canvas.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1200,
  "media": [
    {
      "src": "/gallery/motion/presentation-canvas.mp4",
      "alt": "Presentation Canvas motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-music-player-motion-playful-intro",
  "title": "Music Player — Playful Intro",
  "category": "animation",
  "description": "A music-player motion study for Midnight Drift's playful intro, exploring how album art, the tagline 'Play this mood,' and playback controls animate into place with a light, energetic sense of timing.",
  "thumbnail": "/gallery/motion/music-player-motion-playful-intro.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1200,
  "media": [
    {
      "src": "/gallery/motion/music-player-motion-playful-intro.mp4",
      "alt": "Music Player — Playful Intro motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-parking",
  "title": "Parking",
  "category": "animation",
  "description": "A parking-app motion study exploring the reservation flow from map search to confirmed spot, using bold poster typography and timed UI feedback to make a routine booking feel immediate and effortless.",
  "thumbnail": "/gallery/motion/parking.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1600,
  "media": [
    {
      "src": "/gallery/motion/parking.mp4",
      "alt": "Parking motion video.",
      "type": "video"
    }
  ]
},
{
  "id": "motion-bank-promotion",
  "title": "Bank Promotion",
  "category": "animation",
  "description": "A bank brand campaign motion study exploring how one headline, 'Money, without the noise,' carries across billboard, app, and print, using consistent timing and hierarchy to unify tone across every touchpoint.",
  "thumbnail": "/gallery/motion/bank-promotion.jpg",
  "thumbnailWidth": 1600,
  "thumbnailHeight": 1013,
  "media": [
    {
      "src": "/gallery/motion/bank-promotion.mp4",
      "alt": "Bank Promotion motion video.",
      "type": "video"
    }
  ]
},
  {
    id: "chronograph-watch-study",
    title: "Chronograph Watch Study",
    category: "industrial-design",
    description:
      "A mechanical chronograph exploration combining detailed dial architecture with an exploded study of the case, movement, and controls.",
    thumbnail: asset("watch2.png"),
    thumbnailWidth: 1672,
    thumbnailHeight: 941,
    media: [
      { src: asset("watch2.png"), alt: "Chronograph watch dial detail with triple sub-registers and a red central seconds hand." },
    ],
  },
  {
    id: "chronograph-watch-exploded-view",
    title: "Chronograph Watch Exploded View",
    category: "industrial-design",
    description: "An exploded construction study of a mechanical chronograph, detailing the case, movement, and strap assembly.",
    thumbnail: asset("Watch Exploded View.png"),
    thumbnailWidth: 1536,
    thumbnailHeight: 1024,
    media: [
      { src: asset("Watch Exploded View.png"), alt: "Exploded construction view of the chronograph case, movement, and strap." },
    ],
  },
  {
    id: "northbound",
    title: "Northbound",
    category: "product-design",
    description:
      "A travel-planning experience combining destination discovery, preferences, itinerary planning, and saved-trip interactions.",
    thumbnail: asset("travelling app.png"),
    thumbnailWidth: 2160,
    thumbnailHeight: 3840,
    media: [
      {
        src: asset("travelling app.png"),
        alt: "Northbound travel app showing trip setup, a Lofoten destination guide, and a saved day itinerary.",
      },
    ],
  },
  {
    id: "ai-vision-drone",
    title: "AI Vision Drone",
    category: "industrial-design",
    description:
      "A compact aerial imaging concept exploring camera integration, sensor architecture, structural detailing, and technical CMF.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_45 PM (2).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_45 PM (2).png"),
        alt: "AI Vision Drone hero render showing the folded arm and multi-lens camera module.",
      },
    ],
  },
  {
    id: "ai-vision-drone-detail",
    title: "AI Vision Drone Detail",
    category: "industrial-design",
    description: "A detail collage of the AI Vision Drone's camera array, motor arm, and rear structural housing.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_45 PM (3).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_45 PM (3).png"),
        alt: "AI Vision Drone detail collage of the camera array, motor arm, and rear structural housing.",
      },
    ],
  },
  {
    id: "motionpulse-dashboard-alt",
    title: "MotionPulse Dashboard",
    category: "product-design",
    description:
      "An alternate export of the MotionPulse fitness dashboard concept, showing the same performance-readiness and recovery-balance interface.",
    thumbnail: asset("fitness dashboard.png"),
    thumbnailWidth: 3312,
    thumbnailHeight: 2480,
    media: [
      {
        src: asset("fitness dashboard.png"),
        alt: "Alternate export of the MotionPulse dashboard showing muscle load, performance readiness, and recovery balance on a tablet.",
      },
    ],
  },
  {
    id: "modular-plant-stand-system",
    title: "Modular Plant Stand System",
    category: "industrial-design",
    description:
      "A modular furniture and planting system exploring repetition, color, lightweight structure, mobility, and adaptable spatial configurations.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_46 PM (7).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_46 PM (7).png"),
        alt: "A set of modular wire plant stands in orange, green, black, and navy, arranged at varying heights.",
      },
    ],
  },
  {
    id: "leaseflow-wordmark-composition",
    title: "LeaseFlow Wordmark Composition",
    category: "product-design",
    description: "A LeaseFlow composition featuring an oversized wordmark behind the search, overview, and listing screens.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_06 PM (2).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_06 PM (2).png"),
        alt: "LeaseFlow composition with an oversized wordmark behind the search, overview, and listing screens.",
      },
    ],
  },
  {
    id: "safebike",
    title: "SafeBike",
    category: "industrial-design",
    description:
      "An urban e-bike concept combining a compact wheelbase, integrated suspension, battery architecture, and a sculpted structural frame.",
    thumbnail: asset("e-bike.png"),
    thumbnailWidth: 3840,
    thumbnailHeight: 2160,
    media: [{ src: asset("e-bike.png"), alt: "SafeBike urban e-bike with integrated suspension, battery housing, and sculpted frame." }],
  },
  {
    id: "leopard-tracker",
    title: "Leopard Tracker",
    category: "product-design",
    description:
      "A wildlife-tracking mobile concept combining species recognition, behavioral information, habitat context, and field data.",
    thumbnail: asset("animal tracking app.png"),
    thumbnailWidth: 1086,
    thumbnailHeight: 1448,
    media: [
      {
        src: asset("animal tracking app.png"),
        alt: "Leopard Tracker app showing species scan, habitat map, and behavior data on a phone.",
      },
    ],
  },
  {
    id: "project-pulse",
    title: "Project Pulse",
    category: "product-design",
    description:
      "A project-management dashboard concept connecting planning, timelines, team activity, and delivery status in one workspace.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (7).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (7).png"),
        alt: "Project Pulse dashboard with a project timeline, task list, and a six-stage delivery workflow.",
      },
    ],
  },
  {
    id: "portable-speaker",
    title: "Portable Speaker",
    category: "industrial-design",
    description:
      "A portable audio concept exploring fabric texture, integrated carrying geometry, soft-touch controls, and a calm monochromatic CMF system.",
    thumbnail: asset("speaker.png"),
    thumbnailWidth: 1254,
    thumbnailHeight: 1254,
    media: [
      { src: asset("speaker.png"), alt: "Portable speaker in sage green with an integrated carry handle and ribbed fabric body." },
    ],
  },
  {
    id: "nova-vault",
    title: "Nova Vault",
    category: "product-design",
    description:
      "A desktop file-management concept focused on structured navigation, shared assets, and activity visibility across collaborative workspaces.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_06 PM (1).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_06 PM (1).png"),
        alt: "Nova Vault desktop file-management interface showing recent activity, storage, and shared projects.",
      },
    ],
  },
  {
    id: "bike-plus",
    title: "Bike+",
    category: "industrial-design",
    description:
      "A connected indoor cycling concept balancing a compact frame architecture, integrated display, and fitness-oriented ergonomics.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_44 PM (1).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_44 PM (1).png"),
        alt: "Bike+ indoor cycling concept with an integrated performance display and minimal frame.",
      },
    ],
  },
  {
    id: "aureus-bank",
    title: "Aureus Bank",
    category: "product-design",
    description:
      "A business banking dashboard exploring dense financial information, cash flow, account allocation, and actionable insights.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_45 PM (4).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_45 PM (4).png"),
        alt: "Aureus Bank business dashboard with cash flow, account allocation, and card spending overview.",
      },
    ],
  },
  {
    id: "transparent-mouse",
    title: "Transparent Mouse",
    category: "industrial-design",
    description:
      "A wireless mouse concept using transparent surfaces to expose internal construction while retaining a clean consumer-electronics form.",
    thumbnail: asset("mouse.png"),
    thumbnailWidth: 1089,
    thumbnailHeight: 1444,
    media: [{ src: asset("mouse.png"), alt: "Transparent wireless mouse revealing its internal mechanism through a clear shell." }],
  },
  {
    id: "drive-history",
    title: "Drive History",
    category: "product-design",
    description:
      "A mobility dashboard concept that organizes autonomous trip history, route information, and driving-performance metrics.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (3).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (3).png"),
        alt: "Drive History screen showing an autonomous trip route, distance, and weekly driving performance.",
      },
    ],
  },
  {
    id: "flexdeck-treadmill",
    title: "FlexDeck Treadmill",
    category: "industrial-design",
    description:
      "A connected treadmill concept exploring a compact structural frame, integrated display, controls, and performance-focused detailing.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_08 PM (8).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_08 PM (8).png"),
        alt: "FlexDeck connected treadmill with an integrated adaptive-run display and compact structural frame.",
      },
    ],
  },
  {
    id: "northline-studio",
    title: "Northline Studio",
    category: "product-design",
    description:
      "A responsive architecture website concept combining editorial presentation, project discovery, identity, and mobile adaptation.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_46 PM (5).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_46 PM (5).png"),
        alt: "Northline Studio architecture website shown across desktop, identity, and mobile screens.",
      },
    ],
  },
  {
    id: "mobile-robotic-platform",
    title: "Mobile Robotic Platform",
    category: "industrial-design",
    description:
      "A compact robotic mobility concept exploring stacked payload architecture, multi-wheel stability, modular construction, and durable CMF.",
    thumbnail: asset("robotic.png"),
    thumbnailWidth: 1916,
    thumbnailHeight: 821,
    media: [{ src: asset("robotic.png"), alt: "Mobile robotic platform with a stacked speckled payload case on a six-wheel chassis." }],
  },
  {
    id: "health-insights",
    title: "Health Insights",
    category: "product-design",
    description:
      "A mobile health experience exploring how data-processing states and personalized insights can be communicated with clarity and calm.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (4).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (4).png"),
        alt: "Health Insights app processing state showing a calm loading animation while analyzing health data.",
      },
    ],
  },
  {
    id: "portable-hydration-bottle",
    title: "Portable Hydration Bottle",
    category: "industrial-design",
    description:
      "A portable hydration concept combining a textured body, integrated strap, level indicator, and high-visibility interaction accents.",
    thumbnail: asset("bottle.png"),
    thumbnailWidth: 1024,
    thumbnailHeight: 1536,
    media: [{ src: asset("bottle.png"), alt: "Portable hydration bottle in slate blue with an orange loop strap, held in hand." }],
  },
  {
    id: "nexa",
    title: "Nexa",
    category: "product-design",
    description:
      "A dark-mode investment experience exploring portfolio performance, watchlists, account management, and financial hierarchy.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_46 PM (6).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_46 PM (6).png"),
        alt: "Nexa dark-mode investing app showing portfolio value, watchlist, and account screens.",
      },
    ],
  },
  {
    id: "over-ear-headphones",
    title: "Over-Ear Headphones",
    category: "industrial-design",
    description:
      "A premium headphone concept focused on headband geometry, cushion comfort, material transitions, and understated control integration.",
    thumbnail: asset("headphone.png"),
    thumbnailWidth: 1122,
    thumbnailHeight: 1402,
    media: [{ src: asset("headphone.png"), alt: "Over-ear headphones with a brushed metal headband and contrasting cushion lining." }],
  },
  {
    id: "northline-bank",
    title: "Northline Bank",
    category: "product-design",
    description:
      "A modular financial interface system exploring account activity, savings goals, transfers, and everyday banking interactions.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (5).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_30_07 PM (5).png"),
        alt: "Northline Bank cards showing checking balance, recent activity, and a money-transfer flow.",
      },
    ],
  },
  {
    id: "offlow-smart-bell",
    title: "OFFLOW Smart Bell",
    category: "industrial-design",
    description:
      "A compact training-device concept exploring weighted construction, docking, tactile interaction, and a soft material-driven form language.",
    thumbnail: asset("bell.png"),
    thumbnailWidth: 1024,
    thumbnailHeight: 1536,
    // Thumbnail is a stacked triptych (hero / exploded / in-use); bias any
    // vertical crop toward keeping the top hero shot over the bottom panel.
    thumbnailPosition: "center 35%",
    media: [{ src: asset("bell.png"), alt: "OFFLOW Smart Bell shown as a hero render, an exploded weight stack, and in use during a workout." }],
  },
  {
    id: "harbor-401k",
    title: "Harbor 401(k)",
    category: "product-design",
    description:
      "A retirement-planning dashboard designed around balance growth, contribution progress, employer matching, and account visibility.",
    thumbnail: asset("retirement dashboard.png"),
    thumbnailWidth: 3504,
    thumbnailHeight: 2336,
    media: [
      {
        src: asset("retirement dashboard.png"),
        alt: "Harbor 401(k) dashboard showing retirement balance growth and contribution progress.",
      },
    ],
  },
  {
    id: "mechanical-keyboard",
    title: "Mechanical Keyboard",
    category: "industrial-design",
    description:
      "A mechanical keyboard study exploring machined-metal framing, tactile controls, keycap contrast, and desktop-product detailing.",
    thumbnail: asset("keyboard.png"),
    thumbnailWidth: 896,
    thumbnailHeight: 1200,
    media: [{ src: asset("keyboard.png"), alt: "Mechanical keyboard with a machined metal frame, blue keycaps, and a volume knob." }],
  },
  {
    id: "handheld-control-device",
    title: "Handheld Control Device",
    category: "industrial-design",
    description:
      "A compact handheld device study focused on tactile controls, surface texture, grip proportions, and restrained consumer-electronics detailing.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_48 PM (10).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_48 PM (10).png"),
        alt: "Handheld control device with a textured grip surface and a single tactile button.",
      },
    ],
  },
  {
    id: "free-mind-sport-bottle",
    title: "Free Mind Sport Bottle",
    category: "industrial-design",
    description:
      "An exploded construction study exploring stainless-steel structure, insulated assembly, closure components, and exterior CMF.",
    thumbnail: asset("Sport Bottle Exploded View.png"),
    thumbnailWidth: 1086,
    thumbnailHeight: 1448,
    media: [
      {
        src: asset("Sport Bottle Exploded View.png"),
        alt: "Free Mind sport bottle exploded view showing the cap, insulated steel core, and outer sleeve.",
      },
    ],
  },
  {
    id: "footwear-sketch-exploration",
    title: "Footwear Sketch Exploration",
    category: "industrial-design",
    description:
      "A collection of footwear form studies focused on proportion, layering, sole architecture, material breaks, and rapid visual exploration.",
    thumbnail: asset("ChatGPT Image Aug 22 2026 at 10_50_47 PM (8).png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("ChatGPT Image Aug 22 2026 at 10_50_47 PM (8).png"),
        alt: "Sketch sheet of twelve sneaker studies with annotated colorways.",
      },
    ],
  },
  {
    id: "footwear-sketch-exploration-sheet-two",
    title: "Footwear Sketch Exploration II",
    category: "industrial-design",
    description: "A second sheet of footwear form studies exploring proportion, layering, and annotated colorways.",
    thumbnail: asset("shoes sketch.png"),
    thumbnailWidth: 1672,
    thumbnailHeight: 941,
    media: [
      {
        src: asset("shoes sketch.png"),
        alt: "Second sketch sheet of nine sneaker studies with annotated names and colorways.",
      },
    ],
  },
  {
    id: "runway-road-bike",
    title: "Runway Road Bike",
    category: "industrial-design",
    description:
      "An aerodynamic road bike concept exploring an integrated LED taillight, seatpost detailing, and a lightweight titanium-tone frame finish.",
    thumbnail: asset("Bike.png"),
    thumbnailWidth: 1086,
    thumbnailHeight: 1448,
    media: [{ src: asset("Bike.png"), alt: "Runway road bike frame and seatpost detail showing an integrated LED taillight." }],
  },
  {
    id: "orvyn-vaporizer",
    title: "ORVYN Vaporizer",
    category: "industrial-design",
    description:
      "A personal vaporizer concept exploring dual-tone finishes, an OLED battery readout, and compact ergonomic proportions.",
    thumbnail: asset("Electronic cigarettes.png"),
    thumbnailWidth: 3312,
    thumbnailHeight: 2480,
    media: [
      {
        src: asset("Electronic cigarettes.png"),
        alt: "Two ORVYN vaporizer devices in black and silver finishes, each showing a battery-percentage display.",
      },
    ],
  },
  {
    id: "studio-audio-interface",
    title: "Studio Audio Interface",
    category: "industrial-design",
    description:
      "A professional audio interface concept exploring a knurled monitoring dial, waveform metering, and tactile transport controls.",
    thumbnail: asset("detail2.png"),
    thumbnailWidth: 1254,
    thumbnailHeight: 1254,
    media: [
      {
        src: asset("detail2.png"),
        alt: "Close-up of a silver audio interface with a knurled dial, waveform display, and a green transport button.",
      },
    ],
  },
  {
    id: "reformer-training-system",
    title: "Reformer Training System",
    category: "industrial-design",
    description:
      "A studio fitness equipment concept exploring sliding carriage mechanics, padded supports, and precision adjustment hardware.",
    thumbnail: asset("fitness_pushing machine.png"),
    thumbnailWidth: 1086,
    thumbnailHeight: 1448,
    media: [
      {
        src: asset("fitness_pushing machine.png"),
        alt: "Close-up of a black reformer training system with a padded headrest and a green adjustment knob.",
      },
    ],
  },
  {
    id: "ash-side-table",
    title: "Ash Side Table",
    category: "industrial-design",
    description: "A minimalist wood side table concept exploring joinery, proportion, and natural material texture.",
    thumbnail: asset("table.png"),
    thumbnailWidth: 434,
    thumbnailHeight: 574,
    media: [{ src: asset("table.png"), alt: "A wooden side table with a ceramic vase and an open book resting on top." }],
  },
  {
    id: "airport-operations-dashboard",
    title: "SKYWAY Airport Operations Dashboard",
    category: "product-design",
    description:
      "A SKYWAY airport operations dashboard concept combining a live 3D terminal map, gate status, turnaround tracking, and passenger-flow monitoring.",
    thumbnail: asset("airport-operations-dashboard.png"),
    thumbnailWidth: 5670,
    thumbnailHeight: 4259,
    media: [
      {
        src: asset("airport-operations-dashboard.png"),
        alt: "Airport terminal operations dashboard with real-time gate, flight, passenger flow, and ground service monitoring",
      },
    ],
  },
  {
    id: "pulsecare-health-app",
    title: "PulseCare Health App",
    category: "product-design",
    description:
      "A PulseCare health insurance app concept covering plan coverage, a digital insurance card, claims, and everyday care management.",
    thumbnail: asset("pulsecare-health-app.png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("pulsecare-health-app.png"),
        alt: "PulseCare health insurance mobile app showing plan coverage, claims, benefits, and care management",
      },
    ],
  },
  {
    id: "gateflow-airport-navigation",
    title: "GateFlow Airport Navigation",
    category: "product-design",
    description:
      "A GateFlow airport wayfinding concept combining an interactive terminal map, real-time gate directions, and terminal occupancy insight.",
    thumbnail: asset("gateflow-airport-navigation.png"),
    thumbnailWidth: 1448,
    thumbnailHeight: 1086,
    media: [
      {
        src: asset("gateflow-airport-navigation.png"),
        alt: "GateFlow airport navigation app with interactive terminal map, gate directions, and passenger wayfinding",
      },
    ],
  },
  {
    id: "skyway-airport-navigation",
    title: "SKYWAY Airport Navigation",
    category: "product-design",
    description:
      "A SKYWAY passenger companion concept pairing live flight status with turn-by-turn indoor terminal navigation to the gate.",
    thumbnail: asset("skyway-airport-navigation.png"),
    thumbnailWidth: 1365,
    thumbnailHeight: 1024,
    media: [
      {
        src: asset("skyway-airport-navigation.png"),
        alt: "Airport passenger navigation app showing upcoming flight information and indoor terminal wayfinding",
      },
    ],
  },
];

export const galleryCategoryLabels: Record<"discover" | GalleryItem["category"], string> = {
  discover: "Discover",
  "product-design": "Product Design",
  "industrial-design": "Industrial Design",
  animation: "Motion",
};
