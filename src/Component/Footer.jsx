import style from '../css/Footer.module.css';
import { FaInstagram } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";


export default function Footer() {
    return (
        <div style={{ overflow: 'hidden' }} className={style.footerSection}>
            <div className={style.wrapper}>
                <div className={style.logo} data-aos="fade-up" data-aos-easing="linear">
                    <h1>Raza</h1>
                </div>
                <div className={style.links} data-aos="fade-up" data-aos-easing="linear">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact me</a></li>
                    </ul>
                </div>
                <div className={style.socialLinks} data-aos="fade-up" data-aos-easing="linear">
                    <ul>
                        <li><a href="#"><FaInstagram style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                        <li><a href="#"><ImLinkedin2 style={{ fontSize: "1.2rem" }} /></a></li>
                        <li><a href="#"><FaTiktok style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                        <li><a href="#"><VscGithubAlt style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                    </ul>
                </div>
                <div className={style.contact} data-aos="fade-up" data-aos-easing="linear">
                    <p><span><MdOutlineEmail style={{ fontSize: '1.3rem', marginRight: '1rem' }} /></span>alirazamujahid102@gmail.com</p>
                    <p><span><LuPhone style={{ fontSize: '1.3rem', marginRight: '1rem' }} /></span>+923007994674</p>
                </div>
                <p>Develop by ALI RAZA MUJAHID Laravel Full Stack Developer</p>
            </div>
        </div>
    )
}
