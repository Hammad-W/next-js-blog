import Link from 'next/link';
import { posts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts | Next.js Blog',
  description: 'Browse all blog posts about web development and technology.',
};

export default function PostsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">{post.date}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 