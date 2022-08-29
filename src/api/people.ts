import ApiService from './index'
import { IRequestPeople } from '../shared/types'

class PeopleService extends ApiService {
  constructor () {
    super(`${process.env.REACT_APP_BASE_API_URL as string}/api/people`)
  }

  public async fetchPeople (): Promise<IRequestPeople> {
    return await this.get<IRequestPeople>('')
  }
}

export default new PeopleService()
