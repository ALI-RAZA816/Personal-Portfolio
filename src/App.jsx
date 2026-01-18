
import { useEffect, useState } from 'react'
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

  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [activefilter, setActivefilter] = useState('');

  const barHandler = () => setMenu(true);
  const crossHandler = (link) => {
    setMenu(false)
    setActiveLink(link);
  };

  const filterActiveHandler = (filter) =>{
    setActivefilter(filter);
  }
  
  useEffect(()=>{
    setActivefilter("all");
    setActiveLink('home');
    Aos.init();
  },[]);
  
  return (
    <>
    <Header barHandler = {barHandler} menu = {menu} crossHandler = {crossHandler} activeLink = {activeLink} />
    <HeroSection/>
    <Service/>
    <About/>
    <Portfolio filterActiveHandler = {filterActiveHandler} activefilter = {activefilter} />
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
