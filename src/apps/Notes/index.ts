import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Notes: App = {
  name: "Notes",
  icon: require("./assets/logo.png"),
  description: "Used to keep track of notes",
  module: Home,
  isFullScreen: false,
};
