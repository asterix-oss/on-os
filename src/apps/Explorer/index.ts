import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Explorer: App = {
  name: "Explorer",
  icon: require("./assets/logo.png"),
  description: "Explorer Ipsum",
  module: Home,
  isFullScreen: false,
};
