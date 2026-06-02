interface StickyCtaProps {
  onCekArea: () => void;
}

export function StickyCtaMobile({ onCekArea }: StickyCtaProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F4] p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
      <button className="w-full justify-center p-3.5 text-sm font-semibold rounded-xl inline-flex items-center gap-1.5 transition-all bg-[#0057FF] text-white shadow-[0_4px_14px_rgba(0,87,255,0.28)]" onClick={onCekArea}>
        📍 Cek Area Saya — Gratis
      </button>
    </div>
  );
}