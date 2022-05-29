import { App } from "../../context/AppsContext";
import Home from "./Home";

export * from "./Home";

export const Hello: App = {
  name: "Hello",
  icon: "https://images.unsplash.com/photo-1611262588024-d12430b98920?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
  description: "A simple demo app",
  module: Home,
  isFullScreen: false,
};
