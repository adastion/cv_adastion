import { FC } from "react";
import "./button.css";

type TypeButtonProps = {
  buttonName: string;
  status?: "primary" | "secondary" | "menu";
  handler?: () => void;
  isActiveMobile?: boolean;
};

export const Button: FC<TypeButtonProps> = ({
  buttonName,
  status,
  handler,
  isActiveMobile,
}) => {
  if (!status) {
    return <button className={`btn`}>{buttonName}</button>;
  }
  if (status === "primary") {
    return <button className={`btn btn--${status}`}>{buttonName}</button>;
  }
  if (status === "secondary") {
    return <button className={`btn btn--${status}`}>{buttonName}</button>;
  }
  if (status === "menu") {
    return (
      <button
        onClick={handler}
        className={
          `btn btn--${status} ` + (isActiveMobile ? "btn--menu-open" : "")
        }
      ></button>
    );
  }
};
