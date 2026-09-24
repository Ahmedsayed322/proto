import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    category: 'CORE & RUNTIME',
    skills: [
      'Node.js',
      'NestJS (v11)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Express.js',
    ],
  },
  {
    number: '02',
    category: 'DATA & STORAGE',
    skills: [
      'MongoDB (Mongoose ODM)',
      'Repository Pattern',
      'Transactions & Sessions',
      'Redis Caching',
      'MySQL (Sequelize)',
    ],
  },
  {
    number: '03',
    category: 'APIs & REAL-TIME',
    skills: [
      'RESTful APIs',
      'GraphQL',
      'Socket.IO (Live Chat & Rooms)',
      'Webhooks Processing',
      'Event Distribution',
    ],
  },
  {
    number: '04',
    category: 'AUTH & SECURITY',
    skills: [
      'JWT (Dual-Prefix User/Admin)',
      'Role-Based Guards',
      'Google OAuth 2.0',
      '2FA / OTP Verification',
      'Argon2 & bcrypt',
      'HMAC-SHA512 & CryptoJS',
      'Asymmetric Encryption',
      'Helmet & CORS Allowlists',
    ],
  },
  {
    number: '05',
    category: 'CLOUD & INFRASTRUCTURE',
    skills: [
      'AWS EC2',
      'AWS S3 & Presigned URLs',
      'AWS Elastic Beanstalk',
      'Docker',
      'Docker Compose',
      'Git & GitHub Workflows',
    ],
  },
  {
    number: '06',
    category: 'VALIDATION & INTEGRATIONS',
    skills: [
      'PayMob (Payment Intentions & Refunds)',
      'AWS S3 SDK v3 & Multer',
      'Firebase Cloud Messaging (FCM)',
      'Cloudinary',
      'Nodemailer',
      'Class Validator, Joi & Zod',
      'Postman API Testing',
    ],
  },
];
