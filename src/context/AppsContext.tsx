import React, { createContext } from "react";
import { Hello } from "../apps/Hello";
import { Lorem } from "../apps/Lorem";
import { AppProps } from "../components/App";

export type App = {
  name: string;
  icon: string;
  module: React.FC<AppProps>;
  isFullScreen: boolean;
  description: string;
};

interface AppsContextProps {
  apps: App[];
  currentApp: App | null;
  openApp: (app: App) => void;
  closeApp: (app: App) => void;
  resumeApp: (app: App) => void;
  openedApps: App[];
  pinnedApps: App[];
  pinApp: (app: App) => void;
  unpinApp: (app: App) => void;
}

export const apps: App[] = [Hello, Lorem];
export const defaultPinnedApps: App[] = [Hello];

export const AppsContext = createContext<AppsContextProps>({
  apps,
  currentApp: null,
  openApp: (app: App) => {},
  closeApp: (app: App) => {},
  resumeApp: (app: App) => {},
  openedApps: [],
  pinnedApps: [],
  pinApp: (app: App) => {},
  unpinApp: (app: App) => {},
});

interface AppsContextProviderProps {
  children: React.ReactNode;
}

const AppsContextProvider: React.FC<AppsContextProviderProps> = ({
  children,
}) => {
  const [openedApps, setOpenedApps] = React.useState<App[]>([]);
  const [pinnedApps, setPinnedApps] = React.useState<App[]>(defaultPinnedApps);
  const [currentApp, setCurrentApp] = React.useState<App | null>(null);

  const openApp = (app: App) => {
    setOpenedApps([...openedApps, app]);
  };

  const closeApp = (app: App) => {
    setOpenedApps(
      openedApps.filter((openedApp) => openedApp.name !== app.name)
    );
  };

  const pinApp = (app: App) => {
    setPinnedApps([...pinnedApps, app]);
  };

  const unpinApp = (app: App) => {
    setPinnedApps(
      pinnedApps.filter((application) => application.name !== app.name)
    );
  };

  const resumeApp = (app: App) => {
    setCurrentApp(app);
  };

  const value = {
    apps,
    openedApps,
    closeApp,
    openApp,
    pinnedApps,
    pinApp,
    unpinApp,
    resumeApp,
    currentApp,
  };
  return <AppsContext.Provider value={value}>{children}</AppsContext.Provider>;
};

export default AppsContextProvider;
