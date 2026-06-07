// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { NavbarSection } from "@/components/landing-page/navigasi";
import { FooterSection } from "@/components/landing-page/footer";
import { cn } from "@/lib/utils";

// Inisialisasi Font
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "XL SATU - Internet Fiber & Kuota HP Keluarga",
  description: "Internet Fiber Rumah dan Kuota HP Keluarga dalam Satu Tagihan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // FIX 1: Mengubah lang="en" menjadi "id" untuk SEO Indonesia
    // FIX 2: Menambahkan suppressHydrationWarning sesuai standar Next.js & shadcn
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body 
        // FIX 3: Memindahkan fungsi utilitas cn() ke <body> sesuai arsitektur shadcn/ui
        className={cn(
          "min-h-screen flex flex-col bg-[#F8FAFF] text-[#0A0F1E] font-sans antialiased", 
          geist.variable
        )}
      >
        {/* Navbar Global */}
        <NavbarSection />
        
        {/* Konten Halaman Utama */}
        <main className="flex-1">{children}</main>
        
        {/* Footer Global */}
        <FooterSection />
      </body>
    </html>
  );
}