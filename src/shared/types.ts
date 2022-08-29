export interface IGenderOption {
  id: number
  value: string
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

// API

export interface IRequestPeople {
  count: number
  next: string | null
  previous: string | null
  results: IPeople[]
}
