import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useScrollDirection } from '../../contexts/ScrollContext';
import { orderedRoutes } from '../Menu/OrderedRoutes';

export default function ScrollNavigator() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const { setDirection } = useScrollDirection();

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;

      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const atTop = scrollY === 0;
      const atBottom = scrollY + innerHeight >= scrollHeight;

      const currentIndex = orderedRoutes.indexOf(location.pathname);
      let nextIndex = currentIndex;

      if (
        event.deltaY > 0 &&
        atBottom &&
        currentIndex < orderedRoutes.length - 1
      ) {
        nextIndex = currentIndex + 1;
        setDirection(1);
      } else if (event.deltaY < 0 && atTop && currentIndex > 0) {
        nextIndex = currentIndex - 1;
        setDirection(-1);
      }

      if (nextIndex !== currentIndex) {
        isScrolling.current = true;
        navigate(orderedRoutes[nextIndex]);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location.pathname, navigate, setDirection]);

  return null;
}
