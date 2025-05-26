import { Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/Home';
import { Skills } from '../../pages/Skills';
import { NotFound } from '../../pages/NotFound';
import ScrollNavigator from '../../components/ScrollNavigator';
import { AnimatePresence } from 'framer-motion';
import { PageWrapper } from '../../components/PageWrapper';
import { MainTemplate } from '../../templates/MainTemplate';
import { Menu } from '../../components/Menu';
import { orderedRoutes } from '../../components/Menu';
import { Works } from '../../pages/Works';

export function RouterContent() {
  const location = useLocation();
  const path = orderedRoutes;

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
            path={path[1]} // /skills
            element={
              <MainTemplate>
                <PageWrapper>
                  <Skills />
                </PageWrapper>
              </MainTemplate>
            }
          />
          <Route
            path={path[2]} // /trabalhos
            element={
              <MainTemplate>
                <PageWrapper>
                  <Works />
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
