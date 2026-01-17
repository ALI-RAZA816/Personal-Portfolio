import style from '../css/Portfolio.module.css';

export default function Portfolio() {
    return (
        <div className={style.portfolio} id='portfolio'>
            <div className={style.wrapper}>
                <h1>Portfolio</h1>
                <p>A curated showcase of innovative projects where clean code meets creative design.</p>
                <div className={style.projectsCollection}>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="450">
                        <div style={{position:'relative'}} className={style.img}>
                            <img src="/images/Rectangle 21.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="450">
                        <div style={{position:'relative'}} className={style.img}>
                            <img src="/images/Rectangle 21.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="450">
                        <div style={{position:'relative'}} className={style.img}>
                            <img src="/images/Rectangle 21.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="450">
                        <div style={{position:'relative'}} className={style.img}>
                            <img src="/images/Rectangle 21.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="450">
                        <div style={{position:'relative'}} className={style.img}>
                            <img src="/images/Rectangle 21.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="450">
                        <div style={{position:'relative'}} className={style.img}>
                            <img src="/images/Rectangle 21.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
