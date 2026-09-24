import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-backend',
    slug: 'ecommerce-backend',
    number: '01',
    title: 'E-Commerce Backend API',
    subtitle: 'NestJS Store System',
    description:
      'A modular, production-grade e-commerce backend built with NestJS (v11) and TypeScript. Designed with the Repository Pattern, dual-prefix JWT authorization, atomic order processing using MongoDB transactions, and PayMob payment integrations.',
    role: 'Backend Architect & Engineer',
    githubUrl: 'https://github.com/Ahmedsayed322/E-Commerce-Backend',
    techStack: [
      'NestJS v11',
      'TypeScript',
      'MongoDB',
      'Mongoose ODM',
      'PayMob',
      'AWS S3 SDK v3',
      'JWT',
      'CryptoJS',
      'Multer',
    ],
    highlights: [
      'Modular architecture implemented with NestJS v11 and TypeScript, leveraging the Repository Pattern to decouple database operations from core business rules.',
      'Dual-prefix JWT mechanism separating user and admin authorization scopes with dynamically resolved signature keys, custom decorators, and role-based guards.',
      'MongoDB transactional sessions guarantee atomic order placement and prevent stock inaccuracies during concurrent checkouts.',
      'PayMob integration handling payment intentions, refund lifecycle, and secure webhook verification using HMAC-SHA512 checksums.',
      'Direct asset handling through Multer and AWS S3 SDK v3 alongside a coupon engine featuring discount validation and reuse prevention.',
    ],
    architecturalThemes: [
      {
        title: 'Authorization & Scoping',
        detail:
          'Dual-prefix JWT architecture segregating end-user and administrator authorization flows. Signature keys are dynamically retrieved and validated against custom NestJS parameter decorators and strict role-based guards.',
      },
      {
        title: 'Concurrent Checkout & Transactions',
        detail:
          'Utilizes MongoDB transactional sessions to execute atomic multi-document operations. When multiple checkouts occur simultaneously, inventory decrements and order document insertions are wrapped in an all-or-nothing boundary.',
      },
      {
        title: 'Payment Intentions & Webhooks',
        detail:
          'End-to-end integration with PayMob payment services. Implements HMAC-SHA512 cryptographic verification on inbound webhook events to guard against replay and tampering before triggering order fulfillment or automated refunds.',
      },
      {
        title: 'Storage & Asset Pipeline',
        detail:
          'Product image uploads orchestrated through Multer middleware, validated for MIME type and file sizing, and persisted directly to AWS S3 using AWS SDK v3 with structured object keying.',
      },
      {
        title: 'Coupon Validation Engine',
        detail:
          'Robust coupon verification layer that enforces expiration boundaries, minimum purchase constraints, and atomic user reuse prevention flags.',
      },
    ],
  },
  {
    id: 'social-media-backend',
    slug: 'social-media-backend',
    number: '02',
    title: 'Social Media App',
    subtitle: 'Real-Time Social Backend',
    description:
      'A full-featured TypeScript backend powering real-time social networking. Combines REST and GraphQL endpoints for relational social graph queries with Socket.IO and Redis for instantaneous one-to-one and group messaging.',
    role: 'Backend Engineer',
    githubUrl: 'https://github.com/Ahmedsayed322/Social-Media',
    techStack: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'MongoDB',
      'Redis',
      'Socket.IO',
      'GraphQL',
      'AWS S3',
      'Firebase Cloud Messaging',
    ],
    highlights: [
      'Real-time communication engine leveraging Socket.IO backed by Redis pub/sub and MongoDB for message persistence, delivery status, and history pagination.',
      'One-to-one and group chat workflows with live presence, delivery receipts, and persistent message threads.',
      'Hybrid API layer utilizing REST for command mutations and GraphQL for flexible client queries across posts, comments, stories, and friend graphs.',
      'AWS S3 presigned URLs for client-side direct media uploads, reducing server memory footprint during high-resolution image and video transfers.',
      'Firebase Cloud Messaging (FCM) integration for real-time mobile push notifications across social interactions.',
    ],
    architecturalThemes: [
      {
        title: 'Real-Time Event Distribution',
        detail:
          'Socket.IO server instances backed by Redis pub/sub to propagate message frames across distributed connections. Enables low-latency one-to-one and group message delivery with immediate ack callbacks.',
      },
      {
        title: 'Hybrid REST & GraphQL Query Layer',
        detail:
          'Employs GraphQL for flexible querying of deeply nested social data (posts, threaded comments, user profile cards) without over-fetching, while utilizing Express REST endpoints for transactional mutations.',
      },
      {
        title: 'Presigned Media Uploads',
        detail:
          'Generates time-bound AWS S3 presigned PUT URLs, offloading large binary transfers from the Node.js event loop directly to S3 storage buckets.',
      },
      {
        title: 'Push Notification Dispatch',
        detail:
          'Asynchronous push notification delivery via Firebase Cloud Messaging (FCM), notifying offline recipients of incoming chat messages, mentions, and friend activities.',
      },
    ],
  },
  {
    id: 'saraha',
    slug: 'saraha',
    number: '03',
    title: 'Saraha Anonymous Platform',
    subtitle: 'High-Security Anonymous Messaging',
    description:
      'A hardened anonymous messaging REST API with multi-tiered security and high-throughput caching. Features asymmetric message encryption, Argon2 hashing, strict rate-limiting, and Redis caching that cut average response times by ~30%.',
    role: 'Backend Engineer',
    githubUrl: 'https://github.com/Ahmedsayed322/Saraha-backend',
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'JWT',
      'Google OAuth 2.0',
      'Argon2 / bcrypt',
      'Helmet',
      'Cloudinary',
      'AWS EC2',
      'AWS Elastic Beanstalk',
    ],
    metrics: {
      label: 'Performance Impact',
      value: '~30%',
      context: 'reduction in average API response time via Redis caching',
    },
    highlights: [
      'Anonymous messaging REST API architected across 5+ core modules with user privacy and end-to-end payload confidentiality.',
      'Asymmetric cryptographic protection for message content, paired with Argon2 and bcrypt password hashing algorithms.',
      'Defensive HTTP configuration featuring Helmet security headers, granular CORS allowlists, and multi-tier IP rate limiting via express-rate-limit.',
      'Redis caching layer that reduced average API response time by approximately 30%.',
      'Production deployment on AWS infrastructure leveraging EC2 instances managed through Elastic Beanstalk.',
    ],
    architecturalThemes: [
      {
        title: 'Multi-Tier Security & Asymmetric Encryption',
        detail:
          'Confidential message payloads are protected using asymmetric encryption keys. Authentication combines standard JWT tokens with Google OAuth 2.0 and Argon2/bcrypt cryptographic hashing.',
      },
      {
        title: 'Defensive API Perimeter',
        detail:
          'Configured with Helmet HTTP response header sanitization, explicit domain CORS allowlists, and tiered express-rate-limit buckets preventing brute force attacks on authentication and message dispatch routes.',
      },
      {
        title: 'Redis Caching & Latency Optimization',
        detail:
          'Frequently accessed public profile keys and recipient metadata are cached in Redis with strict invalidation hooks, achieving an approximate 30% reduction in average API response time.',
      },
      {
        title: 'AWS Cloud Infrastructure',
        detail:
          'Automated deployment pipelines and containerized process lifecycle on AWS Elastic Beanstalk backed by dedicated Amazon EC2 compute nodes.',
      },
    ],
  },
];
