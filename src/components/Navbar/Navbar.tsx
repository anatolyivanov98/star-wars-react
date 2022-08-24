import React from 'react'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

interface INavbarProps {
  handler: () => void
  isNavbarToggle: boolean
}

export const Navbar = ({ handler, isNavbarToggle }: INavbarProps): JSX.Element => {
  return (
    <div className={isNavbarToggle ? style.navbarFull : style.navbar }>
      <button className={style.toggleBlock} onClick={() => handler()}>
        <span className={style.toggleLine}/>
        <span className={style.toggleLine}/>
        <span className={style.toggleLine}/>
      </button>
      <nav className={style.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? style.active : undefined}>All people</NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? style.active : undefined}>Favorites</NavLink>
      </nav>
    </div>
  )
}
