import { FC } from "react";
import { TypeNavigationProps } from "../Navigation";

export const NavItem: FC<TypeNavigationProps> = ({ navItems }) => {
  return (
    <>
      {navItems.map((item, index) => {
        return (
          <li key={index} className="navigation__item">
            <a href="#">{item}</a>
          </li>
        );
      })}
    </>
  );
};
