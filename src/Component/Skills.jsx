import style from '../css/Skills.module.css';
import { FaCss3Alt, FaBolt, FaServer, FaTasks, FaShieldAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiHtml5, SiJavascript, SiReact, SiJquery, SiBootstrap,
  SiPhp, SiLaravel, SiMysql, SiGit, SiGithub, SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    caption: "Interfaces that feel fast and clean",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#2d8ff0" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "jQuery", icon: SiJquery, color: "#4aa3e0" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#9b6dff" },
    ],
  },
  {
    title: "Backend",
    caption: "Secure, scalable server-side logic",
    skills: [
      { name: "PHP", icon: SiPhp, color: "#8993be" },
      { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
      { name: "REST APIs", icon: FaServer, color: "#22d3ee" },
      { name: "Sanctum Auth", icon: FaShieldAlt, color: "#3ddc97" },
      { name: "Queues & Jobs", icon: FaTasks, color: "#7c9bfa" },
      { name: "MySQL", icon: SiMysql, color: "#4aa0d5" },
    ],
  },
  {
    title: "Tools",
    caption: "My everyday development workflow",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#f2f4f8" },
      { name: "VS Code", icon: VscVscode, color: "#3b9cf0" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "ThunderClient", icon: FaBolt, color: "#f7c948" },
    ],
  },
];

export default function Skills() {
  return (
    <div style={{ overflow: 'hidden' }} className={style.skillsSection} id="skills">
      <div className={style.wrapper}>
        <h1>Skills</h1>
        <p>Technologies and tools I use to build complete, end-to-end web applications.</p>
        <div className={style.groupsGrid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={style.group} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="450">
              <div className={style.groupHead}>
                <h2>{group.title}</h2>
                <span>{group.caption}</span>
              </div>
              <ul className={style.skillList}>
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li key={name} className={style.skill} style={{ '--brand': color }}>
                    <Icon className={style.icon} />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
