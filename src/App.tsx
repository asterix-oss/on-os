import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./screens/Loading";
import Welcome from "./screens/Welcome";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}>
        <Route path='/' element={<Loading />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
