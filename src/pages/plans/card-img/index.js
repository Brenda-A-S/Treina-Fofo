import React from 'react'
import './styles.scss'

import Title from '../../../components/title'

function CardImg({ image, alt, title, text, draft, price }) {
  return (
    <article className='card-img'>
      <span className={draft === '' ? '' : 'draft'}>{draft}</span>
      <img src={image} alt={alt} />
      <span className={draft === '' ? 'title' : ' title draft'}>
        <Title text={title} />
      </span>
      <div className='info'>
        <div>
          <p>{text}</p>
          <span className='price'>{price}</span>
        </div>
        <a href='/' className={draft === '' ? '' : ' draft'}>SELECIONAR</a>
      </div>
    </article>
  )
}

export default CardImg