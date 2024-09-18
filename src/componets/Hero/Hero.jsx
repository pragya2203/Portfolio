import React from 'react';
import style from './Hero.module.css';
import heroImage from '../../../assets/heroImage.png';

const hero = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
        <h1 className={style.title}>Hi, I'm Pragya</h1>    
        <p className={style.description}>and I'm a Web Developer</p>
        <a href="mailto:pragyasingh2203@gmail.com" className={style.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Image" className={style.hero}/>
        <div className={style.topBlur}/>
        <div className={style.bottomBlur}/>
    </section>
  );
}
export default hero;


