import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import peopleStore from '../../../store/people'
import { Card } from '../../Card/Card'

import style from './People.module.scss'

export const People = observer((): JSX.Element => {
  useEffect(() => {
    void peopleStore.fetchPeople()
  }, [])

  const peopleCard = peopleStore.people.map((item, idx) => {
    return <Card key={idx}/>
  })

  return (
    <div className={style.page}>
      {peopleCard}
    </div>

  )
})
