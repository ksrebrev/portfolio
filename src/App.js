import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Work from "./pages/work";
import About from "./pages/about";

// Projects
import Avalog from "./pages/projects/avalog";
import BringMeHome from "./pages/projects/bring-me-home";
import Instar from "./pages/projects/instar";
import Despade from "./pages/projects/despade";
import EnterDao from "./pages/projects/enter-dao";
import Reconnect from "./pages/projects/reconnect";

export default function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route exact path="/" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects/avalog" element={<Avalog />}></Route>
          <Route
            path="/projects/bring-me-home"
            element={<BringMeHome />}
          ></Route>
          <Route path="/projects/instar" element={<Instar />}></Route>
          <Route path="/projects/despade" element={<Despade />}></Route>
          <Route path="/projects/enter-dao" element={<EnterDao />}></Route>
          <Route path="/projects/reconnect" element={<Reconnect />}></Route>
        </Routes>

        <Footer />
      </>
    </Router>
  );
}
