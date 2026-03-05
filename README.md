# AskReal – Premium Real Estate Portal

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify)](https://askestate.netlify.app)

[Live Demo](https://askestate.netlify.app) • [GitHub](https://github.com/askoti/real-estate-static) • [Portfolio](https://kastriotaliu.com)

</div>

---

## Real Estate Portal Overview

**AskReal** is a premium real estate portal built with modern web technologies. It showcases a curated collection of luxury properties with sophisticated UI patterns, advanced filtering capabilities, and an editorial-focused design approach.

This project demonstrates expertise in building high-end property platforms with complex data structures, responsive design, and conversion-optimized user flows.

---

## Key Features

### Property Showcase
- Hand-picked premium properties with detailed listings
- High-resolution property galleries with smooth transitions
- Property details with comprehensive information (beds, baths, square footage, features)
- "Most Viewed" algorithm-driven property recommendations
- Search by city and advanced filtering options

### Professional Advisors Section
- Team member profiles with expertise levels
- Principal Advisor, Luxury Specialist, Portfolio Manager roles
- Visual-driven team presentation
- Trust-building through credibility and credentials

### Concierge Services
- Booking Assistance for viewings and consultations
- Property Management resources and guidance
- Technical Support for platform issues
- Direct inquiry form for personalized service
- Seamless inquiry-to-contact workflow

### Geographic Presence
- Multi-location support (New York, London, etc.)
- Interactive maps showing prime destinations
- Neighborhood guides with classification (Architecture, Nature, Social)
- Distance metrics to landmarks and amenities
- Location-based property discovery

### Brand Storytelling
- "Where Art Meets Habitation" - Premium positioning
- Editorial-quality content and narratives
- Design-focused property descriptions
- Lifestyle-aligned property curation
- Luxury-focused brand voice

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15+** | React framework with modern app architecture |
| **TypeScript** | Type-safe, maintainable codebase |
| **Tailwind CSS** | Utility-first, production-grade styling |
| **Responsive Design** | Mobile, tablet, and desktop optimization |
| **Netlify** | Deployment and global CDN |

---

## Project Structure

```
real-estate-static/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Landing/home page
│   ├── about/
│   │   └── page.tsx        # About section
│   ├── properties/
│   │   ├── page.tsx        # Property listing page
│   │   └── [id]/
│   │       └── page.tsx    # Individual property detail
│   └── contact/
│       └── page.tsx        # Contact/inquiry form
├── components/
│   ├── PropertyCard.tsx    # Property listing component
│   ├── PropertyGallery.tsx # Image gallery
│   ├── TeamMember.tsx      # Advisor profile
│   ├── ServiceCard.tsx     # Concierge services
│   ├── MapLocation.tsx     # Location integration
│   └── SearchBar.tsx       # Property search
├── data/
│   ├── properties.ts       # Property database/fixtures
│   ├── agents.ts           # Team member data
│   └── locations.ts        # Geographic data
├── styles/                 # Global styles
└── public/                 # Images and assets
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/askoti/real-estate-static.git
cd real-estate-static

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portal.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Netlify
netlify deploy --prod
```

---

## Key Pages

### Home / Landing
- Hero section with call-to-action
- "Most Viewed" properties showcase
- Property search functionality
- Navigation to key sections

### Property Listings
- Grid layout of available properties
- Price, location, and key stats display
- Filtering and sorting options
- "View Details" call-to-action per property

### Property Detail
- Full image gallery with smooth transitions
- Complete property specifications
- Features and amenities breakdown
- Location map and neighborhood guide
- "Book a Private Viewing" action

### Team / Advisors
- Professional advisor profiles
- Specialized roles and expertise
- Team collective messaging
- Trust-building credibility section

### Services / Concierge
- Booking Assistance details
- Property Management resources
- Technical Support information
- Direct inquiry form with validation

### Locations / Geographic Presence
- Multi-city showcase
- Interactive maps
- Neighborhood classifications
- Prime destinations overview

---

## Design Highlights

- **Premium Typography**: Serif headings with sophisticated spacing
- **Luxury Color Palette**: Dark navy, white, soft grays, accent blues
- **Editorial Design**: Content-driven, image-forward layouts
- **Smooth Transitions**: Polished interactions and animations
- **Responsive Grid**: Professional asymmetric property layouts
- **Accessibility**: Semantic HTML, WCAG compliance
- **Performance**: Optimized images, lazy loading

---

## Technical Features

✅ **Next.js App Router** with server-side rendering  
✅ **TypeScript** for type-safe component development  
✅ **Tailwind CSS** for rapid, consistent styling  
✅ **Responsive Design** (mobile-first approach)  
✅ **Property Search** with filtering capabilities  
✅ **Contact Forms** with validation  
✅ **Map Integration** for location services  
✅ **Image Galleries** with smooth transitions  
✅ **SEO Optimized** (metadata, semantic HTML)  
✅ **Performance Ready** (Core Web Vitals compliant)  

---

## Use Cases

This platform is ideal for:
- Luxury real estate agencies
- Premium property portfolios
- High-end residential markets
- Boutique real estate practices
- Property investment platforms
- Geographic expansion showcases

---

## Future Enhancements

- Virtual property tours (3D/360 views)
- Advanced property filtering (price range, amenities)
- Agent booking calendar integration
- Client lead management CRM
- Market analytics dashboard
- Investment ROI calculator
- Mortgage calculator
- Neighborhood comparison tool
- Market trends section
- Blog/news integration

---

## Performance Optimization

- Image optimization and lazy loading
- Code splitting for faster page loads
- Responsive images for all devices
- Efficient CSS with Tailwind's purge
- SEO-friendly metadata
- Core Web Vitals optimization

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

This is a portfolio project showcasing real estate platform development. For inquiries:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License – see the LICENSE file for details.

---

## Connect With Me

- GitHub: [@askoti](https://github.com/askoti)
- Portfolio: [kastriotaliu.com](https://kastriotaliu.com)
- Email: [kastriootaliiu@gmail.com](mailto:kastriootaliiu@gmail.com)
- LinkedIn: [linkedin.com/in/kastriootaliiu/](https://www.linkedin.com/in/kastriootaliiu/)

---

## Acknowledgments

- Next.js team for exceptional framework
- Tailwind CSS for utility-first styling
- Netlify for seamless deployment
- Real estate industry for inspiration

---

<div align="center">

Crafting Premium Property Experiences

Made with by [@askoti](https://github.com/askoti)

</div>
