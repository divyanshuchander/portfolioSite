// src/components/cards/BlogCard.jsx
import { useState, useEffect } from 'react';
import { blog } from '../../data/portfolio';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M7 17 17 7M7 7h10v10"/>
  </svg>
);

const PenIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const MediumIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

function PostSkeleton() {
  return (
    <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', backgroundColor: 'var(--bg-subtle)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ height: '12px', borderRadius: '4px', backgroundColor: 'var(--border)', width: '80%', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '10px', borderRadius: '4px', backgroundColor: 'var(--border)', width: '55%', animation: 'pulse 1.5s ease-in-out infinite 0.2s' }} />
    </div>
  );
}

function PostItem({ post }) {
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : null;

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '12px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg-subtle)',
        textDecoration: 'none',
        color: 'var(--text-secondary)',
        fontSize: '13px',
        transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
        e.currentTarget.style.color = 'var(--text-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
        e.currentTarget.style.color = 'var(--text-secondary)';
      }}
      aria-label={post.title}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontWeight: '600',
          color: 'var(--text-primary)',
          lineHeight: '1.4',
          marginBottom: '3px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>
          {post.title}
        </div>
        {post.subtitle && (
          <div style={{
            fontSize: '12px',
            color: 'var(--text-tertiary)',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.5',
          }}>
            {post.subtitle}
          </div>
        )}
        {formattedDate && (
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '6px' }}>
            {formattedDate}
          </div>
        )}
      </div>
      <ArrowIcon />
    </a>
  );
}

// Parse Medium RSS feed via a public RSS-to-JSON proxy
async function fetchMediumPosts(username, maxPosts) {
  const rssUrl = `https://medium.com/feed/@${username}`;
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=${maxPosts}`;

  const res = await fetch(proxyUrl);
  if (!res.ok) throw new Error('RSS fetch failed');

  const data = await res.json();
  if (data.status !== 'ok') throw new Error('RSS parse failed');

  return data.items.map((item) => ({
    title: item.title,
    // Strip HTML tags from description to get plain subtitle
    subtitle: item.description
      ? item.description.replace(/<[^>]+>/g, '').slice(0, 120).trim() + '…'
      : '',
    link: item.link,
    date: item.pubDate,
  }));
}

export default function BlogCard() {
  const [posts, setPosts] = useState(null); // null = loading
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMediumPosts(blog.mediumUsername, blog.maxPosts)
      .then((items) => {
        if (items.length === 0) {
          setPosts(blog.placeholders);
        } else {
          setPosts(items);
        }
      })
      .catch(() => {
        setError(true);
        setPosts(blog.placeholders);
      });
  }, []);

  return (
    <div
      className="bento-card animate-fade-up"
      style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="section-label" style={{ marginBottom: 0 }}>Blog</div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '10px',
              fontWeight: '600',
              color: 'var(--text-tertiary)',
              backgroundColor: 'var(--bg-subtle)',
              padding: '2px 8px',
              borderRadius: '99px',
              border: '1px solid var(--border)',
            }}
          >
            <MediumIcon />
            Medium
          </div>
          {error && (
            <span style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>
              (offline — showing placeholder)
            </span>
          )}
        </div>
        <a
          href={`https://medium.com/@${blog.mediumUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
        >
          All posts <ArrowIcon />
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
        {posts === null ? (
          // Loading skeletons
          Array.from({ length: blog.maxPosts }).map((_, i) => (
            <PostSkeleton key={i} />
          ))
        ) : (
          posts.map((post, i) => (
            <PostItem key={i} post={post} />
          ))
        )}
      </div>
    </div>
  );
}
