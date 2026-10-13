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
                <div data-aos="zoom-in" data-aos-easing="linear">
                    <FaCode style={{color:'#7c9bfa',fontSize:"50px"}} />
                    <h2>Full Stack Development</h2>
                    <p>Building fast, scalable web applications with PHP, Laravel and React.js</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear">
                    <FaMobile style={{color:'#7c9bfa',fontSize:"50px"}} />
                    <h2>Responsive Design</h2>
                    <p>Mobile-first designs that adapt seamlessly to any screen size</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear">
                    <BsGraphUpArrow style={{color:'#7c9bfa',fontSize:"50px"}} />
                    <h2>API Development</h2>
                    <p>Building secure and well-structured RESTful APIs with Laravel</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear">
                    <GrGroup style={{color:'#7c9bfa',fontSize:"50px"}} />
                    <h2>Database Management</h2>
                    <p>Designing efficient, reliable database structures for your application</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear">
                    <FaCubes style={{color:'#7c9bfa',fontSize:"50px"}} />
                    <h2>Web Maintenance</h2>
                    <p>Keeping your website secure, updated, and running 24/7</p>
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear">
                    <FaDiagramSuccessor style={{color:'#7c9bfa',fontSize:"50px"}} />
                    <h2>Pixel Perfect</h2>
                    <p>Pixel-perfect implementation that matches designs exactly</p>
                </div>
            </div>
        </div>      
    </div>
  )
}
