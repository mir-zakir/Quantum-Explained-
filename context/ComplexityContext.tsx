
import React, { createContext, useContext, useState } from 'react';

export type ComplexityLevel = 'Beginner' | 'Intermediate' | 'Advanced';

interface ComplexityContextType {
  level: ComplexityLevel;
  setLevel: (level: ComplexityLevel) => void;
}

const ComplexityContext = createContext<ComplexityContextType | undefined>(undefined);

export const ComplexityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState<ComplexityLevel>('Beginner');

  return (
    <ComplexityContext.Provider value={{ level, setLevel }}>
      {children}
    </ComplexityContext.Provider>
  );
};

export const useComplexity = () => {
  const context = useContext(ComplexityContext);
  if (!context) throw new Error('useComplexity must be used within ComplexityProvider');
  return context;
};
