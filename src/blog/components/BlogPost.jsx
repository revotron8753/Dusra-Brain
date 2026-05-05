import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPost({ post }) {
  return (
    <article className="blog-post">
      <div className="container blog-post__container">
        <Link href="/blog" className="blog-post__back">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="blog-post__header">
          {post.tags?.length > 0 && (
            <div className="blog-post__tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-card__tag">{tag}</span>
              ))}
            </div>
          )}
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            {post.author && <span className="blog-post__author">By {post.author}</span>}
            <span className="blog-post__date">{formatDate(post.publishedAt)}</span>
          </div>
        </header>

        {post.excerpt && <p className="blog-post__excerpt">{post.excerpt}</p>}

        <div className="blog-post__body">
          {post.content && <p>{post.content}</p>}
        </div>
      </div>
    </article>
  );
}
