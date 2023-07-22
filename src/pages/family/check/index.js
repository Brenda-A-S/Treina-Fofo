import React from 'react'
import './styles.scss'

import Title from '../../../components/title'

function Check({ title, text }) {
  return (
    <div className='check'>
      <Title text={title} />
      <p>{text}</p>
    </div>
  )
}

export default Check