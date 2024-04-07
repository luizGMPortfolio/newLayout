import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'


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
        <img src="https://d3uom8aq23ax4d.cloudfront.net/wp-content/uploads/2020/11/eCommerce-Development.svg.gzip" alt="Imagem 1" />
        <div className='hrtc-text'>
          <h2>E-commerce</h2>
          <hr />
          <p>Seu proximo comercio digital, venda seus produtos ou serviço, elementos-chave de um e-commerce incluem catálogo de produtos variados e uma ótima experiencia de compra para o cliente.</p>
        </div>
      </div>
      <div className='slide'>
        <img src='https://cdn.goodmanlantern.com/wp-content/uploads/2022/04/Group-6549.svg' alt="Imagem 2" />
        <div className='hrtc-text'>
          <h2>Landing Page</h2>
          <hr />
          <p>Página com um objetivo específico em mente, converter visitantes em leads ou clientes. projetada para ser simples, direta e persuasiva. Com foco em uma única oferta ou chamada para ação.</p>
        </div>
      </div>
      <div className='slide'>
        <img src="https://www.svgrepo.com/show/429905/portfolio-my-profile-browser.svg" alt="Imagem 3" />
        <div className='hrtc-text'>
          <h2>Portifólio</h2>
          <hr />
          <p>Organize seus trabalhos ou projetos, da empresa ou equipe, destinado a demonstrar suas habilidades, competências e realizações em uma determinada área.</p>
        </div>
      </div>
      <div className='slide'>
        <img src="https://tz3.com.br/images/svg/desenvolvimento-de-apps2.svg" alt="Imagem 4" />
        <div className='hrtc-text'>
          <h2>Aplicativos</h2>
          <hr />
          <p>Que tal um app para você ou seu negócio, dedicado para smartphones e tablets. desde jogos e entretenimento até utilitários, produtividade, redes sociais, saúde, finanças e muito mais.</p>
        </div>
      </div>
      <div className='slide'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/blog-4489786-3757221.png?f=webp" alt="Imagem 5" />
        <div className='hrtc-text'>
          <h2>Blogs</h2>
          <hr />
          <p>Crie sua pagina pessoal dedicada ao seu conteúdo, fale sobre o que mais gosta. Faça videos, fotos, artigos e muito mais.</p>
        </div>
      </div>
      <div className='slide'>
        <img src="https://pluga.co/blog/wp-content/uploads/2023/09/mensagem-para-cliente-no-WhatsApp.svg" alt="Imagem 6" />
        <div className='hrtc-text'>
          <h2>Automação</h2>
          <hr />
          <p>Automatize seus redes sociais, como whats ou instagram, deixe seu serviço mais rapido e melhor para seus clientes.</p>
        </div>
      </div>
      <div className='slide'>
        <img src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blteb9c2659ef47ca29/642f1f910c498f10e8dbd402/kzq5baj4do0rn3z2h-realm1.svg" alt="Imagem 7" />
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