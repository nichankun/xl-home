interface PromoProps {
  onClaim: () => void;
}

export function PromoSection({ onClaim }: PromoProps) {
  return (
    <section className="py-20 bg-white" id="promo">
      <div className="max-w-295 mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">Promo Spesial</div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">Penawaran <em className="not-italic text-[#0057FF]">Terbatas</em> untuk Anda</h2>
        </div>
        <div className="bg-linear-to-br from-[#001A5C] via-[#0057FF] to-[#00A8E8] rounded-[28px] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute rounded-full bg-white/5 w-100 h-100 -top-37.5 -right-25" />
          <div className="absolute rounded-full bg-white/5 w-50 h-50 -bottom-20 left-[20%]" />
          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider mb-4">🎉 Promo Juni 2026</div>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-white leading-tight mb-3 tracking-tight">Gratis Biaya Instalasi<br />+ Bonus 2 Bulan Berlangganan</h3>
            <p className="text-sm sm:text-base text-white/80 mb-7 max-w-110">Daftarkan layanan XL SATU sebelum 30 Juni 2026 dan nikmati manfaat ekstra untuk keluarga Anda.</p>
            <button className="inline-flex items-center gap-1.5 rounded-xl font-semibold text-md cursor-pointer transition-all bg-white text-[#0057FF] px-7 py-3.5 hover:bg-white/90" onClick={onClaim}>
              Klaim Promo Sekarang
            </button>
            <p className="text-xs text-white/60 mt-4">*Berlaku s/d 30 Juni 2026. Syarat & ketentuan berlaku.</p>
          </div>
          <div className="shrink-0 w-30 sm:w-45 h-30 sm:h-45 bg-white/8 border border-white/15 rounded-full flex items-center justify-center text-[48px] sm:text-7xl relative z-10">🎁</div>
        </div>
      </div>
    </section>
  );
}