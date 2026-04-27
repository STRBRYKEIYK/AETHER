import { Cormorant_SC, Montserrat } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const headingFont = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AETHER | Celestial Luxury Real Estate",
  description: "Experience the pinnacle of Philippine real estate. Beyond the horizon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-celestial-dark">{children}</body>
    </html>
  );
}
