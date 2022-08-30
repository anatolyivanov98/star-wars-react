import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import peopleStore from '../../../store/people'
import { Card } from '../../Card/Card'

import style from './People.module.scss'
import { Pagination } from '../../Pagination/Pagination'

export const People = observer((): JSX.Element => {
  useEffect(() => {
    void peopleStore.fetchPeople()
  }, [])

  const peopleCard = peopleStore.people.data.map((item) => {
    return <Card key={item.id} people={item}/>
  })

  return (
    <>
      <div className={style.page}>
        {peopleCard}
      </div>
      <Pagination />
    </>
  )
})
