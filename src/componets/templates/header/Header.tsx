import { FC } from "react";
import { Logo } from "../../logo/Logo";
import { Navigation } from "../../navigation/Navigation";
import "./header.css";

export type TypeHeaderProps = {
  name: string;
  navigation: string[];
};

export const Header: FC<TypeHeaderProps> = ({ name, navigation }) => {
  return (
    <header className="header">
      <div className="container">
        <Logo nameLogo={name} />
        <Navigation navItems={navigation} />
      </div>
    </header>
  );
};
