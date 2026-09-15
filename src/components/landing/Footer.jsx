import React from 'react';
import { InstagramLogo, LinkedinLogo, PinterestLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-[#FBF9F5] border-t border-stone-200 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4 columns matching reference photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-stone-200">
          
          {/* Col 1: Studio brand & summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] font-normal text-stone-900 uppercase">
                NOS
              </span>
              <span className="text-[10px] tracking-[0.35em] font-semibold text-stone-500 uppercase -mt-1">
                ARQUITECTURA
              </span>
            </div>

            <p className="text-xs text-stone-600 font-normal leading-relaxed max-w-xs">
              Estudio de arquitectura y neuroarquitectura en Valencia. Creando espacios atemporales con propósito, calidez y rigor constructivo.
            </p>

            <div className="flex items-center gap-4 pt-2 text-stone-600">
              <a 
                href="https://www.instagram.com/nos.arquitectura/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#A86B4C] transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} />
              </a>
              <a 
                href="https://es.pinterest.com/nosarquitectura/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#A86B4C] transition-colors"
                aria-label="Pinterest"
              >
                <PinterestLogo size={18} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#A86B4C] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Studio Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-900">
              Estudio
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li><a href="#estudio" className="hover:text-stone-900 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#filosofia" className="hover:text-stone-900 transition-colors">Neuroarquitectura</a></li>
              <li><a href="mailto:cv@nos-arquitectura.com" className="hover:text-stone-900 transition-colors">Carreras & Empleo</a></li>
              <li><a href="#contacto" className="hover:text-stone-900 transition-colors">Prensa & Noticias</a></li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-900">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li><a href="#servicios" className="hover:text-stone-900 transition-colors">Obra Nueva Unifamiliar</a></li>
              <li><a href="#servicios" className="hover:text-stone-900 transition-colors">Reformas Integrales de Lujo</a></li>
              <li><a href="#servicios" className="hover:text-stone-900 transition-colors">Interiorismo & Materialidad</a></li>
              <li><a href="#servicios" className="hover:text-stone-900 transition-colors">Gestión y Dirección de Obra</a></li>
            </ul>
          </div>

          {/* Col 4: Info & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-900">
              Ubicación
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Calle Pintor Sorolla, 22, 09<br />
              46002 Valencia, España<br />
              <span className="block mt-1 font-medium text-stone-800">nos@nos-arquitectura.com</span>
              <span className="text-stone-500">+34 627 283 053</span>
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <p className="tracking-widest uppercase">
            © {new Date().getFullYear()} NOS ARQUITECTURA S.L. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacidad" className="hover:text-stone-700 transition-colors">Política de Privacidad</a>
            <a href="#cookies" className="hover:text-stone-700 transition-colors">Cookies</a>
            <a href="#aviso-legal" className="hover:text-stone-700 transition-colors">Aviso Legal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
