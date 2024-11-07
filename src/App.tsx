import { FC } from "react";
import "./app.css";
import "./css/container.css";
import { Header } from "./componets/header/Header";
import { TypeData } from "./main.js";
import { Title } from "./componets/titles/Title";

export const App: FC<TypeData> = ({ data }) => {
  return (
    <div className="app">
      <Header name={data.name} navigation={data.navigation} />
      <p>lore</p>

      <Title name={"Hello,  my name is Vahid Navazan"} status={"main"} />
      <Title name={"Skills"} status={"h2"} />
      <Title name={"Project Name"} status={"h3"} />
    </div>
  );
};
