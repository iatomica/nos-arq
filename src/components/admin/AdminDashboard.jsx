import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TEAM_MEMBERS } from '../../data/initialKanbanData';
import { 
  Kanban, 
  EnvelopeSimple, 
  Plus, 
  Trash, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  User, 
  Buildings, 
  Calendar, 
  ChartBar, 
  Eye, 
  ChatCircleText,
  Funnel,
  Sparkle
} from '@phosphor-icons/react';

export default function AdminDashboard() {
  const { 
    tasks, 
    sprints, 
    selectedSprintId, 
    setSelectedSprintId, 
    moveTask, 
    addTask, 
    deleteTask,
    inquiries,
    updateInquiryStatus,
    updateInquiryNotes,
    setCurrentView
  } = useApp();

  const [activeTab, setActiveTab] = useState('kanban'); // 'kanban' | 'crm' | 'projects'
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [inquiryFilter, setInquiryFilter] = useState('all');

  // New task form state
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assigneeName: 'Carlos Navarro',
    priority: 'medium',
    points: 3,
    tag: 'Renders 3D',
    project: 'Vivienda Ensanche',
    dueDate: '2026-09-25'
  });

  const columns = [
    { id: 'backlog', title: 'Backlog General', color: 'border-stone-300' },
    { id: 'todo', title: 'Por Hacer (To Do)', color: 'border-amber-400' },
    { id: 'in_progress', title: 'En Progreso', color: 'border-sky-500' },
    { id: 'review', title: 'En Revisión / Visado', color: 'border-purple-500' },
    { id: 'done', title: 'Completado', color: 'border-emerald-500' }
  ];

  const currentSprint = sprints.find(s => s.id === selectedSprintId) || sprints[0];

  // Filter tasks by active sprint (or all)
  const sprintTasks = selectedSprintId === 'all'
    ? tasks
    : tasks.filter(t => t.sprintId === selectedSprintId || t.status === 'backlog');

  // Agile sprint metrics calculation
  const totalPoints = sprintTasks.reduce((acc, t) => acc + (Number(t.points) || 0), 0);
  const completedPoints = sprintTasks
    .filter(t => t.status === 'done')
    .reduce((acc, t) => acc + (Number(t.points) || 0), 0);
  const sprintProgress = totalPoints > 0 ? Math.round((completedPoints / totalPoints) * 100) : 0;

  const handleCreateTask = (e) => {
    e.preventDefault();
    const member = TEAM_MEMBERS.find(m => m.name === newTask.assigneeName) || TEAM_MEMBERS[0];
    addTask({
      title: newTask.title,
      description: newTask.description,
      assignee: {
        name: member.name,
        role: member.role,
        avatar: member.avatar
      },
      priority: newTask.priority,
      points: Number(newTask.points),
      tag: newTask.tag,
      project: newTask.project,
      dueDate: newTask.dueDate
    });
    setIsNewTaskModalOpen(false);
    setNewTask({
      title: '',
      description: '',
      assigneeName: 'Carlos Navarro',
      priority: 'medium',
      points: 3,
      tag: 'Renders 3D',
      project: 'Vivienda Ensanche',
      dueDate: '2026-09-25'
    });
  };

  const filteredInquiries = inquiryFilter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === inquiryFilter);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-stone-900 pb-20">
      
      {/* Top Admin Sub-Header */}
      <div className="bg-[#FFFFFF] border-b border-stone-200 px-6 py-5 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A86B4C]">
                Panel de Gestión Interna · Estudio NOS
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              Gestión de Operaciones & Agile Studio
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('kanban')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'kanban'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Kanban size={16} weight="bold" />
              <span>Tablero Agile & Sprints</span>
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all relative ${
                activeTab === 'crm'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <EnvelopeSimple size={16} weight="bold" />
              <span>Consultas Clientes (CRM)</span>
              {inquiries.filter(i => i.status === 'new').length > 0 && (
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#A86B4C] text-white rounded-full">
                  {inquiries.filter(i => i.status === 'new').length}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        
        {/* ======================= TAB 1: KANBAN & AGILE SPRINTS ======================= */}
        {activeTab === 'kanban' && (
          <div className="space-y-6">
            
            {/* Sprint Control Bar */}
            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 block mb-1">
                    Sprint Activo
                  </label>
                  <select
                    value={selectedSprintId}
                    onChange={(e) => setSelectedSprintId(e.target.value)}
                    className="px-3 py-1.5 text-xs font-semibold bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:border-[#A86B4C]"
                  >
                    {sprints.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.status.toUpperCase()})
                      </option>
                    ))}
                    <option value="all">Ver Todos los Sprints</option>
                  </select>
                </div>

                <div className="sm:border-l border-stone-200 sm:pl-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 block mb-1">
                    Meta del Sprint
                  </span>
                  <p className="text-xs text-stone-700 font-medium max-w-md">
                    {currentSprint.goal}
                  </p>
                </div>
              </div>

              {/* Sprint Progress & Action */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-28 sm:w-36 bg-stone-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${sprintProgress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-stone-700">
                    {completedPoints}/{totalPoints} pts ({sprintProgress}%)
                  </span>
                </div>

                <button
                  onClick={() => setIsNewTaskModalOpen(true)}
                  className="px-4 py-2 bg-[#1C1A18] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-stone-800 transition-all flex items-center gap-1.5 shrink-0 active:scale-95 shadow-xs"
                >
                  <Plus size={15} weight="bold" />
                  <span>Nueva Tarea</span>
                </button>
              </div>

            </div>

            {/* Kanban Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start overflow-x-auto pb-4">
              {columns.map((col) => {
                const colTasks = sprintTasks.filter(t => t.status === col.id);
                const colPoints = colTasks.reduce((acc, t) => acc + (Number(t.points) || 0), 0);

                return (
                  <div 
                    key={col.id} 
                    className="bg-[#FFFFFF] rounded-xl border border-stone-200/90 shadow-xs flex flex-col min-h-[550px] overflow-hidden"
                  >
                    {/* Column Header */}
                    <div className={`p-3.5 border-b ${col.color} border-t-4 flex items-center justify-between bg-stone-50/60`}>
                      <div>
                        <h3 className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                          {col.title}
                        </h3>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {colTasks.length} tareas · {colPoints} pts
                        </span>
                      </div>
                    </div>

                    {/* Column Cards Container */}
                    <div className="p-3 space-y-3 flex-1 overflow-y-auto max-h-[700px]">
                      {colTasks.length === 0 ? (
                        <div className="h-32 flex items-center justify-center border-2 border-dashed border-stone-200 rounded-lg text-[11px] text-stone-400">
                          Sin tareas
                        </div>
                      ) : (
                        colTasks.map((task) => (
                          <div
                            key={task.id}
                            className="p-3.5 bg-white rounded-lg border border-stone-200 hover:border-stone-400 shadow-xs hover:shadow-md transition-all group"
                          >
                            {/* Project tag and story points */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                                {task.tag}
                              </span>
                              <span className="text-[10px] font-mono font-bold text-[#A86B4C] bg-[#A86B4C]/10 px-1.5 py-0.5 rounded">
                                {task.points} pts
                              </span>
                            </div>

                            {/* Task Title */}
                            <h4 className="text-xs font-semibold text-stone-900 leading-snug mb-1.5">
                              {task.title}
                            </h4>

                            {/* Description */}
                            <p className="text-[11px] text-stone-500 leading-normal mb-3 line-clamp-2">
                              {task.description}
                            </p>

                            {/* Meta & Assignee */}
                            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                              <div className="flex items-center gap-1.5" title={`${task.assignee?.name} (${task.assignee?.role})`}>
                                <div className="w-5 h-5 rounded-full bg-[#1C1A18] text-white flex items-center justify-center text-[9px] font-bold">
                                  {task.assignee?.avatar || 'CN'}
                                </div>
                                <span className="truncate max-w-[85px] text-[10px]">
                                  {task.assignee?.name?.split(' ')[0]}
                                </span>
                              </div>

                              {/* Priority badge */}
                              <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                                task.priority === 'urgent'
                                  ? 'bg-rose-100 text-rose-700'
                                  : task.priority === 'high'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-stone-100 text-stone-600'
                              }`}>
                                {task.priority}
                              </span>
                            </div>

                            {/* Move state action controls */}
                            <div className="mt-3 pt-2 border-t border-stone-100/80 flex items-center justify-between gap-1">
                              <select
                                value={task.status}
                                onChange={(e) => moveTask(task.id, e.target.value)}
                                className="text-[10px] bg-stone-50 border border-stone-200 rounded px-1.5 py-1 text-stone-700 focus:outline-none"
                              >
                                <option value="backlog">Backlog</option>
                                <option value="todo">Por Hacer</option>
                                <option value="in_progress">En Progreso</option>
                                <option value="review">En Revisión</option>
                                <option value="done">Completado</option>
                              </select>

                              <button
                                onClick={() => deleteTask(task.id)}
                                title="Eliminar tarea"
                                className="text-stone-300 hover:text-rose-600 p-1 transition-colors"
                              >
                                <Trash size={13} />
                              </button>
                            </div>

                          </div>
                        ))
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ======================= TAB 2: CRM & CLIENT INQUIRIES ======================= */}
        {activeTab === 'crm' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Filtrar por estado:
                </span>
                {['all', 'new', 'in_contact', 'proposal_sent', 'accepted'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryFilter(st)}
                    className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                      inquiryFilter === st
                        ? 'bg-[#1C1A18] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {st === 'all' && `Todas (${inquiries.length})`}
                    {st === 'new' && `Nuevas (${inquiries.filter(i => i.status === 'new').length})`}
                    {st === 'in_contact' && 'En Contacto'}
                    {st === 'proposal_sent' && 'Presupuesto Enviado'}
                    {st === 'accepted' && 'Aceptadas'}
                  </button>
                ))}
              </div>

              <span className="text-xs text-stone-400">
                Las consultas enviadas por clientes en la web aparecen aquí en tiempo real.
              </span>
            </div>

            {/* Inquiries List & Detail Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* List */}
              <div className="lg:col-span-6 space-y-3">
                {filteredInquiries.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-xl border border-stone-200 text-stone-400 text-xs">
                    No hay consultas con este filtro.
                  </div>
                ) : (
                  filteredInquiries.map((inq) => (
                    <div
                      key={inq.id}
                      onClick={() => setSelectedInquiry(inq)}
                      className={`p-5 bg-white rounded-xl border cursor-pointer transition-all shadow-xs ${
                        selectedInquiry?.id === inq.id
                          ? 'border-[#A86B4C] ring-2 ring-[#A86B4C]/20'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-stone-400">
                          {inq.id} · {new Date(inq.date).toLocaleDateString('es-ES')}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          inq.status === 'new'
                            ? 'bg-rose-100 text-rose-700'
                            : inq.status === 'in_contact'
                            ? 'bg-amber-100 text-amber-700'
                            : inq.status === 'proposal_sent'
                            ? 'bg-sky-100 text-sky-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {inq.status === 'new' ? 'Nueva' : inq.status === 'in_contact' ? 'En Contacto' : inq.status === 'proposal_sent' ? 'Presupuesto Enviado' : 'Aceptada'}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold text-stone-900 mb-1">
                        {inq.name}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-stone-600 mb-2">
                        <span className="font-medium text-[#A86B4C]">{inq.type}</span>
                        <span>·</span>
                        <span>{inq.location}</span>
                      </div>

                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {inq.message}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Inquiry Detail Inspector */}
              <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-stone-200 shadow-xs sticky top-44">
                {selectedInquiry ? (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between pb-4 border-b border-stone-200">
                      <div>
                        <span className="text-[10px] font-mono text-stone-400 block mb-1">
                          {selectedInquiry.id}
                        </span>
                        <h2 className="font-serif text-2xl font-normal text-stone-900">
                          {selectedInquiry.name}
                        </h2>
                        <span className="text-xs text-stone-500">
                          Recibido el {new Date(selectedInquiry.date).toLocaleString('es-ES')}
                        </span>
                      </div>

                      {/* Status Selector */}
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block mb-1">
                          Cambiar Estado
                        </label>
                        <select
                          value={selectedInquiry.status}
                          onChange={(e) => {
                            updateInquiryStatus(selectedInquiry.id, e.target.value);
                            setSelectedInquiry({ ...selectedInquiry, status: e.target.value });
                          }}
                          className="px-3 py-1.5 text-xs font-semibold bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:border-[#A86B4C]"
                        >
                          <option value="new">Nueva</option>
                          <option value="in_contact">En Contacto</option>
                          <option value="proposal_sent">Presupuesto Enviado</option>
                          <option value="accepted">Aceptada / Obra</option>
                          <option value="archived">Archivada</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact details */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                        <span className="text-stone-400 block text-[10px] uppercase">Email</span>
                        <a href={`mailto:${selectedInquiry.email}`} className="font-medium text-[#A86B4C] underline">
                          {selectedInquiry.email}
                        </a>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                        <span className="text-stone-400 block text-[10px] uppercase">Teléfono</span>
                        <a href={`tel:${selectedInquiry.phone}`} className="font-medium text-stone-900">
                          {selectedInquiry.phone || 'No indicado'}
                        </a>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                        <span className="text-stone-400 block text-[10px] uppercase">Tipología & Ubicación</span>
                        <span className="font-medium text-stone-900">{selectedInquiry.type} · {selectedInquiry.location}</span>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                        <span className="text-stone-400 block text-[10px] uppercase">Presupuesto Estimado</span>
                        <span className="font-medium text-stone-900">{selectedInquiry.budget || 'A determinar'}</span>
                      </div>
                    </div>

                    {/* Client Message */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 mb-2">
                        Mensaje del Cliente
                      </h4>
                      <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed italic">
                        "{selectedInquiry.message}"
                      </div>
                    </div>

                    {/* Internal Notes */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 mb-2">
                        Notas Internas del Estudio
                      </h4>
                      <textarea
                        rows={3}
                        defaultValue={selectedInquiry.internalNotes}
                        onBlur={(e) => updateInquiryNotes(selectedInquiry.id, e.target.value)}
                        placeholder="Añadir notas sobre llamadas, reuniones o presupuestos..."
                        className="w-full p-3 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#A86B4C]"
                      />
                      <span className="text-[10px] text-stone-400 italic block mt-1">
                        Se guardan automáticamente al salir del campo.
                      </span>
                    </div>

                  </div>
                ) : (
                  <div className="p-16 text-center text-stone-400 text-xs">
                    Selecciona una consulta de la lista para ver todos sus detalles y notas.
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </div>

      {/* New Task Modal */}
      {isNewTaskModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-xl shadow-2xl border border-stone-200 w-full max-w-lg overflow-hidden">
            <div className="p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
              <h3 className="font-serif text-xl font-normal text-stone-900">
                Nueva Tarea de Gestión Interna
              </h3>
              <button
                onClick={() => setIsNewTaskModalOpen(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  Título de la Tarea *
                </label>
                <input
                  type="text"
                  required
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  placeholder="Ej. Modelado 3D de iluminación o cálculo de transmitancia"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  Descripción & Objetivos
                </label>
                <textarea
                  rows={3}
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  placeholder="Detalles técnicos y requerimientos específicos..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Responsable Asignado
                  </label>
                  <select
                    value={newTask.assigneeName}
                    onChange={(e) => setNewTask({ ...newTask, assigneeName: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                  >
                    {TEAM_MEMBERS.map(m => (
                      <option key={m.id} value={m.name}>
                        {m.name} ({m.role})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Proyecto
                  </label>
                  <select
                    value={newTask.project}
                    onChange={(e) => setNewTask({ ...newTask, project: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                  >
                    <option value="Vivienda Ensanche">Vivienda Ensanche</option>
                    <option value="La Coveta">La Coveta</option>
                    <option value="Casa en Alfinach">Casa en Alfinach</option>
                    <option value="Casa Albir">Casa Albir</option>
                    <option value="Ático en Cirilo">Ático en Cirilo</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Story Points
                  </label>
                  <select
                    value={newTask.points}
                    onChange={(e) => setNewTask({ ...newTask, points: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                  >
                    <option value={1}>1 pt (Muy fácil)</option>
                    <option value={2}>2 pts (Fácil)</option>
                    <option value={3}>3 pts (Medio)</option>
                    <option value={5}>5 pts (Complejo)</option>
                    <option value={8}>8 pts (Muy complejo)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Prioridad
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                  >
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                    <option value="urgent">Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Fase / Etiqueta
                  </label>
                  <input
                    type="text"
                    value={newTask.tag}
                    onChange={(e) => setNewTask({ ...newTask, tag: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-[#A86B4C]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewTaskModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1C1A18] text-white font-semibold uppercase tracking-wider rounded-md hover:bg-stone-800"
                >
                  Crear Tarea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
