import { makeAutoObservable } from 'mobx'
import PeopleService from '../api/people'
import { IPaginationModel } from '../shared/types'
import { paginationModel } from '../shared/utils/paginationModel'
import { FAVORITE_TYPE, GENDER, PEOPLE_TYPE } from '../shared/enums'

class People {
  isFilter: GENDER = GENDER.ALL
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

  async fetchPeople (search: string | null = null): Promise<void> {
    try {
      const res = await PeopleService.fetchPeople({ page: this.people.currentPage, search })
      this.people = paginationModel(res, this.people.currentPage) // TODO: Refactor for favorite people after reload
    } catch (e) {
      console.log('error - fetchPeople: ', e)
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
  }

  setCurrentPage (currentPage: number, peopleType: PEOPLE_TYPE): void {
    this[peopleType].currentPage = currentPage
  }
}

export default new People()
