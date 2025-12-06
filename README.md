# NGI Golf - Next-Gen Impact Golf Website

A futuristic, sci-fi inspired website showcasing elite golfers powered by next-generation impact technology.

## 🌟 Features

### Design & Aesthetics
- **Dark Mode First**: Pure black background for maximum contrast
- **Sci-Fi Interface**: Inspired by cyberpunk and futuristic HUD designs
- **Color Scheme**: Red, Blue, Green accents on dark background
- **Glassmorphism**: Subtle transparency effects for modern appeal
- **Responsive Design**: Optimized for all devices

### Interactive Elements
- **Animated Golf Swings**: Featured GIFs of professional golfers
- **Hover Effects**: Cards lift and glow on interaction
- **Scroll Animations**: Smooth reveals and parallax effects
- **Particle Systems**: Dynamic visual effects on hover
- **Glitch Effects**: Subtle cyberpunk-inspired animations

### Featured Golfers
- **Rory McIlroy** (World #3) - Power and precision analytics
- **Tiger Woods** (Legend) - Comeback performance tracking
- **Scottie Scheffler** (World #1) - Consistency and dominance data
- **Min Woo Lee** (Rising Star) - Explosive performance metrics

### Technology Showcase
- **Impact Sensors**: Real-time data capture at 1000fps
- **AI Analytics**: Machine learning performance optimization
- **VR Training**: Immersive practice environments
- **Performance Metrics**: Ball speed, club path, spin rate analysis

## 🚀 Quick Start

1. **Upload Files**: Upload all files to your web server (ngigolf.com)
2. **File Structure**:
   ```
   /
   ├── index.html
   ├── styles/
   │   └── main.css
   ├── scripts/
   │   └── main.js
   └── imgs/
       ├── rory_swing_*.gif
       ├── tiger_swing_*.gif
       ├── scottie_swing_*.gif
       └── minwoo_swing_*.jpg
   ```

3. **Customize Content**: Edit `index.html` to update golfer information
4. **Adjust Styling**: Modify CSS variables in `main.css` for color changes

## 🎨 Customization

### Color Scheme
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-red: #FF0040;
    --primary-blue: #00E5FF;
    --primary-green: #00FF88;
    /* Modify these values for different colors */
}
```

### Adding New Golfers
1. Add swing GIF/image to the `imgs/` folder
2. Create new golfer card in HTML:
```html
<div class="golfer-card" data-golfer="newgolfer">
    <div class="card-media">
        <img src="imgs/newgolfer_swing.gif" alt="New Golfer Swing" class="golfer-gif">
    </div>
    <div class="card-content">
        <h3 class="golfer-name">New Golfer</h3>
        <!-- Add stats and description -->
    </div>
</div>
```

### Performance Optimization
- Images are automatically lazy-loaded
- CSS animations respect `prefers-reduced-motion`
- Optimized for Core Web Vitals
- Mobile-first responsive design

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

### Dependencies
- Google Fonts (Inter, JetBrains Mono)
- No external JavaScript libraries required
- Pure CSS animations and effects

### Performance Features
- Efficient CSS Grid and Flexbox layouts
- Optimized image formats (GIF, JPG)
- Minimal JavaScript for core functionality
- CSS-based animations for better performance

## 📱 Responsive Breakpoints

- **Desktop**: 1440px+ (Full experience)
- **Laptop**: ~1024px (Adapted layouts)
- **Tablet**: ~768px (Stacked layouts)
- **Mobile**: <768px (Single column)

## 🎯 Key Animations

1. **Hero Title**: Fade-in with glitch effect on hover
2. **Golfer Cards**: Lift and glow on hover, animated stats
3. **Tech Icons**: Rotation and pulse on interaction
4. **Particle Effects**: Dynamic visual feedback
5. **Scroll Reveals**: Smooth section animations

## 🌐 SEO & Accessibility

- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy
- High contrast color ratios (WCAG AAA)
- Keyboard navigation support

## 📧 Contact & Support

For technical support or customization requests, the website is designed to be easily maintainable with clear code structure and comprehensive comments.

---

**NGI Golf** - Where technology meets precision in golf performance.