"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        
        {/* Header Section */}
        <div className="text-center">
          <div className="text-[12px] font-bold tracking-widest uppercase text-[#0057FF] mb-3">
            FAQ
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] leading-tight tracking-tight">
            Pertanyaan <em className="not-italic text-[#0057FF]">Umum</em>
          </h2>
        </div>

        {/* Accordion Wrapper */}
        <div className="max-w-180 mx-auto mt-12 bg-white rounded-3xl px-8 py-4 border border-[#E2E8F4] shadow-xs">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#E2E8F4]/50 last:border-0 py-1"
              >
                {/* Bagian Pertanyaan */}
                <AccordionTrigger className="text-[15px] font-medium text-[#0A0F1E] hover:text-[#0057FF] hover:no-underline transition-colors py-4 text-left">
                  {item.q}
                </AccordionTrigger>
                
                {/* Bagian Jawaban */}
                <AccordionContent className="text-[14px] text-[#64748B] leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}