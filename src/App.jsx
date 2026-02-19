import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ChatProvider, useChat } from './context/ChatContext.jsx';
import Login from './pages/Login.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ContactList from './pages/ContactList.jsx';
import ChatPage from './pages/ChatPage.jsx';
import './styles/App.css';

// MODAL DE VIDEO
const StatusOverlay = () => {
  const { activeStatus, closeStatus } = useChat();

  if (!activeStatus) return null;

  return (
    <div className="status-overlay" onClick={closeStatus}>
      <div className="status-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-status-btn" onClick={closeStatus}>×</button>
        <video
          src={activeStatus}
          autoPlay
          onEnded={closeStatus}
          className="status-video"
        />
      </div>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedUser = localStorage.getItem('cracks_user');
    return savedUser && savedUser !== 'Usuario';
  });

  // 🔥 sincroniza login / logout automáticamente
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('cracks_user');
      setIsAuthenticated(savedUser && savedUser !== 'Usuario');
    };

    window.addEventListener('storage', checkAuth);
    checkAuth();

    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  if (showSplash) {
    return <LoadingScreen onFinished={() => setShowSplash(false)} />;
  }

  return (
  <Router>
    <ChatProvider> {/* Todo lo que use useChat() DEBE estar aquí dentro */}
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={isAuthenticated ? <ContactList /> : <Navigate to="/login" />} />
          <Route path="/chat/:PhoneNumber" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />} />
        </Routes>
        <StatusOverlay /> 
      </div>
    </ChatProvider>
  </Router>
  );
}

export default App;

