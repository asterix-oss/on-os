import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Calendar: App = {
  name: "Calendar",
  icon: require("./assets/logo.png"),
  description: "Keep track of events",
  module: Home,
  isFullScreen: false,
};
