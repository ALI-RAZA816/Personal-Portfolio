import style from '../css/About.module.css';
import { LuDownload } from "react-icons/lu";
export default function About() {
    return (
        <div className={style.aboutSection}>
            <div className={style.wrapper}>
                <h1>About Me</h1>
                <p>A web developer using modern technologies to create solutions that drive growth.</p>
                <div className={style.aboutContent}>
                    <div className={style.leftBox}>
                        <img src="/images/about-img.png" alt="" />
                    </div>
                    <div className={style.rightBox}>
                        <p>I am a skilled web developer with over 8 months experience in the industry. My passion lies in creatubg captivating website designs and implementing them through fronted development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience and user interface principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experience. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjouable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand indentity.</p>
                        <button><LuDownload /><span>Download CV</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
