import Navbar from "../_components/pages/Navbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Navbar />
      {children}
    </main>
  );
}
