interface Testimoni {
  nama: string;
  kota: string;
  paket: string;
  pesan: string;
  avatar: string;
  bintang: number;
}

interface TestimonialsProps {
  testimoniData: Testimoni[];
}

export function TestimonialsSection({ testimoniData }: TestimonialsProps) {
  return (
    <section className="py-20 bg-[#0A0F1E]" id="testimoni">
      <div className="max-w-295 mx-auto px-6">
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#7DD3FF] mb-3">Testimoni Pelanggan</div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white leading-tight tracking-tight">Dipercaya <em className="not-italic text-[#7DD3FF]">Ratusan Ribu</em> Keluarga</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {testimoniData.map((t) => (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:bg-white/8 hover:border-[#00C2FF]/30" key={t.nama}>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#0057FF] to-[#00C2FF] flex items-center justify-center text-sm font-bold text-white shrink-0">{t.avatar}</div>
                <div>
                  <div className="font-bold text-sm text-white">{t.nama}</div>
                  <div className="text-xs text-white/50 mt-0.5">{t.kota} · {t.paket}</div>
                </div>
                <div className="ml-auto">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < t.bintang ? "#FBBF24" : "#D1D5DB"}>
                        <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/75 leading-relaxed">"{t.pesan}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-white/40 tracking-widest uppercase mb-5">Layanan Hiburan Tersedia</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["Netflix", "Disney+", "YouTube Premium", "Spotify", "Vidio", "WeTV", "iQIYI"].map((p) => (
              <div className="bg-white/8 border border-white/15 rounded-xl px-5 py-2.5 text-xs font-semibold text-white/70 tracking-wide" key={p}>{p}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}