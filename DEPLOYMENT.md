# 🚀 Deployment Guide - Treasure Coast Getaway

This guide covers deployment options and configurations for the Treasure Coast Getaway website.

## 📋 Pre-Deployment Checklist

### Environment Configuration
- [ ] Set up `.env.local` with production values
- [ ] Configure `NEXT_PUBLIC_SITE_URL` with your domain
- [ ] Set `NODE_ENV=production`
- [ ] Add analytics tracking IDs
- [ ] Configure contact form endpoints

### SEO & Performance
- [ ] Verify meta tags and structured data
- [ ] Test Core Web Vitals scores
- [ ] Optimize all images (already optimized with Next.js)
- [ ] Check robots.txt configuration
- [ ] Validate sitemap (auto-generated)

### Security
- [ ] Set up proper CORS headers
- [ ] Configure security headers
- [ ] Review environment variable exposure
- [ ] Enable HTTPS redirection

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers optimal performance.

#### Steps:
1. **Connect GitHub Repository**
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "feat: initial deployment setup"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository
   - Configure environment variables
   - Deploy!

3. **Configure Custom Domain**
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed
   - Enable SSL (automatic)

#### Environment Variables for Vercel:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=your-verification-code
CONTACT_EMAIL=treasurecoastpropertyrentals@gmail.com
```

### Option 2: Netlify

#### Steps:
1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: out
   ```

2. **Configure next.config.mjs for Static Export**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   
   export default nextConfig;
   ```

3. **Environment Variables**
   - Set in Netlify dashboard under Site Settings > Environment Variables

### Option 3: Traditional Hosting (cPanel, etc.)

#### Steps:
1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Export Static Files**
   ```bash
   npx next export
   ```

3. **Upload to Hosting**
   - Upload the `out` folder contents to your web root
   - Configure web server for SPA routing

## 🔧 Production Configuration

### Next.js Configuration

Update `next.config.mjs` for production:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable compression
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Analytics Setup

#### Google Analytics 4
1. Create GA4 property
2. Add tracking ID to environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

#### Google Search Console
1. Verify domain ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor search performance

### Performance Monitoring

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Tools to Monitor:
- Google PageSpeed Insights
- GTmetrix
- Lighthouse
- Vercel Analytics (if using Vercel)

## 🛡️ Security Best Practices

### HTTP Security Headers

```javascript
// In next.config.mjs
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com;"
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
];
```

### Environment Variables Security
- Never commit `.env.local` to version control
- Use different values for development and production
- Rotate API keys regularly
- Use secret management services for sensitive data

## 📊 Monitoring & Maintenance

### Regular Monitoring
- **Uptime**: Set up monitoring with UptimeRobot or similar
- **Performance**: Monthly Lighthouse audits
- **SEO**: Google Search Console weekly reviews
- **Analytics**: Google Analytics monthly reports

### Updates & Maintenance
- **Dependencies**: Update monthly
- **Images**: Optimize new images before adding
- **Content**: Regular content updates for SEO
- **Backups**: Regular backups of content and configuration

### Error Tracking

#### Sentry Setup (Optional)
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

## 🔄 CI/CD Pipeline (Optional)

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      # Add deployment steps here
```

## 🏆 Performance Optimization Tips

### Image Optimization
- All images are already optimized with Next.js Image component
- WebP format automatically served to compatible browsers
- Lazy loading implemented for better performance

### Code Optimization
- Bundle analyzer: `npm run analyze` (if configured)
- Tree shaking enabled by default
- Code splitting automatic with Next.js

### Caching Strategy
- Static assets: 1 year cache
- Pages: ISR (Incremental Static Regeneration) if needed
- API routes: Appropriate cache headers

## 📞 Support & Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18.17+)
   - Clear `.next` folder and rebuild
   - Verify all dependencies are installed

2. **Image Loading Issues**
   - Ensure images are in `/public` folder
   - Check file extensions and naming
   - Verify image paths in code

3. **Performance Issues**
   - Run Lighthouse audit
   - Check image optimization
   - Review bundle size

### Getting Help
- Check documentation in `README.md`
- Review contributing guidelines in `CONTRIBUTING.md`
- Contact: treasurecoastpropertyrentals@gmail.com

---

**Ready to launch your Treasure Coast Getaway website! 🏖️** 