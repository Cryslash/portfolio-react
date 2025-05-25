import { createContext, useContext, useState } from 'react';

type ScrollContextType = {
  direction: number;
  setDirection: (dir: number) => void;
  setManualTrigger: (value: boolean) => void;
  isManualTrigger: boolean;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState(1);
  const [isManualTrigger, setManualTrigger] = useState(false);

  return (
    <ScrollContext.Provider
      value={{ direction, setDirection, isManualTrigger, setManualTrigger }}
    >
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
