import React from 'react'
import style from './BaseInput.module.scss'

interface IBaseInputProps {
  handler: (value: string) => Promise<void>
}

export const BaseInput = ({ handler }: IBaseInputProps): JSX.Element => {
  const changeInput = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    await handler(e.target.value)
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <input className={style.input} type="text" onInput={changeInput}/>
  )
}
