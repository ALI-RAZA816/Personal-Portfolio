import style from '../css/Portfolio.module.css';
import ProjectCard from './ProjectCard';

export default function Portfolio({ filterActiveHandler, activefilter,projects }) {

   
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
                    {projects.map(item => {
                        return <ProjectCard key = {item.github} name = {item.name} category = {item.category} github = {item.github} livedemo = {item.livedemo} image = {item.image}/>
                    })}
                </div>
            </div>
        </div>
    )
}
