import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 15000;
        const intervalTime = 100;
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(onFinished, 500);
                    return 100;
                }
                return oldProgress + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onFinished]);

    return (
        <div className="loading-screen">
            <div className="loading-content">
                {/* Logo Gigante (puedes usar un SVG o un emoji) */}
                <div className="big-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA Logo" />
                </div>
                
                <div className="loading-bar-container">
                    <p>Instalando WhatsApp Cracks...</p>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <span className="percentage">{Math.round(progress)}%</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;