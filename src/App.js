import React from "react";
import Frontpage from "./components/Frontpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from './components/About';
import { Routes} from "react-router-dom";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />}/>

      </Routes>
      <Frontpage />
      <Footer />





    </div>
  );
}

export default App;
