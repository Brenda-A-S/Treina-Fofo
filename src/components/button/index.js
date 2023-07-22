import React from 'react'
import './styles.scss'

import Arrow from '../../assets/arrow1.png'

function Button({link, button }) {
  return (
    <a href={link} className='button-arrow'>
    {button}
    <img src={Arrow} alt='Ícone de flecha para a direita' />
  </a>
  )
}

export default Button