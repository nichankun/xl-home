export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#F8FAFF]" id="fitur">
      <div className="max-w-295 mx-auto px-6">
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">Mengapa XL SATU</div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">Solusi Lengkap untuk <em className="not-italic text-[#0057FF]">Keluarga Modern</em></h2>
          <p className="text-base text-[#64748B] leading-relaxed mt-3 max-w-130 mx-auto">Satu layanan yang menjawab semua kebutuhan internet rumah and komunikasi keluarga.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {[
            { icon: "🌐", title: "Fiber Optic Stabil", desc: "Koneksi cepat tanpa gangguan untuk bekerja, belajar, gaming, dan streaming tanpa buffering." },
            { icon: "👨‍👩‍👧‍👦", title: "Kuota Keluarga", desc: "Kuota dapat dibagi ke seluruh anggota keluarga dalam satu paket, lebih hemat dan praktis." },
            { icon: "📺", title: "Android TV Box", desc: "Nikmati hiburan dari ratusan channel dan platform streaming langsung dari TV rumah." },
            { icon: "💰", title: "Biaya Transparan", desc: "Satu tagihan untuk internet dan kuota HP. Tidak ada biaya tersembunyi yang mengejutkan." },
          ].map((f, i) => (
            <div className="bg-white rounded-3xl p-7 border border-[#E2E8F4] transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,87,255,0.1)] hover:border-[#0057FF]/20" key={i}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#0057FF] to-[#00C2FF] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="w-13 h-13 rounded-xl bg-linear-to-br from-[#EEF3FF] to-[#DBEAFE] flex items-center justify-center text-2xl mb-4.5">{f.icon}</div>
              <div className="font-bold text-base text-[#0A0F1E] mb-2">{f.title}</div>
              <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}