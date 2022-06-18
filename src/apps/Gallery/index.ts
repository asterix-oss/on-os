import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Gallery: App = {
  name: "Gallery",
  icon: require("./assets/logo.png"),
  description: "View Images",
  module: Home,
  isFullScreen: false,
};
