
import { useEffect, useState } from 'react'
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Header from './Component/Header'
import HeroSection from './Component/HeroSection'
import Portfolio from './Component/Portfolio'
import Service from './Component/Service'
import Skills from './Component/Skills'
import Aos from 'aos';
import 'aos/dist/aos.css';
import MoreProjects from './Component/MoreProjects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  const portfolio = [
    {
      name: "eCommerce",
      category: "react",
      github: "https://github.com/ALI-RAZA816/E-Commerce-Website-React-.git",
      livedemo: "https://forever-ecommerce-website-mocha.vercel.app/",
      image: "/thumbnails/React Forever Image_thumbnail Jun 30, 2026, 02_43_07 AM.png"
    },
    {
      name: "Expense Tracker",
      category: "react",
      github: "https://github.com/ALI-RAZA816/Expense-Tracker-Chart.git",
      livedemo: "https://expense-tracker-chart.vercel.app/",
      image: "/thumbnails/Expense Tracker Thumbnail_Image Jun 30, 2026, 02_53_57 AM.png"
    },
    {
      name: "DevConnect",
      category: "react",
      github: "https://github.com/ALI-RAZA816/Job-Post-React.git",
      livedemo: "https://job-post-react.vercel.app/",
      image: "/thumbnails/DevConnect Thumbnail_Image Jun 30, 2026, 03_10_08 AM.png"
    },
    {
      name: "Portfolio",
      category: "bootstrap",
      github: "https://github.com/ALI-RAZA816/Bootstrap-Portfolio",
      livedemo: "https://bootstrap-portfolio-topaz.vercel.app/",
      image: "/thumbnails/bootstrap portfolio.png"
    },
    {
      name: "Calculator",
      category: "javascript",
      github: "https://github.com/ALI-RAZA816/JS-Mini-Projects/tree/main/Calculator",
      livedemo: "https://calulator-rose.vercel.app/",
      image: "/thumbnails/javascript calculator.png"
    },
    {
      name: "Expense Tracker",
      category: "react",
      github: "https://github.com/ALI-RAZA816/React-Mini-Projects/tree/main/expensetracker",
      livedemo: "https://expensetracker-c3wcqhhyg-ali-raza-mujahids-projects.vercel.app/",
      image: "/thumbnails/javascript expense tracker.png"
    },
    {
      name: "Smart Watch",
      category: "bootstrap",
      github: "https://github.com/ALI-RAZA816/Smart-Watch.git",
      livedemo: "https://pulse-fit-smart-watch-imatcu2k4-ali-raza-mujahids-projects.vercel.app/",
      image: "/thumbnails/bootstrap watch.png"
    },
    {
      name: "Idigitalpreneur",
      category: "javascript",
      github: "https://github.com/ALI-RAZA816/JS-Web-Projects/tree/main/IditigalPreneur%20Clone",
      livedemo: "https://iditigal-preneur-clone-rlvzojst9-ali-raza-mujahids-projects.vercel.app/",
      image: "/thumbnails/javascript idigitalpreneur.png"
    },
    {
      name: "Dashboard",
      category: "react",
      github: "https://github.com/ALI-RAZA816/Crypto-Dashboard.git",
      livedemo: "https://crypto-dashboard-mu-seven.vercel.app/",
      image: "/thumbnails/react dashboard.png"
    },
    {
      name: "Resturant",
      category: "bootstrap",
      github: "https://github.com/ALI-RAZA816/JS-Web-Projects/tree/main/Chillica%20Resturant%20Project",
      livedemo: "https://chillica-resturant-project-l166iwtzg-ali-raza-mujahids-projects.vercel.app/",
      image: "/thumbnails/bootstrap resturant.png"
    },
    {
      name: "Dictionary App",
      category: "javascript",
      github: "https://github.com/ALI-RAZA816/JS-Mini-Projects/tree/main/Dictionary%20App",
      livedemo: "https://dictionary-qv4fk1s0d-ali-raza-mujahids-projects.vercel.app/",
      image: "/thumbnails/javascript dicitonary app.png"
    },
    {
      name: "Game Website",
      category: "react",
      github: "https://github.com/ALI-RAZA816/React-Web-Projects/tree/main/Gaming%20Website",
      livedemo: "https://gaming-website-cbf417.netlify.app/",
      image: "/thumbnails/react gaming website.png"
    },
  ]

  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [activefilter, setActivefilter] = useState('');
  const [projects, setProjects] = useState(portfolio);

  const barHandler = () => setMenu(true);
  const crossHandler = (link) => {
    setMenu(false)
    setActiveLink(link);
  };

  const filterActiveHandler = (filter) => {
    setActivefilter(filter);
    if (filter === 'all') {
      setProjects(portfolio)
    } else if (filter === 'bootstrap') {
      const bootstrap = portfolio.filter(item => item.category === 'bootstrap');
      setProjects(bootstrap);
    } else if (filter === 'javascript') {
      const bootstrap = portfolio.filter(item => item.category === 'javascript');
      setProjects(bootstrap);
    } else if (filter === 'react') {
      const bootstrap = portfolio.filter(item => item.category === 'react');
      setProjects(bootstrap);
    }
  }

  useEffect(() => {
    setActivefilter("all");
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out-quad', // Easing function
      once: true, // Whether animation should happen only once
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Delay in milliseconds
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
      <Router>
        <Header barHandler={barHandler} menu={menu} crossHandler={crossHandler} activeLink={activeLink} />
        <Switch>
          <Route exact path="/">
            <HeroSection />
            <Service />
            <About />
            <Skills />
            <Portfolio filterActiveHandler={filterActiveHandler} activefilter={activefilter} projects={projects} />
            <Contact />
          </Route>
          <Route exact path="/details">
            <MoreProjects />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
