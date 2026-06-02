export function StatsSection() {
  return (
    <div className="bg-white border-b border-[#E2E8F4]">
      <div className="max-w-295 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="py-8 px-6 text-center border-b sm:border-b-0 sm:border-r border-[#E2E8F4]">
            <div className="font-extrabold text-4xl text-[#0057FF] leading-none">500K+</div>
            <div className="text-xs text-[#64748B] mt-1.5 font-medium">Pelanggan Aktif</div>
          </div>
          <div className="py-8 px-6 text-center border-b sm:border-b-0 sm:border-r border-[#E2E8F4]">
            <div className="font-extrabold text-4xl text-[#0057FF] leading-none">100+</div>
            <div className="text-xs text-[#64748B] mt-1.5 font-medium">Kota Area Layanan</div>
          </div>
          <div className="py-8 px-6 text-center">
            <div className="font-extrabold text-4xl text-[#0057FF] leading-none">1–3</div>
            <div className="text-xs text-[#64748B] mt-1.5 font-medium">Hari Kecepatan Instalasi</div>
          </div>
        </div>
      </div>
    </div>
  );
}