import './Contact.css'
import Title from '../Components/Title'
import emailjs from 'emailjs-com'
import { useEffect } from 'react'


const Contact = ({ setMenu }) => {


  useEffect(() => {
    document.querySelector('html').style.overflowY = "visible";
    setMenu('contact')
  }, []);


  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_2s5pqjw', 'template_xn83v1b', e.target, 'K90Hya3YEoXoSiihk')
    e.target.reset()

  }
  return (
    <div className='contact'>

      <div className='discription'>
        <Title title='Contact us' />
        <p>Acreditamos que cada interação é uma oportunidade para criar algo excepcional. Se você tem uma ideia inovadora, um projeto desafiador ou simplesmente deseja colaborar, estamos prontos para ouvir você!. Envie-nos um email, Chame no whats ou visite nosso instagram. Estamos aqui para transformar suas ideias em realidade.</p>
        <hr />
        <h2>Por que nos escolher:</h2>

        <ul>
          <li>Comprometimento com a excelência.
          </li>
          <li>Abordagem colaborativa e transparente.
          </li>
          <li>Soluções personalizadas para suas necessidades.
          </li>
          <li>Foco na inovação e na criação de valor.
          </li>
        </ul>
        <hr />
        <p>
          <i class="fa-brands fa-whatsapp fa-2xl"></i>
          +55 51 9638-8081
        </p>
        <p>
          <i class="fa-brands fa-instagram fa-2xl"></i>
          @LGMdeveloper
        </p>
      </div>

      <form onSubmit={sendEmail}>

        <div className='entry um'>
          <div>
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder='type your name' name="from_name" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input type="text" placeholder='type your fone number' name="phone" />
          </div>
        </div>

        <div className='entry dois'>
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder='type your e-mail' name="email" />
        </div>

        <div className='entry tres'>
          <label htmlFor="text">Mensage</label>
          <textarea name="message" id="" cols="30" rows="10" placeholder='type your message'></textarea>
        </div>

        <div className='entry quatro'>
          <button type="submit" value="Submit">Send</button>
        </div>
      </form>
    </div>

  )
}

export default Contact