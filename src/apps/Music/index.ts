import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Music: App = {
  name: "Music",
  icon: require("./assets/logo.png"),
  description: "A simple demo app",
  module: Home,
  isFullScreen: false,
};
