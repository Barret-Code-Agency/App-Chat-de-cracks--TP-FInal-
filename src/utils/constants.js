
export const formatTime = (date) => {
    return date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
};


export const getBotResponse = (userName, userText) => {
    const respuestas = [
        `¡Qué grande ${userName}! Me gustó eso de: "${userText}". Sos un crack.`,
        "Totalmente de acuerdo contigo, ¡hay que seguir metiéndole!",
        `Interesante lo que decís, ${userName}... lo voy a tener en cuenta.`,
        "¡Jajaja, qué genio! Me hacés reír mucho. Nos vemos pronto.",
        "Ahora justo estoy por empezar a entrenar, ¡hablamos en un rato!",
        `¡Esa es la actitud, ${userName}! La disciplina lo es todo.`,
        `¡Un abrazo grande, ${userName}! Gracias por el aguante.`
    ];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
};