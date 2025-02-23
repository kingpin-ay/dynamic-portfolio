import PortFolioPageComponent from "./_components/common/PortFolioPageComponent";
import { ThemeProvider } from "./_contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gray-100">
        <PortFolioPageComponent />
      </main>
    </ThemeProvider>
  );
}
