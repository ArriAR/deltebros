import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Logo from './assets/Ebros_Tree_RGB.png';
import Finca from './assets/olivenbaum_ernte.jpeg';
import './App.css';

function App() {

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className="App">
      <div className="scroll-container">
        <header className="App-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5em' }}>
            <h1 className="responsive-title" style={{ margin: '0' }}>
              DELTEBROS
            </h1>
            <div style={{ width: '80%', maxWidth: '50em', margin: '0 auto' }}>
              <img src={Finca} alt="Finca" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </div>
          </div>
        </header>
        <main className="App-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5em' }}>
            <h2 className="responsive-subtitle" style={{ textAlign: 'center'}}>
            Bei Deltebros schätzen wir die Schönheit der Olivenhaine und teilen ihre Früchte durch naturbelassene Produkte. Handernte und sofortige Weiterverarbeitung garantieren höchste Qualität. Wir glauben, dass die Zeit in der Natur entschleunigt und glücklich macht, und ermöglichen es jedem, Teil dieser Erfahrung zu werden. Vom 21.10. - 18.11.24
            haben Sie die Möglichkeit an der Ernte teilzunehmen. Bei Interesse schreiben Sie uns gerne!
            </h2>
            <div class="scroller" data-speed="fast">
              <div class="scroller__inner">
                <div>Transparenz & Rückverfolgbarkeit</div>
                <div>Gemeinsame Wertschöpfung (CSV)</div>
                <div>Im Einklang mit der Natur</div>
                <div>Experimentierfreudig</div>
                <div>Nahbar und Familiär</div>
              </div>
            </div>
          </div>
        </main>
        <footer className="App-footer">
          <div className="footer-row">
          <p style={{fontWeight: "bold"}}>
            Deltebros S.L.<br></br>
            Calle Martirs 6<br></br> 
            No. 1640<br></br>
            43500 Tortosa Tarragona<br></br>
            Spanien</p>
            <p style={{fontWeight: "bold"}}>
            Kontakt<br></br>
            info@deltebros.com<br></br> 
            Silas Wachmann<br></br>
            +49 173 7869848<br></br>
            Arved Friese<br></br>
            +49 151 70848123</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;