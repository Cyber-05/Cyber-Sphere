# Deployment Troubleshooting Guide

## 🚨 White Page / Blank Screen Issue

If you see a white/blank page when visiting your live Vercel deployment, follow these steps:

---

## 1️⃣ Check Your Browser Console for Errors

1. Open your deployed website: `https://cyber-sphere-2el90vnlt-cyber-05s-projects.vercel.app`
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for red error messages

**Common errors:**
- `Cannot read property 'VITE_SUPABASE_URL'` → Missing environment variables
- `Failed to fetch from undefined` → API endpoint not configured
- `Three.js is not defined` → Build issue

---

## 2️⃣ Set Environment Variables on Vercel

This is the **most common** cause of the white page issue.

### Steps to Add Environment Variables:

1. Go to https://vercel.com/dashboard
2. Click on your **"Cyber-Sphere"** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**

### Add These Variables:

**Variable 1:**
```
Name: VITE_SUPABASE_URL
Value: https://xtgqzeucvzxvyzuqoxnf.supabase.co
```

**Variable 2:**
```
Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Z3F6ZXVjdnp4dnl6dXFveG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NzE3NTQsImV4cCI6MjA5NjA0Nzc1NH0.YwRO0znmRVrbJ2E42IpoTF-3wwUXKUGFq_D_X8XuSjw
```

**Important:** Select scope: **Production**, **Preview**, and **Development**

4. Click **Save** for each variable
5. Go to **Deployments** and click **Redeploy** on the latest deployment
6. Wait for deployment to complete
7. Refresh your website

---

## 3️⃣ Verify Deployment

After setting environment variables:

1. Click **Deployments** tab
2. Click on the latest deployment
3. Check the **Build Logs** for any errors:
   - Click the deployment name
   - Scroll to see build output
   - Look for `✓ built successfully` message

**If you see errors:**
- Click **Redeploy** again
- Check environment variables are correctly entered (no extra spaces)

---

## 4️⃣ Clear Browser Cache

Sometimes browsers cache the white page:

```
Ctrl + Shift + Delete  (Windows/Linux)
Cmd + Shift + Delete   (Mac)
```

Select:
- ☑️ Cookies and cached images
- ☑️ Cached files and images
- Time range: **All time**

Click **Clear data** then refresh the website.

---

## 5️⃣ Check Deployment Settings

Go to Vercel → Project Settings:

1. **Build & Development Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Development Command: `npm run dev`

2. **Node.js Version:** Should be 16.x or higher

3. **Install Command:** `npm install`

---

## 6️⃣ Test Locally First

Before assuming Vercel is broken, test locally:

```powershell
cd d:\Cyber-Sphere\project

# Install dependencies
npm install

# Run development server
npm run dev
```

Then open: `http://localhost:5173`

If it works locally but not on Vercel, the issue is **100% environment variables**.

---

## 7️⃣ Check Network Requests

In Developer Tools (F12):

1. Go to **Network** tab
2. Refresh the page
3. Look for failed requests (red text)
4. If you see `/index.html` with status 200 ✅ but blank page, it's a JavaScript error

---

## 🔍 Detailed Troubleshooting

### Error: "Cannot find module 'supabase'"
- Run: `npm install @supabase/supabase-js`
- Rebuild on Vercel

### Error: "VITE_SUPABASE_URL is undefined"
- ✅ Environment variables NOT set on Vercel
- Go to Step 2️⃣ above and add them

### Error: "Failed to fetch from API"
- Environment variable values are incorrect
- Copy values exactly from your `.env` file
- No extra spaces or quotes

### Error: "Three.js is not defined"
- Clear browser cache (Step 4️⃣)
- Hard refresh: `Ctrl + F5`
- Check build logs for errors

---

## 🆘 Still Having Issues?

### Check These Files:

1. **vercel.json** ✅ (should exist in project root)
2. **dist/index.html** ✅ (should exist after build)
3. **Environment Variables** ✅ (should be set on Vercel dashboard)

### Try This:

```powershell
# Force rebuild
cd d:\Cyber-Sphere\project
rm dist -Recurse  # Delete dist folder
npm run build      # Rebuild
```

Then on Vercel dashboard:
- Go to **Deployments**
- Click **⋯ (more)** menu
- Select **Redeploy**

---

## 📋 Verification Checklist

- [ ] Environment variables added to Vercel dashboard
- [ ] Both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- [ ] Variables are set for Production, Preview, and Development
- [ ] Deployment redeployed after adding environment variables
- [ ] Build logs show ✓ success (no errors)
- [ ] Browser cache cleared
- [ ] Website refreshed with `Ctrl + F5` (hard refresh)
- [ ] Works locally when running `npm run dev`

---

## 🚀 Once Fixed

Your website should show:
- ✅ 3D Earth that rotates with mouse movement
- ✅ Navigation menu
- ✅ All sections loading
- ✅ No white page

If it still doesn't work after these steps, check the **Vercel Build Logs** for specific errors and share them.

---

**Need more help?**
- Check `SECURITY.md` for environment variable best practices
- See `README.md` for general setup
- Verify `.env.example` has the correct variable names

Last Updated: June 3, 2026
