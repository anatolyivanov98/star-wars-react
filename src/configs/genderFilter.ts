import { IGenderOption } from '../shared/types'
import { GENDER } from '../shared/enums'

export const genderFilterConfig: IGenderOption[] = [
  {
    id: 1,
    value: GENDER.ALL,
    label: GENDER.ALL,
    isDefaultValue: true
  },
  {
    id: 2,
    value: GENDER.MALE,
    label: GENDER.MALE,
    isDefaultValue: false
  },
  {
    id: 3,
    value: GENDER.FEMALE,
    label: GENDER.FEMALE,
    isDefaultValue: false
  }
]
