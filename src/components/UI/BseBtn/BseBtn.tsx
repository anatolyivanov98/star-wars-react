import React from 'react'
import style from './BaseBtn.module.scss'

interface IBaseBtnProps {
  text?: string
  img?: string
  handler: () => void
}

export const BaseBtn = ({ text, img, handler }: IBaseBtnProps): JSX.Element => {
  return (
    <button className={style.btn} onClick={() => handler()}>
      {img && <img src={img} alt="image"/>}
      {text && <span className={style.text}>{text}</span>}
    </button>
  )
}
