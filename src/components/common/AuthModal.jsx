import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck, UserCircle, LockKey, ArrowRight, Buildings, Sparkle } from '@phosphor-icons/react';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginAs } = useApp();
  const [activeTab, setActiveTab] = useState('admin'); // 'admin' or 'client'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAs(activeTab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FFFFFF] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FBF9F5] p-6 border-b border-stone-200/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-stone-500 uppercase block mb-1">
              Plataforma NOS
            </span>
            <h3 className="font-serif text-2xl font-normal text-stone-900">
              Acceso a la Plataforma
            </h3>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Quick Demo Access banner */}
          <div className="mb-6 p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
              <Sparkle size={16} className="text-[#A86B4C]" weight="fill" />
              <span>Acceso de Demostración Rápido (1 Clic)</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => loginAs('admin')}
                className="px-3 py-2 text-xs font-medium text-[#1C1A18] bg-white border border-stone-300 rounded-lg shadow-sm hover:border-[#A86B4C] hover:bg-stone-50 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <ShieldCheck size={16} className="text-[#A86B4C]" weight="bold" />
                <span>Entrar como <strong>Admin</strong></span>
              </button>
              <button
                type="button"
                onClick={() => loginAs('client')}
                className="px-3 py-2 text-xs font-medium text-[#1C1A18] bg-white border border-stone-300 rounded-lg shadow-sm hover:border-[#A86B4C] hover:bg-stone-50 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <UserCircle size={16} className="text-[#A86B4C]" weight="bold" />
                <span>Entrar como <strong>Cliente</strong></span>
              </button>
            </div>
          </div>

          {/* Role selector tabs */}
          <div className="flex rounded-lg bg-stone-100 p-1 mb-5">
            <button
              type="button"
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'admin'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Equipo Interno (Admin)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('client')}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'client'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Portal del Cliente
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={activeTab === 'admin' ? 'carlos@nos-arquitectura.com' : 'cliente@vivienda-ensanche.es'}
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86B4C]/20 focus:border-[#A86B4C] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86B4C]/20 focus:border-[#A86B4C] transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#1C1A18] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-stone-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Acceder a {activeTab === 'admin' ? 'Panel de Gestión' : 'Mi Proyecto'}</span>
                <ArrowRight size={15} weight="bold" />
              </button>
            </div>
          </form>

          {/* Explanation footer */}
          <p className="mt-5 text-[11px] text-stone-500 text-center leading-relaxed">
            {activeTab === 'admin'
              ? 'El perfil Admin dispone de Tablero Kanban con sprints ágiles, asignación de tareas internas y bandeja CRM de consultas.'
              : 'El perfil Cliente permite visualizar el avance porcentual de tu obra, descargar planos técnicos y acceder a la galería de renders 3D.'}
          </p>
        </div>
      </div>
    </div>
  );
}
