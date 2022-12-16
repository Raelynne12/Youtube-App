import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
export default function Search() {
    const navigate = useNavigate()

    const [search, setSearch] = useState("")


  return (
    <div className='search'>
        <input type="text" onChange={(e) => {
            setSearch(e.currentTarget.value)
        }} onKeyUp={(e) => {
            if(e.key==="Enter") navigate(
                `/search?part=snippet&maxResults=10&q=${search}&key=AIzaSyAMiMguMatoMRv9Yqe7gcP6E4yqmDhEK5o`
            )
        }}></input>
        <button className='search-button' onClick={() => {
            navigate(
                `/search?part=snippet&maxResults=10&q=${search}&key=AIzaSyAMiMguMatoMRv9Yqe7gcP6E4yqmDhEK5o`
            )
        }}>
            <i className="fa-solid fa-magnifying-glass" ></i>
        </button>
    </div>
  )
}
