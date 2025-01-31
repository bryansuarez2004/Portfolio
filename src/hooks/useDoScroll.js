import { useEffect, useState } from "react";

const useDoScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      // Agregar evento de desplazamiento al montar el componente
      window.addEventListener('scroll', handleScroll);
  
      // Eliminar el evento al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return {
        scrolled
    }
}
export default useDoScroll