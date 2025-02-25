import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-6 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600 dark:text-indigo-400">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Page not found
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
          >
            <Home className="mr-2 h-5 w-5" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
