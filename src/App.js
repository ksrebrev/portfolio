import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route exact path="/">
            {/* <Landing /> */}
          </Route>
          <Route path="/about">{/* <About /> */}</Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
