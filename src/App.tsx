import React from 'react'
import style from './App.module.scss'
import './locales/config'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { People } from './components/Pages/People/People'
import { Favorites } from './components/Pages/Favorites/Favorites'

function App (): JSX.Element {
  return (
    <div className={style.app}>
      <Navbar/>
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
