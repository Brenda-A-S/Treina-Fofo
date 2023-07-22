import React from 'react'
import './styles.scss'

import Image from '../../assets/homem1.png'
import Button from '../../components/button'

import Marquee from './marquee'

function Banner() {
  return (<>
    <section className='banner'> 
      <div className='left'>
        <h2>Aqui não se</h2>
        <h1>Treina fofo</h1>
        <p>
          Transforme-se na nossa academia! Oferecemos equipamentos modernos, instrutores qualificados e aulas para todos os níveis. Alcance seus objetivos fitness conosco. Experimente hoje!
        </p>
        <Button link='/' button='Começar' />
      </div>
      <div className='right'>
        <img src={Image} alt='Imagem Homem de Academia' />
      </div>
    </section>
    <div>
      <Marquee/>
    </div>
    </>
  )
}

export default Banner