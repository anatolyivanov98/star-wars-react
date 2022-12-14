import React from 'react'
import { observer } from 'mobx-react'
import { BaseBtn } from '../UI/BseBtn/BseBtn'
import peopleStore from '../../store/people'

import style from './Pagination.module.scss'
import { PEOPLE_TYPE } from '../../shared/enums'

interface IPaginationProps {
  currentPage: number
  page: number
  peopleType: PEOPLE_TYPE
  handler: () => Promise<void>
}

export const Pagination = observer(({ currentPage, page, peopleType, handler }: IPaginationProps): JSX.Element => {
  const prevPage = async (): Promise<void> => {
    peopleStore.setCurrentPage(currentPage - 1, peopleType)
    await handler()
  }
  const nextPage = async (): Promise<void> => {
    peopleStore.setCurrentPage(currentPage + 1, peopleType)
    await handler()
  }

  const changePage = async (value: number): Promise<void> => {
    peopleStore.setCurrentPage(value, peopleType)
    await handler()
  }

  const countOfPage = (): number[] => {
    if (page === 2) {
      return [1, 2]
    }
    if (currentPage <= 2) {
      return [1, 2, 3]
    } else if (currentPage === page) {
      return [currentPage - 2, currentPage - 1, currentPage]
    } else {
      return [currentPage - 1, currentPage, currentPage + 1]
    }
  }

  const btnPage = countOfPage().map(item => {
    return <BaseBtn
      active={currentPage === item}
      handler={() => { void changePage(item) }}
      key={item}
      text={`${item}`}
    />
  })

  return (
    <div className={style.pagination}>
      <BaseBtn
        disabled={currentPage === 1}
        handler={() => { void prevPage() }}
        text={'<'}
      />
      {btnPage}
      <BaseBtn disabled={currentPage === page} handler={() => { void nextPage() }} text={'>'}/>
    </div>
  )
})
