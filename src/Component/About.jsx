import { useContext } from 'react';
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
                    <div className={style.rightBox} data-aos="fade-left" data-aos-duration="500">
                        <p>I am a skilled <b style={{color:'#fff',fontSize:'16px'}} >React Developer</b> with over 8 months experience in the industry. My passion lies in creatubg captivating website designs and implementing them through fronted development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience and user interface principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experience. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjouable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand indentity.</p>
                        <button><LuDownload /><span>Download CV</span></button>
                    </div>
                </div>
                <div className={style.skillStat}>
                    <div style={{textAlign:"center"}} className={`${style.box} ${style.box1} `}>
                        <div className={`${style.circle} ${style.circle1} `}>
                            <span>100%</span>
                        </div>
                        <span>HTML</span>
                    </div>
                    <div style={{textAlign:"center"}} className={`${style.box} ${style.box3} `}>
                        <div className={`${style.circle} ${style.circle3}`}>
                            <span>80%</span>
                        </div>
                        <span>Javascript</span>
                    </div>
                     <div style={{textAlign:"center"}} className={`${style.box} ${style.box2} `}>
                        <div className={`${style.circle} ${style.circle2}`}>
                            <span>85%</span>
                        </div>
                        <span>CSS</span>
                    </div>
                    <div style={{textAlign:"center"}} className={`${style.box} ${style.box4} `}>
                        <div className={`${style.circle} ${style.circle4}`}>
                            <span>90%</span>
                        </div>
                        <span>Bootstrap</span>
                    </div>
                    <div style={{textAlign:"center"}} className={`${style.box} ${style.box5} `}>
                        <div className={`${style.circle} ${style.circle5}`}>
                            <span>75%</span>
                        </div>
                        <span>React</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
