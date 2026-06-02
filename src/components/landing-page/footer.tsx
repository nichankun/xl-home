export function FooterSection() {
  return (
    <footer className="bg-[#0A0F1E] pt-15 pb-8">
      <div className="max-w-295 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9.5 h-9.5 rounded-2xl bg-linear-to-br from-[#0057FF] to-[#00C2FF] flex items-center justify-center font-bold text-white text-md tracking-tight">XL</div>
              <span className="font-bold text-[17px] text-white">XL <span className="text-[#0057FF]">SATU</span></span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mt-3.5 max-w-60">Internet Fiber Rumah dan Kuota HP Keluarga dalam Satu Tagihan. Solusi lengkap untuk keluarga modern Indonesia.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white/90 tracking-wide uppercase mb-4">Layanan</h4>
            <a href="#paket" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">Paket Internet</a>
            <a href="#paket" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">Internet + TV</a>
            <a href="#promo" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">Promo</a>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white/90 tracking-wide uppercase mb-4">Informasi</h4>
            <a href="#cara-daftar" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">Cara Daftar</a>
            <a href="#faq" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">FAQ</a>
            <a href="#" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">Kebijakan Privasi</a>
            <a href="#" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">Syarat & Ketentuan</a>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white/90 tracking-wide uppercase mb-4">Kontak</h4>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">WhatsApp Sales</a>
            <a href="tel:1500817" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">1500 817 (Call Center)</a>
            <a href="mailto:cs@xl.co.id" className="block text-sm text-white/50 mb-2.5 transition-colors hover:text-white/90 no-underline">cs@xl.co.id</a>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">© 2026 XL SATU. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-2.5">
            {["f", "ig", "yt", "tw"].map((s) => (
              <div className="w-9 h-9 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/60 text-sm cursor-pointer transition-all hover:bg-[#0057FF] hover:border-[#0057FF] hover:text-white" key={s}>{s === "f" ? "f" : s === "ig" ? "◎" : s === "yt" ? "▶" : "𝕏"}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}