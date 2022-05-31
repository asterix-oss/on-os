import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Videos: App = {
  name: "Videos",
  icon: require("./assets/logo.png"),
  description: "A simple demo app",
  module: Home,
  isFullScreen: false,
};
