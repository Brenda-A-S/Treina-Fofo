import React from 'react'
import './styles.scss'

function Title({span, text}) {
  return (
    <h2 className='title'><span>{span} </span>{text}</h2>
  )
}

export default Title