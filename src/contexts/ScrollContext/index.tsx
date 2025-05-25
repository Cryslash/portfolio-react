import { createContext, useContext, useState } from 'react';

type ScrollContextType = {
  direction: number;
  setDirection: (dir: number) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState(1);

  return (
    <ScrollContext.Provider value={{ direction, setDirection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollDirection() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      'useScrollDirection deve ser usado dentro de um ScrollProvider',
    );
  }
  return context;
}
