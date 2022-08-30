import { IRequestPeople, IPaginationModel } from '../types'
import { limit } from '../../configs'

export const paginationModel = (people: IRequestPeople, currentPage: number): IPaginationModel => {
  const data = people.results.map(item => {
    const id = item.url.split('/')
    item.id = id[id.length - 2]
    item.isFavorite = false
    return item
  })

  const pages = Math.ceil(people.count / limit)

  const model: IPaginationModel = {
    count: people.count,
    currentPage,
    pages,
    data
  }

  return model
}
