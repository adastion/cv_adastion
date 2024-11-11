import { FC } from "react";
import { NavItem } from "./nav_item/NavItem";
import "./navigation.css";

export type TypeNavigationProps = {
  navItems: string[];
  isActiveMobile?: boolean;
};

export const Navigation: FC<TypeNavigationProps> = ({
  navItems,
  isActiveMobile,
}) => {
  return (
    <nav
      className={"navigation " + (isActiveMobile ? "navigation--active" : "")}
    >
      <ul className="navigation__list">
        <NavItem navItems={navItems} />
      </ul>
    </nav>
  );
};
