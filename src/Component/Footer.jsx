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
                <div className={style.logo} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="450">
                    <h1>Raza</h1>
                </div>
                <div className={style.links} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="450">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact me</a></li>
                    </ul>
                </div>
                <div className={style.socialLinks} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="450">
                    <ul>
                        <li><a href="https://www.instagram.com/alira.za2911?igsh=cnpzNmEyZjA4cnY4"><FaInstagram style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                        <li><a href="https://www.linkedin.com/in/ali-raza-mujahid-532a5630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><ImLinkedin2 style={{ fontSize: "1.2rem" }} /></a></li>
                        <li><a href="https://www.tiktok.com/@alirazamujahid43?_r=1&_t=ZS-938aP1tRLjF"><FaTiktok style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                        <li><a href="https://github.com/ALI-RAZA816"><VscGithubAlt style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                    </ul>
                </div>
                <div className={style.contact} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="450">
                    <p><span><MdOutlineEmail style={{ fontSize: '1.3rem', marginRight: '1rem' }} /></span>alirazamujahid102@gmail.com</p>
                    <p><span><LuPhone style={{ fontSize: '1.3rem', marginRight: '1rem' }} /></span>+923007994674</p>
                </div>
                <p>Develop by ALI RAZA MUJAHID React Developer</p>
            </div>
        </div>
    )
}
