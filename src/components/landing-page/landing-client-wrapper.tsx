"use client";

import { useState, useRef } from "react";
import { PaketKategori, Paket } from "@/app/page";

import { HeroSection } from "./hero";
import { StatsSection } from "./stats-section";
import { FeaturesSection } from "./features-section";
import { PricingSection } from "./pricing";
import { CoverageFormSection } from "./coverage-form";
import { StepsSection } from "./steps";
import { PromoSection } from "./promo";
import { FAQSection } from "./faq";
import { CtaFinalSection } from "./cta-final";
import { StickyCtaMobile } from "./sticky-cta";

interface FAQItem {
  q: string;
  a: string;
}

interface WrapperProps {
  paketData: Record<PaketKategori, Paket[]>;
  faqData: FAQItem[];
}

// Fungsi pembantu diletakkan di luar komponen agar optimal di bawah React Compiler
function formatWA(paket: string | null, alamat: string, nomorWA: string) {
  const p = paket ? `Paket: *${paket}*\n` : "";
  return `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo XL SATU! 👋\n\nSaya ingin mengecek ketersediaan layanan di area saya.\n\n${p}Alamat: ${alamat}\nNomor WA: ${nomorWA}\n\nMohon bantuannya. Terima kasih!`
  )}`;
}

export function LandingClientWrapper({ paketData, faqData }: WrapperProps) {
  const [kategori, setKategori] = useState<PaketKategori>("internet");
  const [selectedPaket, setSelectedPaket] = useState<string | null>(null);
  const [alamat, setAlamat] = useState("");
  const [nomorWA, setNomorWA] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  // FIX: State dan useEffect untuk scroll dihapus karena menyebabkan kebocoran performa
  // (State scroll kini murni hanya ditangani di komponen navigasi.tsx secara mandiri)
  
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handlePilihPaket = (nama: string) => {
    setSelectedPaket(nama);
    scrollToForm();
  };

  const handleSubmit = () => {
    if (!alamat.trim() || !nomorWA.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      window.open(formatWA(selectedPaket, alamat, nomorWA), "_blank");
    }, 800);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setAlamat("");
    setNomorWA("");
  };

  return (
    <>
      <HeroSection onCekArea={scrollToForm} />
      
      <StatsSection />
      
      <FeaturesSection />
      
      <PricingSection 
        paketData={paketData} 
        kategori={kategori} 
        setKategori={setKategori} 
        onPilihPaket={handlePilihPaket} 
      />
      
      <CoverageFormSection 
        formRef={formRef}
        selectedPaket={selectedPaket}
        setSelectedPaket={setSelectedPaket}
        alamat={alamat}
        setAlamat={setAlamat}
        nomorWA={nomorWA}
        setNomorWA={setNomorWA}
        submitted={submitted}
        onSubmit={handleSubmit}
        onReset={handleResetForm}
      />
   
      <StepsSection />
      
      <PromoSection onClaim={scrollToForm} />
      
      <FAQSection faqData={faqData} />
      
      <CtaFinalSection onCekArea={scrollToForm} />
      
      <StickyCtaMobile onCekArea={scrollToForm} />
    </>
  );
}