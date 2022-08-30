import React from 'react'
import { observer } from 'mobx-react'
import peopleStore from '../../../store/people'
import { Card } from '../../Card/Card'

import style from './Favorites.module.scss'

export const Favorites = observer((): JSX.Element => {
  const favoriteCard = peopleStore.favoritePeople.data.map((item) => {
    return <Card key={item.id} people={item}/>
  })

  return (
    <div className={style.page}>
      {favoriteCard}
    </div>

  )
})
