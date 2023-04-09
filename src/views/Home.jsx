import React from 'react'
import Home1 from '../images/home2.png'
import Navbar from '../components/Navbar';
import Featureimg from '../images/featureimg.png'
import joinQuiz from '../images/menu.png'
import createQuiz from '../images/createquizlogo.png'
import style from '../styles/Home.module.css'
import Hero from '../images/Heroimg.png'
import { useNavigate } from 'react-router-dom';
import f2 from '../images/f2.png'
import f1 from '../images/f1.png'
import q from '../images/q.png'
import d from '../images/d.png'
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const oncreateQuiz = () => {
    navigate('/login')
  }

  return (
    <>
      <Navbar />
      <div className={style.container} >
        <div className={style.left}>
          <div className={style.homecontent}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--textcolor)' }}>Quizzes Made Easy</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Create and take quizzes easily with <span style={{ color: 'var(--textcolor)' }}>“ QuizPlus “</span>
            </p>
            <div className={style.buttons}>
              <div onClick={(e) => { alert("Iam here") }} className={style.btn}>
                <div className={style.img}>
                  <img src={createQuiz} alt="create quiz logo" />
                </div>
                <span onClick={oncreateQuiz}>Create Quiz</span>
              </div>
              <div className={style.btn}>
                <div className={style.img}>
                  <img src={joinQuiz} alt="join quiz logo" />
                </div>
                <span>Join Quiz</span>
              </div>
            </div>
          </div>

        </div>
        <div className={style.right}>
          <div className={style.imagecontainer}>
            <img className={style.image} src={Home1} alt="" />
          </div>
        </div>
      </div>
      <div className={style.features}>
        <div className={style.top1}>
          <span>Features</span>
        </div>
        <div className={style.top2}>
          <div className={style.col}>
            <div className={style.fleft}>
              <div className={style.fimagecontainer}>
                <img src={Featureimg} alt="Feature logo" />
              </div>
            </div>
            <div className={style.fright}>
              <div className={style.content}>
                <h2>Create Custom Quizzes</h2>
                <p>Our application allows you to create your own custom quizzes with a name, description, grading system, and time limit.</p>
              </div>
            </div>
          </div>

          <div className={style.col}>
            <div className={style.fright}>
              <div className={style.content}>
                <h2>Competitive Features</h2>
                <p>You can view your score on the leaderboard and compare your results with other users who have taken the same quiz .</p>
              </div>
            </div>
            <div className={style.fleft}>
              <div className={style.fimagecontainer}>
                <img src={f1} alt="Feature logo" />
              </div>
            </div>
          </div>

          <div className={style.col}>
            <div className={style.fleft}>
              <div className={style.fimagecontainer}>
                <img src={f2} alt="Feature logo" />
              </div>
            </div>
            <div className={style.fright}>
              <div className={style.content}>
                <h2>User-Friendly Interface</h2>
                <p>Our application is designed with a clean and intuitive interface that makes it easy to create, edit, and take quizzes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.faq}>
        <div className={style.container1}>
          <div className={style.faqheading}><h2>Frequently Asked Questions </h2></div>
          <div className={style.faqquestioncontainer}>
            <div className={style.faqcontent}>
              <div className={style.img1}>
                <img src={q} alt="qlogo" />
              </div>
              <span>How do I create a quiz?</span>
              <div className={style.img1}>
                <img src={d} alt="qlogo" />
              </div>
            </div>
            <div className={style.faqcontent}>
              <div className={style.img1}>
                <img src={q} alt="qlogo" />
              </div>
              <span>How do I take a quiz?</span>
              <div className={style.img1}>
                <img src={d} alt="qlogo" />
              </div>
            </div>
            <div className={style.faqcontent}>
              <div className={style.img1}>
                <img src={q} alt="qlogo" />
              </div>
              <span>How do I view my quiz results?</span>
              <div className={style.img1}>
                <img src={d} alt="qlogo" />
              </div>
            </div>
            <div className={style.faqcontent}>
              <div className={style.img1}>
                <img src={q} alt="qlogo" />
              </div>
              <span>How do I Can I share my quizzes with others? a quiz?</span>
              <div className={style.img1}>
                <img src={d} alt="qlogo" />
              </div>
            </div>

            <div className={style.faqcontent}>
              <div className={style.img1}>
                <img src={q} alt="qlogo" />
              </div>
              <span>Is my personal information safe on your platform?</span>
              <div className={style.img1}>
                <img src={d} alt="qlogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home