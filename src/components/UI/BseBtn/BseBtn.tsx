import React from 'react'
import style from './BaseBtn.module.scss'

interface IBaseBtnProps {
  text?: string
  img?: string
  handler: () => void
  disabled?: boolean
  active?: boolean
}

export const BaseBtn = ({ text, img, handler, disabled, active }: IBaseBtnProps): JSX.Element => {
  const btnClass = `${style.btn} ${active ? style.activeBtn : ''}`

  return (
    <button disabled={disabled} className={btnClass} onClick={() => handler()}>
      {img && <img src={img} alt="image"/>}
      {text && <span className={style.text}>{text}</span>}
    </button>
  )
}
