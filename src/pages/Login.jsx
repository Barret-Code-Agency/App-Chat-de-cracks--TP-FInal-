import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from "../context/ChatContext";

const Login = ({ onLogin }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { setUserName } = useChat();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (user.trim() !== '' && pass.trim() !== '') {
            setUserName(user);
            onLogin(); 
            navigate('/');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Bienvenido al Chat de Cracks App</h2>
                <input type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};
export default Login;