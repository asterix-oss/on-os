import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Music: App = {
  name: "Music",
  icon: require("./assets/logo.png"),
  description: "Play Music",
  module: Home,
  isFullScreen: false,
};
