import { LandingClientWrapper } from "@/components/landing-page/landing-client-wrapper"

export type PaketKategori = "internet" | "tv"

export interface Paket {
  nama: string
  kecepatan: string
  harga: string
  benefits: string[]
  popular?: boolean
  warna: string
}

// Data statis diletakkan di luar komponen agar dioptimalkan penuh oleh React Compiler
const PAKET: Record<PaketKategori, Paket[]> = {
  internet: [
    {
      nama: "Basic",
      kecepatan: "20 Mbps",
      harga: "299.000",
      benefits: [
        "Internet Fiber 20 Mbps",
        "2 Nomor HP XL",
        "10 GB Kuota Bersama",
        "Tanpa Biaya Instalasi*",
      ],
      warna: "#00BFFF",
    },
    {
      nama: "Smart",
      kecepatan: "50 Mbps",
      harga: "449.000",
      benefits: [
        "Internet Fiber 50 Mbps",
        "4 Nomor HP XL",
        "25 GB Kuota Bersama",
        "Tanpa Biaya Instalasi*",
        "Prioritas Teknis 24 Jam",
      ],
      popular: true,
      warna: "#0057FF",
    },
    {
      nama: "Family",
      kecepatan: "100 Mbps",
      harga: "649.000",
      benefits: [
        "Internet Fiber 100 Mbps",
        "6 Nomor HP XL",
        "50 GB Kuota Bersama",
        "Tanpa Biaya Instalasi*",
        "Android TV Box",
        "Prioritas Teknis 24 Jam",
      ],
      warna: "#7C3AED",
    },
  ],
  tv: [
    {
      nama: "Joy Basic",
      kecepatan: "20 Mbps",
      harga: "349.000",
      benefits: [
        "Internet Fiber 20 Mbps",
        "Android TV Box",
        "2 Nomor HP XL",
        "10 GB Kuota Bersama",
      ],
      warna: "#00BFFF",
    },
    {
      nama: "Joy Smart",
      kecepatan: "50 Mbps",
      harga: "549.000",
      benefits: [
        "Internet Fiber 50 Mbps",
        "Android TV Box Premium",
        "4 Nomor HP XL",
        "25 GB Kuota Bersama",
        "Akses 100+ Channel",
      ],
      popular: true,
      warna: "#0057FF",
    },
    {
      nama: "Joy Family",
      kecepatan: "100 Mbps",
      harga: "749.000",
      benefits: [
        "Internet Fiber 100 Mbps",
        "Android TV Box Premium",
        "6 Nomor HP XL",
        "50 GB Kuota Bersama",
        "Akses 150+ Channel",
        "Prioritas Teknis 24 Jam",
      ],
      warna: "#7C3AED",
    },
  ],
}

const FAQ_DATA = [
  {
    q: "Apakah tersedia di area saya?",
    a: "XL SATU saat ini tersedia di lebih dari 100 kota di seluruh Indonesia. Cek ketersediaan area Anda melalui form di bawah atau hubungi sales kami.",
  },
  {
    q: "Berapa lama proses pemasangan?",
    a: "Proses pemasangan umumnya selesai dalam 1–3 hari kerja setelah verifikasi data dan konfirmasi jadwal dengan teknisi kami.",
  },
  {
    q: "Apakah ada biaya instalasi?",
    a: "Tidak ada biaya instalasi untuk paket tertentu. Detailnya akan dijelaskan oleh tim sales saat proses pendaftaran.",
  },
  {
    q: "Apakah ada batas penggunaan internet?",
    a: "Tidak ada. Internet fiber XL SATU bersifat unlimited tanpa batas kuota atau FUP (Fair Usage Policy).",
  },
  {
    q: "Bagaimana jika ingin berhenti berlangganan?",
    a: "Anda dapat menghubungi customer service kami untuk proses terminasi layanan. Perangkat yang dipinjamkan akan dikembalikan kepada kami.",
  },
  {
    q: "Apakah perangkat dipinjamkan?",
    a: "Ya, router dan (untuk paket Joy) Android TV Box dipinjamkan selama masa berlangganan aktif.",
  },
]

export default function XLSatuLandingPage() {
  return (
    // FIX: Menghapus class bg, text, min-h, dan antialiased karena sudah ada di layout.tsx.
    // Hanya menyisakan efek custom untuk selection (highlight text).
    <div className="selection:bg-[#0057FF]/20 selection:text-[#0A0F1E]">
      <LandingClientWrapper 
        paketData={PAKET} 
        faqData={FAQ_DATA} 
      />
    </div>
  )
}