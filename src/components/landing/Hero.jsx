import React from 'react';
import { ArrowRight, Compass, Sparkle } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[calc(100dvh-5rem)] flex items-center pt-8 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-5 flex flex-col justify-center z-10">
          
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-[#A86B4C]"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C]">
              Estudio en Valencia · Neuroarquitectura
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-stone-900 mb-6">
            Arquitectura.<br />
            Creada con{' '}
            <span className="italic font-serif font-light text-stone-700 pb-1 inline-block">
              Propósito.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-md mb-8">
            En NOS Arquitectura entendemos el diseño como bienestar esencial. Creamos espacios cálidos y habitables configurados desde la honestidad material y la emoción humana.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#obras"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1C1A18] text-[#FBF9F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-stone-800 transition-all duration-200 active:scale-[0.98] shadow-sm group"
            >
              <span>Explorar Obras</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#filosofia"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 text-stone-800 hover:border-stone-900 text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-all duration-200"
            >
              <span>Nuestra Filosofía</span>
            </a>
          </div>

          {/* Location & Accents */}
          <div className="mt-12 pt-6 border-t border-stone-200/80 flex items-center gap-8 text-xs text-stone-500">
            <div>
              <span className="block font-semibold text-stone-800">Valencia · España</span>
              <span className="text-[11px]">Calle Pintor Sorolla 22</span>
            </div>
            <div className="w-px h-6 bg-stone-300"></div>
            <div>
              <span className="block font-semibold text-stone-800">Proyectos 2026</span>
              <span className="text-[11px]">Nacional & Internacional</span>
            </div>
          </div>

        </div>

        {/* Right Column: Architectural Photography Frame */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-16/12 rounded-xs overflow-hidden shadow-2xl bg-stone-200 group">
            <img
              src="/images/hero-montseny.webp"
              alt="Refugio en el Montseny por NOS Arquitectura"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle Gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            
            {/* Floating Project Badge */}
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 bg-[#FBF9F5]/95 backdrop-blur-md px-4 py-2.5 rounded-xs border border-stone-200 shadow-md">
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A86B4C] block">
                Obra Destacada
              </span>
              <span className="font-serif text-sm sm:text-base font-normal text-stone-900">
                Refugio en el Montseny · Barcelona
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
