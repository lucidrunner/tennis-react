import StickyHeader from "./components/StickyHeader/StickyHeader";
import PageFooter from "./components/PageFooter/PageFooter";

import './app.css';

function App() {
  return (
    <section className="App no-padmar">
      <StickyHeader />
      <section id="contentContainer" className="main-container">
        
      </section>
      <PageFooter />
      
    </section>
  );
}

export default App;
