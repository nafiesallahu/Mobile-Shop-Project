import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Samsung from "./components/Samsung";
import Accessories from "./components/Accessories";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NewMobile from "./components/NewMobile";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.css";
import EditMobile from "./components/EditMobile";

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
            <Route path="/samsung" element={<Samsung />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/newmobile" element={<NewMobile />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<EditMobile />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
