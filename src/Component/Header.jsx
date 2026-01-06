import style from '../css/Header.module.css';

export default function Header() {
    return (
        <header>
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
                <button>Hire me</button>
            </div>
        </header>
    )
}
