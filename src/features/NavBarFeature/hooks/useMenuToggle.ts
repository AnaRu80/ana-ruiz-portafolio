import { useState } from 'react';

export const useMenuToggle = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev: any) => !prev);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu };
};
