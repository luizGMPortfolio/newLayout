

import About from '../Pages/About.jsx'
import Home from '../Pages/Home.jsx'
import Building from '../Pages/Building.jsx'
import Themes from '../Pages/Themes.jsx'
import Contact from '../Pages/Contact.jsx'

import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'



function AnimateRoutes({setMenu}) {

    const [change_page, setChange_page] = useState('');

    function Change_page(page) {
        setChange_page(page)

    }

    return (

        <Routes location={location} key={location.pathname}>
            <Route path='/' exact element={<Home Change_page={Change_page} setMenu={setMenu}/>} />
            <Route path='/Building' exact element={<Building change_page={change_page} setMenu={setMenu}/>} />
            <Route path='/Contact' exact element={<Contact setMenu={setMenu}/>} />
            <Route path='/Themes' exact element={<Themes setMenu={setMenu}/>} />
            <Route path='/About' element={<About setMenu={setMenu}/>} />
        </Routes>

    )
}

export default AnimateRoutes