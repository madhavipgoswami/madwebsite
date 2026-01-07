import { useState, useEffect } from 'react'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Medium RSS feed URL
  // Format: https://medium.com/feed/@yourusername
  // Or if you have a custom domain: https://yourdomain.medium.com/feed
  const MEDIUM_RSS_FEED = 'https://medium.com/feed/@madhavi.goswami'

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true)
        setError(null)

        // Using CORS proxy to fetch Medium RSS feed
        // Alternative: You can use rss2json API: https://api.rss2json.com/v1/api.json?rss_url=...
        const proxyUrl = 'https://api.allorigins.win/raw?url='
        const rssUrl = encodeURIComponent(MEDIUM_RSS_FEED)
        const response = await fetch(`${proxyUrl}${rssUrl}`)

        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }

        const xmlText = await response.text()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')

        // Parse RSS feed
        const items = xmlDoc.querySelectorAll('item')
        const parsedPosts = Array.from(items).map((item) => {
          const title = item.querySelector('title')?.textContent || ''
          const link = item.querySelector('link')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''
          const description = item.querySelector('description')?.textContent || ''
          const creator = item.querySelector('dc\\:creator, creator')?.textContent || ''

          // Extract image from content or description
          const content = item.querySelector('content\\:encoded, encoded')?.textContent || description
          const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i)
          const image = imgMatch ? imgMatch[1] : null

          // Clean description (remove HTML tags)
          const cleanDescription = description
            .replace(/<[^>]*>/g, '')
            .replace(/&[^;]+;/g, ' ')
            .substring(0, 200)
            .trim() + '...'

          return {
            title,
            link,
            pubDate: new Date(pubDate),
            description: cleanDescription,
            image,
            creator,
          }
        })

        setPosts(parsedPosts)
      } catch (err) {
        console.error('Error fetching Medium posts:', err)
        setError('Unable to load blog posts. Please check your Medium RSS feed URL.')
      } finally {
        setLoading(false)
      }
    }

    fetchMediumPosts()
  }, [])

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Blog Posts</h2>
        <p className="section-subtitle">
          Insights on Digital Transformation, Cloud Strategy, GenAI, and Financial Services
        </p>

        {loading && (
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>Loading blog posts...</p>
          </div>
        )}

        {error && (
          <div className="blog-error">
            <p>{error}</p>
            <p className="error-hint">
              To fix this, update the MEDIUM_RSS_FEED URL in src/components/Blog.jsx with your Medium username.
              <br />
              Format: https://medium.com/feed/@yourusername
            </p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="blog-empty">
            <p>No blog posts found. Make sure your Medium RSS feed URL is correct.</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article key={index} className="blog-card">
                {post.image && (
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                )}
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.pubDate)}</span>
                    {post.creator && <span className="blog-author">by {post.creator}</span>}
                  </div>
                  <h3 className="blog-title">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="blog-description">{post.description}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-read-more"
                  >
                    Read on Medium →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
