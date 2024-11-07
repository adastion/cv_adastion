import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

const mainData = {
  name: "adastion",
  profetionName: "front-end developer",
  greeting: {
    title: "Hello,  my name is Vahid Navazan",
    message: "Short text with details about you, what you do or your professional career. You can add more information on the about page."
  },
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
