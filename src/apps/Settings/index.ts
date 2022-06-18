import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Settings: App = {
  name: "Settings",
  icon: require("./assets/logo.png"),
  description: "Used to change user preferences",
  module: Home,
  isFullScreen: false,
};
