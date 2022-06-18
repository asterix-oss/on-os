import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Calendar: App = {
  name: "Calendar",
  icon: require("./assets/logo.png"),
  description: "Used to keep track of events",
  module: Home,
  isFullScreen: false,
};
