# 🏖️ Treasure Coast Getaway

A modern, responsive vacation rental website built with Next.js 15, featuring a luxury 4-bedroom home with private pool on Florida's beautiful Treasure Coast.

![Treasure Coast Getaway](public/outside-front.jpg)

## 🌟 Features

### 🎨 Design & User Experience
- **Modern Responsive Design** - Optimized for all devices from mobile to desktop
- **Coastal-Themed UI** - Beautiful teal color scheme with clean typography
- **Interactive Gallery** - Full-screen modal gallery with keyboard navigation
- **Smooth Animations** - CSS transitions and hover effects throughout
- **Progressive Web App** - Mobile app-like experience with offline capabilities

### ⚡ Performance Optimizations
- **Next.js Image Optimization** - Automatic WebP conversion and responsive images
- **Lazy Loading** - Images load as needed for faster page speeds
- **Code Splitting** - Optimized bundle sizes with automatic code splitting
- **SEO Optimized** - Comprehensive meta tags and structured data
- **Core Web Vitals** - Optimized for Google's performance metrics

### ♿ Accessibility Features
- **WCAG 2.1 AA Compliance** - Full keyboard navigation and screen reader support
- **ARIA Labels** - Comprehensive accessibility attributes
- **Focus Management** - Proper focus indicators and tab order
- **Semantic HTML** - Proper heading hierarchy and semantic elements

### 📱 Mobile-First Design
- **Touch-Friendly Interface** - 44px minimum touch targets
- **Responsive Typography** - Scales beautifully across all screen sizes
- **Mobile Navigation** - Optimized navigation for mobile devices
- **PWA Support** - Add to home screen functionality

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Build Tool**: Turbopack for fast development

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcdejesus/treasure-coast-getaway.git
   cd treasure-coast-getaway
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
treasure-coast-getaway/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.js          # Root layout with SEO metadata
│   └── page.js            # Homepage component
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Gallery.jsx       # Interactive image gallery
│   └── Navbar.jsx        # Navigation component
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── images/           # Property photos (47 high-quality images)
│   ├── site.webmanifest  # PWA manifest
│   └── robots.txt        # SEO robots file
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore file
├── components.json      # shadcn/ui configuration
├── eslint.config.mjs    # ESLint configuration
├── jsconfig.json        # JavaScript configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
└── README.md           # Project documentation
```

## 🎯 Key Components

### Gallery Component (`components/Gallery.jsx`)
- **Responsive Grid**: Displays 6 images initially with "View All" option
- **Full-Screen Modal**: Click any image to open immersive gallery view
- **Keyboard Navigation**: Arrow keys, Escape to close
- **Touch Support**: Swipe gestures on mobile devices
- **Loading States**: Smooth loading animations
- **Accessibility**: Full ARIA labels and keyboard support

### Navigation (`components/Navbar.jsx`)
- **Floating Design**: Elegant floating navigation bar
- **Scroll Effects**: Changes appearance based on scroll position
- **Mobile Optimized**: Compact design for mobile devices
- **External Links**: Proper handling of Airbnb booking links

### Main Page (`app/page.js`)
- **Hero Section**: Full-screen background with call-to-action
- **Features Grid**: Highlighting key property benefits
- **Amenities Tabs**: Organized indoor/outdoor amenities
- **Testimonials**: Guest reviews with star ratings
- **Contact Footer**: Complete contact information

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality

# Additional commands
npm run analyze      # Analyze bundle size (if configured)
npm run type-check   # TypeScript type checking (if using TypeScript)
```

## 📊 Performance Features

### Image Optimization
- **Next.js Image Component**: Automatic optimization and WebP conversion
- **Responsive Images**: Multiple sizes served based on device
- **Lazy Loading**: Images load only when needed
- **Blur Placeholders**: Smooth loading experience
- **Priority Loading**: Critical images load first

### SEO Enhancements
- **Structured Data**: JSON-LD schema for vacation rentals
- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Local SEO**: Geographic meta tags and location data

### Accessibility Standards
- **WCAG 2.1 AA**: Full compliance with accessibility standards
- **Screen Readers**: Complete ARIA label coverage
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators
- **Color Contrast**: Meeting WCAG contrast requirements

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment
```bash
npm run build        # Build the application
npm run start        # Start production server
```

### Environment Variables
See `.env.example` for required environment variables.

## 📱 PWA Features

The website includes Progressive Web App capabilities:
- **Offline Support**: Basic offline functionality
- **Add to Home Screen**: Install on mobile devices
- **App-like Experience**: Full-screen mobile experience
- **Fast Loading**: Optimized for mobile networks

## 🎨 Customization

### Colors
The website uses a coastal teal theme. Modify colors in:
- `app/globals.css` - CSS custom properties
- Tailwind configuration for theme colors

### Images
Replace images in the `public/` directory. Update the `galleryImages` array in `app/page.js` with new image paths and alt text.

### Content
- **Property Details**: Update amenities and descriptions in `app/page.js`
- **Contact Information**: Modify contact details in footer section
- **Booking Links**: Update Airbnb URLs throughout the site

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and structure
- Ensure all components are responsive and accessible
- Test on multiple devices and browsers
- Optimize images before adding to the project
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏡 About Treasure Coast Getaway

Treasure Coast Getaway is a luxury 4-bedroom, 2-bathroom vacation rental located in Port St. Lucie, Florida. The property features:

- Private heated swimming pool
- Modern coastal decor
- Fully equipped kitchen
- Multiple sleeping arrangements
- Outdoor entertainment areas
- Minutes from beautiful beaches

Perfect for families, groups, and anyone looking to experience the beauty of Florida's Treasure Coast.

## 📞 Contact & Support

- **Property Inquiries**: treasurecoastpropertyrentals@gmail.com
- **Phone**: (586) 904-1191
- **Address**: 6718 Northwest Mamie Court, Port St. Lucie, FL
- **Booking**: [Airbnb Listing](https://www.airbnb.com/rooms/953226587982597312)

---

**Built with ❤️ for creating memorable vacation experiences on Florida's Treasure Coast**
