import React, { useState } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      quote: 'NOS Arquitectura convirtió nuestra visión en un hogar que se siente extraordinario y a la vez natural. El proceso fue inspirador desde el primer boceto hasta la entrega de llaves.',
      author: 'FAMILIA MARTÍNEZ & SERRAT',
      project: 'REFUGIO EN EL MONTSENY, BARCELONA'
    },
    {
      quote: 'El enfoque de neuroarquitectura marcó una diferencia real en nuestra reforma. Vivir en La Coveta nos transmite paz; la luz y la calidez del microcemento son justo lo que soñábamos.',
      author: 'VICENTE & CLARA NAVARRETE',
      project: 'LA COVETA, ALICANTE'
    },
    {
      quote: 'El rigor técnico y la transparencia en el control presupuestario nos permitieron disfrutar de la obra sin ningún estrés. Un equipo de arquitectos verdaderamente excepcional.',
      author: 'DRA. BEATRIZ MIRALLES',
      project: 'VIVIENDA ENSANCHE, VALENCIA'
    }
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#161513] text-[#FBF9F5] py-20 px-6 relative overflow-hidden">
      
      {/* Subtle organic botanical branch background element */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none bg-contain bg-right bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(168, 107, 76, 0.2) 0%, transparent 70%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Quote mark & quote text */}
        <div className="lg:col-span-8 flex items-start gap-6">
          <span className="text-[#A86B4C] font-serif text-6xl lg:text-7xl leading-none select-none font-normal shrink-0">
            “
          </span>
          <div>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-200 leading-relaxed max-w-2xl">
              {testimonials[current].quote}
            </p>
          </div>
        </div>

        {/* Client attribution & pagination dots */}
        <div className="lg:col-span-4 flex flex-col lg:items-end justify-center lg:border-l border-stone-800/80 lg:pl-8">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white block mb-1">
            {testimonials[current].author}
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#A86B4C] block mb-6">
            {testimonials[current].project}
          </span>

          {/* Pagination dots matching photo */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'bg-[#A86B4C] scale-125' : 'bg-stone-600 hover:bg-stone-400'
                }`}
                aria-label={`Testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
