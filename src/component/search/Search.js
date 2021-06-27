import React from 'react'
import './Search.css'
import { Route } from 'react-router-dom'
import SearchFilm from './SearchFilm'
const Search = () => {
   return (
        <>
            <Route path='/timkiem/:name' component = {SearchFilm} />
        </>
    )
}

export default Search
