import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Explorer: App = {
  name: "Explorer",
  icon: require("./assets/logo.png"),
  description: "Used to explore the filesystem",
  module: Home,
  isFullScreen: false,
};
