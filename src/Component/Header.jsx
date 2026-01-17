import style from '../css/Header.module.css';

export default function Header() {
    return (
        <header id='home'>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <h1>Raza</h1>
                </div>
                <div className={style.links}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>
                </div>
                <button>Hire me</button>
            </div>
        </header>
    )
}
