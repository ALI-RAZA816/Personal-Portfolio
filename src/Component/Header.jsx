import style from '../css/Header.module.css';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


export default function Header({barHandler, menu, crossHandler}) {
    return (
        <header id='home'>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <h1>Raza</h1>
                </div>
                <div className={`${style.links} ${menu == true && style.show}`}>
                    <FaXmark onClick={crossHandler} className={style.crossIcon} />
                    <ul className={menu == true && style.openMenu}>
                        <li><a onClick={crossHandler} href="#home">Home</a></li>
                        <li><a onClick={crossHandler} href="#services">Services</a></li>
                        <li><a onClick={crossHandler} href="#about">About me</a></li>
                        <li><a onClick={crossHandler} href="#portfolio">Portfolio</a></li>
                        <li><a onClick={crossHandler} href="#contact">Contact me</a></li>
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
