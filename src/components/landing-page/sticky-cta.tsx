"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StickyCtaProps {
  onCekArea: () => void
}

export function StickyCtaMobile({ onCekArea }: StickyCtaProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-[#E2E8F4] p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
      <Button
        size="lg"
        onClick={onCekArea}
        className="w-full h-auto p-3.5 text-sm font-semibold rounded-xl bg-[#0057FF] text-white hover:bg-[#003DB8] shadow-[0_4px_14px_rgba(0,87,255,0.28)] transition-all gap-1.5"
      >
        <MapPin className="h-4 w-4 stroke-[2.5]" />
        Cek Area Saya — Gratis
      </Button>
    </div>
  )
}