import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class ApiService {
  private readonly apiClient: AxiosInstance

  constructor (baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        'Content-type': 'application/json'
      }
    })

    this.apiClient.interceptors.response.use(
      (response) => response.data,
      async (error: any) => {
        return await Promise.reject(error)
      }
    )
  }

  protected async get<T> (url: string, config?: AxiosRequestConfig): Promise<T> {
    return await this.apiClient.get(url, config)
  }

  protected async post<T, S> (url: string, body?: S, config?: AxiosRequestConfig): Promise<T> {
    return await this.apiClient.post(url, body, config)
  }

  protected async put<T, S> (url: string, body?: S, config?: AxiosRequestConfig): Promise<T> {
    return await this.apiClient.put(url, body, config)
  }

  protected async delete<T> (url: string): Promise<T> {
    return await this.apiClient.delete(url)
  }
}

export default ApiService
