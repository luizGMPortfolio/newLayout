import React from 'react'
import './Home.css'

import Title from '../Components/Title'
import Carousel from '../Components/Carousel'

import { useState, useEffect } from 'react'

import { Link, useNavigate } from "react-router-dom";


const Home = ({ Change_page, setMenu }) => {


  const [text, setText] = useState('hrc-text-hidden');
  const [moveOn_Out, setMoveOn_Out] = useState();
  const navigate = useNavigate();

  const handleMove_icons = (name) => {
    setMove_icons(name);
  };

  const handleMoveOn_Out = (name) => {
    setMoveOn_Out(name);
    setText(name);
    console.log(moveOn_Out)
    console.log(text)
  };


  const redirectToBuilding1 = () => {
    navigate('/Building');
    Change_page(0)
  };
  const redirectToBuilding2 = () => {
    navigate('/Building');
    Change_page(1)
  };
  const redirectToBuilding3 = () => {
    navigate('/Building');
    Change_page(2)
  };
  const redirectToBuilding4 = () => {
    navigate('/Building');
    Change_page(3)
  };

  useEffect(() => {
    document.querySelector('html').style.overflowY = "visible";
    setMenu('home')
  }, []);

  return (

    <div className='home'>
      <div className='home-left'>

        <div className='hl-wellcome'>
          <Title title={'Bem-vindo à LGM!'} />
          <div>
            <p>Transformamos ideias em realidade digital. Seja você um empreendedor visionário, uma startup ambiciosa ou uma empresa consolidada buscando inovação, estamos aqui para impulsionar sua presença online.</p>
            <p>Nossa equipe de especialistas em desenvolvimento web é apaixonada por criar experiências online excepcionais. Desde sites elegantes e responsivos até aplicativos web dinâmicos e escaláveis, estamos prontos para colaborar com você em cada etapa do processo de desenvolvimento.</p>
            <p>Descubra como podemos levar sua visão para o próximo nível. Vamos começar a criar juntos!</p>
          </div>
        </div>

        <hr />

        <div className='hl-building'>
          <div className='hlb-text'>
            <h2>Veja como são desenvolvidos sites e apicativos</h2>
          </div>
          <div className='hlb-icons'>
            <ul>

              <li onMouseMove={() => handleMoveOn_Out('dev')} onClick={redirectToBuilding1} className={`hlbi-li ${moveOn_Out === 'dev' ? 'hlbi-li-show' : ''}`}>
                <i class="fa-solid fa-code fa-lg" ></i>
                <span className={text === 'dev' ? 'show' : 'hidden'}>Desenvolvimento</span>
              </li>

              <li onMouseMove={() => handleMoveOn_Out('Des')} onClick={redirectToBuilding2} className={`hlbi-li ${moveOn_Out === 'Des' ? 'hlbi-li-show' : ''}`}>
                <i class="fa-regular fa-window-restore fa-lg" ></i>
                <span className={text === 'Des' ? 'show' : 'hidden'}>Design</span>
              </li>

              <li onMouseMove={() => handleMoveOn_Out('Resp')} onClick={redirectToBuilding3} className={`hlbi-li ${moveOn_Out === 'Resp' ? 'hlbi-li-show' : ''}`}>
                <i class="fa-solid fa-mobile fa-lg"></i>
                <span className={text === 'Resp' ? 'show' : 'hidden'}>Responsivo</span>
              </li>


              <li onMouseMove={() => handleMoveOn_Out('Simple')} onClick={redirectToBuilding4} className={`hlbi-li ${moveOn_Out === 'Simple' ? 'hlbi-li-show' : ''}`}>
                <i class="fa-solid fa-handshake-simple fa-lg" ></i>
                <span className={text === 'Simple' ? 'show' : 'hidden'}>Simples</span>
              </li>


            </ul>
          </div>

        </div>
      </div>
      <div className='home-right'>

        <hr />

        <div className='hr-themes'>
          <Carousel />
        </div>

        <hr />

        <div className='hr-contact'>

          <div className='hrc-container'>
            <div>
              <a
                href="https://wa.me/5196388081" target="_blank"
                onMouseMove={() => handleMoveOn_Out('whats')}
                onMouseOut={() => handleMoveOn_Out('')}
                className={`hrcc-a ${moveOn_Out === 'whats' ? 'hrcca-show' : ''}`}>
                <i class="fa-brands fa-whatsapp fa-2xl"></i>
                <span className={text === 'whats' ? 'hrc-text-show' : 'hrc-text-hidden'}>Chama no Whats</span>
              </a>
            </div>

            <div>
              <a
                href='https://www.instagram.com/lgmdeveloper' target="_blank"
                onMouseMove={() => handleMoveOn_Out('insta')}
                onMouseOut={() => handleMoveOn_Out('')}
                className={`hrcc-a ${moveOn_Out === 'insta' ? 'hrcca-show' : ''}`}>
                <i class="fa-brands fa-instagram fa-2xl"></i>
                <span className={text === 'insta' ? 'hrc-text-show' : 'hrc-text-hidden'}>Visite nosso inta!</span>
              </a>
            </div>

            <Link to='/Contact'>
              <button>
                Contact
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>


        </div>
      </div>

    </div>

  )
}

export default Home