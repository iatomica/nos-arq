import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import ServicesBar from './components/landing/ServicesBar';
import SelectedWork from './components/landing/SelectedWork';
import Philosophy from './components/landing/Philosophy';
import Process from './components/landing/Process';
import Testimonial from './components/landing/Testimonial';
import ContactSection from './components/landing/ContactSection';
import Footer from './components/landing/Footer';
import ProjectDetailModal from './components/landing/ProjectDetailModal';
import AdminDashboard from './components/admin/AdminDashboard';
import ClientPortal from './components/client/ClientPortal';
import AuthModal from './components/common/AuthModal';
import Toast from './components/common/Toast';

function AppContent() {
  const { currentView } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1A18]">
      <Navbar />

      <main className="flex-1">
        {currentView === 'landing' && (
          <>
            <Hero />
            <ServicesBar />
            <SelectedWork />
            <Philosophy />
            <Process />
            <Testimonial />
            <ContactSection />
            <ProjectDetailModal />
          </>
        )}

        {currentView === 'admin' && (
          <AdminDashboard />
        )}

        {currentView === 'client' && (
          <ClientPortal />
        )}
      </main>

      <Footer />
      <AuthModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
