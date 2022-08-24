import React from 'react'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = (): JSX.Element => {
  return (
    <div className={style.navbar}>
      <button className={style.toggleBlock}>
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
