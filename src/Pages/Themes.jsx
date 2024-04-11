import './Themes.css'
import Title from '../Components/Title'
import pages from '../data/pages'
import { useEffect } from 'react'

const Themes = ({ setMenu }) => {


  useEffect(() => {
    document.querySelector('html').style.overflowY = "visible";
    setMenu('themes')
  }, []);

  return (
    <div className='themes'>
      <div className='container-title'>
        <Title title={'Themes'} />
        <p>Confira alguns dos temas já desenvolvidos pela LGM. Aqui, você pode encontrar alguns exemplos inspiradores para o seu próprio projeto ou simplesmente confirmar a qualidade do nosso trabalho de desenvolvimento.</p>
        <hr />
      </div>
      <div className='layouts'>
        <div className='container-layouts'>

          {pages.map(req => (
            <div className='layout'>

              <div className='page'>
                <img src={req.page} alt="" />
              </div>

              <div className='colors'>
                <div className='color-first' style={{ backgroundColor: `${req.primary}` }}></div>
                <div className='color-second' style={{ backgroundColor: `${req.second}` }}></div>
                <div className='color-third' style={{ backgroundColor: `${req.third}` }}></div>
              </div>

              <div className='page-name'>
                <h2>{req.name} <a className='page-visit' href={req.link} target="_blank"><i class="fa-solid fa-arrow-right fa-xs"></i></a></h2>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Themes