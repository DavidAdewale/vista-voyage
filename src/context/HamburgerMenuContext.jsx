import { createContext, useContext, useState } from 'react';

const HamburgerContext = createContext();

function HamburgerToggler({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <HamburgerContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </HamburgerContext.Provider>
  );
}

function useMenuToggler() {
  const context = useContext(HamburgerContext);
  if (context === undefined)
    throw new Error(
      'HamburgerContext was used outside of HamburgerContextProvider'
    );

  return context;
}

export { HamburgerToggler, useMenuToggler };
