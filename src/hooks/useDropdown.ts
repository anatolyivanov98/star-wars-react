import { useEffect, useState } from 'react'
import { IGenderOption } from '../shared/types'

export const useDropdown = (options: IGenderOption[], handler: (item: IGenderOption) => void): any => {
  const [isShowDropdown, setShowDropdown] = useState(false)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [dropdownValue, setDropdownValue] = useState({} as IGenderOption)

  const chooseDefaultDropdownValue = (): void => {
    const currentElement = options.find(item => item.isDefaultValue)
    if (currentElement != null) {
      setDropdownValue(currentElement)
    }
  }

  const changeDropdown = (item: IGenderOption): void => {
    setDropdownValue(item)
    setShowDropdown(!isShowDropdown)
    handler(item)
  }

  useEffect(() => {
    chooseDefaultDropdownValue()
  }, [])

  return { isShowDropdown, setShowDropdown, dropdownValue, changeDropdown }
}
