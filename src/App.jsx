// App.jsx
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import InitialPage from "./components/IntialPage/IntialPage";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import Work from "./pages/Work/Work";

function App() {
  const [showInitial, setShowInitial] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:50px_50px]"></div>

      {showInitial ? (
        <InitialPage onFinish={() => setShowInitial(false)} />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
