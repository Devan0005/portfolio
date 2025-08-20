# 🎨 Digital Art Studio - Tech-Inspired Portfolio

A stunning, Pinterest-style portfolio website showcasing cutting-edge digital artworks and tech-inspired designs. Built with modern web technologies and featuring a sleek, professional design perfect for digital artists.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://your-username.github.io/repository-name)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://pages.github.com/)

## ✨ Features

- **Pinterest-Style Masonry Grid**: Beautiful cascading layout with variable card heights
- **Responsive Design**: Perfect display on all devices (4 columns → 3 → 2 → 1)
- **Modern Tech Aesthetics**: Neon colors, gradient effects, and futuristic animations
- **Interactive Hover Effects**: 1.75x scale animations with overlay information
- **Instagram Integration**: Direct links to [@_pencil__creations_](https://instagram.com/_pencil__creations_)
- **Search & Filter**: Real-time filtering by categories
- **Load More Functionality**: Infinite scroll-style pagination
- **SEO Optimized**: Meta tags and social media sharing ready
- **Custom 404 Page**: Branded error page matching the site design

## 🚀 Live Demo

Visit the live website: **[Your GitHub Pages URL]**

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with meta tags
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties, Animations)
- **Vanilla JavaScript** - Interactive functionality and dynamic content
- **Font Awesome 6** - Professional icons
- **Google Fonts** - Poppins typography
- **GitHub Pages** - Free hosting platform

## 📦 Quick Start

### Option 1: Fork and Deploy (Recommended)

1. **Fork this repository** to your GitHub account
2. **Go to Settings** → **Pages**
3. **Select source**: Deploy from a branch
4. **Choose branch**: `main` (or `master`)
5. **Your site will be available at**: `https://your-username.github.io/repository-name`

### Option 2: Clone and Customize

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to the project
cd your-repo-name

# Open in your browser
open index.html
```

## 🎨 Customization Guide

### 1. Personal Information
Update your details in `index.html`:
- **Hero section**: Name, title, description
- **About section**: Your story and skills
- **Contact section**: Email, phone, location
- **Instagram link**: Already set to `@_pencil__creations_`

### 2. Portfolio Items
Modify the `portfolioData` array in `script.js`:

```javascript
{
    id: 1,
    title: "Your Artwork Title",
    category: "portraits", // portraits, nature, abstract, architecture
    image: "your-image.jpg",
    description: "Your artwork description",
    likes: 247,
    saves: 89
}
```

### 3. Images
- Add your images directly to the main project folder
- Recommended sizes: 300-600px width, variable heights
- Supported formats: JPG, PNG, WebP

### 4. Colors & Branding
Customize the tech theme in `styles.css`:

```css
:root {
    --accent: #00d4ff;           /* Neon blue */
    --accent-secondary: #ff006e;  /* Hot pink */
    --accent-tertiary: #8338ec;   /* Purple */
    /* ... more variables */
}
```

## 🔧 GitHub Pages Setup

### Automatic Deployment
1. Push your changes to the `main` branch
2. GitHub Pages will automatically build and deploy
3. Changes are live within 1-2 minutes

### Custom Domain (Optional)
1. Add your domain to the `CNAME` file
2. Configure DNS settings with your domain provider
3. Enable HTTPS in repository settings

## 📱 Responsive Breakpoints

| Device | Columns | Card Width |
|--------|---------|------------|
| Desktop (1200px+) | 4 | 300px |
| Tablet (768-1200px) | 3 | 280px |
| Mobile (480-768px) | 2 | 250px |
| Small Mobile (<480px) | 1 | 100% |

## 🎯 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: 60fps smooth transitions
- **Efficient CSS**: CSS Grid and Flexbox
- **CDN Resources**: Font Awesome and Google Fonts
- **Compressed Assets**: Optimized file sizes

## 📊 SEO Features

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Custom 404 page
- Favicon included
- Fast loading speeds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Created By

**[@_pencil__creations_](https://instagram.com/_pencil__creations_)**
- 🎨 Digital Artist & Creative Designer
- 📧 Contact: gamingspider0005@gmail.com
- 📱 Instagram: [@_pencil__creations_](https://instagram.com/_pencil__creations_)

---

⭐ **Star this repository if you found it helpful!**

🔗 **Share your customized version** - tag [@_pencil__creations_](https://instagram.com/_pencil__creations_) on Instagram! 