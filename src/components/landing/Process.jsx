import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'DESCUBRIR',
      text: 'Escuchamos, aprendemos y comprendemos tu visión, necesidades y aspiraciones de vida.'
    },
    {
      num: '02',
      title: 'DISEÑAR',
      text: 'Creamos propuestas conceptuales y modelos 3D que equilibran creatividad y funcionalidad.'
    },
    {
      num: '03',
      title: 'PLANIFICAR',
      text: 'Definimos cada detalle técnico, licencias municipales y presupuesto cerrado sin sorpresas.'
    },
    {
      num: '04',
      title: 'CONSTRUIR',
      text: 'Nuestra dirección facultativa cuida la ejecución con rigor, calidades y control milimétrico.'
    },
    {
      num: '05',
      title: 'ENTREGAR',
      text: 'Entregamos un hogar vivo y sereno que amarás hoy y durante los próximos años.'
    }
  ];

  return (
    <section id="proceso" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C] block mb-2">
          Nuestro Proceso
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900">
          Un proceso claro. Resultados excepcionales.
        </h2>
      </div>

      {/* 5-Step Process Timeline matching reference photo */}
      <div className="relative">
        
        {/* Subtle horizontal connecting line on desktop */}
        <div className="hidden lg:block absolute top-[14px] left-8 right-8 h-px bg-stone-200 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col space-y-3 group">
              
              {/* Number and circle indicator */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-normal text-stone-900 group-hover:text-[#A86B4C] transition-colors">
                  {step.num}
                </span>
                <span className="w-2.5 h-2.5 rounded-full border border-stone-400 bg-[#FBF9F5] group-hover:bg-[#A86B4C] group-hover:border-[#A86B4C] transition-all"></span>
              </div>

              {/* Step title */}
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-900 pt-1">
                {step.title}
              </h3>

              {/* Step copy */}
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
