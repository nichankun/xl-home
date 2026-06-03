"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaketKategori, Paket } from "@/app/page"

interface PricingProps {
  paketData: Record<PaketKategori, Paket[]>
  kategori: PaketKategori
  setKategori: (kat: PaketKategori) => void
  onPilihPaket: (nama: string) => void
}

export function PricingSection({ paketData, kategori, setKategori, onPilihPaket }: PricingProps) {
  return (
    <section className="py-20 bg-white" id="paket">
      <div className="max-w-295 mx-auto px-6">
        
        {/* Header Konten */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">
            Pilihan Paket
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">
            Paket Sesuai <em className="not-italic text-[#0057FF]">Kebutuhan Anda</em>
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed mt-3 max-w-130 mx-auto">
            Pilih paket yang paling sesuai. Semua paket sudah termasuk kuota HP untuk keluarga.
          </p>
        </div>

        {/* Tab Navigasi Kategori */}
        <div className="flex justify-center mt-8">
          <Tabs 
            value={kategori} 
            onValueChange={(val) => setKategori(val as PaketKategori)} 
            className="w-fit"
          >
            <TabsList className="bg-[#F8FAFF] border border-[#E2E8F4] rounded-xl p-1 h-auto">
              <TabsTrigger 
                value="internet" 
                className="px-7 py-2.5 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-[#0057FF] data-[state=active]:text-white data-[state=active]:shadow-[0_4px_12px_rgba(0,87,255,0.25)] text-[#64748B]"
              >
                Internet Only
              </TabsTrigger>
              <TabsTrigger 
                value="tv" 
                className="px-7 py-2.5 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-[#0057FF] data-[state=active]:text-white data-[state=active]:shadow-[0_4px_12px_rgba(0,87,255,0.25)] text-[#64748B]"
              >
                Internet + TV
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Grid Kartu Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {paketData[kategori].map((p) => (
            <Card
              key={p.nama}
              className={`rounded-3xl p-8 border-2 relative overflow-hidden transition-all duration-300 flex flex-col shadow-none ${
                p.popular
                  ? "border-[#0057FF] bg-linear-to-b from-[#001A5C] to-[#0057FF] text-white shadow-[0_20px_60px_rgba(0,87,255,0.3)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,87,255,0.4)]"
                  : "border-[#E2E8F4] bg-white text-[#0A0F1E] hover:-translate-y-1.5 hover:border-[#0057FF] hover:shadow-[0_24px_60px_rgba(0,87,255,0.12)]"
              }`}
            >
              {/* Badge Populer */}
              {p.popular && (
                <div className="absolute top-5 right-5 bg-linear-to-r from-[#FBBF24] to-[#F59E0B] text-[#78350F] text-[11px] font-bold px-3 py-1 rounded-full tracking-wider">
                  ⭐ Pilihan Terpopuler
                </div>
              )}

              {/* Judul & Detail Kecepatan */}
              <CardHeader className="p-0 border-none shadow-none bg-transparent">
                <div className={`text-[13px] font-bold tracking-wider uppercase mb-2 ${p.popular ? "text-white/70" : "text-[#64748B]"}`}>
                  {p.nama}
                </div>
                <CardTitle className="font-extrabold text-5xl leading-none border-none p-0 shadow-none bg-transparent">
                  {p.kecepatan.replace(" Mbps", "")}
                  <span className="text-base font-medium"> Mbps</span>
                </CardTitle>
              </CardHeader>

              {/* Pembatas / Divider */}
              <div className={`h-px my-5 ${p.popular ? "bg-white/15" : "bg-[#E2E8F4]"}`} />

              {/* Daftar Keunggulan */}
              <CardContent className="p-0 flex-1 bg-transparent">
                <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
                  {p.benefits.map((b) => (
                    <li className="flex items-start gap-2.5 text-sm" key={b}>
                      <div className={`shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center mt-0.5 ${p.popular ? "bg-white/20" : "bg-[#EEF3FF]"}`}>
                        <Check className={`h-3 w-3 ${p.popular ? "text-white" : "text-[#0057FF]"}`} strokeWidth={2.5} />
                      </div>
                      <span className={p.popular ? "text-white/85" : "text-[#374151]"}>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Footer Harga & Tombol Konversi */}
              <CardFooter className="p-0 mt-6 flex flex-col items-start w-full border-none shadow-none bg-transparent">
                <div>
                  <div className={`text-[12px] ${p.popular ? "text-white/60" : "text-[#64748B]"}`}>Mulai dari</div>
                  <div className="font-extrabold text-3xl">
                    Rp {p.harga}
                    <span className="text-xs font-normal">/bln</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => onPilihPaket(p.nama)}
                  className={`w-full mt-5 h-auto p-3.5 rounded-xl text-md font-semibold border-none transition-all gap-2 ${
                    p.popular
                      ? "bg-white text-[#0057FF] hover:bg-white/90"
                      : "bg-[#F8FAFF] text-[#0057FF] border border-[#E2E8F4] hover:bg-[#0057FF] hover:text-white hover:border-[#0057FF]"
                  }`}
                >
                  Pilih Paket
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}