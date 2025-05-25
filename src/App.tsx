import { ScrollProvider } from './contexts/ScrollContext';
import { MainRouter } from './routers/MainRouter';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <>
      <ScrollProvider>
        <MainRouter />
      </ScrollProvider>
    </>
  );
}

export default App;
