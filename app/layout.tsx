import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Jatin Panghal | Software Development Engineer",
    template: "%s | Jatin Panghal",
  },
  description:
    "Software development engineer portfolio featuring agentic AI, frontend craftsmanship, and production-ready engineering.",
  keywords: [
    "software engineer",
    "agentic AI",
    "genAI",
    "frontend",
    "portfolio",
    "API design",
  ],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Jatin Panghal | Software Development Engineer",
    description:
      "Software development engineer portfolio featuring agentic AI, frontend craftsmanship, and production-ready engineering.",
    url: "https://example.com",
    siteName: "Jatin Panghal",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(!sessionStorage.getItem("introSeen")){document.documentElement.classList.add("intro-active")}}catch(e){}',
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSerif.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "sand", "ocean", "forest", "rose", "slate"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
