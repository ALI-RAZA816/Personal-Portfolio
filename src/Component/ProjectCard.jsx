import style from '../css/ProjectCard.module.css'

export default function ProjectCard({name, category, github , livedemo, image}) {
    return (
        <div className={style.cards} data-aos="zoom-in" data-aos-easing="linear">
            <div style={{ position: 'relative' }} className={style.img}>
                <img src={image} alt="" />
            </div>
            <div className={style.btns}>
                <button><a href={livedemo}>Live Demo</a></button>
                <button><a href={github}>GitHub</a></button>
            </div>
            <h1><span>{name}</span><span>{category}</span></h1>
        </div>
    )
}
