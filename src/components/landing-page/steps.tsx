// Dikeluarkan dari komponen utama agar dioptimalkan penuh oleh React Compiler
const STEPS = [
  { 
    num: "1", 
    title: "Pilih Paket", 
    desc: "Pilih paket yang sesuai kebutuhan dan cek ketersediaan area Anda." 
  },
  { 
    num: "2", 
    title: "Hubungi Tim Kami", 
    desc: "Tim sales menghubungi Anda via WhatsApp untuk konfirmasi dan penjadwalan." 
  },
  { 
    num: "3", 
    title: "Pemasangan", 
    desc: "Teknisi berpengalaman kami datang ke rumah Anda untuk instalasi perangkat." 
  },
  { 
    num: "4", 
    title: "Internet Aktif", 
    desc: "Internet fiber Anda aktif dan siap digunakan oleh seluruh keluarga." 
  },
]

export function StepsSection() {
  return (
    <section className="py-20 bg-[#F8FAFF]" id="cara-daftar">
      <div className="max-w-295 mx-auto px-6">
        
        {/* Header Konten */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">
            Cara Berlangganan
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">
            Proses Mudah, <em className="not-italic text-[#0057FF]">4 Langkah</em> Saja
          </h2>
        </div>

        {/* Grid Alur Tahapan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
          
          {/* Garis Penghubung antar Langkah (Hanya Muncul di Layar Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-[#0057FF] to-[#00C2FF] opacity-20 pointer-events-none" />
          
          {STEPS.map((step) => (
            <div className="text-center relative group" key={step.num}>
              {/* Lingkaran Angka dengan Efek Hover Mikro */}
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#0057FF] to-[#00C2FF] flex items-center justify-center mx-auto mb-5 font-extrabold text-xl text-white shadow-[0_8px_24px_rgba(0,87,255,0.3)] relative z-10 transition-transform duration-300 group-hover:scale-105">
                {step.num}
              </div>
              
              {/* Judul & Deskripsi Langkah */}
              <div className="font-bold text-base text-[#0A0F1E] mb-2">
                {step.title}
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}