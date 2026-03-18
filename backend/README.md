# Portfolio Backend

Express.js backend server for serving portfolio data.

## Setup

1. Copy `.env.example` to `.env` and update values if needed:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

The backend will run at `http://localhost:5000`

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/:id` - Get project by ID
- `GET /api/portfolio/about` - Get about information

## VS Code Debugging

### Option 1: Debug Backend Only
- Press `F5` → Select "Launch Backend"

### Option 2: Debug Full Stack (Frontend + Backend)
- Press `F5` → Select "Full Stack"

### Option 3: Debug Frontend Only
- Press `F5` → Select "Launch Chrome against localhost"

## Next Steps

- Replace sample data in `src/server.ts` with real portfolio data
- Add database integration (PostgreSQL, MongoDB, etc.)
- Add POST/PUT/DELETE endpoints for admin panel if needed
- Add authentication if needed
