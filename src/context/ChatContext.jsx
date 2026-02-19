import React, { createContext, useState, useContext, useEffect } from 'react';
import { formatTime, getBotResponse } from '../utils/constants';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [userName, setUserName] = useState(() => {
        return localStorage.getItem('cracks_user') || 'Usuario';
    });
    const [activeStatus, setActiveStatus] = useState(null); 
    const openStatus = (videoUrl) => setActiveStatus(videoUrl);
    const closeStatus = () => setActiveStatus(null);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('cracks_messages');
        return saved ? JSON.parse(saved) : {};
    });

    const [isTyping, setIsTyping] = useState(null);

    useEffect(() => {
        localStorage.setItem('cracks_user', userName);
    }, [userName]);

    useEffect(() => {
        localStorage.setItem('cracks_messages', JSON.stringify(messages));
    }, [messages]);

    const logout = () => {
        localStorage.removeItem('cracks_user');
        localStorage.removeItem('cracks_messages');
        window.location.reload(); 
    };

    const [contacts] = useState([
        {
            PhoneNumber: '1-888-326-5430',
            name: 'Michael Jordan',
            statusVideo: '/statusVideo/Jordan.mp4',
            age: 63,
            birthPlace: 'Brooklyn, Nueva York, EE. UU.',
            sport: 'Básquetbol',
            position: 'Escolta',
            achievements: '6 anillos de la NBA, 5 MVP de la temporada, 2 oros olímpicos.',
            lastMsg: 'Air MJ 23',
            avatar: 'https://ansel.frgimages.com/chicago-bulls-michael-jordan-autographed-framed-black-pinstripes-authentic-mitchell-and-ness-jersey-beckett-bas-number-ae03236_ss2_p-203316139+pv-1+u-zdcwqbxqshqbzgbpgvny+v-hwkuimeffywkyoxzqhom.jpg?_hv=2&w=600'
        },
        {
            PhoneNumber: '1-848-346-1538',
            name: 'Lionel Messi',
            statusVideo: '/statusVideo/Messi.mp4',
            age: 38,
            birthPlace: 'Rosario, Santa Fe, Argentina',
            sport: 'Fútbol',
            position: 'Delantero',
            achievements: '8 Balones de Oro, 7 Botas de  Oro, Campeón del Mundo 2022, 4 Champions League.',
            lastMsg: 'Segundo Francia',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZ_BWaK6Cz-aRrZjKLYLbLCovKyvZtseWDA&s'
        },
        {
            PhoneNumber: '1-178-578-4458',
            name: 'Cristiano Ronaldo',
            statusVideo: '/statusVideo/Ronaldo.mp4',
            age: 41,
            birthPlace: 'Funchal, Madeira, Portugal',
            sport: 'Fútbol',
            position: 'Extremo / Delantero',
            achievements: '5 Balones de Oro, 5 Champions League, 1 Eurocopa 2016.',
            lastMsg: 'Messirve',
            avatar: 'https://cdn-img.zerozero.pt/img/jogadores/new/15/79/1579_cristiano_ronaldo_20251228003106.png'
        },
        {
            PhoneNumber: '1-548-568-1249',
            name: 'Manu Ginóbili',
            statusVideo: '/statusVideo/Ginóbili.mp4',
            age: 48,
            birthPlace: 'Bahía Blanca, Argentina',
            sport: 'Básquetbol',
            position: 'Escolta',
            achievements: '4 anillos de la NBA, Oro Olímpico Atenas 2004, 2 veces All Star, Miembro del Hall of Fame.',
            lastMsg: 'Estudiando en la UTN',
            avatar: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/x6oquuggilbah4eybjmd'
        },
        {
            PhoneNumber: '1-321-471-3281',
            name: 'LeBron James',
            statusVideo: '/statusVideo/James.mp4',
            age: 41,
            birthPlace: 'Akron, Ohio, EE. UU.',
            sport: 'Básquetbol',
            position: 'Alero',
            achievements: '4 anillos de la NBA, Máximo anotador histórico de la NBA, 4 MVP.',
            lastMsg: 'King stuff only',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpoLvIpjCJo4HZA37qpM38eeGMJK5gJS6RQ&s'
        },
        {
            PhoneNumber: '1-987-306-1234',
            name: 'Victor Wembanyama',
            statusVideo: '/statusVideo/Wemby.mp4',
            age: 22,
            birthPlace: 'Le Chesnay, Francia',
            sport: 'Básquetbol',
            position: 'Ala-Pívot',
            achievements: 'Rookie del Año 2024, #1 del Draft NBA, Medalla de Plata Olímpica.',
            lastMsg: 'Soy muy alto jaja',
            avatar: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/rwxvxpegyzfkhjnnleq7'
        },
        {
            PhoneNumber: '1-876-147-4501',
            name: 'Usain Boldt',
            statusVideo: '/statusVideo/Bolt.mp4',
            age: 39,
            birthPlace: 'Sherwood, Jamaica',
            sport: 'Atletismo',
            position: 'Corredor',
            achievements: 'Máximo récord mundial de 100m, 200m, 4x100m, 4x400m. 9 medalas de oro. 11 undiales de atletismo.',
            lastMsg: 'El Rayo',
            avatar: 'https://hips.hearstapps.com/hmg-prod/images/jamaicas-usain-bolt-celebrates-winning-the-mens-200m-final-news-photo-89982567-1566294664.jpg?crop=0.515xw:1.00xh;0,0&resize=1200:*'
        },
        {
            PhoneNumber: '1-999-126-1422',
            name: 'Lewis Hamilton',
            statusVideo: '/statusVideo/Hamilton.mp4',
            age: 41,
            birthPlace: 'Le Chesnay, Francia',
            sport: 'Automovilismo',
            position: 'Piloto Formula 1',
            achievements: '7 títulos mundiales de Fórmula 1, 105 victorias, 202 Podios, 104 Poles, 68 vueltas rapidas, 518.5 puntos.',
            lastMsg: 'The GOAT',
            avatar: 'https://m.media-amazon.com/images/I/4146GC90wFL._SL500_.jpg'
        }
    ]);

    useEffect(() => {
        if (userName !== 'Usuario') {
            setMessages({

                '1-888-326-5430': [
                    {
                        id: 1,
                        text: `¡Hola ${userName}! ¿Viste el documental Last Dance?`,
                        author: "Michael Jordan",
                        time: "10:00"
                    },
                    {
                        id: 2,
                        text: "Sí, Mike; es increíble la mentalidad que tenías.",
                        author: userName,
                        time: "10:05"
                    },
                    {
                        id: 3,
                        text: "¡Gracias! El camino al éxito es solitario, pero vale la pena. ¿Estas listo para triunfar?",
                        author: "Michael Jordan",
                        time: "10:06"
                    }
                ],

                '1-848-346-1538': [
                    {
                        id: 1,
                        text: `¡Hola ${userName}! Todo bien por Miami. ¿Sale ese asado el fin de semana?`,
                        author: "Lionel Messi",
                        time: "11:30"
                    },
                    {
                        id: 2,
                        text: "¡Hola Leo! Obvio, yo llevo los cortes. ¿A qué hora nos vemos?",
                        author: userName,
                        time: "11:32"
                    },
                    {
                        id: 3,
                        text: "Dale, traé lo que quieras que acá prendemos el fuego temprano. Traete a la familia también.",
                        author: "Lionel Messi",
                        time: "11:35"
                    },
                    {
                        id: 4,
                        text: "¡Buenísimo! Ahí estaremos. ¿Hace falta que lleve algo para tomar?",
                        author: userName,
                        time: "11:36"
                    }
                ],

                '1-178-578-4458': [
                    {
                        id: 1,
                        text: `¡El trabajo duro siempre vence al talento, ${userName}! ¿Ya entrenaste hoy?`,
                        author: "Cristiano Ronaldo",
                        time: "08:00"
                    },
                    {
                        id: 2,
                        text: "Todavía no Cris, ¡me acabas de motivar!",
                        author: userName,
                        time: "08:05"
                    },
                    {
                        id: 3,
                        text: "¡Muy bien! Sin excusas. Recordá: la disciplina es la clave del éxito. SIUUUM.",
                        author: "Cristiano Ronaldo",
                        time: "08:07"
                    },
                    {
                        id: 4,
                        text: "¡Mañana te cuento cómo me fue en el gimnasio!",
                        author: userName,
                        time: "08:10"
                    }
                ],

                '1-548-568-1249': [
                    {
                        id: 1,
                        text: `¡Hola ${userName}! ¿Viste el pase que metí ayer? ¡Casi como en los viejos tiempos en San Antonio!`,
                        author: "Manu Ginóbili",
                        time: "14:20"
                    },
                    {
                        id: 2,
                        text: "¡Hola Manu! Sí, lo vi. ¡Sos un genio, la vigencia que tenés es increíble!",
                        author: userName,
                        time: "14:22"
                    },
                    {
                        id: 3,
                        text: "Jaja, gracias. Se hace lo que se puede. Hay que seguir enseñándole a los pibes cómo se juega en equipo. ¿Vos cómo venís con el entrenamiento?",
                        author: "Manu Ginóbili",
                        time: "14:25"
                    },
                    {
                        id: 4,
                        text: "Tratando de imitar tu Eurostep, pero casi me doblo un tobillo jaja. ¡Abrazo, ídolo!",
                        author: userName,
                        time: "14:27"
                    }
                ],

                '1-321-471-3281': [
                    {
                        id: 1,
                        text: `¡Ey ${userName}! "King stuff only". Estamos concentrados al 100% para los Playoffs. ¿Viste el partido de anoche?`,
                        author: "LeBron James",
                        time: "21:00"
                    },
                    {
                        id: 2,
                        text: "¡Hola King! Sí, lo vi. Esa volcada que hiciste no tiene sentido para alguien de tu edad. ¡Sos de otro planeta!",
                        author: userName,
                        time: "21:05"
                    },
                    {
                        id: 3,
                        text: "Jaja, trato de cuidar mi cuerpo cada día, esa es la clave. La disciplina no descansa. ¡A por el quinto anillo!",
                        author: "LeBron James",
                        time: "21:08"
                    },
                    {
                        id: 4,
                        text: "¡Sin dudas! Si seguís así, algun día serás como Manu. ¡Suerte en las finales!",
                        author: userName,
                        time: "21:10"
                    }
                ],

                '1-987-306-1234': [
                    {
                        id: 1,
                        text: `¡Hola ${userName}! Es increíble lo alto que se ve todo desde aquí arriba jaja. ¿Cómo va todo por allá abajo?`,
                        author: "Victor Wembanyama",
                        time: "16:00"
                    },
                    {
                        id: 2,
                        text: "¡Hola Wemby! ¡Qué locura debe ser medir 2,24! Acá todo bien, disfrutando de verte jugar, ¡sos un unicornio!",
                        author: userName,
                        time: "16:02"
                    },
                    {
                        id: 3,
                        text: "Jaja, ¡gracias! Intento aprender algo nuevo cada día. La NBA es un desafío gigante, pero estoy listo. ¿Crees que ganaremos el próximo partido?",
                        author: "Victor Wembanyama",
                        time: "16:05"
                    },
                    {
                        id: 4,
                        text: "Si jugás como el otro día, no tengo dudas. ¡Seguí metiendo esos triples imposibles! Suerte, crack.",
                        author: userName,
                        time: "16:07"
                    }
                ],

                '1-876-147-4501': [
                    {
                        id: 1,
                        text: `¡Ey ${userName}! ¿Una carrerita rápida? Te doy 50 metros de ventaja y te gano igual jaja.`,
                        author: "Usain Bolt",
                        time: "13:00"
                    },
                    {
                        id: 2,
                        text: "¡Hola Usain! Ni con 100 metros te gano, sos un rayo. ¿Cómo va esa vida después del retiro?",
                        author: userName,
                        time: "13:02"
                    },
                    {
                        id: 3,
                        text: "Todo bien, disfrutando mucho, pero sigo entrenando un poco para no perder la costumbre. ¡La velocidad está en la sangre! ⚡",
                        author: "Usain Bolt",
                        time: "13:05"
                    },
                    {
                        id: 4,
                        text: "¡Qué grande! Seguís siendo el hombre más rápido de la tierra para todos nosotros. ¡Un abrazo!",
                        author: userName,
                        time: "13:07"
                    }
                ],

                '1-999-126-1422': [
                    {
                        id: 1,
                        text: `Hola ${userName}. El coche se siente increíble hoy en la pista, ¿vienes al box a ver los datos de telemetría?`,
                        author: "Lewis Hamilton",
                        time: "08:30"
                    },
                    {
                        id: 2,
                        text: "¡Hola Lewis! Dejá el Ferrari un rato... te invito a dar una vuelta en mi Fiat 600, ¡eso sí que es adrenalina!",
                        author: userName,
                        time: "08:35"
                    },
                    {
                        id: 3,
                        text: "¡¿Un Fiat 600?! Jajajaja 😂😂😂. ¡Me han contado historias de ese pequeño demonio en Argentina! Es un clásico, pero creo que mis ingenieros tendrían un ataque de pánico si me ven ahí.",
                        author: "Lewis Hamilton",
                        time: "08:38"
                    },
                    {
                        id: 4,
                        text: "Jaja, ¡el 'Fitito' no te va a dejar a pie! Pero bueno, te entiendo, no estás preparado para tanta potencia sin dirección hidráulica.",
                        author: userName,
                        time: "08:40"
                    }
                ],
            });
        }
    }, [userName]);

    const sendMessage = (contactId, text) => {
        const hora = formatTime(new Date());

        const newMessage = {
            id: Date.now(),
            text,
            author: userName,
            time: hora,
            status: 'sent'
        };

        setMessages(prev => ({
            ...prev,
            [contactId]: [...(prev[contactId] || []), newMessage]
        }));

        setIsTyping(contactId);

        setTimeout(() => {
            const contact = contacts.find(c => c.PhoneNumber === contactId);
            if (contact) {
                const reply = {
                    id: Date.now() + 1,
                    text: getBotResponse(userName, text),
                    author: contact.name,
                    time: formatTime(new Date())
                };

                setMessages(prev => {
                    const chatActual = prev[contactId] || [];
                    const chatActualizado = chatActual.map(m =>
                        m.author === userName ? { ...m, status: 'read' } : m
                    );
                    return { ...prev, [contactId]: [...chatActualizado, reply] };
                });
                setIsTyping(null);
            }
        }, 2000);
    };

    
    return (
        <ChatContext.Provider value={{ contacts, messages, sendMessage, userName, setUserName, isTyping, logout, openStatus, closeStatus, activeStatus }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);