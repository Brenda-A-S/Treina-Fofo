import React from 'react'
import './styles.scss'

import Logo from '../../assets/logo.png'

function Footer() {
  return (
    <div>
      <div className='footer'>
      <a href='/'>
        <img src={Logo} alt='Logo da empresa Robust Habit' />
      </a>
      <p>design by <a href='https://www.instagram.com/futurodevjohn/' target='_blank' rel='noreferrer'>Jonata Ferreira</a></p>
      <p>replicated by <a href='https://www.instagram.com/brenda_a_s_dev/' target='_blank' rel='noreferrer'>Brenda Antunes da Silva</a></p>
      </div>
    </div>
  )
}

export default Footer