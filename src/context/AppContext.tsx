import React, { createContext } from "react";

interface AppProps {
  wallpaper: string;
  changeWallpaper: (wallpaper: string) => void;
}

export const App = createContext<AppProps>({
  wallpaper:
    "https://images.unsplash.com/photo-1650943574955-ac02c65cfc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  changeWallpaper: () => {},
});

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [wallpaper, setWallpaper] = React.useState<string>(
    require("../assets/images/wallpaper.jpg")
  );

  const changeWallpaper = (wallpaper: string) => {
    setWallpaper(wallpaper);
  };

  const value = {
    wallpaper,
    changeWallpaper,
  };
  return <App.Provider value={value}>{children}</App.Provider>;
};

export default AppContext;
