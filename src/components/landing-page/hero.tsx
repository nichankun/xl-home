"use client"

import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onCekArea: () => void
}

// Dikeluarkan dari komponen agar tidak di-recreate setiap render
const FLOATING_ITEMS = [
  { emoji: "💻", angle: 0, dist: 155 },
  { emoji: "📱", angle: 72, dist: 155 },
  { emoji: "📺", angle: 144, dist: 155 },
  { emoji: "🎮", angle: 216, dist: 155 },
  { emoji: "📡", angle: 288, dist: 155 },
]

export function HeroSection({ onCekArea }: HeroProps) {
  return (
    <section 
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-[#001A5C] via-[#0057FF] to-[#00A8E8] pb-20 pt-30" 
      id="hero"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-25 -top-50 h-150 w-150 rounded-full border border-white/10 bg-white/5" />
        <div className="absolute -bottom-12.5 left-[30%] h-75 w-75 rounded-full border border-white/10 bg-white/5" />
        <div className="absolute left-[5%] top-[20%] h-50 w-50 rounded-full border border-white/10 bg-white/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-295 px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Content & Actions */}
          <div className="max-w-160">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-[#00FFB8] shadow-[0_0_8px_#00FFB8] animate-pulse" />
              Internet Fiber + Kuota HP Keluarga
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Internet Rumah Fiber &<br />
              <em className="not-italic text-[#7DD3FF]">Kuota HP Keluarga</em><br />
              dalam Satu Tagihan
            </h1>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-9 max-w-120">
              Nikmati internet fiber stabil untuk seluruh aktivitas di rumah serta kuota bersama untuk otomatis anggota keluarga — tanpa biaya pemasangan.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Action using Shadcn Button */}
              <Button
                size="lg"
                onClick={onCekArea}
                className="h-auto rounded-xl bg-[#0057FF] px-7 py-3.5 text-md font-semibold text-white shadow-[0_4px_14px_rgba(0,87,255,0.28)] hover:bg-[#003DB8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,87,255,0.36)] transition-all gap-2"
              >
                <MapPin className="h-4 w-4 stroke-[2.5]" />
                Cek Area Saya
              </Button>

              {/* Secondary Action using Shadcn Button + Next.js Link */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto rounded-xl border-white/25 bg-white/15 px-7 py-3.5 text-md font-semibold text-white backdrop-blur-sm hover:bg-white/25 hover:text-white transition-all gap-2"
              >
                <Link href="#paket">
                  Lihat Paket
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Interactive Illustration */}
          <div className="hidden sm:flex shrink-0 w-105 h-105 relative items-center justify-center pointer-events-none">
            <div className="relative flex h-85 w-85 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <div className="flex h-60 w-60 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <div className="flex h-30 w-30 items-center justify-center rounded-full bg-linear-to-br from-[#0057FF]/80 to-[#00C2FF]/80 text-5xl shadow-[0_0_60px_rgba(0,150,255,0.5)]">
                  🏠
                </div>
              </div>

              {FLOATING_ITEMS.map(({ emoji, angle, dist }) => {
                const rad = (angle * Math.PI) / 180
                const x = (Math.cos(rad) * dist - 24).toFixed(3)
                const y = (Math.sin(rad) * dist - 24).toFixed(3)

                return (
                  <div
                    key={angle}
                    className="absolute flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-xl"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    {emoji}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}