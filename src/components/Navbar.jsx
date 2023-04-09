import React from 'react'
import { Link } from 'react-router-dom';
import style from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.logo}>QUIZ PLUS</div>
            <div className={style.navbarlistsection}>
                <Link to='/'><span className={style.listname}>Home</span></Link>
                <Link to='/about'><span className={style.listname}>About us</span></Link>
                <Link to='/login'> <span className={style.listname}>Login</span></Link>
                <Link to='/register'> <span className={style.listname}>Register</span></Link>
            </div>
        </div>
    )
}

export default Navbar