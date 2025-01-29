import { useState, useEffect } from 'react';

const useScrollTrigger = (options = {}) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Capturas múltiples fuentes de scroll
      const scrollY = window.scrollY || 
                     document.documentElement.scrollTop || 
                     document.body.scrollTop;
      
      const threshold = options.threshold || 1;

      // Actualizar el estado basado en la posición del scroll
      setTrigger(scrollY > threshold);
    };

    // Agregar el listener a document para capturar todos los eventos de scroll
    document.addEventListener('scroll', handleScroll, { 
      passive: true,
      capture: true  // Esto asegura que capturemos el evento en la fase de captura
    });

    // También escuchar en window por si acaso
    window.addEventListener('scroll', handleScroll, { 
      passive: true,
      capture: true
    });

    // Verificar el estado inicial
    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll, { capture: true });
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [options.threshold]);

  return trigger;
};

export default useScrollTrigger;