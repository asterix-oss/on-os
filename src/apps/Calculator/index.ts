import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Calculator: App = {
  name: "Calculator",
  icon: require("./assets/logo.png"),
  description: "Do Math Operations",
  module: Home,
  isFullScreen: false,
};
