import { Route, Routes } from "react-router-dom";
import { Button } from "./components";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Button>Home</Button>} />
    </Routes>
  );
}

export default App;
