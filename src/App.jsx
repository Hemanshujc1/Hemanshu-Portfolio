// App.jsx
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import InitialPage from "./components/IntialPage/IntialPage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import Work from "./pages/Work/Work";
import Topofpage from "./components/Topofpage/Topofpage";
function App() {
  const [showInitial, setShowInitial] = useState(true);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
  




      {showInitial ? (
        <InitialPage onFinish={() => setShowInitial(false)} />
      ) : (
        <>
          <Navbar />
          <Topofpage />
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
