import React, { createContext } from "react";

interface NavigationProps {
  isShowingDesktop: boolean;
  toggleDesktop: () => void;
  isShowingTaskBar: boolean;
  toggleTaskBar: (value?: boolean) => void;
  closeDesktop: () => void;
}

export const Navigation = createContext<NavigationProps>({
  isShowingDesktop: false,
  toggleDesktop: () => {},
  isShowingTaskBar: false,
  toggleTaskBar: (value?: boolean) => {},
  closeDesktop: () => {},
});

interface NavigationContextProps {
  children: React.ReactNode;
}

const NavigationContext: React.FC<NavigationContextProps> = ({ children }) => {
  const [isShowingDesktop, setIsShowingDesktop] = React.useState(false);

  const [isShowingTaskBar, setIsShowingTaskBar] = React.useState(false);

  const toggleTaskBar = (value?: boolean) => {
    alert(value);
    setIsShowingTaskBar(value !== undefined || !isShowingTaskBar);
  };

  const toggleDesktop = () => {
    setIsShowingDesktop(!isShowingDesktop);
    // if (isShowingDesktop) {
    //   setIsShowingTaskBar(false);
    // } else {
    //   setIsShowingTaskBar(true);
    // }
  };

  const closeDesktop = () => {
    setIsShowingDesktop(false);
  };

  const value = {
    isShowingDesktop,
    toggleDesktop,
    isShowingTaskBar,
    toggleTaskBar,
    closeDesktop,
  };
  return <Navigation.Provider value={value}>{children}</Navigation.Provider>;
};

export default NavigationContext;
