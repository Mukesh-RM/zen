# 🥋 Zen Isshinryu Karate

**All India Zen Isshinryu Karate Association — Complete Professional Website**

A world-class, cinematic, fully immersive website for Zen Isshinryu Karate, headquartered in Chennai, Tamil Nadu, India. Built to feel like the digital equivalent of walking into a prestigious martial arts dojo — powerful, disciplined, ancient-meets-modern.

![Stack](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![Stack](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Stack](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss) ![Stack](https://img.shields.io/badge/Three.js-165-000000?logo=threedotjs) ![Stack](https://img.shields.io/badge/Framer_Motion-11-ff0055?logo=framer)

---

## Live Demo

Run locally:
```bash
git clone https://github.com/Mukesh-RM/zen.git
cd zen
npm install
npm run dev
```
Open **http://localhost:3000**

---

## Pages (14 Total)

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Full-viewport 3D hero with karateka figure, 8 sections (stats counter, Isshinryu history, belt progression with 3D belts, branch locations, upcoming events, testimonial carousel, CTA banner) |
| **About** | `/about` | Karate history timeline, Isshinryu vs Shotokan/Goju-Ryu comparison table, all 8 empty-hand kata + 3 weapons kata listed |
| **Syllabus** | `/syllabus` | Accordion per belt rank with kata, techniques, self-defense, sparring requirements. Printable |
| **Instructors** | `/instructors` | Featured chief instructor with world record section, grid of black belt instructors, click-to-expand modal bios |
| **Grading** | `/grading` | Requirements table per belt, age categories (Kids/Juniors/Adults/Seniors), upcoming grading exam schedule |
| **Tournament** | `/tournament` | Tournament event list, 4-step multi-step registration form (Personal → Martial Arts → Category Selection → Review & Submit) |
| **Gallery** | `/gallery` | Masonry image grid, filter tabs (Training/Tournament/Grading/Events/Seminars), full-screen lightbox |
| **Events** | `/events` | List/grid view toggle, type filter, upcoming + past events archive |
| **Creed** | `/creed` | Full Isshinryu Karate Creed in editorial typography, kanji watermarks, printable |
| **FAQ** | `/faq` | 20 questions across 6 categories (General, Joining, Training, Grading, Tournament, Kids) with accordion |
| **Mission** | `/mission` | Mission, vision, values, and association goals in editorial long-form |
| **Contact** | `/contact` | Contact form + all 7 branch phone numbers with click-to-call and WhatsApp links |
| **Book a Class** | `/book` | Trial class booking form with branch/day/time select |
| **Admin Dashboard** | `/admin` | Protected dashboard with sidebar — manage instructors, events, gallery, registrations. Stats overview. CRUD-ready tables |

---

## 3D Elements

- **Hero Scene** — Full-viewport Three.js canvas with a karateka figure (built from geometric primitives) in Isshinryu fighting stance, dramatic spotlight lighting, dust particles, and reflective floor
- **Rotating Belt Display** — Each belt rank has a 3D rendered belt with color-matched material. Black belt gets metallic sheen, gold belt gets shimmer particles
- **Karate Crest** — Rotating 3D coin/medal with gold metallic material, concentric rings, cross lines, and center dot
- **Suspense fallback** — Animated spinner while 3D canvases load

---

## Design System

| Token | Value |
|-------|-------|
| **Background** | `#0A0A0A` (near-black) |
| **Accent** | `#C41E3A` (crimson red) |
| **Gold** | `#B8960C` (aged gold) |
| **Text** | `#F5F0E8` (parchment/ivory) |
| **Display Font** | Cinzel Decorative (hero titles, section headers) |
| **Body Font** | Crimson Pro (elegant serif) |
| **UI Font** | Space Mono (labels, nav, data) |

- Grain texture overlay at 3% opacity
- Custom scrollbar (dark track, crimson thumb)
- Red underline hover animations on nav links
- Card hover lift with gold glow
- Print-friendly CSS for creed and syllabus pages

---

## Animations

- **Scroll-triggered reveals** — Elements slide up/fade in with staggered delays (Framer Motion + IntersectionObserver)
- **Animated counters** — 30+, 500+, 12 stats with eased count-up animation
- **Testimonial carousel** — Auto-advancing with manual dot navigation and slide transitions
- **Belt progression** — Expandable accordion with progress bar
- **Page transitions** — Framer Motion AnimatePresence between routes
- **Kanji watermark** — Oversized kanji character in Philosophy section
- **Crimson gradient CTA banner**

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v3 |
| **3D** | Three.js + React Three Fiber + Drei |
| **Animation** | Framer Motion, GSAP |
| **Icons** | Lucide React |
| **Forms** | React Hook Form (scaffolded for Zod) |
| **Notifications** | React Hot Toast |
| **Fonts** | next/font (Cinzel Decorative, Crimson Pro, Space Mono, Noto Serif JP) |

---

## Data

All data is **mock/hardcoded** — ready for backend integration:

| Data File | Contents |
|-----------|----------|
| `instructors.ts` | 8 instructors with names, ranks, dan levels, branches, bios, photos |
| `events.ts` | 8 upcoming + 2 past events (tournaments, gradings, seminars, camps) |
| `testimonials.ts` | 8 student testimonials with names, belts, photos |
| `branches.ts` | 7 branches across Chennai with addresses, phones, WhatsApp, schedules |
| `beltRequirements.ts` | 10 belt ranks with kata, techniques, self-defense, sparring details |
| `faq.ts` | 20 FAQ entries across 6 categories |
| `gallery.ts` | 18 gallery items with categories and captions |

---

## Integration Points (Ready to Connect)

All third-party integrations are structurally scaffolded:

- **Supabase** — Types defined, data files mirror the Prisma schema. Replace mock data imports with Supabase client calls
- **Razorpay** — Payment step in tournament registration form shows placeholder message
- **Resend** — API routes (`/api/contact`, `/api/register`, `/api/book`) accept POST requests and respond with success — ready to add email sending
- **NextAuth.js** — Admin panel at `/admin` is unprotected currently. Add NextAuth middleware for auth
- **Environment variables** — `.env.local` with placeholder keys for all services

---

## Project Structure

```
src/
├── app/
│   ├── (admin)/admin/        # Protected admin routes
│   │   ├── page.tsx           # Dashboard
│   │   ├── instructors/       # Instructor CRUD
│   │   ├── events/            # Event CRUD
│   │   ├── gallery/           # Gallery CRUD
│   │   └── registrations/     # Registration viewer
│   ├── api/                   # API routes
│   │   ├── contact/route.ts
│   │   ├── register/route.ts
│   │   └── book/route.ts
│   ├── about/                 # About Karate page
│   ├── syllabus/              # Belt curriculum
│   ├── instructors/           # Instructor profiles
│   ├── grading/               # Grading requirements
│   ├── tournament/            # Tournament registration
│   ├── gallery/               # Photo gallery
│   ├── events/                # Events calendar
│   ├── creed/                 # Karate creed
│   ├── faq/                   # FAQ
│   ├── mission/               # Mission and vision
│   ├── contact/               # Contact form
│   ├── book/                  # Trial class booking
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home
│   └── globals.css            # Global styles
├── components/
│   ├── 3d/                    # Three.js components
│   │   ├── HeroScene.tsx
│   │   ├── BeltDisplay.tsx
│   │   ├── KarateCrest.tsx
│   │   └── ThreeCanvas.tsx
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── sections/              # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── PhilosophyStrip.tsx
│   │   ├── AboutStyle.tsx
│   │   ├── BeltProgression.tsx
│   │   ├── BranchMap.tsx
│   │   ├── UpcomingEvents.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   └── ui/                    # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       ├── CountUp.tsx
│       ├── RevealOnScroll.tsx
│       ├── ScrollIndicator.tsx
│       └── BeltBadge.tsx
└── lib/
    ├── data/                  # Mock data files
    ├── types.ts               # TypeScript interfaces
    └── utils.ts               # Utility functions
```

---

## Build

```bash
npm run build    # Zero errors, all 24 routes static-generated
npm run dev      # Development server on localhost:3000
```

---

## License

Built for the **All India Zen Isshinryu Karate Association**. All rights reserved.

---

*"The ultimate aim of karate lies not in victory or defeat, but in the perfection of the character of its participants."* — Gichin Funakoshi
