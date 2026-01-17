
import { useEffect } from 'react'
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Header from './Component/Header'
import HeroSection from './Component/HeroSection'
import Portfolio from './Component/Portfolio'
import Service from './Component/Service'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <>
    <Header/>
    <HeroSection/>
    <Service/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
