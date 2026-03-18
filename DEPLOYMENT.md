# Full-Stack Deployment Guide

## 🚀 Deployment Status

### Backend (Node.js/Express) - Railway
**Status**: Ready to deploy
**Repository**: https://github.com/amy-lenoir/amylenoir.github.io

#### Deploy Backend to Railway:

1. **Login to Railway**
   - Go to https://railway.app
   - Click "Login"
   - Sign in with GitHub

2. **Create New Project**
   - Click "+ New Project"
   - Select "Deploy from GitHub repo"
   - Select `amy-lenoir/amylenoir.github.io`
   - Click "Deploy Now"

3. **Configure Environment Variables**
   After deployment starts:
   - Click on your deployment
   - Go to "Variables"
   - Add these environment variables:
     ```
     PORT=3000
     NODE_ENV=production
     CORS_ORIGIN=https://yourdomain.vercel.app,https://amylenoir.com
     MONGODB_URI=mongodb+srv://amylenoir:Barbhen22%21@lenoirport.ihj9e1t.mongodb.net/portfolio-cms?retryWrites=true&w=majority
     JWT_SECRET=change-this-to-a-secure-random-string-in-production
     ADMIN_PASSWORD=change-this-to-a-secure-password
     ```

4. **Get Your Backend URL**
   - Once deployed, you'll get a URL like: `https://your-app-randomid.railway.app`
   - Save this URL - you'll need it for the frontend!

### Frontend (React/Vite) - Vercel
**Status**: Ready to deploy

#### Deploy Frontend to Vercel:

1. **Create Vercel Account** (if needed)
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your repositories

2. **Import Project**
   - After login, click "Add New..."
   - Select "Project"
   - Find `amy-lenoir/amylenoir.github.io`
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - **Default** ✅

4. **Add Environment Variables**
   Before deploying:
   - Set environment variable:
     ```
     VITE_API_URL=https://your-backend-url.railway.app
     ```
   - Replace `your-backend-url.railway.app` with your actual Railway backend URL

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)

## 🔗 After Deployment

### Update Frontend API URL

Once both are deployed:

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Update `VITE_API_URL` to your Railway backend URL
4. Redeploy the frontend

### Update Backend CORS

In your Railway deployment:

1. Update `CORS_ORIGIN` to include:
   - Your Vercel URL (e.g., `https://your-project.vercel.app`)
   - Your custom domain (e.g., `https://amylenoir.com`)

## 📍 Your URLs Will Be:

- **Frontend**: `https://your-project.vercel.app`
- **Admin Panel**: `https://your-project.vercel.app/admin`
- **Backend API**: `https://your-app-xxxxx.railway.app`
- **Custom Domain**: `https://amylenoir.com` (if configured)

## ⚠️ Important Notes

1. **Database**: MongoDB Atlas is already configured and running
2. **Secrets**: Change `ADMIN_PASSWORD` and `JWT_SECRET` in production
3. **Domain**: You can connect your `amylenoir.com` domain to Vercel in project settings
4. **Monitoring**: Both Vercel and Railway have free monitoring/logs

## 🔄 Future Updates

To deploy updates:
1. Make changes locally
2. Commit: `git add -A && git commit -m "message"`
3. Push: `git push origin main`
4. Both Vercel and Railway will auto-redeploy!

## 📞 Troubleshooting

**Frontend can't reach backend?**
- Check `VITE_API_URL` environment variable
- Verify `CORS_ORIGIN` in Railway backend
- Check browser console for CORS errors

**Backend won't start?**
- Check environment variables are set correctly
- Verify MongoDB connection string is valid
- Check Railway logs for errors

**Custom domain not working?**
- Vercel: Go to project settings → Domains → add your domain
- Update your domain's DNS to point to Vercel (instructions provided)
