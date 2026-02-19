import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react'; // Añadimos React para usar el LoadingScreen
import { ChatProvider, useChat } from './context/ChatContext';
import Login from './pages/Login.jsx';
import ContactList from './pages/ContactList.jsx';
import ChatPage from './pages/ChatPage.jsx';
import './styles/App.css';

// 1. MODAL DE VIDEO (Lo mantenemos como estaba)
const StatusOverlay = () => {
  const { activeStatus, closeStatus } = useChat();
  if (!activeStatus) return null;
  return (
    <div className="status-overlay" onClick={closeStatus}>
      <div className="status-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-status-btn" onClick={closeStatus}>×</button>
        <video src={activeStatus} autoPlay onEnded={closeStatus} className="status-video" />
      </div>
    </div>
  );
};

// 2. PANTALLA DE CARGA (Splash Screen)
const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  React.useEffect(() => {
    const duration = 10000; // 10 Segundos
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setTimeout(onFinished, 500); return 100; }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="loading-screen">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="big-logo-splash" alt="logo" />
      <div className="loading-bar-container">
        <p>Instalando WhatsApp Cracks...</p>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div>
        <div className="percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true); // Estado para la carga
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedUser = localStorage.getItem('cracks_user');
    return savedUser !== null && savedUser !== 'Usuario';
  });

  // Si showSplash es true, mostramos solo la carga
  if (showSplash) {
    return <LoadingScreen onFinished={() => setShowSplash(false)} />;
  }

  // Una vez que termina la carga, muestra la App normal
  return (
    <ChatProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/" element={isAuthenticated ? <ContactList /> : <Navigate to="/login" />} />
            <Route path="/chat/:PhoneNumber" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />} />
          </Routes>
          <StatusOverlay />
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;