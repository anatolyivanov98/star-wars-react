import { IRequestPeople, IPaginationModel, TPaginationPeople } from '../types'
import { limit } from '../../configs'
import { PEOPLE_TYPE } from '../enums'

export const paginationModel = (people: IRequestPeople | IPaginationModel, currentPage: number, type: PEOPLE_TYPE): IPaginationModel => {
  let data: TPaginationPeople[] = []
  if (type === PEOPLE_TYPE.PEOPLE) {
    data = (people as IRequestPeople).results.map(item => {
      const id = item.url.split('/')
      item.id = id[id.length - 2]
      item.isFavorite = false
      return item
    })
  } else {
    data = (people as IPaginationModel).data
  }

  const pages = Math.ceil(people.count / limit)

  const model: IPaginationModel = {
    count: people.count,
    currentPage,
    pages,
    data
  }

  return model
}
