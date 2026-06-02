// app/page.tsx
import { LandingClientWrapper } from "@/components/landing-page/landing-client-wrapper";

export type PaketKategori = "internet" | "tv";

export interface Paket {
  nama: string;
  kecepatan: string;
  harga: string;
  benefits: string[];
  popular?: boolean;
  warna: string;
}

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
};

const TESTIMONI = [
  {
    nama: "Rina Kusuma",
    kota: "Bekasi",
    paket: "Paket Smart",
    pesan:
      "Sudah 8 bulan pakai XL SATU. Internet di rumah stabil banget, video call kantor nggak pernah putus. Kuota HP-nya juga cukup buat sekeluarga.",
    avatar: "RK",
    bintang: 5,
  },
  {
    nama: "Doni Prasetya",
    kota: "Surabaya",
    paket: "Paket Family",
    pesan:
      "Tadinya langganan 2 provider berbeda. Sekarang cukup satu tagihan. Lebih hemat dan nggak ribet. Proses pemasangannya juga cepat, 2 hari sudah aktif.",
    avatar: "DP",
    bintang: 5,
  },
  {
    nama: "Mega Sari",
    kota: "Bandung",
    paket: "Joy Smart",
    pesan:
      "Anak-anak senang bisa nonton streaming dan main game online tanpa buffering. Android TV Box-nya juga bagus, channelnya banyak.",
    avatar: "MS",
    bintang: 5,
  },
  {
    nama: "Rudi Hartono",
    kota: "Medan",
    paket: "Paket Basic",
    pesan:
      "Harganya terjangkau buat kantong. Yang penting internet stabil dan ada kuota HP. Tim teknisinya juga ramah dan profesional.",
    avatar: "RH",
    bintang: 4,
  },
];

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
];

export default function XLSatuLandingPage() {
  return (
    <div className="bg-[#F8FAFF] text-[#0A0F1E] min-h-screen antialiased selection:bg-[#0057FF]/10">
      <LandingClientWrapper 
        paketData={PAKET} 
        testimoniData={TESTIMONI} 
        faqData={FAQ_DATA} 
      />
    </div>
  );
}