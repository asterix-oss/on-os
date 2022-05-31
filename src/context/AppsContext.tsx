import React, { createContext } from "react";
import { Notes } from "../apps/Notes";
import { Explorer } from "../apps/Explorer";
import { Settings } from "../apps/Settings";
import { Space } from "../apps/Space";
import { AppProps } from "../components/App/App";
import { Calendar } from "../apps/Calendar";
import { Gallery } from "../apps/Gallery";
import { Music } from "../apps/Music";
import { Videos } from "../apps/Videos";
import { Calculator } from "../apps/Calculator";

export type Theme = {
  theme?: "dark" | "light" | "default";
  backgroundColor?: string;
  foregroundColor?: string;
  accentColor?: string;
};

export type App = {
  name: string;
  icon: string;
  module: React.FC<AppProps>;
  isFullScreen: boolean;
  description: string;
  theme?: Theme;
};

interface AppsContextProps {
  apps: App[];
  currentApp: App | null;
  openApp: (app: App) => void;
  closeApp: (app: App) => void;
  resumeApp: (app: App | null) => void;
  openedApps: App[];
  pinnedApps: App[];
  pinApp: (app: App) => void;
  unpinApp: (app: App) => void;
}

export const defaultApps: App[] = [
  Explorer,
  Space,
  Notes,
  Calendar,
  Calculator,
  Gallery,
  Music,
  Videos,
  Settings,
];
export const defaultPinnedApps: App[] = [Explorer, Space];

export const AppsContext = createContext<AppsContextProps>({
  apps: defaultApps,
  currentApp: null,
  openApp: (app: App) => {},
  closeApp: (app: App) => {},
  resumeApp: (app: App | null) => {},
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
  const [apps] = React.useState<App[]>([...defaultApps]);
  const [openedApps, setOpenedApps] = React.useState<App[]>([]);
  const [pinnedApps, setPinnedApps] = React.useState<App[]>(defaultPinnedApps);
  const [currentApp, setCurrentApp] = React.useState<App | null>(null);

  const openApp = React.useCallback(
    (app: App) => {
      setOpenedApps([...openedApps, app]);
    },
    [openedApps]
  );

  const closeApp = React.useCallback(
    (app: App) => {
      setOpenedApps(
        openedApps.filter((openedApp) => openedApp.name !== app.name)
      );
    },
    [openedApps]
  );

  const pinApp = React.useCallback(
    (app: App) => {
      setPinnedApps([...pinnedApps, app]);
    },
    [pinnedApps]
  );

  const unpinApp = React.useCallback(
    (app: App) => {
      setPinnedApps(
        pinnedApps.filter((application) => application.name !== app.name)
      );
    },
    [pinnedApps]
  );

  const resumeApp = React.useCallback((app: App | null) => {
    setCurrentApp(app);
  }, []);

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
