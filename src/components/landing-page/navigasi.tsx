"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavbarSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Class dinamis untuk tautan navigasi tengah (berubah abu-abu saat scroll, putih saat di atas)
  const navLinkClass = `text-sm font-medium transition-colors no-underline ${
    scrolled 
      ? "text-[#64748B] hover:text-[#0057FF]" 
      : "text-white/80 hover:text-white"
  }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4.5 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md border-b border-[#E2E8F4] py-3 shadow-[0_2px_20px_rgba(0,87,255,0.07)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-295 mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand Area (Adaptif terhadap background) */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9.5 h-9.5 rounded-2xl bg-linear-to-br from-[#0057FF] to-[#00C2FF] flex items-center justify-center font-bold text-white text-md tracking-tight shadow-xs">
              XL
            </div>
            <span className={`font-bold text-[17px] transition-colors ${scrolled ? "text-[#0A0F1E]" : "text-white"}`}>
              XL <span className={scrolled ? "text-[#0057FF]" : "text-[#7DD3FF]"}>SATU</span>
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#paket" className={navLinkClass}>
              Paket
            </Link>
            <Link href="#promo" className={navLinkClass}>
              Promo
            </Link>
            <Link href="#cara-daftar" className={navLinkClass}>
              Cara Daftar
            </Link>
            <Link href="#faq" className={navLinkClass}>
              FAQ
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            
            {/* Tombol WhatsApp (Outline adaptif: putih transparan di atas biru, abu-abu di atas putih) */}
            <Button
              asChild
              variant="outline"
              className={`hidden md:inline-flex items-center gap-1.5 rounded-xl font-semibold text-sm h-auto px-4.5 py-2 transition-all ${
                scrolled
                  ? "border-[#E2E8F4] bg-white text-[#0A0F1E] hover:border-[#0057FF] hover:text-[#0057FF] hover:bg-white"
                  : "border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-xs"
              }`}
            >
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi Sales
              </a>
            </Button>

            {/* Tombol Utama Cek Area (Putih solid saat di atas biru agar kontras, Biru solid saat di atas putih) */}
            <Button
              asChild
              className={`inline-flex items-center gap-1.5 rounded-xl font-semibold text-sm h-auto px-5 py-2.5 transition-all no-underline ${
                scrolled
                  ? "bg-[#0057FF] text-white shadow-[0_4px_14px_rgba(0,87,255,0.28)] hover:bg-[#003DB8] hover:-translate-y-0.5"
                  : "bg-white text-[#0057FF] shadow-md hover:bg-white/90 hover:-translate-y-0.5"
              }`}
            >
              <Link href="#cek-area">
                Cek Area Saya
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  )
}