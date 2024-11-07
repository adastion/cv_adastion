import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

export type TypeData = {
  data: {
    name: string;
    profetionName?: string;
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

const mainData = {
  name: "adastion",
  profetionName: "front-end developer",
  navigation: ["about", "projects", "contacts"],
  skils: [
    "vscode",
    "js",
    "css",
    "html",
    "redux",
    "git",
    "github",
    "react",
    "sass",
    "tailwind",
  ],
  projects: [
    {
      name: "project name",
      description:
        "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      preview: "src/images/project-1.webp",
    },
  ],
  social: ["telegram", "github", "gmail"],
};

createRoot(document.getElementById("root")!).render(<App data={mainData} />);
