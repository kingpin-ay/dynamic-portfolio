"use client";
import { useParams, usePathname } from "next/navigation";
import Navbar from "../../_components/common/UserNavbar";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

function navbarUrlConstruct(username: string) {
  return [
    { name: "Home", href: `/user/${username}` },
    { name: "About", href: `/user/${username}/about` },
    { name: "Skills", href: `/user/${username}/skills` },
    { name: "Projects", href: `/user/${username}/projects` },
    { name: "Experience", href: `/user/${username}/experience` },
    { name: "Blog", href: `/user/${username}/blog` },
    { name: "Testimonials", href: `/user/${username}/testimonials` },
    { name: "Contact", href: `/user/${username}/contact` },
  ];
}

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { username }: { username: string } = useParams();
  const navItems = navbarUrlConstruct(username);
  const pathname = usePathname();
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Navbar navItems={navItems} currentPath={pathname} />
      <ErrorBoundary errorComponent={Error}>
        <section
          id="home"
          className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800 h-screen flex items-center justify-center"
        >
          {children}
        </section>
      </ErrorBoundary>
    </main>
  );
}
