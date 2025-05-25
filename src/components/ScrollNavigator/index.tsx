import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useScrollDirection } from '../../contexts/ScrollContext';

const orderedRoutes = ['/', '/skills', '/trabalhos', '/contato'];

export default function ScrollNavigator() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const { setDirection } = useScrollDirection();

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      const currentIndex = orderedRoutes.indexOf(location.pathname);
      let nextIndex = currentIndex;

      if (event.deltaY > 0 && currentIndex < orderedRoutes.length - 1) {
        nextIndex = currentIndex + 1;
        setDirection(1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
        setDirection(-1);
      }

      if (nextIndex !== currentIndex) {
        navigate(orderedRoutes[nextIndex]);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location.pathname, navigate]);

  return null;
}
