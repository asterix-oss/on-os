import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AppContext from "./context/AppContext";
import Routes from "./Routes";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <AppContext>
        <Routes location={location} />
      </AppContext>
    </AnimatePresence>
  );
}

export default App;
