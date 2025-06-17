import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function Home() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Next.js Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern blog built with Next.js 14, TypeScript, and Tailwind CSS.
          Explore our latest articles about web development and technology.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Featured Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
