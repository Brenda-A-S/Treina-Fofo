import React from 'react'

import './styles.scss'

function Hamburguer({onclick, classs}) {
  return (
    <div className={classs} onClick={onclick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hamburguer