import React from 'react'
import style from './BaseDropdown.module.scss'
import { IGenderOption } from '../../../shared/types'
import { useDropdown } from '../../../hooks/useDropdown'

interface IBaseDropdownProps {
  handler: (item: IGenderOption) => void
  options: IGenderOption[]
}

export const BaseDropdown = ({ handler, options }: IBaseDropdownProps): JSX.Element => {
  const { isShowDropdown, setShowDropdown, dropdownValue, changeDropdown } = useDropdown(options, handler)

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
