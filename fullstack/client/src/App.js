import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Accessories from "./components/Accessories";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<Ipad />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
