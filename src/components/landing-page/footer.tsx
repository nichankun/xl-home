import Link from "next/link"

// Menggunakan SVG kustom langsung agar 100% aman dari masalah import/cache library lucide-react
const SOCIAL_LINKS = [
  {
    id: "fb",
    name: "Facebook", // FIX: Tambahan nama untuk aria-label (Aksesibilitas)
    href: "https://facebook.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "ig",
    name: "Instagram",
    href: "https://instagram.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "yt",
    name: "YouTube",
    href: "https://youtube.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
        <polygon points="10 15 15 12 10 9" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "tw",
    name: "X (Twitter)",
    href: "https://x.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function FooterSection() {
  return (
    <footer className="bg-[#0A0F1E] pt-15 pb-8">
      <div className="max-w-295 mx-auto px-6">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5">
              {/* FIX: Mengganti text-md menjadi text-base sesuai tailwind standar */}
              <div className="w-9.5 h-9.5 rounded-2xl bg-linear-to-br from-[#0057FF] to-[#00C2FF] flex items-center justify-center font-bold text-white text-base tracking-tight">
                XL
              </div>
              <span className="font-bold text-[17px] text-white">
                XL <span className="text-[#0057FF]">SATU</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mt-3.5 max-w-60">
              Internet Fiber Rumah dan Kuota HP Keluarga dalam Satu Tagihan. Solusi lengkap untuk keluarga modern Indonesia.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold text-white/90 tracking-wide uppercase mb-4">Layanan</h4>
            {/* FIX: Mengubah <div> menjadi <ul> untuk Semantik Web (SEO/A11y) */}
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link href="#paket" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  Paket Internet
                </Link>
              </li>
              <li>
                <Link href="#paket" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  Internet + TV
                </Link>
              </li>
              <li>
                <Link href="#promo" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  Promo
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="text-xs font-bold text-white/90 tracking-wide uppercase mb-4">Informasi</h4>
            {/* FIX: Mengubah <div> menjadi <ul> */}
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link href="#cara-daftar" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  Cara Daftar
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-bold text-white/90 tracking-wide uppercase mb-4">Kontak</h4>
            {/* FIX: Mengubah <div> menjadi <ul> */}
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline"
                >
                  WhatsApp Sales
                </a>
              </li>
              <li>
                <a href="tel:1500817" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  1500 817 (Call Center)
                </a>
              </li>
              <li>
                <a href="mailto:cs@xl.co.id" className="text-sm text-white/50 transition-colors hover:text-white/90 no-underline">
                  cs@xl.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 text-center sm:text-left">
            &copy; 2026 XL SATU. Hak cipta dilindungi undang-undang.
          </p>
          
          {/* Social Media Links */}
          <div className="flex gap-2.5">
            {SOCIAL_LINKS.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // FIX: Menambahkan aria-label agar Screen Reader tahu ini link menuju kemana
                  aria-label={`Kunjungi halaman ${item.name} kami`}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/60 transition-all hover:bg-[#0057FF] hover:border-[#0057FF] hover:text-white"
                >
                  {/* FIX: Menambahkan aria-hidden pada icon karena peran label sudah digantikan oleh aria-label di parent <a> */}
                  <IconComponent aria-hidden="true" className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

      </div>
    </footer>
  )
}