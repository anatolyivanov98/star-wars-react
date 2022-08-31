import { GENDER } from './enums'

export interface IGenderOption {
  id: number
  value: GENDER
  label: string
  isDefaultValue: boolean
}

export interface IPeople {
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: []
  starships: string[]
  url: string
  vehicles: string[]
}

export type TPaginationPeople = IPeople & {id?: string, isFavorite?: boolean}

export interface IPaginationModel {
  count: number
  currentPage: number
  pages: number
  data: TPaginationPeople[]
}

// API

export interface IRequestPeople {
  count: number
  next: string | null
  previous: string | null
  results: TPaginationPeople[]
}
