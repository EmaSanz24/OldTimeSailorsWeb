import { useState, useEffect } from 'react';

// const useScrollTrigger = (options = {}) => {
//   const [trigger, setTrigger] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Capturas múltiples fuentes de scroll
//       const scrollY = window.scrollY || 
//                      document.documentElement.scrollTop || 
//                      document.body.scrollTop;
      
//       const threshold = options.threshold || 1;

//       // Actualizar el estado basado en la posición del scroll
//       setTrigger(scrollY > threshold);
//     };

//     // Agregar el listener a document para capturar todos los eventos de scroll
//     document.addEventListener('scroll', handleScroll, { 
//       passive: true,
//       capture: true  // Esto asegura que capturemos el evento en la fase de captura
//     });

//     // También escuchar en window por si acaso
//     window.addEventListener('scroll', handleScroll, { 
//       passive: true,
//       capture: true
//     });

//     // Verificar el estado inicial
//     handleScroll();

//     return () => {
//       document.removeEventListener('scroll', handleScroll, { capture: true });
//       window.removeEventListener('scroll', handleScroll, { capture: true });
//     };
//   }, [options.threshold]);

//   return trigger;
// };

const useScrollTrigger = (options = {}) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const targetElement = event.target;
      let scrollPosition;

      // Si el scroll viene del documentElement o el body
      if (targetElement === document || targetElement === document.body || targetElement === document.documentElement) {
        scrollPosition = window.scrollY || document.documentElement.scrollTop;
      } 
      // Si el scroll viene de otro elemento
      else if (targetElement.scrollTop !== undefined) {
        scrollPosition = targetElement.scrollTop;
      }

      console.log('Scroll detected:', {
        target: targetElement,
        position: scrollPosition
      });

      setTrigger(scrollPosition > (options.threshold || 1));
    };

    // Escuchar en múltiples niveles para asegurar la captura del evento
    document.addEventListener('scroll', handleScroll, true);
    window.addEventListener('scroll', handleScroll, true);

    const mainElement = document.querySelector('.main-scroll-wrapper');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, true);
    }

    return () => {
      document.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('scroll', handleScroll, true);
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll, true);
      }
    };
  }, [options.threshold]);

  return trigger;
};

export default useScrollTrigger;