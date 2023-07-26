import React from 'react'
import './styles.scss'

import Image from '../../assets/homememulher1.png'
import Title from '../../components/title'
import Check from './check'

function Family() {
  return (
    <section className='family'>
      <div className='left'>
        <img src={Image} alt='Imagem Homem e Mulher de academia.' />
      </div>

      <div className='right'>
        <Title span='faça parte' text='da família' />
        <p>
          Nossa academia tem milhares de clientes satisfeitos com resultados surpreendentes. Junte-se a nós e comece a transformar seu corpo agora!
        </p>
        <div className='check-flex'>
            <Check title='+15' text='Unidades na cidade de São Paulo.' />
            <Check title='+2000' text='Alunos matriculados em nossas unidades.' />
            <Check title='+100' text='Professores altamente qualificados.' />
        </div>
      </div>
    </section>
  )
}

export default Family