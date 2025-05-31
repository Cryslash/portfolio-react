import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useScrollDirection } from '../../contexts/ScrollContext';
import { orderedRoutes } from '../Menu/OrderedRoutes';

export default function ScrollNavigator() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const { setDirection } = useScrollDirection();

  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      handleScroll(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 50) {
        handleScroll(deltaY);
      }

      touchStartY.current = null;
    };

    const handleScroll = (deltaY: number) => {
      if (isScrolling.current) return;

      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const atTop = scrollY === 0;
      const tolerance = 20;
      const atBottom = scrollY + innerHeight >= scrollHeight - tolerance;

      const currentIndex = orderedRoutes.indexOf(location.pathname);
      let nextIndex = currentIndex;

      if (deltaY > 0 && atBottom && currentIndex < orderedRoutes.length - 1) {
        nextIndex = currentIndex + 1;
        setDirection(1);
      } else if (deltaY < 0 && atTop && currentIndex > 0) {
        nextIndex = currentIndex - 1;
        setDirection(-1);
      }

      if (nextIndex !== currentIndex) {
        isScrolling.current = true;
        navigate(orderedRoutes[nextIndex]);

        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, navigate, setDirection]);

  return null;
}
