// components/sections/hero.tsx
interface HeroProps {
  onCekArea: () => void;
}

export function HeroSection({ onCekArea }: HeroProps) {
  return (
    <section className="min-h-screen bg-linear-to-br from-[#001A5C] via-[#0057FF] to-[#00A8E8] relative overflow-hidden flex items-center pt-30 pb-20" id="hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full bg-white/5 border border-white/10 w-150 h-150 -top-50 -right-25" />
        <div className="absolute rounded-full bg-white/5 border border-white/10 w-75 h-75 -bottom-12.5 left-[30%]" />
        <div className="absolute rounded-full bg-white/5 border border-white/10 w-50 h-50 top-[20%] left-[5%]" />
      </div>
      <div className="max-w-295 mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-160 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-xs font-semibold text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFB8] shadow-[0_0_8px_#00FFB8] animate-pulse" />
              Internet Fiber + Kuota HP Keluarga
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5">
              Internet Rumah Fiber &<br />
              <em className="not-italic text-[#7DD3FF]">Kuota HP Keluarga</em><br />
              dalam Satu Tagihan
            </h1>
            <p className="text-md sm:text-lg text-white/80 style-leading-relaxed mb-9 max-w-120">
              Nikmati internet fiber stabil untuk seluruh aktivitas di rumah serta kuota bersama untuk otomatis anggota keluarga — tanpa biaya pemasangan.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <button className="inline-flex items-center gap-1.5 rounded-xl font-semibold text-md cursor-pointer transition-all bg-[#0057FF] text-white px-7 py-3.5 shadow-[0_4px_14px_rgba(0,87,255,0.28)] hover:bg-[#003DB8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,87,255,0.36)]" onClick={onCekArea}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Cek Area Saya
              </button>
              <a href="#paket" className="inline-flex items-center gap-1.5 rounded-xl font-semibold text-md cursor-pointer transition-all bg-white/15 text-white backdrop-blur-sm border border-white/25 px-7 py-3.5 hover:bg-white/25 no-underline">
                Lihat Paket
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="hidden sm:flex shrink-0 w-105 h-105 relative items-center justify-center pointer-events-none">
            <div className="w-85 h-85 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
              <div className="w-60 h-60 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-30 h-30 rounded-full bg-linear-to-br from-[#0057FF]/80 to-[#00C2FF]/80 flex items-center justify-center text-5xl shadow-[0_0_60px_rgba(0,150,255,0.5)]">🏠</div>
              </div>
              {[
                { emoji: "💻", angle: 0, dist: 155 },
                { emoji: "📱", angle: 72, dist: 155 },
                { emoji: "📺", angle: 144, dist: 155 },
                { emoji: "🎮", angle: 216, dist: 155 },
                { emoji: "📡", angle: 288, dist: 155 },
              ].map(({ emoji, angle, dist }) => {
                const rad = (angle * Math.PI) / 180;
                
                // Pengurangan -24 dihitung di sini, lalu dibatasi 3 angka desimal belakang koma
                const x = (Math.cos(rad) * dist - 24).toFixed(3);
                const y = (Math.sin(rad) * dist - 24).toFixed(3);
                
                return (
                  <div key={angle} className="absolute w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl" style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}>
                    {emoji}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}