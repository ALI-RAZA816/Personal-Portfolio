import style from '../css/Portfolio.module.css';

export default function Portfolio({filterActiveHandler ,activefilter}) {
    return (
        <div style={{ overflow: 'hidden' }} className={style.portfolio} id='portfolio'>
            <div className={style.wrapper}>
                <h1>Portfolio</h1>
                <p>A curated showcase of innovative projects where clean code meets creative design.</p>
                <div className={style.filterBtn}>
                    <button className={activefilter === "all" ? style.filterActive : undefined} onClick={() => filterActiveHandler("all")}>All</button>
                    <button className={activefilter === "javascript" ? style.filterActive : undefined} onClick={() => filterActiveHandler("javascript")}>Javascript</button>
                    <button className={activefilter === "react" ? style.filterActive : undefined} onClick={() => filterActiveHandler("react")}>React</button>
                    <button className={activefilter === "bootstrap" ? style.filterActive : undefined} onClick={() => filterActiveHandler("bootstrap")}>Bootstrap</button>
                </div>
                <div className={style.projectsCollection}>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div style={{ position: 'relative' }} className={style.img}>
                            <img src="/thumbnails/bootstrap portfolio.png" alt="" />
                        </div>
                        <div className={style.btns}>
                            <button>Live Demo</button>
                            <button>GitHub</button>
                        </div>
                        <h1><span>Forever</span><span>e-commerce</span></h1>
                    </div>
                    <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="450">
                        <div style={{ position: 'relative' }} className={style.img}>
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
                        <div style={{ position: 'relative' }} className={style.img}>
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
                        <div style={{ position: 'relative' }} className={style.img}>
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
                        <div style={{ position: 'relative' }} className={style.img}>
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
                        <div style={{ position: 'relative' }} className={style.img}>
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
