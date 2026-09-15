import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle, Info, WarningCircle } from '@phosphor-icons/react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const isInfo = toast.type === 'info';
  const isWarning = toast.type === 'warning';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1C1A18] text-[#FBF9F5] px-5 py-3.5 rounded-full shadow-2xl border border-stone-700 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {isInfo ? (
        <Info size={20} className="text-sky-400" weight="fill" />
      ) : isWarning ? (
        <WarningCircle size={20} className="text-amber-400" weight="fill" />
      ) : (
        <CheckCircle size={20} className="text-emerald-400" weight="fill" />
      )}
      <span className="text-sm font-medium tracking-wide">{toast.message}</span>
    </div>
  );
}
