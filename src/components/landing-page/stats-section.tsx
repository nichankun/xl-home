// Dikeluarkan dari komponen utama agar optimal di bawah React Compiler
const STATS = [
  { 
    value: "500K+", 
    label: "Pelanggan Aktif" 
  },
  { 
    value: "100+", 
    label: "Kota Area Layanan" 
  },
  { 
    value: "1–3", 
    label: "Hari Kecepatan Instalasi" 
  },
]

export function StatsSection() {
  return (
    // FIX: Menggunakan tag <section> dengan aria-label untuk landmark aksesibilitas
    <section aria-label="Statistik Layanan XL SATU" className="bg-white border-b border-[#E2E8F4]">
      <div className="max-w-295 mx-auto px-6">
        
        {/* FIX: Menggunakan <dl> (Description List) untuk pasangan Key-Value statistik */}
        <dl className="grid grid-cols-1 sm:grid-cols-3">
          {STATS.map((item, index) => (
            <div 
              // FIX: Menggunakan nilai unik (label) sebagai key, bukan index
              key={item.label} 
              className={`flex flex-col py-8 px-6 text-center border-b sm:border-b-0 border-[#E2E8F4] ${
                index !== STATS.length - 1 ? "sm:border-r" : ""
              }`}
            >
              {/* FIX: <dd> untuk Value. Flex order digunakan agar posisinya di atas secara visual */}
              <dd className="order-1 font-extrabold text-4xl text-[#0057FF] leading-none">
                {item.value}
              </dd>
              
              {/* FIX: <dt> untuk Term/Label. Flex order digunakan agar posisinya di bawah secara visual */}
              <dt className="order-2 text-xs text-[#64748B] mt-1.5 font-medium">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}