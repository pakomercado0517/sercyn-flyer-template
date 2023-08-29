import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SercynNavbar from "./components/SercynNavbar";
import SercynFooter from "./components/SercynFooter";

function App() {
  return (
    <section className="font-nunito">
      <SercynNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SercynFooter />
    </section>
  );
}

export default App;
