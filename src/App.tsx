import React, { useState } from 'react'
import style from './App.module.scss'
import './locales/config'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { People } from './components/Pages/People/People'
import { Favorites } from './components/Pages/Favorites/Favorites'

function App (): JSX.Element {
  const [isNavbarToggle, setNavbarToggle] = useState(true)

  const toggleNavbar = (): void => {
    setNavbarToggle(!isNavbarToggle)
  }
  return (
    <div className={isNavbarToggle ? style.app : style.appFull}>
      <Navbar handler={toggleNavbar} isNavbarToggle={isNavbarToggle}/>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<People/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
