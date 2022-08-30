import React from 'react'
import { observer } from 'mobx-react'
import { BaseBtn } from '../UI/BseBtn/BseBtn'

import style from './Pagination.module.scss'

export const Pagination = observer((): JSX.Element => {
  const prevPage = (): void => {
    console.log('prevPage')
  }

  const nextPage = (): void => {
    console.log('prevPage')
  }

  return (
    <div className={style.pagination}>
      <BaseBtn handler={prevPage} text={'<'}/>
      <BaseBtn handler={nextPage} text={'>'}/>
    </div>
  )
})
