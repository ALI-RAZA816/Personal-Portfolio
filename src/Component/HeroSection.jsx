import { FaInstagram } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import style from '../css/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={style.heroSection}>
        <div className={style.wrapper}>
            <div className={style.leftBox}>
                <div className={style.intro}>
                    <span>Hi I am</span>
                    <span>Ali Raza Mujahid</span>
                    <h2>React Developer</h2>
                </div>
                <div className={style.socialLinks}>
                    <ul>
                        <li><a href=""><FaInstagram style={{marginTop:".3rem",fontSize:"1.2rem"}} /></a></li>
                        <li><a href=""><ImLinkedin2 style={{fontSize:"1.2rem"}} /></a></li>
                        <li><a href=""><FaTiktok style={{marginTop:".3rem",fontSize:"1.2rem"}} /></a></li>
                        <li><a href=""><VscGithubAlt style={{marginTop:".3rem",fontSize:"1.2rem"}} /></a></li>
                    </ul>
                </div>
                <div className={style.btns}>
                    <button>Hire Me</button>
                    <button>Download CV</button>
                </div>
                <div className={style.stats}>
                    <div>
                        <span>1+</span>
                        <span>Experience</span>
                    </div>
                    <div>
                        <span>20+</span>
                        <span>Projects done</span>
                    </div>
                    <div>
                        <span>1+</span>
                        <span>Happy Clients</span>
                    </div>
                </div>
            </div>
            <div className={style.rightBox}>
                <img src="/images/hero-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}
