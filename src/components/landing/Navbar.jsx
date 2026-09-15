import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserCircle, ShieldCheck, SignOut, List, X, ArrowUpRight } from '@phosphor-icons/react';

export default function Navbar() {
  const { currentUser, currentView, setCurrentView, setIsAuthModalOpen, logout } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'El Estudio', href: '#estudio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Obras', href: '#obras' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#inicio" 
          onClick={() => setCurrentView('landing')}
          className="flex flex-col group text-left"
        >
          <span className="font-serif text-xl tracking-[0.2em] font-normal text-stone-900 group-hover:text-[#A86B4C] transition-colors uppercase">
            NOS
          </span>
          <span className="text-[9px] tracking-[0.35em] font-semibold text-stone-500 uppercase -mt-1">
            ARQUITECTURA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                if (currentView !== 'landing') setCurrentView('landing');
              }}
              className="text-xs uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-stone-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#A86B4C] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Platform Access */}
        <div className="hidden sm:flex items-center gap-4">
          {currentUser.role !== 'visitor' ? (
            <div className="flex items-center gap-2.5 bg-stone-100/90 py-1.5 px-3 rounded-full border border-stone-200">
              <button
                onClick={() => setCurrentView(currentUser.role === 'admin' ? 'admin' : 'client')}
                className="flex items-center gap-1.5 text-xs font-medium text-stone-800 hover:text-[#A86B4C] transition-colors"
              >
                {currentUser.role === 'admin' ? (
                  <ShieldCheck size={16} className="text-[#A86B4C]" weight="bold" />
                ) : (
                  <UserCircle size={16} className="text-[#A86B4C]" weight="bold" />
                )}
                <span>
                  {currentView === 'landing' ? 'Ir al Panel' : 'Panel Activo'} (
                  {currentUser.role === 'admin' ? 'Admin' : 'Cliente'})
                </span>
                <ArrowUpRight size={13} />
              </button>

              <span className="w-px h-3.5 bg-stone-300"></span>

              <button
                onClick={logout}
                title="Cerrar sesión"
                className="text-stone-400 hover:text-rose-600 transition-colors p-1"
              >
                <SignOut size={15} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-5 py-2.5 border border-[#A86B4C]/80 text-[#A86B4C] hover:bg-[#A86B4C] hover:text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-200 active:scale-[0.98] shadow-xs"
            >
              Área Privada
            </button>
          )}

          {/* Quick Demo Switcher if in platform */}
          {currentView !== 'landing' && (
            <button
              onClick={() => setCurrentView('landing')}
              className="text-xs text-stone-500 hover:text-stone-900 underline underline-offset-4 tracking-wider"
            >
              Ver Web
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-3 py-1.5 border border-[#A86B4C] text-[#A86B4C] text-[11px] font-semibold uppercase tracking-wider rounded-sm"
          >
            {currentUser.role === 'visitor' ? 'Acceso' : 'Panel'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-black focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-stone-200 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (currentView !== 'landing') setCurrentView('landing');
                }}
                className="text-sm uppercase tracking-widest text-stone-700 py-1.5 border-b border-stone-200/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
