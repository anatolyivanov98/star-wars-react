import React from 'react'
// import { useTranslation } from 'react-i18next'
import { BaseInput } from '../UI/BaseInput/BaseInput'
import style from './Header.module.scss'
import logo from '../../assets/img/logo.svg'

export const Header = (): JSX.Element => {
  const handlerSearch = (value: string): void => {
    console.log('value: ', value)
  }
  return (
    <header className={style.header}>
      <BaseInput handler={handlerSearch}/>
      <img src={logo} alt="STAR WARS"/>
    </header>
  )
}
