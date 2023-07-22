import React from 'react'
import './styles.scss'

import Title from '../../components/title'
import CardImg from './card-img'

import Data from '../../services/card.json'

function Plans() {
  return (
    <section className='section-dark'>
      <Title text='Nossos planos' />

      <div className='card-list'>
        {Data.plans.map((plan) => {
          return (
            <CardImg
              key={plan.id}
              image={plan.image}
              alt={plan.alt}
              title={plan.title}
              text={plan.text}
              draft={plan.draft}
              price={plan.price} />
          );
        })}
      </div>
    </section>
  )
}

export default Plans