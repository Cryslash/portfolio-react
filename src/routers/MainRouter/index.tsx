import { BrowserRouter } from 'react-router';
import { RouterContent } from '../RouterContent';

export function MainRouter() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
}
