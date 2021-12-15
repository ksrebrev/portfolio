import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Work from "./pages/work";

export default function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route exact path="/" element={<Work />}></Route>
          <Route path="/about">{/* <About /> */}</Route>
        </Routes>

        <Footer />
      </>
    </Router>
  );
}
