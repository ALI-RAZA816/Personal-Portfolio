import style from '../css/Service.module.css';
import { FaCode, FaMobile } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { FaCubes } from "react-icons/fa6";
import { FaDiagramSuccessor } from "react-icons/fa6";

export default function Service() {
  return (
    <div style={{overflow:'hidden'}} className={style.serviceSection} id='services'>
        <div className={style.wrapper}>
            <h1>Services</h1>
            <p>Transforming ideas into exceptional digital experiences that drive growth.</p>
            <div className={style.servicesGrid}>
                <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500" data-aos-offset="300">
                    <FaCode style={{color:'#FD6F00',fontSize:"50px"}} />
                    <h2>Web Development</h2>
                    <p>Building fast, scalable web applications with modern frameworks like React.js</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500" data-aos-offset="300">
                    <FaMobile style={{color:'#FD6F00',fontSize:"50px"}} />
                    <h2>Responsive Design</h2>
                    <p>Mobile-first designs that adapt seamlessly to any screen size</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500" data-aos-offset="300">
                    <BsGraphUpArrow style={{color:'#FD6F00',fontSize:"50px"}} />
                    <h2>Web Optimization</h2>
                    <p>Boosting speed, performance, and search engine visibility</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500" data-aos-offset="300">
                    <GrGroup style={{color:'#FD6F00',fontSize:"50px"}} />
                    <h2>UI/UX Integration</h2>
                    <p>Creating intuitive interfaces that users love to interact with</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500" data-aos-offset="300">
                    <FaCubes style={{color:'#FD6F00',fontSize:"50px"}} />
                    <h2>Web Maintenance</h2>
                    <p>Keeping your website secure, updated, and running 24/7</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="500" data-aos-offset="300">
                    <FaDiagramSuccessor style={{color:'#FD6F00',fontSize:"50px"}} />
                    <h2>Pixel Perfect</h2>
                    <p>Pixel-perfect implementation that matches designs exactly</p>
                </div>
            </div>
        </div>      
    </div>
  )
}
