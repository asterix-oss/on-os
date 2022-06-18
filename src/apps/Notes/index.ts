import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Notes: App = {
  name: "Notes",
  icon: require("./assets/logo.png"),
  description: "Keep Track of Notes",
  module: Home,
  isFullScreen: false,
};
