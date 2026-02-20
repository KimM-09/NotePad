# Notes App

A simple full-stack notes application with a Vite + React frontend and an Express backend.

## Live Demo: [https://notepad-4lap.onrender.com/](https://notepad-4lap.onrender.com/)
Note: This application is hosted on Renders free tier. The server will take between 30-60 seconds to spin up after 15 minutes of inactivity.
Thank you for your patience! 

## Features

- Fullstack app built using MERN stack (MongoDB, Express, React, Node)
- Create, read, update, and delete notes
- Responsive UI with Tailwind CSS
- Rate limiting on the API to prevent abuse

## Tech stack

- Frontend: Vite, React, Tailwind CSS
- Backend: Node.js, Express
- Data store: MongoDB

## Prerequisites

- Node.js 18+ and `npm` (or `pnpm`/`yarn`)

## Setup

1. Install backend dependencies and configure environment variables

```bash
cd backend
npm install
npm run dev
# Copy or create your .env file. Example values are stored near `backend/config`.
cp .env.example .env || echo "Create a .env with required vars"
```

Important environment variables (check `backend/config/*` for exact names):

- `PORT` — backend server port (optional)
- MONGO_URI=Your-MongoDB-URI
- UPSTASH_REDIS_REST_URL=Your-Redis-Rest-URL
- UPSTASH_REDIS_REST_TOKEN=Your-Upstash-REST-Token
- NODE_ENV=development


2. Install and run the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs via Vite — open the address shown in the terminal (usually http://localhost:5173).

## Project structure (important files)

- `backend/src/server.js` — backend entry point
- `backend/src/controllers/notesController.js` — API logic for notes
- `backend/src/middleware/rateLimiter.js` — rate-limiting middleware
- `backend/routes/notesRoutes.js` — API routes
- `backend/config/db.js` and `backend/config/upstash.js` — data configuration
- `frontend/src/App.jsx`, `frontend/src/pages` — frontend app and pages
- `frontend/src/components/RateLimitedUI.jsx` — UI for rate limit states