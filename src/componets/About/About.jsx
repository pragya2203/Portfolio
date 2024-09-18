import React from 'react';
import style from "./About.module.css";
import aboutImage from '../../../assets/aboutImage.png';
import cursorIcon from '../../../assets/cursorIcon.png';
import serverIcon from '../../../assets/serverIcon.png';

const About = () => {
  return (
    <section className={style.container} id='about'>
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
        <img 
        src={aboutImage}
        alt="Sitting with a laptop"
        className={style.aboutImage}
        />
        <ul className={style.aboutItems}>
            <li className={style.aboutItem}>
                <img src={cursorIcon} alt='Cursor icon'/>
                <div className={style.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer and I can build responsive and optimized websites
                    </p>
                </div>
            </li>
            <li className={style.aboutItem}>
                <img src={serverIcon} alt='Server icon'/>
                <div className={style.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I can develope fast and optimised backend system and APIs
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  );
}

export default About;
