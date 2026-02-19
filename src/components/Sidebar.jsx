import React from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

const Sidebar = () => {
  const { contacts, userName, logout } = useChat();

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div className="user-avatar-container">
          {/* Ícono de usuario en lugar de foto */}
          <span>👤</span>
        </div>
        <h2 className="user-name">{userName}</h2>
      </header>

      <nav className="contact-list">
        {contacts.map((contact) => (
          <Link key={contact.PhoneNumber} to={`/chat/${contact.PhoneNumber}`} className="contact-link">
            <img src={contact.avatar} alt={contact.name} className="avatar" />
            <div>
              <strong>{contact.name}</strong>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'gray' }}>{contact.lastMsg}</p>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;