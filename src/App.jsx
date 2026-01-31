import React, { useRef } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Offer from './components/offer/offer'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'


const App = () => {

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} refs={{ homeRef, projectRef, contactRef }} />
      <Home ref={homeRef} />
      <Offer />
      <Projects ref={projectRef} />
      <Footer ref={contactRef} />
    </>
  )
}


export default App;
