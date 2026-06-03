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
    <div className="bg-white border-b border-[#E2E8F4]">
      <div className="max-w-295 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {STATS.map((item, index) => (
            <div 
              key={index} 
              className={`py-8 px-6 text-center border-b sm:border-b-0 border-[#E2E8F4] ${
                index !== STATS.length - 1 ? "sm:border-r" : ""
              }`}
            >
              <div className="font-extrabold text-4xl text-[#0057FF] leading-none">
                {item.value}
              </div>
              <div className="text-xs text-[#64748B] mt-1.5 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}