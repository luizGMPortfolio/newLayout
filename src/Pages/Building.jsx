import './Building.css'

import Title from '../Components/Title'
import tabs from '../data/tabs'
import { useEffect, useState } from 'react';




const building = ({ change_page, setMenu}) => {


  const [Tabs, setTabs] = useState(tabs[0])
  const [buttons, setButtons] = useState('');

  useEffect(() => {

    document.querySelector('html').style.overflowY = "hidden";
    setMenu('building')

    if (change_page != '') {
      setTabs(tabs[change_page]);
      change_button(change_page)
    }
    else{
      change_button(0)
    }
  }, []);


  const change_button = (num) => {
    setButtons(num);
    setTabs(tabs[num]);
  }



  return (
    <div className='build'>

      <div className='container'></div>

      <div className='left'>
        <div className='top'>
          <Title title={Tabs.title} />
          <p>{Tabs.text}</p>
        </div>
        <div className='bottom'>
          <img src={Tabs.img} alt="" />
        </div>
      </div>

      <div className='b-center'>
        <div className='buttons'>
          <div className='icons'>
            <div className={`icon ${buttons === 0 ? 'Cliked' : ''}`} onClick={() => change_button(0)}><i class="fa-solid fa-code fa-lg"></i></div>
            <div className={`icon ${buttons === 1 ? 'Cliked' : ''}`} onClick={() => change_button(1)}><i class="fa-regular fa-window-restore fa-lg"></i></div>
            <div className={`icon ${buttons === 2 ? 'Cliked' : ''}`} onClick={() => change_button(2)}><i class="fa-solid fa-mobile fa-lg"></i></div>
            <div className={`icon ${buttons === 3 ? 'Cliked' : ''}`} onClick={() => change_button(3)}><i class="fa-solid fa-handshake-simple fa-lg"></i></div>
          </div>
        </div>
        <div className='bc-mensages'>
          <div>
            <h3>{Tabs.subtitle}</h3>
            <p>{Tabs.subtext}</p>
          </div>

        </div>
      </div>


      {Tabs.container}






    </div>

  )
}

export default building

