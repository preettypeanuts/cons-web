import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { CustomScrollbar } from "@/components/custom-scrollbar";
import { Footer } from "@/components/footer";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GAB",
  description: "Where Innovation Meets Responsibility — Shaping a Better Tomorrow for All.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics>
          <ThemeProvider enableSystem attribute={'class'}>
            <Navbar>
              {children}
              <Footer />
            </Navbar>
            <MobileNavigation />
            <CustomScrollbar />
          </ThemeProvider>
        </Analytics>
      </body>
    </html>
  );
}
