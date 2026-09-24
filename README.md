# Ahmed Sayed Abdelnaby — Backend Engineer

[![Deploy to GitHub Pages](https://github.com/Ahmedsayed322/proto/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ahmedsayed322/proto/actions/workflows/deploy.yml)
[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-crimson.svg)](https://Ahmedsayed322.github.io/proto/)
[![Ain Shams University](https://img.shields.io/badge/B.Sc.%20CS-Ain%20Shams%20(2024)-blue.svg)](https://eng.asu.edu.eg/)

Personal digital engineering portfolio for **Ahmed Sayed Abdelnaby**, a Backend Engineer specializing in Node.js, NestJS (v11), TypeScript, MongoDB transactions, Redis caching, APIs, and real-time distributed architectures.

---

## ⚡ Live Preview & Deployment
* **Live GitHub Pages URL**: **[https://Ahmedsayed322.github.io/proto/](https://Ahmedsayed322.github.io/proto/)**
* **Automated CI/CD**: Every push to the `main` branch automatically triggers GitHub Actions to build and deploy to GitHub Pages.

---

## 💼 Candidate Snapshot (For Recruiters & Hiring Managers)
* **Target Role**: Junior Backend Engineer / Node.js & NestJS Developer
* **Availability**: **Immediate · Full-Time · Zero Notice Period**
* **Education**: B.Sc. in Computer Science, **Ain Shams University** (2020–2024)
* **Military Status**: **Completed** (Exempt/Fulfilled)
* **Location**: Cairo, Egypt (Available for Remote, Hybrid, or On-site worldwide)
* **Languages**: Arabic (Native) · English (Intermediate / Professional Working)
* **Direct Email**: [ahmedsayed0575@gmail.com](mailto:ahmedsayed0575@gmail.com)
* **Phone / WhatsApp**: [+20 010 036 19642](tel:+2001003619642)
* **LinkedIn**: [linkedin.com/in/ahmed-sayed-589477327](https://linkedin.com/in/ahmed-sayed-589477327)
* **GitHub**: [github.com/Ahmedsayed322](https://github.com/Ahmedsayed322)

---

## 🛠️ Core Technology Matrix
* **Languages & Runtimes**: Node.js, NestJS (v11), TypeScript, JavaScript (ES6+), Express.js
* **Databases & Caching**: MongoDB, Mongoose ODM, Redis (Caching & Pub/Sub messaging)
* **API Architectures & Real-Time**: RESTful APIs, GraphQL, Socket.IO, WebSockets, Postman
* **Security & Auth**: Dual-Prefix JWT, Role-Based Access Control (RBAC), Argon2, Bcrypt, Asymmetric Encryption, Helmet, CORS
* **Cloud & Operations**: AWS (EC2, S3, Elastic Beanstalk), Docker basics, Git/GitHub, PayMob Payment Gateway, Firebase Cloud Messaging (FCM)

---

## 🚀 Key Featured Projects

### 01. [E-Commerce Backend API](https://github.com/Ahmedsayed322/ecommerce-backend)
* **Stack**: NestJS (v11), TypeScript, MongoDB, Mongoose ODM, PayMob Gateway, JWT
* **Key Achievements**:
  * Decoupled database queries from domain rules using the **Repository Pattern**.
  * Wrapped order placement and stock decrement in **MongoDB multi-document transactional sessions** to eliminate inventory overselling during concurrent checkouts.
  * Integrated **PayMob payment gateway** with cryptographic **HMAC-SHA512 webhook verification** and automated refund workflows.

### 02. [Social Media Backend](https://github.com/Ahmedsayed322/social-media-backend)
* **Stack**: Node.js, Express, Socket.IO, Redis, GraphQL, AWS S3, Firebase FCM
* **Key Achievements**:
  * Engineered a low-latency real-time chat and live presence engine with **Socket.IO** backed by a **Redis pub/sub** broker for multi-instance scaling.
  * Direct media upload pipeline using **AWS S3 presigned URLs** to eliminate server memory exhaustion.
  * Hybrid API design: **GraphQL** for nested relational queries (posts, threaded comments, friends) + REST for authentication and state mutations.

### 03. [Saraha Secure Backend](https://github.com/Ahmedsayed322/saraha-app)
* **Stack**: Node.js, Express, Redis, MongoDB, AWS EC2, AWS Elastic Beanstalk
* **Key Achievements**:
  * **~30% Average Latency Reduction** achieved through multi-tier **Redis caching** across 5+ core modules.
  * Asymmetric end-to-end payload encryption for anonymous submissions, combined with Argon2 and bcrypt password hashing.
  * Production cloud infrastructure hosted on **AWS EC2** and orchestrated with **AWS Elastic Beanstalk**.

---

## 📦 Local Development

### Prerequisites
* Node.js 18+ (tested on Node.js v24)
* npm 9+

### Quick Start
```bash
# 1. Clone repository
git clone https://github.com/Ahmedsayed322/proto.git
cd proto

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production (outputs to dist/ with 404.html and .nojekyll)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 GitHub Pages Configuration Instructions

To enable GitHub Pages in your GitHub repository:
1. Open the repository on GitHub: **[https://github.com/Ahmedsayed322/proto](https://github.com/Ahmedsayed322/proto)**
2. Go to **Settings** ➔ **Pages** (under Code and automation in the left sidebar).
3. Under **Build and deployment** ➔ **Source**, select:
   * **GitHub Actions**
4. Once selected, GitHub will automatically run the `.github/workflows/deploy.yml` workflow on every push to `main` and deploy your site to:
   * **`https://Ahmedsayed322.github.io/proto/`**

---

© 2026 Ahmed Sayed Abdelnaby. All rights reserved.
