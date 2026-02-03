import React, { useRef } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Services from './components/services/services'
import Offer from './components/offer/offer'
import Projects from './components/projects/projects'
import Aboutus from './components/aboutus/aboutus'
import Footer from './components/footer/footer'


const App = () => {

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const offerRef = useRef(null);
  const projectRef = useRef(null);
  const aboutusRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} refs={{ homeRef, servicesRef, offerRef, projectRef, aboutusRef, contactRef }} />
      <Home ref={homeRef} />
      <Services ref={servicesRef}/>
      <Offer ref={offerRef} />
      <Projects ref={projectRef} />
      <Aboutus ref={aboutusRef} />
      <Footer ref={contactRef} />
    </>
  )
}


export default App;
