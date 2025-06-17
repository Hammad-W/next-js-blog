export interface Post {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
}

export const posts: Post[] = [
  {
    title: "Getting Started with Next.js 14",
    slug: "getting-started-with-nextjs-14",
    content: `Next.js 14 introduces several exciting features that make building React applications even more powerful. In this post, we'll explore the key improvements and how to leverage them in your projects.

The App Router is now stable and provides a more intuitive way to organize your application's routing structure. With improved server components and streaming, your applications can achieve better performance and user experience.

Some of the highlights include:
- Improved server components
- Partial prerendering
- Server actions
- Enhanced metadata API
- Better TypeScript support

These features make Next.js 14 a compelling choice for building modern web applications.`,
    excerpt: "Learn about the new features and improvements in Next.js 14, including the stable App Router and enhanced performance capabilities.",
    date: "2024-03-20"
  },
  {
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    content: `Tailwind CSS has revolutionized how we approach styling in modern web development. This utility-first CSS framework allows developers to build custom designs without leaving their HTML.

In this comprehensive guide, we'll cover:
- Setting up Tailwind CSS in your project
- Understanding the utility-first approach
- Creating responsive designs
- Customizing your theme
- Best practices for maintainable code

Tailwind CSS's approach to styling has made it easier than ever to create beautiful, responsive interfaces while maintaining a small bundle size.`,
    excerpt: "A comprehensive guide to using Tailwind CSS effectively in your web projects, from setup to advanced techniques.",
    date: "2024-03-19"
  },
  {
    title: "TypeScript Best Practices",
    slug: "typescript-best-practices",
    content: `TypeScript has become an essential tool in modern web development, providing type safety and better developer experience. In this post, we'll explore best practices for using TypeScript effectively.

Key topics covered:
- Type definitions and interfaces
- Generics and type inference
- Error handling
- Code organization
- Testing with TypeScript

By following these best practices, you can write more maintainable and reliable code while leveraging TypeScript's powerful type system.`,
    excerpt: "Learn essential TypeScript best practices to write more maintainable and type-safe code in your projects.",
    date: "2024-03-18"
  }
]; 