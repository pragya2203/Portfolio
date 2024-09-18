import React from "react";
import projectImg from "./../../../assets/project.png";
import style from "./Project.module.css";

const Project = () =>{
    return (
    <section id="projects">
        <h2 className={style.title}>Projects</h2>
        <div className={style.container}>
             <div className={style.project}>
                <img src={projectImg} className={style.projectImg}/>
                <h3 className={style.projectTitle}>Amazon Clone</h3>
                <p className={style.projectDescription}>Developed a single-page layout that includes essential sections such as the header, product categories, featured 
                products, and footer.</p>
               <ul className={style.skill}>
                    <li className={style.skills}>HTML</li>
                    <li className={style.skills}>CSS</li>
                </ul>
                <div className={style.link}>
                <a href="https://github.com/pragya2203/amazon-clone" className={style.projectLink}>Source</a>
                </div>
             </div>
             <div className={style.project}>
                <img src={projectImg} className={style.projectImg}/>
                <h3 className={style.projectTitle}>Rock Paper Scissors </h3>
                <p className={style.projectDescription}>Developed an interactive Rock, Paper, Scissors game that allows users to play against a computer opponent.</p>
                <ul className={style.skill}>
                    <li className={style.skills}>HTML</li>
                    <li className={style.skills}>CSS</li>
                    <li className={style.skills}>Javascript</li>
                </ul>
                <div className={style.link}>
                <a href="https://github.com/pragya2203/rock-paper-scissors-game" className={style.projectLink}>Source</a>
                </div>
             </div>
        </div>
    </section>
    );
}

export default Project;