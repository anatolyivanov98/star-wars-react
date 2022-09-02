import peopleStore from '../../store/people'
import { TPaginationPeople } from '../types'
import { limit } from '../../configs'

export const currentPageFavoritePerson = (): TPaginationPeople[] => {
  const firstIndex = (peopleStore.favoritePeople.currentPage - 1) * limit
  const lastIndex = peopleStore.favoritePeople.currentPage * limit
  return peopleStore.favoritePeople.data.slice(firstIndex, lastIndex)
}
