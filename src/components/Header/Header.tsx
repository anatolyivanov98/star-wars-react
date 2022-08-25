import React from 'react'
// import { useTranslation } from 'react-i18next'
import { BaseInput } from '../UI/BaseInput/BaseInput'
import style from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import { BaseDropdown } from '../UI/BaseDropdown/BaseDropdown'
import { genderFilterConfig } from '../../configs/genderFilter'
import { IGenderOption } from '../../shared/types'

export const Header = (): JSX.Element => {
  const handlerSearch = (value: string): void => {
    console.log('value: ', value)
  }

  const handlerFilter = (item: IGenderOption): void => {
    console.log('handlerFilter: ', item)
  }

  return (
    <header className={style.header}>
      <div className={style.actionBlock}>
        <BaseInput handler={handlerSearch}/>
        <BaseDropdown options={genderFilterConfig} handler={handlerFilter}/>
      </div>
      <img src={logo} alt="STAR WARS"/>
    </header>
  )
}
