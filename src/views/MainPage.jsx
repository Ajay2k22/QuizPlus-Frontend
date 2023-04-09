import React from 'react'
import Navbar from '../components/Navbar'
import style from '../styles/MainPage.module.css'
import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
const MainPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className={style.container}>
                {/* heading */}
                <div className={style.heading}>
                    <h2>Welcome Ajay</h2>
                </div>
                {/* create Quiz */}
                <div className={style.btn}>

                </div>
                {/* Descriptions */}
                <div className={style.descriptions}>
                    {/* Recent Quiz */}
                    <div className={style.recentquiz}>
                        <span>Recent Quiz</span>
                    </div>
                    {/* List of Recent Quiz */}

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default MainPage