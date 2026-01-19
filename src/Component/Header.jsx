import style from '../css/Header.module.css';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  Link
} from "react-router-dom";

export default function Header({barHandler, menu, crossHandler, activeLink}) {
    return (
        <header>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <h1>Raza</h1>
                </div>
                <div className={`${style.links} ${menu == true ? style.show : undefined}`}>
                    <FaXmark onClick={crossHandler} className={style.crossIcon} />
                    <ul className={menu == true ? style.openMenu : undefined}>
                        <li><Link className={activeLink === "home" ? style.active : undefined}  onClick={() => crossHandler("home")} to="/">Home</Link></li>
                        <li><a className={activeLink === "services" ? style.active : undefined} onClick={() => crossHandler("services")} href="#services">Services</a></li>
                        <li><a className={activeLink === "about" ? style.active : undefined} onClick={() => crossHandler("about")} href="#about">About me</a></li>
                        <li><a className={activeLink === "portfolio" ? style.active : undefined}  onClick={() => crossHandler("portfolio")} href="#portfolio">Portfolio</a></li>
                        <li><a className={activeLink === "contact" ? style.active : undefined}  onClick={() => crossHandler("contact")} href="#contact">Contact me</a></li>
                    </ul>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <button>Hire me</button>
                <FaBars onClick={barHandler} className={style.menuIcon} />
                </div>
            </div>
        </header>
    )
}
