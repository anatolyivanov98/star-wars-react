import { TPaginationPeople } from '../types'
import peopleStore from '../../store/people'
import { GENDER } from '../enums'

export const getFilterPeople = (data: TPaginationPeople[]): TPaginationPeople[] => {
  if (peopleStore.isFilter === GENDER.ALL) return data
  return data.filter(person => person.gender === peopleStore.isFilter)
}
