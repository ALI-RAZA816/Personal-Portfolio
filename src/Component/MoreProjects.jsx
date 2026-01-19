import { useEffect, useState } from 'react';
import { projects } from '../../projectsdata';
import style from '../css/MoreProjects.module.css';
import ProjectCard from './ProjectCard';


export default function MoreProjects() {


  const [filter, setFilter] = useState('all');
  const [Projects, setProjects] = useState(projects);

  const filterHandler = (event) =>{
    setFilter(event.target.value);
   
  }

  useEffect(()=> {
     if(filter === 'all'){
      setProjects(projects);
    }else if(filter === 'react'){
      const filterProducts = projects.filter(item => item.category === 'react');
      setProjects(filterProducts);
    }else if(filter === 'javascript'){
      const filterProducts = projects.filter(item => item.category === 'javascript');
      setProjects(filterProducts);
    }else if(filter === 'bootstrap'){
      const filterProducts = projects.filter(item => item.category === 'bootstrap');
      setProjects(filterProducts);
    }
  },[filter]);
  
  return (
    <div className={style.projectsContainer}>
      <div className={style.wrapper}>
        <div className={style.filterBox}>
          <h1>Filter</h1>
          <select value={filter} onChange={filterHandler} name="" id="">
            <option value="all">All</option>
            <option value="react">React</option>
            <option value="javascript">Javascript</option>
            <option value="bootstrap">Bootstrap</option>
          </select>
        </div>
        <div className={style.projects}>
          <h1>Projects</h1>
          <div className={style.projectGrid}>
            {Projects.map(item => {
              return <ProjectCard key = {item.github} name = {item.name} category = {item.category} github = {item.github} livedemo = {item.livedemo} image = {item.image}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
