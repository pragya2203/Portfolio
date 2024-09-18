import React from 'react';
import email from "./../../../assets/emailIcon.png";
import linkedin from "./../../../assets/linkedinIcon.png";
import github from "./../../../assets/githubIcon.png";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id='contact' className={style.container}>
        <div className={style.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={style.links}>
            <li className={style.link}>
                <img src={email} alt="email icon"/>
                <a href="mailto:pragyasingh2203@gmail.com">pragyasingh2203@gmail.com</a>
            </li>
            <li className={style.link}>
                <img src={linkedin} alt="linkedin icon"/>
                <a href="https://www.linkedin.com/in/pragya-singh2203/">www.linkedin.com/in/pragya-singh2203</a>
            </li>
            <li className={style.link}>
                <img src={github} alt="github icon"/>
                <a href="https://github.com/pragya2203">github.com/pragya2203</a>
            </li>
        </ul>
    </footer>
  );
}

export default Contact;
