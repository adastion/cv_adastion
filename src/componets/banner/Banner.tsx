import { FC } from "react";
import "./banner.css";
import { Title } from "../titles/Title";

type TypeBannerProps = {
  title: string;
  text: string;
  specialty: string;
};

export const Banner: FC<TypeBannerProps> = ({ title, text, specialty }) => {
  return (
    <section className="banner">
      <div className="banner__block">
        <h1 className="banner__specialty">{specialty}</h1>
        <Title name={title} status={"main"} />
        <p className="banner__subtitle">{text}</p>
      </div>
    </section>
  );
};
