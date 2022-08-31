import ApiService from './index'
import { IRequestPeople } from '../shared/types'

class PeopleService extends ApiService {
  constructor () {
    super(`${process.env.REACT_APP_BASE_API_URL as string}/api/people`)
  }

  public async fetchPeople (params: {page: number}): Promise<IRequestPeople> {
    return await this.get<IRequestPeople>('', { params })
  }
}

export default new PeopleService()
