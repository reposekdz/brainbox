import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import LandingPage from './components/landing/LandingPage';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'landing' | 'auth' | 'dashboard'>('landing');

  const handleLoginSuccess = () => {
    setAppState('dashboard');
  };

  const handleLogout = () => {
    setAppState('landing');
  };

  const handleNavigateToAuth = () => {
    setAppState('auth');
  }
  
  const handleNavigateToLanding = () => {
    setAppState('landing');
  }

  switch (appState) {
    case 'auth':
      return <AuthPage onLoginSuccess={handleLoginSuccess} onBack={handleNavigateToLanding} />;
    case 'dashboard':
      return <Dashboard onLogout={handleLogout} />;
    case 'landing':
    default:
      return <LandingPage onGetStarted={handleNavigateToAuth} />;
  }
};

export default App;