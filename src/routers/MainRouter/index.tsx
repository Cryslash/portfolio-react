import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../../pages/Home';
import { Skills } from '../../pages/Skills';
import { NotFound } from '../../pages/NotFound';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
