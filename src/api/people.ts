import ApiService from './index'
import { IRequestPeople, IRequestPlanet } from '../shared/types'

class PeopleService extends ApiService {
  constructor () {
    super(`${process.env.REACT_APP_BASE_API_URL as string}/api/`)
  }

  public async fetchPeople (params: {page: number, search: string | null}): Promise<IRequestPeople> {
    return await this.get<IRequestPeople>('people', { params })
  }

  public async fetchPlanet (id: string): Promise<string> {
    const r = await this.get<IRequestPlanet>(`planets/${id}`)
    return r.name
  }
}

export default new PeopleService()
