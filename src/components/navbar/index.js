import {React, useState} from 'react'
import './styles.scss'

import Logo from '../../assets/logo.png'
import Hamburguer from './hamburguer'

function Menu() {

  const [active, setActive] = useState(false);

  const toggleActive =() => {
    setActive(!active)
  }

  return (
    <nav>
      <a href='/'>
        <img src={Logo} alt='Logo da empresa Robust Habit' />
      </a>
        <Hamburguer classs={active === true ? 'menu-hamburguer active' : 'menu-hamburguer'} onclick={toggleActive}/>
      <ul>
        <li><a href='/'>Sobre</a></li>
        <li><a href='/'>Serviços</a></li>
        <li><a href='/'>Preços</a></li>
        <li><a href='/'>Equipamentos</a></li>
        <li><a href='/'>Registre-se</a></li>
      </ul>
    </nav>
  )
}

export default Menu