import React from 'react'
import './styles.scss'

import Title from '../../components/title'
import Card from './card'

import Data from '../../services/card.json'

function Differentials() {
  return (
    <section className='section'>
      <Title span='Nossos' text='Diferenciais' />

      <div className='card-list'>
        {Data.cards.map((card) => {
          return (
            <Card
              key={card.id}
              image={card.image}
              alt={card.alt}
              title={card.title}
              text={card.text}
              link={card.button.link}
              button={card.button.text} />
          );
        })}
      </div>
    </section>
  )
}

export default Differentials