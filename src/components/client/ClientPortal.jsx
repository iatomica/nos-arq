import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  FolderOpen, 
  Image, 
  CheckCircle, 
  Clock, 
  DownloadSimple, 
  Eye, 
  FilePdf, 
  FileText, 
  Compass, 
  Calendar, 
  PhoneCall, 
  EnvelopeSimple, 
  ChatTeardropDots, 
  PaperPlaneTilt,
  X,
  MagnifyingGlassPlus
} from '@phosphor-icons/react';

export default function ClientPortal() {
  const { clientProject, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'documents' | 'renders' | 'diary'
  const [docCategory, setDocCategory] = useState('all');
  const [activeRender, setActiveRender] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [clientQuery, setClientQuery] = useState('');

  const filteredDocs = docCategory === 'all'
    ? clientProject.documents
    : clientProject.documents.filter(d => d.category === docCategory);

  const handleSendQuery = (e) => {
    e.preventDefault();
    showToast('Consulta enviada al equipo de arquitectura asignado. Te responderán a la mayor brevedad.');
    setIsConsultModalOpen(false);
    setClientQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-stone-900 pb-24">
      
      {/* Client Sub-Header */}
      <div className="bg-[#FFFFFF] border-b border-stone-200 px-6 py-6 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C]">
                Portal Exclusivo de Propietario · NOS Arquitectura
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              {clientProject.projectName} · <span className="italic font-light">{clientProject.clientName}</span>
            </h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'overview' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Resumen & Avance
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'documents' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Documentación & Planos ({clientProject.documents.length})
            </button>
            <button
              onClick={() => setActiveTab('renders')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'renders' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Renders 3D & Estancias ({clientProject.renders.length})
            </button>
            <button
              onClick={() => setActiveTab('diary')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'diary' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bitácora de Obra
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        
        {/* ======================= TAB 1: OVERVIEW & MILESTONES ======================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            
            {/* Top Project Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#A86B4C]/10 text-[#A86B4C] rounded">
                    {clientProject.typology}
                  </span>
                  <span className="text-xs text-stone-400">ID: {clientProject.id}</span>
                </div>

                <h2 className="font-serif text-3xl font-normal text-stone-900">
                  {clientProject.currentPhase}
                </h2>

                <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                  Ubicación: <strong>{clientProject.address}</strong> · Superficie total de actuación: <strong>{clientProject.surface}</strong>.
                  Entrega estimada de llaves: <strong>{clientProject.estimatedCompletion}</strong>.
                </p>

                {/* Progress bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-stone-700">Progreso Total de la Obra</span>
                    <span className="text-emerald-700">{clientProject.progressPercent}% Completado</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-emerald-600 h-full rounded-full transition-all duration-700"
                      style={{ width: `${clientProject.progressPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Assigned Architects */}
              <div className="lg:col-span-4 bg-[#FBF9F5] p-5 rounded-lg border border-stone-200 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 block">
                  Tu Equipo Asignado
                </span>

                <div className="space-y-3">
                  {clientProject.assignedTeam.map((arch, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs pb-2 border-b border-stone-200/60 last:border-none">
                      <div>
                        <span className="font-semibold text-stone-900 block">{arch.name}</span>
                        <span className="text-[11px] text-stone-500">{arch.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A86B4C]">
                        <a href={`tel:${arch.phone}`} title="Llamar" className="p-1 hover:bg-stone-200 rounded">
                          <PhoneCall size={16} />
                        </a>
                        <a href={`mailto:${arch.email}`} title="Email" className="p-1 hover:bg-stone-200 rounded">
                          <EnvelopeSimple size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsConsultModalOpen(true)}
                  className="w-full py-2.5 px-4 bg-[#1C1A18] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-stone-800 transition-all flex items-center justify-center gap-2"
                >
                  <ChatTeardropDots size={16} />
                  <span>Consultar al Arquitecto</span>
                </button>
              </div>

            </div>

            {/* Milestones Horizontal Flow */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900">
                Línea de Hitos & Fases de Proyecto
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {clientProject.milestones.map((m) => (
                  <div 
                    key={m.id} 
                    className={`p-4 rounded-lg border transition-all ${
                      m.status === 'completed'
                        ? 'bg-emerald-50/60 border-emerald-200'
                        : m.status === 'active'
                        ? 'bg-white border-[#A86B4C] ring-2 ring-[#A86B4C]/20'
                        : 'bg-stone-50 border-stone-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-stone-400">0{m.id}</span>
                      {m.status === 'completed' ? (
                        <CheckCircle size={16} className="text-emerald-600" weight="fill" />
                      ) : m.status === 'active' ? (
                        <Clock size={16} className="text-[#A86B4C]" weight="fill" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border border-stone-300"></span>
                      )}
                    </div>

                    <h4 className="text-xs font-semibold text-stone-900 leading-snug mb-1">
                      {m.title}
                    </h4>

                    <span className="text-[10px] text-stone-500 font-medium block">
                      {m.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Renders Preview Strip */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900">
                  Renders & Visualización del Espacio
                </h3>
                <button
                  onClick={() => setActiveTab('renders')}
                  className="text-xs text-[#A86B4C] font-semibold hover:underline"
                >
                  Ver todos los renders ({clientProject.renders.length}) →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {clientProject.renders.map((render) => (
                  <div
                    key={render.id}
                    onClick={() => setActiveRender(render)}
                    className="group cursor-pointer bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="aspect-4/3 relative overflow-hidden bg-stone-200">
                      <img
                        src={render.image}
                        alt={render.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <MagnifyingGlassPlus size={24} />
                      </div>
                    </div>
                    <div className="p-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#A86B4C] block">
                        {render.space}
                      </span>
                      <h4 className="text-xs font-semibold text-stone-900 truncate">
                        {render.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ======================= TAB 2: DOCUMENT MANAGEMENT ======================= */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            
            {/* Filter categories */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-2">
                  Categoría:
                </span>
                {['all', 'Planos Técnicos', 'Memorias & Calidades', 'Licencias & Visados', 'Económico & Presupuesto'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setDocCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                      docCategory === cat
                        ? 'bg-[#1C1A18] text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat === 'all' ? 'Todos los Documentos' : cat}
                  </button>
                ))}
              </div>

              <span className="text-xs text-stone-500">
                Todos los planos están visados y actualizados a su última revisión.
              </span>
            </div>

            {/* Document Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white p-5 rounded-xl border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#A86B4C]/10 text-[#A86B4C] rounded">
                        {doc.category}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">
                        {doc.version}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <FilePdf size={28} className="text-rose-600 shrink-0 mt-0.5" weight="duotone" />
                      <div>
                        <h4 className="text-xs font-semibold text-stone-900 leading-snug">
                          {doc.name}
                        </h4>
                        <span className="text-[11px] text-stone-400 block mt-1">
                          {doc.format} · {doc.size} · Emitido: {doc.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {doc.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPreviewDoc(doc)}
                        className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded flex items-center gap-1 transition-colors"
                      >
                        <Eye size={14} />
                        <span>Ver</span>
                      </button>
                      <button
                        onClick={() => showToast(`Descargando ${doc.name}...`)}
                        className="px-2.5 py-1 text-xs font-medium text-white bg-[#1C1A18] hover:bg-stone-800 rounded flex items-center gap-1 transition-colors"
                      >
                        <DownloadSimple size={14} />
                        <span>Descargar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ======================= TAB 3: 3D RENDERS GALLERY ======================= */}
        {activeTab === 'renders' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  Infografía Fotorrealista & Selección Material
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Haz clic en cualquier imagen para abrir el visor ampliado con notas técnicas de los arquitectos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientProject.renders.map((render) => (
                <div
                  key={render.id}
                  onClick={() => setActiveRender(render)}
                  className="group cursor-pointer bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="aspect-16/10 relative overflow-hidden bg-stone-200">
                    <img
                      src={render.image}
                      alt={render.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-semibold">
                      {render.space}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-xl font-normal text-stone-900 group-hover:text-[#A86B4C] transition-colors">
                      {render.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {render.description}
                    </p>
                    <div className="pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                      {render.specs}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================= TAB 4: SITE DIARY ======================= */}
        {activeTab === 'diary' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  Bitácora Semanal de Obra
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Seguimiento fotográfico y anotaciones técnicas redactadas por la dirección facultativa.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {clientProject.siteDiary.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-stone-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A86B4C] block">
                        {entry.date}
                      </span>
                      <h4 className="font-serif text-xl font-normal text-stone-900 mt-0.5">
                        {entry.title}
                      </h4>
                    </div>
                    <span className="text-xs text-stone-500 font-medium">
                      Por: {entry.author}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {entry.content}
                  </p>

                  {entry.photos?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {entry.photos.map((photo, pIdx) => (
                        <div key={pIdx} className="aspect-16/10 rounded-lg overflow-hidden bg-stone-200 shadow-xs">
                          <img
                            src={photo}
                            alt="Fotografía de avance en obra"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Render Lightbox Modal */}
      {activeRender && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveRender(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <img
                src={activeRender.image}
                alt={activeRender.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveRender(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A86B4C]">
                {activeRender.space}
              </span>
              <h3 className="font-serif text-2xl text-stone-900">
                {activeRender.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {activeRender.description}
              </p>
              <div className="pt-3 border-t border-stone-200 text-xs font-mono text-stone-500">
                Especificaciones: {activeRender.specs}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document Preview Modal */}
      {previewDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setPreviewDoc(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl border border-stone-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif text-xl text-stone-900">
                Previsualización de Documento
              </h3>
              <button
                onClick={() => setPreviewDoc(null)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 bg-stone-50 rounded-lg border border-stone-200 text-center space-y-3">
              <FilePdf size={48} className="text-rose-600 mx-auto" weight="duotone" />
              <h4 className="font-semibold text-sm text-stone-900">
                {previewDoc.name}
              </h4>
              <p className="text-xs text-stone-500">
                Documento oficial visado por el Colegio Territorial de Arquitectos de Valencia (CTAV).
              </p>
              <span className="text-xs text-emerald-700 font-medium block">
                Estado: {previewDoc.status}
              </span>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 text-xs text-stone-600 hover:bg-stone-100 rounded-md"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  showToast(`Descargando ${previewDoc.name}...`);
                  setPreviewDoc(null);
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1A18] hover:bg-stone-800 rounded-md"
              >
                Descargar Documento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Direct Architect Consultation Modal */}
      {isConsultModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsConsultModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif text-xl text-stone-900">
                Consulta Directa al Equipo de Arquitectura
              </h3>
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSendQuery} className="space-y-4 text-xs">
              <p className="text-stone-600">
                Tu mensaje será remitido directamente a <strong>Carlos Navarro</strong> y <strong>Elena Soriano</strong> con copia a la dirección de obra.
              </p>

              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  Asunto o Estancia
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Duda sobre acabado de grifería en baño suite"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  Mensaje o Pregunta
                </label>
                <textarea
                  rows={4}
                  required
                  value={clientQuery}
                  onChange={(e) => setClientQuery(e.target.value)}
                  placeholder="Escribe tu consulta aquí..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsConsultModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1C1A18] text-white font-semibold uppercase tracking-wider rounded-md hover:bg-stone-800 flex items-center gap-1.5"
                >
                  <PaperPlaneTilt size={14} />
                  <span>Enviar al Estudio</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
