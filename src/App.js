import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Work from "./pages/work";
import About from "./pages/about";

// Projects
import Avalog from "./pages/projects/avalog";

export default function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route exact path="/" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects/avalog" element={<Avalog />}></Route>
        </Routes>

        <Footer />
      </>
    </Router>
  );
}
