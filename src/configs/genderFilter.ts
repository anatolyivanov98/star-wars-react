import { IGenderOption } from '../shared/types'

export const genderFilterConfig: IGenderOption[] = [
  {
    id: 1,
    value: 'All',
    label: 'All',
    isDefaultValue: true
  },
  {
    id: 2,
    value: 'Male',
    label: 'Male',
    isDefaultValue: false
  },
  {
    id: 3,
    value: 'Female',
    label: 'Female',
    isDefaultValue: false
  }
]
