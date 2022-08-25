import React, { useEffect, useState } from 'react'
import style from './BaseDropdown.module.scss'
import { IGenderOption } from '../../../shared/types'

interface IBaseDropdownProps {
  handler: (item: IGenderOption) => void
  options: IGenderOption[]
}

export const BaseDropdown = ({ handler, options }: IBaseDropdownProps): JSX.Element => {
  const [isShowDropdown, setShowDropdown] = useState(true)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [dropdownValue, setDropdownValue] = useState({} as IGenderOption)

  const chooseDefaultDropdownValue = (): void => {
    const currentElement = options.find(item => item.isDefaultValue)
    if (currentElement != null) {
      setDropdownValue(currentElement)
    }
  }

  useEffect(() => {
    chooseDefaultDropdownValue()
  }, [])

  const changeDropdown = (item: IGenderOption): void => {
    setDropdownValue(item)
    setShowDropdown(!isShowDropdown)
    handler(item)
  }

  const optionItem = options.map((item: IGenderOption) => {
    return <li key={item.id} className={style.optionItem} onClick={() => changeDropdown(item)}>{item.label}</li>
  })

  return (
    <div className={style.dropdown}>
      <div className={style.value} onClick={() => setShowDropdown(!isShowDropdown)}>
        {dropdownValue.value}
      </div>
      <ul className={isShowDropdown ? style.options : style.optionsHide}>
        {optionItem}
      </ul>
    </div>
  )
}
