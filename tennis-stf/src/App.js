import React, {useState} from "react";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import Home from "./pages/home"
import Omkl from "./pages/omkl"

import './app.css';

function App() {
  
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (destination) => {
    setCurrentPage("omkl");
  }

  return (
    <section className="App no-padmar">
      <StickyHeader NavigationClicked={handleNavigation} />
      <section id="contentContainer" className="main-container">
        {
          currentPage === "home" ? <Home /> : <Omkl />
        }
      </section>
      <PageFooter />
      
    </section>
  );
}

export default App;
