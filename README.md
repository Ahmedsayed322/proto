# Ahmed Sayed Abdelnaby — Backend Engineer Portfolio

A personal digital engineering portfolio for **Ahmed Sayed Abdelnaby**, a Backend Engineer specializing in Node.js, NestJS (v11), TypeScript, MongoDB, APIs, distributed transactions, and real-time systems.

---

## 01. Design Identity & Philosophy

- **Palette**: Strict Swiss-inspired warm white (`#FAF9F6`), pure white (`#FFFFFF`), near-black (`#171717`), soft-black (`#242424`), and signature red (`#D92D20`) accent.
- **Editorial & Architectural**: Replaces generic AI templates, purple glows, glassmorphic cards, and pill badges with structured typography, monospaced metadata, thin rules, and technical request-flow diagrams.
- **Controlled Border Radii**: 4–8px sharp geometry; avoids generic `rounded-2xl` and `rounded-3xl` cards.
- **Factual Fidelity**: Strictly sourced from Ahmed's actual CV and GitHub repositories. No fabricated companies, traffic metrics, benchmarks, or fake testimonials.

---

## 02. Routes & Architecture

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | **Main Portfolio** | Hero with asymmetric request flow, 3 distinct project presentations, editorial tech stack, about, Ain Shams education, and direct contact CTA. |
| `/projects` | **System Archives** | Comprehensive index of engineering systems with domain tags, architecture summaries, and source links. |
| `/projects/ecommerce-backend` | **E-Commerce Case Study** | NestJS v11, Repository Pattern, Dual-Prefix JWT, MongoDB transactional sessions, PayMob intentions & HMAC-SHA512 verification, AWS S3 SDK v3. |
| `/projects/social-media-backend` | **Social Media Case Study** | Socket.IO real-time chat, Redis pub/sub broadcasting, hybrid REST & GraphQL APIs, AWS S3 presigned URLs, Firebase FCM alerts. |
| `/projects/saraha` | **Saraha Case Study** | Asymmetric payload encryption, Argon2/bcrypt hashing, Helmet & CORS perimeter, multi-tier rate limiting, and ~30% average API latency reduction via Redis caching. |
| `/about` | **Engineering Background** | Academic credentials from Ain Shams University (B.Sc. CS 2020–2024), military status (Completed), language proficiency, and core backend principles. |
| `/contact` | **Direct Communication** | Copy-to-clipboard email (`ahmedsayed0575@gmail.com`), telephone (`+20 010 036 19642`), LinkedIn, and GitHub profiles. No fake forms. |
| `/*` | **Custom 404** | Minimal editorial route-not-found page. |

---

## 03. Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/Ahmedsayed322/portfolio.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 04. Production Deployment

The project builds to the `dist/` directory with static SPA fallback (`dist/404.html`) configured for zero-configuration deployment on:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
