import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";
import Link from "next/link";

interface BlogBlockProps {
  blog: { title: string; excerpt: string; date: string; href: string };
}

const blogPosts = [
  {
    title: "Understanding React Hooks",
    excerpt:
      "A deep dive into React Hooks and how they can simplify your code.",
    date: "May 15, 2023",
    href: "/blog/understanding-react-hooks",
  },
  {
    title: "Building Scalable APIs with Nest.js",
    excerpt:
      "Learn how to create robust and scalable backend services using Nest.js.",
    date: "June 2, 2023",
    href: "/blog/building-scalable-apis-with-nestjs",
  },
  {
    title: "Optimizing Next.js Applications",
    excerpt: "Tips and tricks to improve the performance of your Next.js apps.",
    date: "July 10, 2023",
    href: "/blog/optimizing-nextjs-applications",
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Blog" />
        <TopMainHeadingText text="Latest Articles" />
      </div>
      <div className="mt-10">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {blogPosts.map((post, index) => (
            <BlogBlock key={index} blog={post} />
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}

function BlogBlock({ blog: post }: BlogBlockProps) {
  return (
    <div
      key={post.title}
      className="relative bg-white dark:bg-gray-800 shadow rounded-lg p-5 transition-colors duration-200"
    >
      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        <Link
          href={post.href}
          className="hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
        {post.excerpt}
      </p>
      <p className="mt-3 text-sm text-gray-400 dark:text-gray-500">
        {post.date}
      </p>
    </div>
  );
}
