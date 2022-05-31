import { App } from "../../context/AppsContext";
import Home from "./Home";

export const Space: App = {
  name: "Space",
  icon: require("./assets/logo.png"),
  description: "Explore the Infinite sWeb",
  module: Home,
  isFullScreen: false,
  theme: {
    backgroundColor: "#15803d",
    accentColor: "#15803d",
  },
};
