# CracksApp - Mensajería de Leyendas

**CracksApp** es una aplicación de mensajería inspirada en WhatsApp, desarrollada con **React**. Permite a los usuarios interactuar con leyendas del deporte mundial a través de una interfaz moderna, accesible y dinámica.

---

## Desafío Elegido
El proyecto se centra en la creación de una aplicación de mensajería simil a WhatsApp, cumpliendo con los requerimientos de navegación, gestión de estados globales y diseño responsivo propuestos para el Trabajo Práctico Final.

## Tecnologías y Librerías
* **React.js**: Biblioteca principal para la construcción de la interfaz de usuario.
* **React Router Dom**: Gestión de enrutamiento y parámetros de búsqueda para la navegación entre chats.
* **React Context API**: Implementación de un estado global para manejar contactos, mensajes y la sesión del usuario.
* **CSS3 Moderno**: Diseño adaptativo (Responsive Design) con uso de variables CSS y Flexbox/Grid.

## Dificultades Presentadas
* **Sincronización de Mensajes**: El mayor desafío fue gestionar la respuesta automática de los "cracks" de forma aleatoria sin perder la consistencia en el historial de cada chat individual.
* **Persistencia de Datos**: Manejar la inyección del nombre de usuario desde el login hacia todos los contextos de los mensajes para que las respuestas fueran personalizadas.
* **Navegación Dinámica**: Configurar correctamente los parámetros de búsqueda (`:PhoneNumber`) para asegurar que el componente `ChatWindow` cargue la información correcta del atleta seleccionado.

## Requerimientos del TP Cumplidos
1.  **React & Componentes**: Estructura basada en componentes funcionales reutilizables.
2.  **Estados y Contextos**: Uso de `useState`, `useEffect` y `useContext` para una lógica centralizada y limpia (Principios DRY).
3.  **Enrutamiento**: Implementación de rutas protegidas mediante un sistema de autenticación ficticio.
4.  **Formularios**: Formulario de Login validado y formulario de entrada de mensajes en tiempo real.
5.  **Accesibilidad**: Paleta de colores de alto contraste y diseño fluido para diferentes dispositivos.
6.  **Parámetros de URL**: Uso de `useParams` para identificar chats de forma única.

## Principios de Diseño
Se aplicaron los principios:
* **KISS** (Keep It Simple, Stupid): Interfaz intuitiva y directa.
* **DRY** (Don't Repeat Yourself): Lógica de mensajes y estilos centralizada.
* **Accesibilidad**: Uso de fondos claros con tipografías oscuras para garantizar la legibilidad.

---
*Desarrollado para el TP Final de Programación - Fernando Delgado 2026.*