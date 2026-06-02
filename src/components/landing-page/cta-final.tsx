interface CtaFinalProps {
  onCekArea: () => void;
}

export function CtaFinalSection({ onCekArea }: CtaFinalProps) {
  return (
    <section className="bg-white text-center py-24 px-6">
      <div>
        <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">Mulai Sekarang</div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-[#0A0F1E] leading-tight tracking-tight">Siap Menikmati Internet Fiber<br />untuk <em className="not-italic text-[#0057FF]">Seluruh Keluarga</em>?</h2>
        <p className="text-base sm:text-lg text-[#64748B] mt-4 mb-10 max-w-120 mx-auto">Bergabung bersama ratusan ribu keluarga Indonesia yang sudah menikmati XL SATU.</p>
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <button className="inline-flex items-center gap-1.5 rounded-xl font-semibold text-md cursor-pointer transition-all bg-[#0057FF] text-white px-7 py-3.5 shadow-[0_4px_14px_rgba(0,87,255,0.28)] hover:bg-[#003DB8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,87,255,0.36)]" onClick={onCekArea}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            Cek Area Saya
          </button>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl font-semibold text-md cursor-pointer transition-all border border-[#E2E8F4] bg-white text-[#0A0F1E] px-7 py-3.5 hover:border-[#0057FF] hover:text-[#0057FF] no-underline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Hubungi Sales
          </a>
        </div>
      </div>
    </section>
  );
}