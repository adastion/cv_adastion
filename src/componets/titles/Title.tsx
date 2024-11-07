import { FC } from "react";
import "./title.css";

type TypeTitleProps = {
  name: string;
  status?: "main" | "h2" | "h3";
};

export const Title: FC<TypeTitleProps> = ({ name, status }) => {
  if (!status) {
    return <h2 className={`title`}>{name}</h2>;
  }
  if (status === "main") {
    return <h2 className={`title title--${status}`}>{name}</h2>;
  }
  if (status === "h2") {
    return <h3 className={`title title--${status}`}>{name}</h3>;
  }
  if (status === "h3") {
    return <h3 className={`title title--${status}`}>{name}</h3>;
  }
};
