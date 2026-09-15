import React from 'react';

export default function Philosophy() {
  const pillars = [
    { label: 'Diálogo & Escucha Activa', desc: 'El punto de origen de cualquier idea arquitectónica es siempre la conversación honesta con el cliente.' },
    { label: 'Neuroarquitectura & Bienestar', desc: 'Diseñamos la luz, proporciones y acústica para favorecer las emociones positivas y la calma mental.' },
    { label: 'Materiales Honestos y Vivos', desc: 'Maderas, piedras de cantera y cales naturales que envejecen con dignidad y belleza.' },
    { label: 'Precisión y Valor Duradero', desc: 'Rigor constructivo milimétrico que garantiza que cada decisión perdure en el tiempo.' }
  ];

  return (
    <section id="filosofia" className="py-24 px-6 bg-[#F4F0E8]/60 border-y border-stone-200/90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Still life / Materials Photography */}
        <div className="lg:col-span-4">
          <div className="relative aspect-4/5 overflow-hidden rounded-xs shadow-lg bg-stone-300">
            <img
              src="/images/moodboard-materiales.webp"
              alt="Muestrario de materiales y neuroarquitectura NOS"
              className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 text-[11px] text-stone-600 border border-stone-200/60">
              <span className="font-semibold text-stone-900 block">Paleta Sensorial NOS</span>
              <span>Linos, microcemento arena, caliza y roble macizo</span>
            </div>
          </div>
        </div>

        {/* Center & Right Columns: Editorial Quote & Dashed Pillars */}
        <div className="lg:col-span-8 flex flex-col justify-center lg:pl-6">
          
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C] block mb-3">
            Nuestra Filosofía
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-[1.15] mb-6">
            Creemos que el diseño debe ser{' '}
            <span className="italic font-serif font-light text-stone-700">atemporal</span>{' '}
            y <span className="italic font-serif font-light text-stone-700">personal.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            <div className="space-y-4">
              <p className="text-sm text-stone-600 font-normal leading-relaxed">
                Durante años la arquitectura se ha entendido como un objeto extravagante depositado en un lugar, dejando a un lado a quien lo va a habitar.
              </p>
              <p className="text-sm text-stone-600 font-normal leading-relaxed">
                En NOS trabajamos desde el prisma de la <strong>neuroarquitectura</strong> para crear espacios que mejoren las emociones, el confort acústico y el bienestar del día a día.
              </p>
            </div>

            {/* Dash list matching the reference layout */}
            <div className="space-y-4 border-l border-stone-200/80 pl-6">
              {pillars.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-800 mb-1 group-hover:text-[#A86B4C] transition-colors">
                    <span className="text-stone-400">—</span>
                    <span>{item.label}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-normal pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
