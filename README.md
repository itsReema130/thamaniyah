<p align="center">
  <img src="frontend/src/components/Logo.tsx" width="60" alt="Project Logo" />
</p>

# Thamaniyah Podcast Platform

A modern fullstack podcast discovery and listening platform. Built with **NestJS** (backend) and **Next.js** (frontend), it lets users search, browse, and listen to trending podcasts, explore by genre, and manage their own podcast queue. **Supabase** is used as the database and authentication provider.

---


## Tech Stack
- **Frontend:** [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [NestJS](https://nestjs.com/), TypeScript
- **Database & Auth:** [Supabase](https://supabase.com/)
- **API:** iTunes Search API (for podcast data)
- **API Documentation:** [Swagger (OpenAPI)](https://swagger.io/)
- **Other:** ESLint, Prettier, React Context, etc.

---

## Directory Structure
```
project-root/
├── backend/         # NestJS backend (API, business logic, types, Swagger docs)
│   ├── src/
│   │   ├── modules/     # Feature modules (controllers, services)
│   │   ├── common/      # Shared utilities, guards, interceptors
│   │   ├── main.ts      # Entry point for NestJS app
│   │   └── ...          # Other backend source files
│   ├── test/            # Backend tests
│   ├── .env             # Backend environment variables
│   └── ...              # Other backend config files
├── frontend/        # Next.js frontend (UI, pages, components)
│   ├── src/
│   │   ├── app/         # Next.js app directory (routing, pages)
│   │   ├── components/  # Reusable React components (Logo, PodcastCard, etc.)
│   │   ├── core/        # Types, helpers, context
│   │   └── ...          # Other frontend source files
│   ├── public/          # Static assets (images, favicon, etc.)
│   ├── .env             # Frontend environment variables
│   └── ...              # Other frontend config files
├── README.md        # Project documentation (this file)
├── package.json     # Project-level scripts and dependencies (if any)
└── ...             # Other project files (e.g., .gitignore, .editorconfig)
```

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/your-username/thamaniyah.git
cd thamaniyah
```

### 2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Supabase Setup
1. [Create a free Supabase account](https://app.supabase.com/) and start a new project.
2. In your Supabase project, go to **Project Settings > API** and copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
3. In both `backend` and `frontend` folders, create a `.env` file and add:
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. (Optional) Set up your database schema using Supabase SQL editor or migrations as needed.
5. [Supabase Docs](https://supabase.com/docs)

### 4. Run the apps
#### Backend (NestJS)
```bash
cd backend
npm run start:dev
```

#### Frontend (Next.js)
```bash
cd frontend
npm run dev
```

- Frontend: http://localhost:3000
- Backend:  http://localhost:3001 (or as configured)

---

## API Documentation
The backend exposes interactive API documentation using **Swagger** (OpenAPI).

- Once the backend is running, access the Swagger UI at:
  - [http://localhost:3001/api-docs](http://localhost:3001/api-docs) (default)
- Use this interface to explore, test, and understand all available API endpoints.
- For more on Swagger: [Swagger Documentation](https://swagger.io/docs/)

---

## Scripts
### Backend
- `npm run start:dev` — Start NestJS in development mode
- `npm run test` — Run backend unit tests

### Frontend
- `npm run dev` — Start Next.js in development mode
- `npm run build` — Build frontend for production
- `npm run lint` — Lint frontend code

---

