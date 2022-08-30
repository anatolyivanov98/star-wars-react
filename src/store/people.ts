import { makeAutoObservable } from 'mobx'
import PeopleService from '../api/people'
import { IPaginationModel } from '../shared/types'
import { paginationModel } from '../shared/utils/paginationModel'
import { FAVORITE_TYPE } from '../shared/enums'
class People {
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
      const res = await PeopleService.fetchPeople()
      this.people = paginationModel(res, 1) // TODO: Refactor for favorite people after reload
    } catch (e) {
      console.log('error - fetchPeople: ', e)
    }
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
}

export default new People()
