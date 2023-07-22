import React from 'react'
import './styles.scss'

import Image from '../../assets/mulher1.png'
import Title from '../../components/title'

function Contact() {
  return (<>
    <section className='contact'>
      <div className='left'>
        <Title text='Entre em contato' />
        <p>
          Matricule-se agora mesmo! Fale com um de nossos atendentes.
        </p>
        <div className='form'>
          <div className='polygon'>
            <input type='text' className='input' placeholder='Nome' />
          </div>
          <div className='polygon'>
            <input type='text' className='input' placeholder='Telefone' />
          </div>
        </div>
        <a href='/' className='button'>solicitar contato</a>
      </div>

      <div className='right'>
        <img src={Image} alt='Imagem Mulher de academia.' />
      </div>
    </section>
  </>
  )
}

export default Contact