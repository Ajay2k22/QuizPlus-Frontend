import React from 'react'
import style from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <div className={style.container}>
            {/* uppersection */}
            <div className={style.upper}>
                {/* heading */}
                <div className={style.content}>
                    <h2>QuizPlus</h2>
                    <span id={style.span}>Quiz Made Easy</span>
                </div>

                <div className={style.content}>
                    <span>Useful Links</span>
                    <span>Home</span>
                    <span>Create Quiz</span>
                    <span>F.A.Q</span>
                </div>

                <div className={style.content}>
                    <span>Social Networks</span>
                    <span>Instagram</span>
                    <span>Youtube</span>
                    <span>Twitter</span>
                </div>

                <div className={style.content}>
                    <span>Contact Us</span>
                    <span>help@quizplus.com</span>
                </div>
            </div>
            {/* lowersection */}
            <div className={style.lower}>
                <span>© 2023 QuizPlus . . All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer