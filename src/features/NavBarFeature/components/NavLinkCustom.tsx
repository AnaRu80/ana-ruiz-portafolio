import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkCustomProps {
  to: string;
  children: ReactNode;
}
export const NavLinkCustom = ({ to, children }: NavLinkCustomProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block rounded p-2 font-semibold text-black hover:bg-yellow-400   ${isActive ? 'bg-yellow-400 ' : 'bg-yellow-300'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

