import React from 'react'
import { observer } from 'mobx-react'
import style from './Card.module.scss'
import { BaseBtn } from '../UI/BseBtn/BseBtn'
import { TPaginationPeople } from '../../shared/types'
import peopleStore from '../../store/people'
import activeHeart from '../../assets/img/activeHeart.png'
import emptyHeart from '../../assets/img/emptyHeart.png'
import { FAVORITE_TYPE } from '../../shared/enums'

interface ICardProps {
  people: TPaginationPeople
}

export const Card = observer(({ people }: ICardProps): JSX.Element => {
  const currentImg = people.isFavorite ? activeHeart : emptyHeart

  const toggleFavorite = (): void => {
    if (people.isFavorite) {
      peopleStore.setFavoritePeopleStatus(people.id as string, FAVORITE_TYPE.DELETE)
    } else {
      peopleStore.setFavoritePeopleStatus(people.id as string, FAVORITE_TYPE.SET)
    }
  }

  return (
    <div className={style.card}>
      <div className={style.imageBlock}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${people.id as string}.jpg`}
          alt="person"
          className={style.img}
        />
      </div>
      <div className={style.descriptionBlock}>
        <div>
          <p className={style.title}>{people.name}</p>
          <p>Gender: {people.gender}</p>
          <p>Planet: {people.homeworld}</p>
        </div>
        <BaseBtn img={currentImg} handler={toggleFavorite}/>
      </div>
    </div>
  )
})
