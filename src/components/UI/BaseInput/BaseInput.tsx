import React from 'react'
import style from './BaseInput.module.scss'

interface IBaseInputProps {
  handler: (value: string) => void
}

export const BaseInput = ({ handler }: IBaseInputProps): JSX.Element => {
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handler(e.target.value)
  }

  return (
    <input className={style.baseInput} type="text" onInput={changeInput}/>
  )
}
