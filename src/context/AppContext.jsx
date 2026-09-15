import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TASKS, INITIAL_SPRINTS } from '../data/initialKanbanData';
import { INITIAL_INQUIRIES } from '../data/initialInquiriesData';
import { CLIENT_PROJECT } from '../data/clientProjectData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Authentication & View
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('nos_user');
    return saved ? JSON.parse(saved) : { role: 'visitor', name: 'Visitante' };
  });

  const [currentView, setCurrentView] = useState(() => {
    const savedRole = localStorage.getItem('nos_view');
    return savedRole || 'landing';
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Kanban & Sprints
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('nos_kanban_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  const [sprints, setSprints] = useState(() => {
    const saved = localStorage.getItem('nos_sprints');
    return saved ? JSON.parse(saved) : INITIAL_SPRINTS;
  });

  const [selectedSprintId, setSelectedSprintId] = useState('sprint-14');

  // Client Inquiries CRM
  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('nos_inquiries');
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  // Modals for viewer
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeRenderModal, setActiveRenderModal] = useState(null);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('nos_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('nos_view', currentView);
  }, [currentView]);

  useEffect(() => {
    localStorage.setItem('nos_kanban_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('nos_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const loginAs = (role) => {
    if (role === 'admin') {
      const user = {
        role: 'admin',
        name: 'Carlos Navarro',
        email: 'carlos@nos-arquitectura.com',
        title: 'Director de Estudio / Socio'
      };
      setCurrentUser(user);
      setCurrentView('admin');
      showToast('Sesión iniciada como Administrador de NOS Arquitectura');
    } else if (role === 'client') {
      const user = {
        role: 'client',
        name: 'Alejandro Gómez',
        email: 'alejandro.gomez@gmail.com',
        title: 'Propietario · Vivienda Ensanche'
      };
      setCurrentUser(user);
      setCurrentView('client');
      showToast('Bienvenido a tu Espacio Cliente · Vivienda Ensanche');
    } else {
      setCurrentUser({ role: 'visitor', name: 'Visitante' });
      setCurrentView('landing');
    }
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setCurrentUser({ role: 'visitor', name: 'Visitante' });
    setCurrentView('landing');
    showToast('Sesión cerrada');
  };

  // Kanban actions
  const moveTask = (taskId, newStatus) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    }));
    showToast(`Tarea actualizada a: ${formatStatus(newStatus)}`, 'info');
  };

  const addTask = (newTaskData) => {
    const newTask = {
      id: `TASK-${Math.floor(100 + Math.random() * 900)}`,
      sprintId: selectedSprintId,
      status: 'todo',
      ...newTaskData
    };
    setTasks(prev => [newTask, ...prev]);
    showToast('Nueva tarea añadida al tablero');
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    showToast('Tarea eliminada', 'info');
  };

  // CRM Inquiries actions
  const submitInquiry = (inquiryData) => {
    const newInquiry = {
      id: `INQ-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString(),
      status: 'new',
      assignedArchitect: 'Carlos Navarro',
      internalNotes: 'Contacto recibido vía web pública. Pendiente de primera llamada.',
      ...inquiryData
    };
    setInquiries(prev => [newInquiry, ...prev]);
    showToast('Consulta enviada con éxito. El equipo de NOS contactará en menos de 24h.');
    return newInquiry;
  };

  const updateInquiryStatus = (inquiryId, newStatus) => {
    setInquiries(prev => prev.map(inq => {
      if (inq.id === inquiryId) {
        return { ...inq, status: newStatus };
      }
      return inq;
    }));
    showToast(`Estado de consulta actualizado: ${newStatus}`);
  };

  const updateInquiryNotes = (inquiryId, notes) => {
    setInquiries(prev => prev.map(inq => {
      if (inq.id === inquiryId) {
        return { ...inq, internalNotes: notes };
      }
      return inq;
    }));
    showToast('Notas de la consulta guardadas');
  };

  function formatStatus(status) {
    const map = {
      backlog: 'Backlog',
      todo: 'Por Hacer',
      in_progress: 'En Progreso',
      review: 'En Revisión',
      done: 'Completado'
    };
    return map[status] || status;
  }

  return (
    <AppContext.Provider
      value={{
        currentUser,
        currentView,
        setCurrentView,
        isAuthModalOpen,
        setIsAuthModalOpen,
        loginAs,
        logout,
        toast,
        showToast,
        tasks,
        sprints,
        selectedSprintId,
        setSelectedSprintId,
        moveTask,
        addTask,
        deleteTask,
        inquiries,
        submitInquiry,
        updateInquiryStatus,
        updateInquiryNotes,
        activeProjectModal,
        setActiveProjectModal,
        activeRenderModal,
        setActiveRenderModal,
        clientProject: CLIENT_PROJECT
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
