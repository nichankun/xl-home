"use client"

import Link from "next/link"
import { MapPin, ArrowRight, Laptop, Smartphone, Tv, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onCekArea: () => void
}

const DEVICE_CHIPS = [
  { icon: Laptop, label: "Laptop" },
  { icon: Smartphone, label: "HP" },
  { icon: Tv, label: "Smart TV" },
  { icon: Gamepad2, label: "Gaming" },
]

const STATS = [
  { value: "1 Gbps", label: "Kecepatan Max" },
  { value: "99.9%", label: "Uptime" },
  { value: "Gratis", label: "Biaya Pasang" },
  { value: "24/7", label: "Support" },
]

const ORBIT_ITEMS = [
  { emoji: "💻", angle: 0 },
  { emoji: "📱", angle: 72 },
  { emoji: "📺", angle: 144 },
  { emoji: "🎮", angle: 216 },
  { emoji: "📡", angle: 288 },
]

export function HeroSection({ onCekArea }: HeroProps) {
  return (
    <section
      className="scroll-mt-20 relative flex min-h-dvh items-start lg:items-center overflow-hidden bg-linear-to-br from-[#001242] via-[#003acc] to-[#0087c4] pt-15"
      id="hero"
    >
      {/* Blur ornaments */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-[#0096D6]/20 blur-[80px]" />
        <div className="absolute bottom-0 left-[30%] h-64 w-64 rounded-full bg-cyan-300/10 blur-[70px]" />
        <div className="absolute -left-10 top-1/4 h-56 w-56 rounded-full bg-blue-500/15 blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full py-20 sm:py-20 lg:py-0 lg:min-h-[calc(100dvh-60px)] lg:flex lg:items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">

          {/* ── LEFT ── */}
          <div className="w-full lg:max-w-140 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Heading */}
            <h1 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black text-white leading-[1.18] tracking-tight mb-4 lg:mb-5">
              Internet Rumah Fiber &{" "}
              <span className="text-[#86EBFF]">Kuota HP Keluarga</span>{" "}
              dalam Satu Tagihan
            </h1>

            {/* Description */}
            <p className="text-[13px] sm:text-[15px] text-white/72 leading-[1.7] mb-6 max-w-105 lg:max-w-none">
              Nikmati fiber stabil tanpa batasan kuota untuk seluruh perangkat di rumah, plus paket kuota bersama otomatis untuk semua anggota keluarga. Tanpa biaya pasang.
            </p>

            {/* Device chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7">
              {DEVICE_CHIPS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/9 border border-white/12 text-[11px] text-white/80"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Menerapkan prinsip Composition shadcn & Responsive Fix */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8 lg:mb-9">
              {/* FIX: Menghapus 'hidden' dan menambahkan 'flex justify-center items-center' agar tombol merender sempurna pada layar Mobile */}
              <Button
                size="lg"
                onClick={onCekArea}
                className="flex sm:inline-flex w-full sm:w-auto h-12 rounded-xl bg-white text-[#004BFF] hover:bg-slate-50 hover:-translate-y-px active:translate-y-0 transition-all font-semibold px-7 text-[14px] gap-2 shadow-lg shadow-black/10 justify-center items-center"
              >
                <MapPin className="h-4 w-4" />
                Cek Area Saya
              </Button>

              {/* Composition: Menggunakan slot asChild untuk mendistribusikan class shadcn ke <Link> */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex sm:inline-flex w-full sm:w-auto h-12 rounded-xl border-white/22 bg-white/7 px-7 text-[14px] font-medium text-white hover:bg-white/14 hover:text-white hover:-translate-y-px active:translate-y-0 transition-all gap-2 justify-center items-center"
              >
                <Link href="#paket">
                  Lihat Paket
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2.5 w-full sm:max-w-sm lg:max-w-none">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col bg-white/7 border border-white/10 rounded-xl px-3 py-2.5"
                >
                  <span className="text-white font-bold text-[15px] lg:text-[17px] leading-tight">{value}</span>
                  <span className="text-white/50 text-[9px] sm:text-[10px] mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Orbit — desktop only ── */}
          <div className="hidden lg:flex shrink-0 w-90 h-90 relative items-center justify-center pointer-events-none select-none">
            <div className="absolute h-64 w-64 rounded-full bg-cyan-300/15 blur-[50px]" />
            <div className="relative flex h-75 w-75 items-center justify-center rounded-full border border-white/12 bg-white/3">
              <div className="flex h-47.5 w-47.5 items-center justify-center rounded-full border border-white/8 bg-white/4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-[40px] shadow-xl">
                  🏠
                </div>
              </div>

              {ORBIT_ITEMS.map(({ emoji, angle }) => {
                const rad = (angle * Math.PI) / 180
                const x = (Math.cos(rad) * 135 - 21).toFixed(2)
                const y = (Math.sin(rad) * 135 - 21).toFixed(2)
                return (
                  <div
                    key={angle}
                    className="absolute flex h-10.5 w-10.5 items-center justify-center rounded-[11px] border border-white/22 bg-white/12 text-[17px]"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
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