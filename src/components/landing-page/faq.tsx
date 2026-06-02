import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  faqData: FAQItem[];
}

export function FAQSection({ faqData }: FAQProps) {
  return (
    <section className="py-20 bg-[#F8FAFF]" id="faq">
      <div className="max-w-295 mx-auto px-6">
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">FAQ</div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">Pertanyaan <em className="not-italic text-[#0057FF]">Umum</em></h2>
        </div>
        <div className="max-w-180 mx-auto mt-12 bg-white rounded-3xl px-8 py-2 border border-[#E2E8F4]">
          {faqData.map((item) => (
            <AccordionItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E2E8F4]/50 last:border-0" onClick={() => setOpen(!open)}>
      <button className="w-full flex items-center justify-between py-4 text-left gap-4 bg-transparent border-none cursor-pointer group">
        <span className="text-[15px] font-medium text-[#0A0F1E] group-hover:text-[#0057FF] transition-colors">{q}</span>
        <span className="shrink-0 w-6 h-6 rounded-full bg-[#0057FF]/5 flex items-center justify-center transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="#0057FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
        <p className="text-[14px] text-[#64748B] leading-relaxed m-0">{a}</p>
      </div>
    </div>
  );
}