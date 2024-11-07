import { FC } from "react";
import "./app.css";
import { Banner } from "./componets/banner/Banner";
import { Header } from "./componets/header/Header";
import "./css/container.css";

export type TypeData = {
  data: {
    name: string;
    profetionName: string;
    greeting: {
      title: string;
      message: string;
    };
    navigation: string[];
    skils: string[];
    projects: {
      name: string;
      description: string;
      preview: string;
    }[];
    social: string[];
  };
};

export const App: FC<TypeData> = ({ data }) => {
  return (
    <div className="app">
      <Header name={data.name} navigation={data.navigation} />
      <Banner
        title={data.greeting.title}
        text={data.greeting.message}
        specialty={data.profetionName}
      />
    </div>
  );
};
