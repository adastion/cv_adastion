import { FC } from "react";
import "./button.css";

type TypeButtonProps = {
  buttonName: string;
  status?: "primary" | "secondary";
};

export const Button: FC<TypeButtonProps> = ({ buttonName, status }) => {
  if (!status) {
    return <button className={`btn`}>{buttonName}</button>;
  }
  if (status === "primary") {
    return <button className={`btn btn--${status}`}>{buttonName}</button>;
  }
  if (status === "secondary") {
    return <button className={`btn btn--${status}`}>{buttonName}</button>;
  }
};
