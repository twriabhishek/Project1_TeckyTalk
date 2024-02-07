import React from "react";
import "./component/Style/NavBar.scss";
import Navbar from "./component/JsFiles/Navbar";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/JsFiles/Home";
import Footer from "./component/JsFiles/Footer";
import Contact from "./component/JsFiles/Contact";
import Services from "./component/JsFiles/Services";
import "./component/Style/Mediaquery.scss";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
