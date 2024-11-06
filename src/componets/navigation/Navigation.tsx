import { FC } from "react";
import { NavItem } from "./nav_item/NavItem";
import "./navigation.css";

export type TypeNavigationProps = {
  navItems: string[];
};

export const Navigation: FC<TypeNavigationProps> = ({ navItems }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavItem navItems={navItems} />
      </ul>
    </nav>
  );
};
