# Rang-E-Alfaz : Darpan

A cinematic, scroll-controlled single-page website for a poetry & storytelling event.

## Features

- 🎬 Scroll-snap experience with zoom effects
- 📖 Full-screen poetic segments with background images
- 📌 Sticky submit button (top-right desktop, bottom mobile)
- 📱 Fully responsive design
- ⚡ Vanilla JavaScript with IntersectionObserver

## Deploy to Netlify

### Option 1: Via Netlify Dashboard (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select the **Range-alfaz** repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or enter `/`)
6. Click **"Deploy site"**

Your site will be live at: `https://your-site-name.netlify.app`

### Option 2: Via Netlify CLI

```powershell
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Customize

- Replace `https://forms.gle/XXXX` in `index.html` with your actual Google Form URL
- Update social handle `@rang_e_alfaz` in footer
- Replace placeholder images with your event photos

## Tech Stack

- HTML5
- CSS3 (scroll-snap, transforms, transitions)
- Vanilla JavaScript (IntersectionObserver)

## License

© Rang-E-Alfaz. All rights reserved.
