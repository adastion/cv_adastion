import { FC, useState } from "react";
import { Button } from "../../buttons/Button";
import { Logo } from "../../logo/Logo";
import { Navigation } from "../../navigation/Navigation";
import "./header.css";

export type TypeHeaderProps = {
  name: string;
  navigation: string[];
};

export const Header: FC<TypeHeaderProps> = ({ name, navigation }) => {
  const [statusMenu, setStatusMenu] = useState<boolean>(false);

  const toggleHandler = () => {
    if (statusMenu === false) {
      document.querySelector("body")?.classList.add("scroll-hidden");
      setStatusMenu(true);
    } else {
      document.querySelector("body")?.classList.remove("scroll-hidden");
      setStatusMenu(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Logo nameLogo={name} />
        <Navigation isActiveMobile={statusMenu} navItems={navigation} />
        <Button
          handler={toggleHandler}
          buttonName={""}
          status={"menu"}
          isActiveMobile={statusMenu}
        />
      </div>
    </header>
  );
};
