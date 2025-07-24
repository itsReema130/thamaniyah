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
- **Other:** ESLint, Prettier, React Context, etc.

---

## Directory Structure
```
project-root/
  backend/      # NestJS backend (API, business logic, types)
  frontend/     # Next.js frontend (UI, pages, components)
  README.md     # This file
  ...           # Other project files
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

## Scripts
### Backend
- `npm run start:dev` — Start NestJS in development mode
- `npm run test` — Run backend unit tests

### Frontend
- `npm run dev` — Start Next.js in development mode
- `npm run build` — Build frontend for production
- `npm run lint` — Lint frontend code

---

