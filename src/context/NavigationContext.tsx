import React, { createContext } from "react";

interface NavigationProps {
  isShowingDesktop: boolean;
  toggleDesktop: () => void;
  closeDesktop: () => void;
}

export const Navigation = createContext<NavigationProps>({
  isShowingDesktop: false,
  toggleDesktop: () => {},
  closeDesktop: () => {},
});

interface NavigationContextProps {
  children: React.ReactNode;
}

const NavigationContext: React.FC<NavigationContextProps> = ({ children }) => {
  const [isShowingDesktop, setIsShowingDesktop] = React.useState(false);

  const toggleDesktop = () => {
    setIsShowingDesktop(!isShowingDesktop);
  };

  const closeDesktop = () => {
    setIsShowingDesktop(false);
  };

  const value = {
    isShowingDesktop,
    toggleDesktop,
    closeDesktop,
  };
  return <Navigation.Provider value={value}>{children}</Navigation.Provider>;
};

export default NavigationContext;
