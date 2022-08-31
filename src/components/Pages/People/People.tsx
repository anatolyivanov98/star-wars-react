import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import peopleStore from '../../../store/people'
import mainStore from '../../../store/main'
import { Card } from '../../Card/Card'

import style from './People.module.scss'
import { Pagination } from '../../Pagination/Pagination'
import { PEOPLE_TYPE } from '../../../shared/enums'
import { Loader } from '../../UI/Loader/Loader'

export const People = observer((): JSX.Element => {
  useEffect(() => {
    void handleFetchPeople()
  }, [])

  const handleFetchPeople = async (): Promise<void> => {
    mainStore.setLoader(true)
    await peopleStore.fetchPeople()
    mainStore.setLoader(false)
  }

  const peopleCard = peopleStore.people.data.map((item) => {
    return <Card key={item.id} people={item}/>
  })

  return (
    <>
      {mainStore.isLoader && <Loader/>}
      <div className={style.page}>
        {peopleCard}
      </div>
      <Pagination
        currentPage={peopleStore.people.currentPage}
        page={peopleStore.people.pages}
        peopleType={PEOPLE_TYPE.PEOPLE}
        handler={handleFetchPeople}
      />
    </>
  )
})
