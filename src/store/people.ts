import { makeAutoObservable } from 'mobx'
import PeopleService from '../api/people'
import { IPeople } from '../shared/types'
class People {
  people: IPeople[] = []

  constructor () {
    makeAutoObservable(this)
  }

  async fetchPeople (): Promise<void> {
    const res = await PeopleService.fetchPeople()
    this.people = res.results
  }
}

export default new People()
