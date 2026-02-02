import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Inria_Serif, Paprika } from "next/font/google";
import "./globals.css";

// 1. Initialize Fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inria",
  display: "swap",
});

const paprika = Paprika({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-paprika",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4f0bb6", // Set to your primary purple brand color
};

export const metadata: Metadata = {
  title: {
    default: "Adane Emmanuel | Full-Stack Software Developer",
    template: "%s | Adane Emmanuel",
  },
  description:
    "Portfolio of Adane Emmanuel, a full-stack software developer specializing in modern web applications, scalable backends, and clean user experiences.",
  authors: [{ name: "Adane Emmanuel" }],
  creator: "Adane Emmanuel",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  metadataBase: new URL("https://adaneemmanuel.com"), 
  openGraph: {
    title: "Adane Emmanuel | Full-Stack Software Developer",
    description: "Building modern, scalable web applications with great user experience.",
    url: "https://adaneemmanuel.com",
    siteName: "Adane Emmanuel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adane Emmanuel Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adane Emmanuel | Full-Stack Developer",
    description: "Full-stack developer specializing in modern web apps.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/img/butterfly.png",
    apple: "/img/butterfly.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 2. Apply font variables to the body */}
      <body
        className={`
          ${inter.variable} 
          ${poppins.variable} 
          ${inria.variable} 
          ${paprika.variable} 
          font-poppins antialiased min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50
        `}
      >
        {children}
      </body>
    </html>
  );
}