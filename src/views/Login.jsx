import React from 'react'
import style from '../styles/Login.module.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  // handle login button

  const handleLoginbtn = () => {
    navigate('/mainpage')
  }

  return (
    <>
      <Navbar />
      <div className={style.container}>
        {/* heading */}
        <h2>QuizPlus</h2>
        {/* paragraph */}
        <div className={style.paragraph}>
          Welcome  back!
          Please login/Signup to your account.
        </div>
        {/* email address input */}
        <input placeholder='Enter Email Address' type="text" name="email" />
        {/* password input */}
        <input placeholder='Enter Password' type="text" name="password" />
        {/* button  */}
        <div className={style.btn}>
          <button onClick={handleLoginbtn}>Log in</button>
        </div>
        {/* signup here content */}
        <div className={style.content}>
          Don’t Have an account? <span style={{ color: '#3792DE' }}>Signup Now.</span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login