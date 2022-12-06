import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Omkl from "./pages/omkl"
import Banor from "./pages/banor";
import Bastu from "./pages/bastu";
import Layout from "./pages/layout";
import Bookings from "./pages/bookings";
//Add 404 nopage later 
//Current tutorial https://isotropic.co/react-multiple-pages/
//From https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
import ScrollToTop from "./pages/scrollToTop";



import './app.css';

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="banor" element={<Banor />} />
        <Route path="omkl" element={<Omkl />} /> 
        <Route path="bastu" element={<Bastu />} />
        <Route path="bokningar" element={<Bookings />} />
        <Route path="banor/:booking" element={<Banor />} />
        <Route path="omkl/:booking" element={<Omkl />} />
        <Route path="omkl/:booking/:destination" element={<Omkl />} />
        <Route path="bastu/:booking" element={<Bastu />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


// <section className="App no-padmar">
//       <StickyHeader NavigationClicked={handleNavigation} />
//       <section id="contentContainer" className="main-container">
//         {
//           currentPage === "home" ? <Home /> : <Omkl />
//         }
//       </section>
//       <PageFooter />
      
//     </section>