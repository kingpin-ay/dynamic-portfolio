"use client";

import { useState, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/_contexts/ThemeContext";
import { traceRouteAfterSlashUser } from "@/app/_helper/regex.function";

interface NavbarProps {
  navItems: {
    name: string;
    href: string;
  }[];
  currentPath: string;
}

export default function Navbar({ navItems, currentPath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isActive = (href: string) => {
    return href === currentPath;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 dark:text-white"
            >
              Your Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileNavBar isOpen={isOpen}>
        {navItems.map((item) => (
          <MobileNavLinks
            key={item.href}
            item={item}
            isActive={isActive}
            setIsOpen={setIsOpen}
          />
        ))}
      </MobileNavBar>
    </nav>
  );
}

function MobileNavBar({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{children}</div>
    </div>
  );
}

function MobileNavLinks({
  item,
  isActive,
  setIsOpen,
}: {
  item: {
    name: string;
    href: string;
  };
  isActive: (href: string) => boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Link
      href={item.href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive(item.href)
          ? "text-indigo-600 dark:text-indigo-400"
          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {item.name}
    </Link>
  );
}
