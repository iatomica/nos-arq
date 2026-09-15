import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PaperPlaneTilt, CheckCircle, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

export default function ContactSection() {
  const { submitInquiry } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Reforma Integral',
    location: 'Valencia',
    surface: '',
    budget: '150.000€ - 300.000€',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitInquiry(formData);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Editorial Studio Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C] block">
            Creemos Juntos
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Cuéntanos tu proyecto y demos vida a tu espacio.
          </h2>

          <p className="text-sm text-stone-600 font-normal leading-relaxed">
            Cada proyecto comienza con una conversación. Estaremos encantados de recibirte en nuestro estudio de Valencia o coordinar una primera videollamada para estudiar la viabilidad de tu idea.
          </p>

          <div className="pt-6 space-y-4 border-t border-stone-200">
            <div className="flex items-start gap-3 text-xs text-stone-700">
              <MapPin size={18} className="text-[#A86B4C] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block">Estudio Central Valencia</span>
                <span>Calle Pintor Sorolla, 22, 09 · 46002 Valencia, España</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-700">
              <EnvelopeSimple size={18} className="text-[#A86B4C] shrink-0" />
              <a href="mailto:nos@nos-arquitectura.com" className="hover:text-[#A86B4C] transition-colors">
                nos@nos-arquitectura.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-700">
              <Phone size={18} className="text-[#A86B4C] shrink-0" />
              <span>+34 627 283 053 · +34 665 335 398</span>
            </div>
          </div>

          <div className="p-4 bg-stone-100/80 rounded-sm border border-stone-200/80 text-[11px] text-stone-600">
            <strong>¿Quieres formar parte del equipo?</strong> Envía tu portafolio y CV a{' '}
            <a href="mailto:cv@nos-arquitectura.com" className="underline hover:text-[#A86B4C]">
              cv@nos-arquitectura.com
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-10 rounded-xs shadow-md border border-stone-200">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle size={36} weight="fill" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-stone-900">
                ¡Gracias por confiar en NOS Arquitectura!
              </h3>
              <p className="text-sm text-stone-600 max-w-md leading-relaxed">
                Hemos recibido tu solicitud correctamente. El arquitecto director del área correspondiente revisará los detalles y te responderá en un plazo máximo de 24 horas laborables.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 border border-stone-300 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:bg-stone-50 transition-colors rounded-xs"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-stone-800 mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Ana Beltrán"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-800 mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ana@ejemplo.es"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-stone-800 mb-1.5">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-800 mb-1.5">
                    Tipología del Proyecto *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all"
                  >
                    <option value="Reforma Integral">Reforma Integral de Vivienda</option>
                    <option value="Obra Nueva Unifamiliar">Obra Nueva Unifamiliar</option>
                    <option value="Interiorismo & Neuroarquitectura">Interiorismo & Neuroarquitectura</option>
                    <option value="Retail & Corporativo">Retail & Espacios Corporativos</option>
                    <option value="Hospitality / Hotelería">Hospitality / Hotelería</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-stone-800 mb-1.5">
                    Ubicación Aproximada
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Ej. Valencia, Alicante, Madrid..."
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-800 mb-1.5">
                    Presupuesto Estimado
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all"
                  >
                    <option value="80.000€ - 150.000€">80.000€ - 150.000€</option>
                    <option value="150.000€ - 300.000€">150.000€ - 300.000€</option>
                    <option value="300.000€ - 600.000€">300.000€ - 600.000€</option>
                    <option value="Más de 600.000€">Más de 600.000€</option>
                    <option value="A determinar con el estudio">A determinar con el estudio</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-800 mb-1.5">
                  Cuéntanos sobre tu espacio e intenciones *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe qué sensaciones buscas en tu futuro espacio, metros aproximados, plazos o cualquier detalle que consideres importante..."
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xs focus:bg-white focus:outline-none focus:border-[#A86B4C] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#1C1A18] text-[#FBF9F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-stone-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <PaperPlaneTilt size={16} weight="bold" />
                  <span>Enviar Consulta al Estudio</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
