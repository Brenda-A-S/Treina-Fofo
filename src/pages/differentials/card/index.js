import React from 'react'
import './styles.scss'

import Title from '../../../components/title'
import Button from '../../../components/button'

function Card({ image, alt, title, text, button, link }) {
  return (
    <article className='card'>
      <img src={image} alt={alt} width={77}/>
      <Title text={title} />
      <p>{text}</p>
      <Button link={link} button={button} />
    </article>
  )
}

export default Card