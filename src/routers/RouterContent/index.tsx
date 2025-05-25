import { Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/Home';
import { Skills } from '../../pages/Skills';
import { NotFound } from '../../pages/NotFound';
import ScrollNavigator from '../../components/ScrollNavigator';
import { AnimatePresence } from 'framer-motion';
import { PageWrapper } from '../../components/PageWrapper';
import { MainTemplate } from '../../templates/MainTemplate';
import { Menu } from '../../components/Menu';
import { useScrollDirection } from '../../contexts/ScrollContext';

export function RouterContent() {
  const location = useLocation();
  const { direction } = useScrollDirection();

  return (
    <>
      <ScrollNavigator />
      <Menu />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <MainTemplate>
                <PageWrapper direction={direction}>
                  <Home />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path='/skills'
            element={
              <MainTemplate>
                <PageWrapper direction={direction}>
                  <Skills />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path='*'
            element={
              <PageWrapper direction={direction}>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
