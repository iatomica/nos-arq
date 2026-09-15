import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, MapPin, CalendarBlank, Ruler, CheckCircle } from '@phosphor-icons/react';

export default function ProjectDetailModal() {
  const { activeProjectModal, setActiveProjectModal } = useApp();

  if (!activeProjectModal) return null;

  const project = activeProjectModal;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setActiveProjectModal(null)}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF9F5] rounded-xs shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setActiveProjectModal(null)}
          className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 hover:bg-white text-stone-700 rounded-full shadow-md transition-all"
        >
          <X size={20} />
        </button>

        {/* Hero image of the project */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-stone-200 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#E8D4C8] block mb-1">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Key specs bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F4F0E8] border border-stone-200/70 text-xs">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#A86B4C]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Ubicación</span>
                <span className="font-semibold text-stone-800">{project.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CalendarBlank size={16} className="text-[#A86B4C]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Año</span>
                <span className="font-semibold text-stone-800">{project.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Ruler size={16} className="text-[#A86B4C]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Superficie</span>
                <span className="font-semibold text-stone-800">{project.surface}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#A86B4C]" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Tipología</span>
                <span className="font-semibold text-stone-800">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Description & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900">
                Memoria Conceptual & Neuroarquitectura
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                {project.description}
              </p>
              
              {project.detailImage && (
                <div className="pt-4">
                  <div className="aspect-16/10 rounded-xs overflow-hidden bg-stone-200 shadow-sm">
                    <img 
                      src={project.detailImage} 
                      alt={`Detalle de ${project.title}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] text-stone-500 italic mt-1.5 block">
                    Fotografía de detalle y encuentros de materiales.
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6 md:border-l border-stone-200 md:pl-8">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 mb-3">
                  Materialidad
                </h4>
                <ul className="space-y-2 text-xs text-stone-600">
                  {project.materials?.map((mat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A86B4C] mt-1.5 shrink-0"></span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 mb-3">
                  Fases de Desarrollo
                </h4>
                <div className="space-y-1.5 text-xs text-stone-500">
                  {project.phases?.map((ph, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-stone-400">0{i+1}</span>
                      <span className="text-stone-700">{ph}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
