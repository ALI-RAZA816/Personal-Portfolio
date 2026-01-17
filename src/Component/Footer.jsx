import style from '../css/Footer.module.css';
import { FaInstagram } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";

export default function Footer() {
    return (
        <div className={style.footerSection}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <h1>Raza</h1>
                </div>
                <div className={style.links}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact me</a></li>
                    </ul>
                </div>
                <div className={style.socialLinks}>
                    <ul>
                        <li><a href=""><FaInstagram style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                        <li><a href=""><ImLinkedin2 style={{ fontSize: "1.2rem" }} /></a></li>
                        <li><a href=""><FaTiktok style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                        <li><a href=""><VscGithubAlt style={{ marginTop: ".3rem", fontSize: "1.2rem" }} /></a></li>
                    </ul>
                </div>
                <div className="contact">
                    <p>alirazamujahid102@gmail.com</p>
                    <p>+923007994674</p>
                </div>
            </div>
        </div>
    )
}
