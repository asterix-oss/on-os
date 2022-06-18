import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Videos: App = {
  name: "Videos",
  icon: require("./assets/logo.png"),
  description: "Play Videos",
  module: Home,
  isFullScreen: false,
};
