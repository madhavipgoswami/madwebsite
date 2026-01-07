# Setting Up Medium Blog Integration

## Finding Your Medium RSS Feed URL

To display your Medium blog posts on your website, you need to find your Medium RSS feed URL.

### Method 1: Using Your Medium Username

1. Go to your Medium profile page (while logged in)
2. Your Medium profile URL will look like one of these:
   - `https://medium.com/@yourusername`
   - `https://yourusername.medium.com`
3. Your RSS feed URL will be:
   - `https://medium.com/feed/@yourusername` (if your profile is `@yourusername`)
   - `https://yourusername.medium.com/feed` (if you have a custom domain)

### Method 2: Finding Your Username

1. Go to https://medium.com/me/stories (while logged in)
2. Look at the URL in your browser - it might show your username
3. Or go to your profile settings to see your Medium username
4. Your username is the part after `@` in your Medium URL

### Method 3: Using Your Published Posts Page

1. Visit: https://medium.com/me/stories?tab=posts-published
2. Click on any of your published posts
3. Look at the author name or URL to find your username
4. Your RSS feed will be: `https://medium.com/feed/@yourusername`

## Updating the Blog Component

Once you have your RSS feed URL:

1. Open `src/components/Blog.jsx`
2. Find the line: `const MEDIUM_RSS_FEED = 'https://medium.com/feed/@madhavigoswami'`
3. Replace `@madhavigoswami` with your actual Medium username
4. Save the file
5. The blog posts should automatically load!

## Testing Your RSS Feed

You can test if your RSS feed works by:
1. Opening the RSS feed URL directly in your browser
2. You should see XML content with your blog posts
3. If you see an error, double-check your username

## Alternative: Using RSS2JSON API

If the CORS proxy doesn't work, you can use the RSS2JSON API:

1. Update the `fetchMediumPosts` function in `Blog.jsx`
2. Replace the fetch URL with:
   ```javascript
   const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_FEED)}`)
   ```
3. Update the parsing logic to handle JSON instead of XML

## Troubleshooting

- **No posts showing**: Check that your RSS feed URL is correct and accessible
- **CORS errors**: The CORS proxy should handle this, but if issues persist, try RSS2JSON API
- **Images not loading**: Some Medium images may be blocked by CORS - this is normal
- **Slow loading**: The first load may take a few seconds as it fetches from Medium
