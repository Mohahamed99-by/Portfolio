import React from 'react';
import NavPar from "./components/NavPar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-900 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NavPar />
          <main>
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;