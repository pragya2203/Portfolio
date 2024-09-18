import React, {useState} from 'react';
import style from "./Navbar.module.css";
import menuIcon from "./../../../assets/menuIcon.png";
import closeIcon from "./../../../assets/closeIcon.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navbar}>
        <a className={style.title} href="/">Porfolio</a>
        <div className={style.menu}>
            <img 
            className={style.menuBtn} 
            src={
                menuOpen
                ? menuIcon 
                : closeIcon} 
                alt='menu-button'
                onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`} > 
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}
export default Navbar;


