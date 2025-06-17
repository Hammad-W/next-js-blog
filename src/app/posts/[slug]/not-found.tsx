import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Post Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
      </p>
      <Link
        href="/posts"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View All Posts
      </Link>
    </div>
  );
} 