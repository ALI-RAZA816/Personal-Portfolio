import style from '../css/Service.module.css';
import { FaCode, FaMobile } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { FaCubes } from "react-icons/fa6";
import { FaDiagramSuccessor } from "react-icons/fa6";

export default function Service() {
  return (
    <div className={style.serviceSection}>
        <div className={style.wrapper}>
            <h1>Services</h1>
            <p>Transforming ideas into exceptional digital experiences that drive growth.</p>
            <div className={style.servicesGrid}>
                <div>
                    <FaCode />
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div>
                    <FaMobile />
                    <h2>Responsive Design</h2>
                    <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div>
                    <BsGraphUpArrow />
                    <h2>Web Optimization</h2>
                    <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div>
                    <GrGroup />
                    <h2>UI/UX Integration</h2>
                    <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div>
                    <FaCubes />
                    <h2>Web Maintenance</h2>
                    <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div>
                    <FaDiagramSuccessor />
                    <h2>Pixel Perfect</h2>
                    <p>Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </div>      
    </div>
  )
}
