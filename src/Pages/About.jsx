import './About.css'

import img from '../assets/perfil.jpeg'
import Title from '../Components/Title'

import { useEffect } from 'react'

const About = ({ setMenu }) => {

  useEffect(() => {
    document.querySelector('html').style.overflowY = "visible";
    setMenu('about')
  }, []);

  return (
    <div className='About'>
      <div className='image'>
        <img src={img} alt="" />
      </div>
      <div className='discrip'>
        <div className='text'>
          <Title title={'About'} />
          <hr />
          <p>Programador front-end criativo, com muito experiência teórica e prática. Possuo foco em front-end e já executei trabalhos de desenvolvimento web como freelancer, utilizando React e Frame motion. Além disso, desejo continuar aprimorando minhas habilidades e me tornar capaz de desenvolver APIs web e Mobile de forma eficiente e em grande escala.</p>
          <div className='button'>
            <span>Check out my profile with my projects and work already done! </span>
            <button><a href="https://portifolio-hazel-tau.vercel.app" target="_blank">To View</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About