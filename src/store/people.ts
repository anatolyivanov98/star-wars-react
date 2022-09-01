import { makeAutoObservable } from 'mobx'
import PeopleService from '../api/people'
import { IPaginationModel } from '../shared/types'
import { paginationModel } from '../shared/utils/paginationModel'
import { FAVORITE_TYPE, GENDER, PEOPLE_TYPE } from '../shared/enums'
import { favoriteDataKey } from '../configs'

class People {
  isFilter: GENDER = GENDER.ALL
  search: string | null = null
  people: IPaginationModel = {
    pages: 1,
    currentPage: 1,
    count: 0,
    data: []
  }

  favoritePeople: IPaginationModel = {
    pages: 1,
    currentPage: 1,
    count: 0,
    data: []
  }

  constructor () {
    makeAutoObservable(this)
  }

  async fetchPeople (): Promise<void> {
    try {
      const res = await PeopleService.fetchPeople({ page: this.people.currentPage, search: this.search })
      this.people = paginationModel(res, this.people.currentPage)

      this.fetchFavoritePeople()

      this.people.data.forEach(person => { // TODO: Подумать над вынесением данного преобразования в отдельную функцию
        const itemFavorite = this.favoritePeople.data.find(item => item.id === person.id)
        if (itemFavorite) {
          person.isFavorite = true
        }
      })
    } catch (e) {
      console.log('error - fetchPeople: ', e)
    }
  }

  fetchFavoritePeople (): void {
    const data = localStorage.getItem(favoriteDataKey)
    if (data) {
      this.favoritePeople = JSON.parse(data)
    }
  }

  setSearch (value: string): void {
    if (value) {
      this.people.currentPage = 1
      this.search = value
    } else {
      this.search = null
    }
  }

  setFilter (value: GENDER): void {
    this.isFilter = value
  }

  setFavoritePeopleStatus (id: string, type: FAVORITE_TYPE): void {
    const currentPerson = this.people.data.find(person => person.id === id)
    if (currentPerson && type === FAVORITE_TYPE.SET) {
      currentPerson.isFavorite = true
      this.favoritePeople.count++
      this.favoritePeople.data.push(currentPerson)
    } else if (currentPerson && type === FAVORITE_TYPE.DELETE) {
      currentPerson.isFavorite = false
      this.favoritePeople.count--
      this.favoritePeople.data = this.favoritePeople.data.filter(person => person.id !== id)
    }

    localStorage.setItem(favoriteDataKey, JSON.stringify(this.favoritePeople))
  }

  setCurrentPage (currentPage: number, peopleType: PEOPLE_TYPE): void {
    this[peopleType].currentPage = currentPage
  }
}

export default new People()
