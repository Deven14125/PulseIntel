import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulseIntel - Smart Heart Health",
  description: "Predict your heart disease risk using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SplashScreen />
            <BackgroundAnimation />
            <Navbar />
            <div className="pt-20 min-h-screen flex flex-col"> {/* Add padding for fixed navbar */}
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
