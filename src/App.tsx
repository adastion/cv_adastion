import { FC } from "react";
import "./app.css";
import "./css/container.css";
import { Header } from "./componets/header/Header.js";
import { TypeData } from "./main.js";

export const App: FC<TypeData> = ({ data }) => {
  return (
    <div className="app">
      <Header name={data.name} navigation={data.navigation} />
      <p>
        lore
      </p>
    </div>
  );
};
