import React from 'react'
import style from './Loader.module.scss'
import loader from '../../../assets/img/loader.svg'

export const Loader = (): JSX.Element => {
  return (
    <div className={style.loader}>
      <img className={style.image} src={loader} alt="Loader"/>
    </div>
  )
}
