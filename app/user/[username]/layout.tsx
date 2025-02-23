"use client";
import { useParams } from "next/navigation";
import Navbar from "../../_components/common/UserNavbar";

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
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Navbar navItems={navItems} />
      {children}
    </main>
  );
}
