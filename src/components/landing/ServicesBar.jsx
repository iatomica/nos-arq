import React from 'react';
import { SquareSplitHorizontal, Cube, CircleNotch, Compass } from '@phosphor-icons/react';

export default function ServicesBar() {
  const services = [
    {
      icon: SquareSplitHorizontal,
      title: 'ARQUITECTURA',
      description: 'Diseño arquitectónico contemporáneo y a medida, arraigado al entorno y a quien lo habita.'
    },
    {
      icon: Cube,
      title: 'DISEÑO & CONSTRUCCIÓN',
      description: 'Proceso integral continuo: desde el primer boceto conceptual hasta la última entrega de llaves.'
    },
    {
      icon: CircleNotch,
      title: 'INTERIORISMO',
      description: 'Atmósferas serenas a través de la neuroarquitectura, materiales vivos y luz natural.'
    },
    {
      icon: Compass,
      title: 'DIRECCIÓN DE OBRA',
      description: 'Planificación rigurosa, presupuestos transparentes y control de ejecución milimétrico.'
    }
  ];

  return (
    <section id="servicios" className="border-y border-stone-200/90 bg-[#F4F0E8]/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
        
        {/* Left vertical indicator label matching reference photo */}
        <div className="flex items-center gap-3 shrink-0 lg:rotate-[-90deg] lg:origin-center lg:-ml-6">
          <span className="w-6 h-px bg-[#A86B4C]"></span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C] whitespace-nowrap">
            Qué Hacemos
          </span>
        </div>

        {/* 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col space-y-2.5 group">
                <div className="text-[#A86B4C] mb-1 group-hover:scale-110 transition-transform origin-left">
                  <Icon size={26} weight="light" />
                </div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
