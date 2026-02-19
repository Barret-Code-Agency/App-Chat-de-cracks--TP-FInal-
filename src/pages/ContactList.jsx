import React from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

const ContactList = () => {
    const { contacts, userName } = useChat();

    return (
        <div className="contact-list-page">
            <header className="page-header">
                <h1>Hola, {userName}</h1>
                <p>Selecciona un Crack para chatear</p>
            </header>
            <div className="contacts-grid">
                {contacts.map(c => (
                    <div key={c.PhoneNumber} className="contact-card">
                        <img src={c.avatar} alt={c.name} className="avatar-large" />
                        {/* Información principal */}
                        <h2>{c.name}</h2>
                        <p className="phone-tag">Número Telefónico: {c.PhoneNumber}</p> 
                        <p className="sport-tag">{c.sport} - {c.position}</p>
                        
                        {/* Ficha técnica completa */}
                        <div className="contact-details">
                            <p><strong>Edad:</strong> {c.age} años</p>
                            <p><strong>Lugar de nacimiento:</strong> {c.birthPlace}</p>
                            <p><strong>Logros:</strong> {c.achievements}</p>
                        </div>
                        <Link to={`/chat/${c.PhoneNumber}`} className="chat-button">Abrir Chat</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;