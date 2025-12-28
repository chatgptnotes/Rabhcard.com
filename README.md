# RABH Clinics - Landing Page

Modern, professional landing page for RABH Clinics (Reliable Access to Better Health) healthcare platform.

## Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Performance**: Optimized for speed with minimal dependencies
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **Vanilla JavaScript**: No framework dependencies, lightweight and fast
- **Google Fonts**: Inter font family

## File Structure

```
Rabhicard.com/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Sections

1. **Navigation**: Sticky header with mobile menu
2. **Hero**: Eye-catching intro with animated cards and stats
3. **Features**: 6 key platform benefits
4. **CarePass**: Membership pricing (Individual & Family plans)
5. **For Doctors**: Benefits for healthcare providers
6. **How It Works**: 4-step patient journey
7. **Testimonials**: Social proof from patients
8. **CTA**: Final conversion section
9. **Footer**: Site map and contact info

## Setup & Deployment

### Local Development

1. Open `index.html` in your browser
2. No build process required - it's vanilla HTML/CSS/JS

### Production Deployment

#### Option 1: Static Hosting (Recommended)
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Push to repo and enable in settings
- **AWS S3 + CloudFront**: Upload files to S3 bucket

#### Option 2: Traditional Hosting
- Upload all files to your web server
- Ensure `index.html` is in the root directory

### Performance Optimization

Before deploying to production:

1. **Minify CSS**:
   ```bash
   npx cleancss-cli -o styles.min.css styles.css
   ```

2. **Minify JavaScript**:
   ```bash
   npx terser script.js -o script.min.js
   ```

3. **Optimize images** (when you add them):
   ```bash
   npx imagemin images/* --out-dir=images/optimized
   ```

4. **Update file references** in `index.html` to use minified versions

## Customization

### Colors

Edit CSS custom properties in `styles.css`:

```css
:root {
    --primary: #2563eb;        /* Main brand color */
    --primary-dark: #1e40af;   /* Hover states */
    --secondary: #10b981;      /* Accents */
    --dark: #0f172a;           /* Text */
    --gray: #64748b;           /* Secondary text */
}
```

### Content

All content is in `index.html`. Key sections to update:

- **Contact info**: Update email, phone in footer
- **Stats**: Change numbers in hero section
- **Pricing**: Update CarePass amounts
- **Location**: Update city/region references

### Forms & Data Collection

Currently uses placeholder alerts. To connect to a real backend:

1. **Replace the `showWaitlistForm()` function** in `script.js`:

```javascript
function showWaitlistForm() {
    // Example: Send to your API
    fetch('https://your-api.com/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    });
}
```

2. **Or integrate with**:
   - **Mailchimp**: For email collection
   - **Typeform/Google Forms**: Embedded forms
   - **HubSpot**: CRM integration
   - **Custom backend**: Your own API

## Adding Analytics

### Google Analytics

Add before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel / Other tracking

Add your pixel code in the `<head>` section of `index.html`.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management for mobile menu
- Color contrast ratios meet WCAG AA standards

## Performance Checklist

- [ ] Minify CSS and JavaScript
- [ ] Optimize images (when added)
- [ ] Enable GZIP compression on server
- [ ] Add caching headers
- [ ] Use CDN for static assets
- [ ] Add `loading="lazy"` to images below the fold
- [ ] Consider service worker for offline support

## SEO Checklist

- [x] Descriptive meta description
- [x] Semantic HTML structure
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card tags
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Submit to Google Search Console

### Add Open Graph Tags

Add to `<head>`:

```html
<meta property="og:title" content="RBAC Doctors Collective | Quality Healthcare in Nagpur">
<meta property="og:description" content="AI-powered healthcare platform connecting patients with quality doctors.">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:card" content="summary_large_image">
```

## Next Steps

1. **Add real images**:
   - Hero section background
   - Doctor photos
   - Patient testimonials
   - Logo (replace ⚕ emoji)

2. **Connect forms**:
   - Waitlist signup
   - Contact form
   - Doctor application form

3. **Add blog** (optional):
   - Healthcare tips
   - Platform updates
   - Doctor spotlights

4. **Integrate with backend**:
   - Patient portal link
   - Doctor dashboard link
   - Real-time appointment booking

## Support

For technical issues or questions:
- Email: tech@rabhclinics.com
- General inquiries: hello@rabhclinics.com
- Documentation: (link to full tech docs)

## License

Proprietary - RABH Clinics

---

**Version**: 2.0.0
**Last Updated**: 2025-12-28
**Branding**: RABH - Reliable Access to Better Health
