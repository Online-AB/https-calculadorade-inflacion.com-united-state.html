# Overview

This project is a multi-country inflation calculator website designed to help users understand and calculate the impact of inflation on their purchasing power. The website serves multiple Latin American countries plus the United States, with each country having its own dedicated calculator page. The site is built as a static HTML website with a focus on financial education and accessibility, providing users with tools to make informed financial decisions based on inflation data.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application follows a traditional static website architecture using vanilla HTML, CSS, and JavaScript:

- **Multi-page Structure**: Each country has its own dedicated HTML page (index.html for Argentina, calculadora-ipc-chile.html for Chile, etc.)
- **Shared Navigation**: All pages use a consistent header navigation with links to Home, Blog, About, Contact, and Privacy pages
- **Country Selector**: Each calculator page includes a dropdown menu for easy navigation between different countries
- **Responsive Design**: CSS uses flexbox and modern responsive techniques with mobile-first approach

## Calculator Logic

- **Client-side Processing**: All inflation calculations are performed locally in the user's browser using JavaScript
- **Real-time Results**: Users input initial amount, inflation rate, and time period to get immediate calculations
- **Currency-specific Formatting**: Each country page formats results according to local currency symbols and conventions

## Content Management

- **Static Content**: All content is hardcoded in HTML files in Spanish (with English for the US page)
- **SEO Optimization**: Each page has country-specific meta descriptions, keywords, and titles
- **Blog System**: Static blog page with placeholder articles about inflation trends

## Design Patterns

- **Component Reusability**: Shared CSS classes and JavaScript functions across all calculator pages
- **Progressive Enhancement**: Basic functionality works without JavaScript, enhanced features require it
- **Accessibility**: Semantic HTML structure with proper heading hierarchy and form labels

## Page Structure

- **Landing Pages**: Country-specific calculator pages with identical functionality but localized content
- **Support Pages**: Blog, About, Contact, and Privacy pages following the same design system
- **Navigation Flow**: Country dropdown allows users to switch between calculators while maintaining their position in the site

# External Dependencies

## Core Technologies

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, flexbox, and responsive design
- **Vanilla JavaScript**: Client-side functionality for calculations and country switching

## SEO and Analytics

- **Meta Tags**: Comprehensive SEO meta tags including descriptions, keywords, and Open Graph data
- **Canonical URLs**: Empty canonical tags ready for domain configuration
- **Structured Data**: Semantic HTML structure optimized for search engines

## Potential Integrations

The current architecture supports future integration with:

- **Inflation Data APIs**: Real-time inflation rate updates from government statistical offices
- **Analytics Platforms**: Google Analytics or similar for user behavior tracking
- **Contact Forms**: Backend service integration for the contact form functionality
- **Content Management**: Headless CMS integration for blog content management

## Assets and Resources

- **Self-contained Styling**: All CSS is contained in a single style.css file
- **Local JavaScript**: All functionality in script.js without external library dependencies
- **Image Optimization**: Ready for addition of country flags or financial icons
- **Font Integration**: Currently uses system fonts, ready for Google Fonts integration