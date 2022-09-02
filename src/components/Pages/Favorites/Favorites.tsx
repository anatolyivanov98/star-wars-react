import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import peopleStore from '../../../store/people'
import { Card } from '../../Card/Card'

import style from './Favorites.module.scss'
import { Pagination } from '../../Pagination/Pagination'
import { PEOPLE_TYPE } from '../../../shared/enums'
import { currentPageFavoritePerson } from '../../../shared/utils/currentPageFavoritePerson'
import { getFilterPeople } from '../../../shared/utils/getFilterPeople'

export const Favorites = observer((): JSX.Element => {
  useEffect(() => {
    peopleStore.fetchFavoritePeople()
  }, [])

  const people = currentPageFavoritePerson()

  const favoriteCard = getFilterPeople(people).map((item) => {
    return <Card key={item.id} people={item}/>
  })

  const handleFetchPeople = async (): Promise<void> => {
    await console.log()
  }

  return (
    <div className={style.page}>
      <div className={style.content}>
        {favoriteCard}
      </div>
      {peopleStore.favoritePeople.pages > 1 && <Pagination
        currentPage={peopleStore.favoritePeople.currentPage}
        page={peopleStore.favoritePeople.pages}
        peopleType={PEOPLE_TYPE.FAVORITE_PEOPLE}
        handler={handleFetchPeople}
      />}
    </div>

  )
})
