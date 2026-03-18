mongodb+srv://youruser:yourpass@cluster.mongodb.net/portfolio-cms# Portfolio CMS Setup Guide

## Architecture

Your portfolio now has a full CMS with:
- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React admin panel
- **Authentication**: JWT tokens
- **API**: RESTful endpoints for managing portfolio data

## Prerequisites

1. **MongoDB** - Install locally or use MongoDB Atlas (cloud)
   - [Download MongoDB Community](https://www.mongodb.com/try/download/community)
   - Or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosting

2. **Node.js** - Already installed ✓

## Installation

### 1. Backend Setup

```bash
cd backend
npm install
```

### 2. Environment Variables

The `.env` file in the backend folder is already configured:
- `PORT=3001` - Backend API port
- `MONGODB_URI=mongodb://localhost:27017/portfolio-cms` - MongoDB connection
- `JWT_SECRET=your-secret-key-change-this-in-production`
- `ADMIN_PASSWORD=admin123` - Default admin password (change this!)

**For MongoDB Atlas (cloud):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-cms
```

### 3. Start MongoDB (if local)

**On macOS:**
```bash
brew services start mongodb-community
```

**Or manually:**
```bash
mongod --config /usr/local/etc/mongod.conf
```

### 4. Run both servers

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

Your servers are already running on:
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## Using the CMS Admin Panel

### Access Admin Panel
Visit: `http://localhost:5173/admin`

### Login
- Default password: `admin123` (change in `.env`)

### Manage Portfolio Data

**Projects:**
- Add new projects with title, description, images, links
- Mark projects as featured
- Add tags and categories
- Edit or delete existing projects

## API Endpoints

### Authentication
- `POST /api/auth/login` - Get admin token

### Projects (require JWT token in Authorization header)
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/featured` - Get featured projects
- `GET /api/portfolio/projects/:id` - Get single project
- `POST /api/portfolio/projects` - Create project
- `PUT /api/portfolio/projects/:id` - Update project
- `DELETE /api/portfolio/projects/:id` - Delete project

### Skills
- `GET /api/portfolio/skills` - Get all skills
- `POST /api/portfolio/skills` - Create skill
- `PUT /api/portfolio/skills/:id` - Update skill
- `DELETE /api/portfolio/skills/:id` - Delete skill

### Experience
- `GET /api/portfolio/experience` - Get all experiences
- `POST /api/portfolio/experience` - Create experience
- `PUT /api/portfolio/experience/:id` - Update experience
- `DELETE /api/portfolio/experience/:id` - Delete experience

### About
- `GET /api/portfolio/about` - Get about info
- `PUT /api/portfolio/about` - Update about info

## Security Notes

⚠️ **Important for Production:**
1. Change `ADMIN_PASSWORD` in `.env`
2. Change `JWT_SECRET` to a strong random string
3. Use MongoDB Atlas with strong authentication
4. Deploy backend with HTTPS
5. Add rate limiting and CORS restrictions
6. Consider adding email verification for contacts

## Database Schema

### Project
```javascript
{
  title: String,
  description: String,
  image: String (URL),
  link: String (URL),
  tags: [String],
  category: String,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Skill
```javascript
{
  name: String,
  category: String,
  level: String ('beginner', 'intermediate', 'advanced', 'expert'),
  createdAt: Date
}
```

### Experience
```javascript
{
  company: String,
  position: String,
  description: String,
  startDate: Date,
  endDate: Date,
  current: Boolean,
  createdAt: Date
}
```

### About
```javascript
{
  name: String,
  title: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  avatar: String (URL),
  resume: String (URL),
  updatedAt: Date
}
```

## Next Steps

1. ✅ Set up MongoDB (local or cloud)
2. ✅ CMS Backend created
3. ✅ API endpoints ready
4. ✅ Admin panel created
5. 📝 Next: Add admin route to frontend app
6. 📝 Connect frontend components to fetch from API
7. 📝 Deploy to production

Need help with any of these steps?
