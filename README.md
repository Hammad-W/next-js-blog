# Next.js Blog

A modern blog application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🔍 SEO optimized with metadata
- 📝 Blog posts with dynamic routing
- 🎯 Static site generation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── posts/             # Posts routes
│       ├── page.tsx       # Posts listing
│       └── [slug]/        # Dynamic post routes
│           └── page.tsx   # Individual post page
├── components/            # React components
│   └── Header.tsx        # Navigation header
└── lib/                  # Utility functions and data
    └── posts.ts          # Mock blog post data
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License.
