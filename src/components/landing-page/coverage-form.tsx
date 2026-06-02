import { RefObject } from "react";

interface FormProps {
  formRef: RefObject<HTMLDivElement | null>;
  selectedPaket: string | null;
  setSelectedPaket: (nama: string | null) => void;
  alamat: string;
  setAlamat: (val: string) => void;
  nomorWA: string;
  setNomorWA: (val: string) => void;
  submitted: boolean;
  onSubmit: () => void;
  onReset: () => void;
}

export function CoverageFormSection({
  formRef,
  selectedPaket,
  setSelectedPaket,
  alamat,
  setAlamat,
  nomorWA,
  setNomorWA,
  submitted,
  onSubmit,
  onReset,
}: FormProps) {
  return (
    <section className="py-20 bg-linear-to-br from-[#F0F5FF] to-[#E8F2FF]" id="cek-area" ref={formRef}>
      <div className="max-w-295 mx-auto px-6">
        <div className="max-w-150 mx-auto bg-white rounded-[28px] p-8 sm:p-11 shadow-[0_24px_80px_rgba(0,87,255,0.1)] border border-[#0057FF]/10">
          {!submitted ? (
            <>
              <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">Cek Ketersediaan</div>
              <h2 className="font-extrabold text-3xl text-[#0A0F1E] mb-2 tracking-tight">Cek Area XL SATU<br />di Lokasi Anda</h2>
              <p className="text-sm text-[#64748B] mb-8 leading-relaxed">Masukkan alamat dan nomor WhatsApp Anda. Tim kami akan segera menghubungi untuk konfirmasi ketersediaan.</p>

              {selectedPaket && (
                <div className="flex items-center gap-2 bg-[#EEF3FF] border border-[#0057FF]/20 rounded-xl px-4 py-3 mb-6 text-sm font-semibold text-[#0057FF]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  Paket dipilih: <strong className="font-bold">{selectedPaket}</strong>
                  <button onClick={() => setSelectedPaket(null)} className="ml-auto bg-none border-none cursor-pointer text-[#94A3B8] text-lg p-0 line-none">x</button>
                </div>
              )}

              <div className="mb-5">
                <label htmlFor="alamat" className="block text-xs font-semibold text-[#0A0F1E] mb-2">Alamat Pemasangan</label>
                <input
                  id="alamat"
                  type="text"
                  placeholder="Jl. Contoh No. 123, Kecamatan, Kota"
                  className="w-full px-4 py-3.5 border-1.5 border-[#E2E8F4] rounded-xl text-sm text-[#0A0F1E] bg-white transition-all outline-none focus:border-[#0057FF] focus:shadow-[0_0_0_3px_rgba(0,87,255,0.08)] placeholder:text-[#CBD5E1]"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="wa" className="block text-xs font-semibold text-[#0A0F1E] mb-2">Nomor WhatsApp</label>
                <input
                  id="wa"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3.5 border-1.5 border-[#E2E8F4] rounded-xl text-sm text-[#0A0F1E] bg-white transition-all outline-none focus:border-[#0057FF] focus:shadow-[0_0_0_3px_rgba(0,87,255,0.08)] placeholder:text-[#CBD5E1]"
                  value={nomorWA}
                  onChange={(e) => setNomorWA(e.target.value)}
                />
              </div>
              <button
                className="w-full p-3.5 rounded-xl bg-linear-to-r from-[#0057FF] to-[#0099FF] text-white text-base font-bold border-none cursor-pointer transition-all shadow-[0_8px_24px_rgba(0,87,255,0.3)] flex items-center justify-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,87,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                onClick={onSubmit}
                disabled={!alamat.trim() || !nomorWA.trim()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Cek Area Sekarang via WhatsApp
              </button>
              <p className="text-center text-[12px] text-[#94A3B8] mt-3">🔒 Data Anda aman dan tidak akan disalahgunakan.</p>
            </>
          ) : (
            <div className="text-center py-5">
              <div className="w-16 h-16 rounded-full bg-[#D1FAE5] flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
              <h3 className="text-[22px] font-extrabold text-[#0A0F1E] mb-2 tracking-tight">Berhasil!</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">Anda akan diarahkan ke WhatsApp. Tim sales kami akan segera membantu Anda.</p>
              <button className="inline-flex items-center gap-1.5 rounded-xl font-semibold text-sm cursor-pointer transition-all bg-[#0057FF] text-white px-5 py-2.5 shadow-[0_4px_14px_rgba(0,87,255,0.28)] hover:bg-[#003DB8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,87,255,0.36)] mx-auto mt-6" onClick={onReset}>
                Cek Area Lain
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}