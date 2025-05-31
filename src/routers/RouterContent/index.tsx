import { Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/Home';
import { Skills } from '../../pages/Skills';
import { NotFound } from '../../pages/NotFound';
import ScrollNavigator from '../../components/ScrollNavigator';
import { AnimatePresence } from 'framer-motion';
import { PageWrapper } from '../../components/PageWrapper';
import { MainTemplate } from '../../templates/MainTemplate';
import { Menu } from '../../components/Menu/MainMenu';
import { orderedRoutes } from '../../components/Menu/OrderedRoutes';
import { Projects } from '../../pages/Projects';
import { Contact } from '../../pages/Contact';
import { useEffect } from 'react';

export function RouterContent() {
  const location = useLocation();
  const path = orderedRoutes;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <ScrollNavigator />
      <Menu />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path={path[0]} // /
            element={
              <MainTemplate>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path={path[1]} // /tecnologias
            element={
              <MainTemplate>
                <PageWrapper>
                  <Skills />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path={path[2]} // /projetos
            element={
              <MainTemplate>
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path={path[3]} // /contato
            element={
              <MainTemplate>
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path='*'
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
