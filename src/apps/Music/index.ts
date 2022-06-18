import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Music: App = {
  name: "Music",
  icon: require("./assets/logo.png"),
  description: "Used to play music",
  module: Home,
  isFullScreen: false,
};
