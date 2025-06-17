import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
          >
            Next.js Blog
          </Link>
          <div className="space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/posts" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Posts
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 