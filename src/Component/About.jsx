import { useContext } from 'react';
import style from '../css/About.module.css';
import { LuDownload } from "react-icons/lu";

export default function About() {

    return (
        <div style={{ overflow: 'hidden' }} className={style.aboutSection} id='about'>
            <div className={style.wrapper}>
                <h1>About Me</h1>
                <p>A web developer using modern technologies to create solutions that drive growth.</p>
                <div className={style.aboutContent}>
                    <div className={style.leftBox}>
                        <img src="/images/about-img.png" alt="" />
                    </div>
                    <div className={style.rightBox} data-aos="fade-left" data-aos-duration="500">
                        <p>I am a skilled <b style={{ color: '#22d3ee', fontSize: '16px' }} >Laravel Full Stack Developer</b> with hands-on experience building complete web applications from front end to back end. My passion lies in designing clean user interfaces and backing them up with robust, secure, and scalable server-side logic using PHP and Laravel. I take pride in staying up-to-date with modern development practices and leveraging my skills across the full stack to deliver seamless, end-to-end solutions. Throughout my journey, I have developed a solid understanding of both front-end technologies like React, JavaScript, jQuery and Bootstrap, and back-end concepts like MVC architecture, RESTful APIs, and database management. By combining strong front-end design sense with reliable back-end engineering, I strive to build applications that are not only visually appealing but also fast, secure, and maintainable. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my solutions to meet their expectations and deliver a unique, fully functional product that aligns with their business goals.</p>
                        <a href="#" download><button><LuDownload /><span>Download CV</span></button></a>
                    </div>
                </div>
<<<<<<< HEAD
=======
                <div className={style.skillStat}>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box1} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle1} `}>
                            <span>100%</span>
                        </div>
                        <span>HTML</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box3} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle3}`}>
                            <span>85%</span>
                        </div>
                        <span>CSS</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box2} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle2}`}>
                            <span>80%</span>
                        </div>
                        <span>Javascript</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box4} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle4}`}>
                            <span>75%</span>
                        </div>
                        <span>jQuery</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box5} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450" >
                        <div className={`${style.circle} ${style.circle5}`}>
                            <span>85%</span>
                        </div>
                        <span>Bootstrap</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box1} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle1} `}>
                            <span>90%</span>
                        </div>
                        <span>PHP</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box3} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle3}`}>
                            <span>90%</span>
                        </div>
                        <span>Laravel</span>
                    </div>
                    <div style={{ textAlign: "center" }} className={`${style.box} ${style.box2} `} data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div className={`${style.circle} ${style.circle2}`}>
                            <span>70%</span>
                        </div>
                        <span>React</span>
                    </div>
                </div>
>>>>>>> 0fc8009fb7339efa5ff1795a11382bda0adfec23
            </div>
        </div>
    )
}
