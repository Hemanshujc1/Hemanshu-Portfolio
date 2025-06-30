import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import InitialPage from "./components/IntialPage/IntialPage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Work from "./pages/Work/Work.jsx";
import Topofpage from "./components/Topofpage/Topofpage";
import NotFound from "./pages/NotFound/NotFound.jsx";
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
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Experience" element={<Experience/>} />
            <Route path="/Work" element={<Work/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
