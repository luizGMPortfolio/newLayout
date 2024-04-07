import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimateRoutes from './Components/AnimateRoutes.jsx'
import Header from './Components/Header.jsx'
import { useState } from 'react'

function App() {

  const [menu, setMenu] = useState('home');
  return (
    <div className='App'>
      <Router>
        <Header menu={menu} setMenu={setMenu}/>
        <AnimateRoutes setMenu={setMenu}/>
      </Router>
    </div>
  )
}

export default App
