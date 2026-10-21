import { useContext } from 'react';
import style from '../css/About.module.css';

export default function About() {

    return (
        <div style={{ overflow: 'hidden' }} className={style.aboutSection} id='about'>
            <div className={style.wrapper}>
                <h1>About Me</h1>
                <p>A web developer using modern technologies to create solutions that drive growth.</p>
                <div className={style.aboutContent}>
                    <div className={style.leftBox}>
                        <img src="/images/hero-img.png" alt="Ali Raza Mujahid - Full Stack Developer" />
                    </div>
                    <div className={style.rightBox} data-aos="fade-left" data-aos-duration="500">
                        <p>I am a skilled <b style={{ color: '#22d3ee', fontSize: '16px' }} >Full Stack Developer</b> with hands-on experience building complete web applications from front end to back end. My passion lies in designing clean user interfaces and backing them up with robust, secure, and scalable server-side logic using PHP and Laravel. I take pride in staying up-to-date with modern development practices and leveraging my skills across the full stack to deliver seamless, end-to-end solutions. Throughout my journey, I have developed a solid understanding of both front-end technologies like React, JavaScript, jQuery and Bootstrap, and back-end concepts like MVC architecture, RESTful APIs, and database management. By combining strong front-end design sense with reliable back-end engineering, I strive to build applications that are not only visually appealing but also fast, secure, and maintainable. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my solutions to meet their expectations and deliver a unique, fully functional product that aligns with their business goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
