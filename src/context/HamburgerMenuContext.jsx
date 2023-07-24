import { createContext, useCallback, useContext, useState } from 'react';

const HamburgerContext = createContext();

function HamburgerToggler({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  const closeMenu = useCallback(() => {
    if (isOpen === true) setIsOpen(false);
  }, [isOpen]);

  return (
    <HamburgerContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
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
