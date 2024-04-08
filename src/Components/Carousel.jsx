import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

import img from '../assets/eCommerce-Development.svg'
import img1 from '../assets/landing.svg'
import img2 from '../assets/portifolio.svg'
import img3 from '../assets/aplicativo.svg'
import img4 from '../assets/blog.webp'
import img5 from '../assets/AutomaçãoSvg.svg'
import img6 from '../assets/Api.svg'


const Carousel = () => {
  const settings = {
    dots: false, // Exibe os pontos de navegação
    infinite: true, // Permite navegação infinita
    speed: 600, // Velocidade da transição em milissegundos
    slidesToShow: 1, // Quantidade de slides exibidos simultaneamente
    slidesToScroll: 1, // Quantidade de slides para rolar por vez
    autoplay: true, // Ativa o slide automático
    autoplaySpeed: 3000 // Intervalo de tempo entre os slides em milissegundos
  };

  return (
    <Slider {...settings}>
      <div className='slide'>
        <img src={img} alt="Imagem 1" />
        <div className='hrtc-text'>
          <h2>E-commerce</h2>
          <hr />
          <p>Seu proximo comercio digital, venda seus produtos ou serviço, elementos-chave de um e-commerce incluem catálogo de produtos variados e uma ótima experiencia de compra para o cliente.</p>
        </div>
      </div>
      <div className='slide'>
        <img src={img1} alt="Imagem 2" />
        <div className='hrtc-text'>
          <h2>Landing Page</h2>
          <hr />
          <p>Página com um objetivo específico em mente, converter visitantes em leads ou clientes. projetada para ser simples, direta e persuasiva. Com foco em uma única oferta ou chamada para ação.</p>
        </div>
      </div>
      <div className='slide'>
        <img src={img2} alt="Imagem 3" />
        <div className='hrtc-text'>
          <h2>Portifólio</h2>
          <hr />
          <p>Organize seus trabalhos ou projetos, da empresa ou equipe, destinado a demonstrar suas habilidades, competências e realizações em uma determinada área.</p>
        </div>
      </div>
      <div className='slide'>
        <img src={img3} alt="Imagem 4" />
        <div className='hrtc-text'>
          <h2>Aplicativos</h2>
          <hr />
          <p>Que tal um app para você ou seu negócio, dedicado para smartphones e tablets. desde jogos e entretenimento até utilitários, produtividade, redes sociais, saúde, finanças e muito mais.</p>
        </div>
      </div>
      <div className='slide'>
        <img src={img4} alt="Imagem 5" />
        <div className='hrtc-text'>
          <h2>Blogs</h2>
          <hr />
          <p>Crie sua pagina pessoal dedicada ao seu conteúdo, fale sobre o que mais gosta. Faça videos, fotos, artigos e muito mais.</p>
        </div>
      </div>
      <div className='slide'>
        <img src={img5} alt="Imagem 6" />
        <div className='hrtc-text'>
          <h2>Automação</h2>
          <hr />
          <p>Automatize seus redes sociais, como whats ou instagram, deixe seu serviço mais rapido e melhor para seus clientes.</p>
        </div>
      </div>
      <div className='slide'>
        <img src={img6} alt="Imagem 7" />
        <div className='hrtc-text'>
          <h2>Aplicações</h2>
          <hr />
          <p>Deseja um software masi robusto, ou um banco de dados de grnade porte, uma Api se encaixa perfeitamente no caso, fazendo uma REST api completa.</p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;