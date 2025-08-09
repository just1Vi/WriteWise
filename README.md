# WriteWise - Writing Tips Website

A beautiful, modern static website featuring writing tips and advice for aspiring authors, particularly targeted at women aged 13-35. Built with HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

## Features

- **Multi-page static website** with responsive design
- **Pastel color palette** with modern, feminine aesthetic
- **Smooth animations** on scroll and hover
- **Article categorization** with clickable tags
- **Local search functionality** using Lunr.js
- **Ad placement placeholders** ready for Google AdSense integration
- **Mobile-responsive** design
- **SEO optimized** with proper meta tags

## Pages

1. **Homepage** (`index.html`) - Features hero section, article grid, and search functionality
2. **Article Pages** (`article.html`) - Individual writing tip articles with full content
3. **Tags Page** (`tags.html`) - Browse articles by category
4. **Search Page** (`search.html`) - Search through all articles

## Content

The website includes writing tips covering:
- Character development
- Overcoming writer's block
- Plot structure and storytelling
- Dialogue writing
- World-building
- Editing and revision

## Design Features

- **Typography**: Playfair Display for headings, Source Sans Pro for body text
- **Color Scheme**: Soft pastels (pink, lavender, mint, peach, sky)
- **Animations**: Fade-in effects on scroll, hover animations
- **Layout**: Clean, modern grid system with proper spacing

## Ad Integration

The website includes placeholder ad blocks positioned for optimal user experience:
- Header ad space
- Sidebar ad spaces
- Article content ad spaces

These placeholders are ready for Google AdSense integration.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `writewise-website`)
5. Make it public
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop all files from the `writer-website` folder:
   - `index.html`
   - `article.html`
   - `tags.html`
   - `search.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add a commit message like "Initial website upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Clone the repository
git clone https://github.com/yourusername/writewise-website.git
cd writewise-website

# Copy all files from writer-website folder to this directory
# (Copy index.html, article.html, tags.html, search.html, styles.css, script.js, README.md)

# Add all files
git add .

# Commit changes
git commit -m "Initial website upload"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Click "Save"

### Step 4: Access Your Website

Your website will be available at:
`https://yourusername.github.io/writewise-website`

It may take a few minutes for the changes to appear.

## Customization

### Adding New Articles

1. Open `script.js`
2. Add a new article object to the `articles` array:

```javascript
{
    id: 'your-article-id',
    title: 'Your Article Title',
    excerpt: 'Brief description of the article',
    content: '<h2>Your Article Content</h2><p>Your article content in HTML format...</p>',
    tags: ['tag1', 'tag2'],
    image: '📝' // Emoji or text for the article image
}
```

### Changing Colors

1. Open `styles.css`
2. Modify the CSS custom properties in the `:root` section:

```css
:root {
    --primary-pink: #your-color;
    --primary-lavender: #your-color;
    /* etc. */
}
```

### Adding Google AdSense

1. Sign up for Google AdSense
2. Replace the ad placeholder divs with your AdSense code:

```html
<!-- Replace this: -->
<div class="ad-placeholder ad-header">
    <div class="ad-content">ADVERTISEMENT</div>
</div>

<!-- With your AdSense code: -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle" style="display:block" data-ad-client="your-client-id" data-ad-slot="your-ad-slot"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

## File Structure

```
writer-website/
├── index.html          # Homepage
├── article.html        # Article page template
├── tags.html          # Tags page
├── search.html        # Search page
├── styles.css         # All CSS styles
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized for fast loading
- Minimal external dependencies
- Compressed images and assets
- Efficient CSS and JavaScript

## SEO Features

- Proper meta tags
- Semantic HTML structure
- Descriptive page titles
- Alt text for images
- Clean URL structure

## License

This project is open source and available under the MIT License.

## Support

For questions or issues with deployment, please check:
1. GitHub Pages documentation
2. Your repository settings
3. Browser console for any JavaScript errors

## Future Enhancements

- Add more writing tip articles
- Implement comment system
- Add social sharing buttons
- Create author profiles
- Add newsletter signup
- Implement dark mode toggle
