import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
