import { FaInstagram } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import style from '../css/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div style={{overflow:'hidden'}} className={style.heroSection}>
        <div className={style.wrapper}>
            <div className={style.leftBox} data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="500">
                <div className={style.intro}>
                    <span>Hi I am</span>
                    <span>Ali Raza Mujahid</span>
                    <h2>React Developer</h2>
                </div>
                <div className={style.socialLinks}>
                    <ul>
                        <li><a href="https://www.instagram.com/alira.za2911?igsh=cnpzNmEyZjA4cnY4"><FaInstagram style={{marginTop:".3rem",fontSize:"1.2rem"}} /></a></li>
                        <li><a href="https://www.linkedin.com/in/ali-raza-mujahid-532a5630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><ImLinkedin2 style={{fontSize:"1.2rem"}} /></a></li>
                        <li><a href="https://www.tiktok.com/@alirazamujahid43?_r=1&_t=ZS-938aP1tRLjF"><FaTiktok style={{marginTop:".3rem",fontSize:"1.2rem"}} /></a></li>
                        <li><a href="https://github.com/ALI-RAZA816"><VscGithubAlt style={{marginTop:".3rem",fontSize:"1.2rem"}} /></a></li>
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
                <img src="/images/hero-img copy.png" alt="" />
            </div>
        </div>
    </div>
  )
}
