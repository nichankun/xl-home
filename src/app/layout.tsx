// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NavbarSection } from "@/components/landing-page/navigasi";
import { FooterSection } from "@/components/landing-page/footer";

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
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F8FAFF] text-[#0A0F1E]">
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