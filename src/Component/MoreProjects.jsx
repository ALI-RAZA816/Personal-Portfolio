import style from '../css/MoreProjects.module.css';


export default function MoreProjects() {
  return (
    <div className={style.projectsContainer}>
        <div className={style.filterBox}>
            <h1>Filter</h1>
            <select name="" id="">
                <option value="all">All</option>
                <option value="all">React</option>
                <option value="all">Javascript</option>
                <option value="all">Bootstrap</option>
            </select>
        </div>
    </div>
  )
}
