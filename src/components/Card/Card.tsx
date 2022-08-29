import React from 'react'
import style from './Card.module.scss'

export const Card = (): JSX.Element => {
  return (
    <div className={style.card}>
      <div>
        <img src="" alt=""/>
      </div>
      <div>
        <p>Test</p>
      </div>
    </div>
  )
}
