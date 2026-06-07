"use client"

import { Sparkles, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PromoProps {
  onClaim: () => void
}

export function PromoSection({ onClaim }: PromoProps) {
  return (
    <section className="py-20 bg-white" id="promo">
      <div className="max-w-295 mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">
            Promo Spesial
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">
            Penawaran <em className="not-italic text-[#0057FF]">Terbatas</em> untuk Anda
          </h2>
        </div>

        {/* Promo Card Wrapper */}
        <div className="bg-linear-to-br from-[#001A5C] via-[#0057FF] to-[#00A8E8] rounded-[28px] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Background Decorative Ornaments */}
          {/* FIX: Tambahan aria-hidden untuk elemen dekoratif */}
          <div aria-hidden="true" className="absolute rounded-full bg-white/5 w-100 h-100 -top-37.5 -right-25 pointer-events-none" />
          <div aria-hidden="true" className="absolute rounded-full bg-white/5 w-50 h-50 -bottom-20 left-[20%] pointer-events-none" />
          
          {/* Left Content Area */}
          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider mb-4">
              {/* FIX: A11y untuk icon dekoratif */}
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-[#00FFB8]" />
              Promo Juni 2026
            </div>
            
            <h3 className="font-extrabold text-2xl sm:text-3xl text-white leading-tight mb-3 tracking-tight">
              Gratis Biaya Instalasi<br />+ Bonus 2 Bulan Berlangganan
            </h3>
            
            <p className="text-sm sm:text-base text-white/80 mb-7 max-w-110">
              Daftarkan layanan XL SATU sebelum 30 Juni 2026 dan nikmati manfaat ekstra untuk keluarga Anda.
            </p>

            {/* Action Call with Shadcn Button */}
            <Button
              size="lg"
              onClick={onClaim}
              // FIX: Mengganti text-md (bukan class tailwind standar) menjadi text-base
              className="h-auto rounded-xl bg-white text-[#0057FF] font-semibold text-base px-7 py-3.5 hover:bg-white/90 transition-all shadow-md"
            >
              Klaim Promo Sekarang
            </Button>
            
            <p className="text-xs text-white/60 mt-4">
              *Berlaku s/d 30 Juni 2026. Syarat & ketentuan berlaku.
            </p>
          </div>

          {/* Right Floating Icon Area */}
          <div className="shrink-0 w-30 sm:w-45 h-30 sm:h-45 bg-white/8 border border-white/15 rounded-full flex items-center justify-center text-white relative z-10">
            {/* FIX: A11y untuk icon dekoratif */}
            <Gift aria-hidden="true" className="h-14 w-14 sm:h-20 sm:w-20 stroke-[1.25]" />
          </div>

        </div>
      </div>
    </section>
  )
}