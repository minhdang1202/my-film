import React from 'react'
import {Route} from 'react-router-dom'
import FilmDetail from './FilmDetail';
const Film = (props) => {
    
    return (
        <section>
            <Route path = '/film/:name' component = {FilmDetail}/>       
        </section>
    )
}

export default Film
