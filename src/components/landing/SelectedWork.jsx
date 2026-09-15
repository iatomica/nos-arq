import React, { useState } from 'react';
import { PROJECTS } from '../../data/projectsData';
import { useApp } from '../../context/AppContext';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function SelectedWork() {
  const { setActiveProjectModal } = useApp();
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Obra Nueva', 'Reforma Integral', 'Retail & Corporativo'];

  const filteredProjects = filter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(filter) || filter.includes(p.category));

  return (
    <section id="obras" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Header section matching reference photo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C] block mb-2">
            Obras Seleccionadas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 max-w-lg">
            Espacios que inspiran la vida cotidiana.
          </h2>
        </div>

        {/* Filter pills & view all */}
        <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full transition-all ${
                filter === cat
                  ? 'bg-[#1C1A18] text-white font-medium shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4-Card Grid matching the reference layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {filteredProjects.slice(0, 8).map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProjectModal(project)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image container with 3:4 portrait ratio like in photo */}
            <div className="relative aspect-3/4 overflow-hidden rounded-xs bg-stone-200 mb-4 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-xs text-stone-900 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs font-medium flex items-center gap-1">
                  <span>Ver Proyecto</span>
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </div>

            {/* Typography below image */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-900 group-hover:text-[#A86B4C] transition-colors">
                  {project.title}
                </h3>
                <span className="text-[10px] text-stone-400 font-mono">
                  {project.year}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-normal">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
