import React from 'react'
import {Route} from 'react-router-dom'
import FilmDetail from './FilmDetail';
const Film = (props) => {
    
    return (
        <>
            <Route path = 'my-film/#/film/:name' component = {FilmDetail}/>       
        </>
    )
}

export default Film
