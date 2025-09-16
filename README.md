# Agroholding

Full-stack agricultural company website with headless CMS and multi-language support.

## Tech Stack

- **Next.js 15** with App Router and TypeScript
- **Payload CMS** for content management
- **Tailwind CSS** for styling
- **PostgreSQL/SQLite** database
- **Cloudinary** for media storage
- **Embla Carousel** for interactive components

## Features

- Responsive design with mobile-first approach
- Multi-language support (EN/UK) with next-intl
- SEO optimization and dynamic page layouts
- Product catalog with full-text search
- Blog system with rich content editing
- Contact forms with React Hook Form validation
- Admin dashboard with role-based authentication
- Image optimization with Cloudinary integration
- Server-side rendering and static generation
- Dynamic layouts using Payload's block system

## Local Development

```bash
# Clone and install
git clone <repo-url>
cd agroholding
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your database and API keys

# Run development server
pnpm dev
```

Open `http://localhost:3000` for frontend and `/admin` for CMS.

## Environment Variables

```bash
# Database & Core
DATABASE_URI=postgresql://user:password@localhost:5432/agroholding
PAYLOAD_SECRET=your-32-char-secret-here

# URLs
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
VERCEL_PROJECT_PRODUCTION_URL=your-domain.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME=agroholding

# Optional
PREVIEW_SECRET=your-preview-secret
CRON_SECRET=your-cron-secret
NODE_ENV=development
```

## Deployment

Built for Vercel deployment with automatic builds on push.

```bash
pnpm build
pnpm start
```

