import React from "react";
import style from "./Skills.module.css";
import HTML from '../../../assets/html.png';
import CSS from '../../../assets/css.png';
import Javascript from '../../../assets/javascript.png';
import jQuery from '../../../assets/jquery.png';
import Tailwind from '../../../assets/tailwind.png';
import REACT from '../../../assets/react.png';
import Node from '../../../assets/node.png';
import Express from '../../../assets/express.png';
import Mongodb from '../../../assets/mongodb.png';
import EJS from '../../../assets/ejs.png';
import Cpp from '../../../assets/cpp.png';
import C from '../../../assets/C.png';


const Skills = () => {
   return <section className={style.container} id="skills">
     <h2 className={style.title}>Skills</h2>
     <div className={style.skills}>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={HTML}/>
                </div>
                <p>HTML</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={CSS}/>
                </div>
                <p>CSS</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={Javascript}/>
                </div>
                <p>Javascript</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={jQuery}/>
                </div>
                <p>jQuery</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={Tailwind}/>
                </div>
                <p>Tailwind</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={REACT}/>
                </div>
                <p>React</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={Node}/>
                </div>
                <p>NodeJS</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={Express}/>
                </div>
                <p>ExpressJS</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={EJS}/>
                </div>
                <p>EJS</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={Mongodb}/>
                </div>
                <p>MongoDB</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={Cpp}/>
                </div>
                <p>Cpp</p>
         </div>
         <div className={style.skill}>
                <div className={style.skillImageContainer}>
                    <img src={C}/>
                </div>
                <p>C</p>
         </div>
      </div>
   </section>;
}

export default Skills;