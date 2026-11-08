import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import WorkoutsProvider from "@/context/WorkoutsContext";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "A dark, no-nonsense gym companion. Pick a lift, lock it into today's plan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="fitlog"
      className={`${inter.variable} ${oswald.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base-100 font-sans text-base-content">
        <WorkoutsProvider>
          <Suspense
            fallback={<div className="h-14 border-b border-base-300" />}
          >
            <Navbar />
          </Suspense>

          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
            {children}
          </main>

          <Footer />

          <ToastContainer position="top-right" theme="dark" autoClose={2500} />
        </WorkoutsProvider>
      </body>
    </html>
  );
}
