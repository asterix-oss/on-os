import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Calculator: App = {
  name: "Calculator",
  icon: require("./assets/logo.png"),
  description: "Used to do math operations more easily",
  module: Home,
  isFullScreen: false,
};
