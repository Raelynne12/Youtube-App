import React from 'react'
import Search from './Search'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    const back = () => {
        navigate(-5)
    }
  return (

    <header className='header'>
        <button className='back' onClick={back}>
            <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1>
            YOUTUBE
        </h1>
        <Search></Search>
    </header>
  )
}
