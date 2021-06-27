import React from 'react'
import { Route } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
const Phimhoathinh = () => {
    return (
        <div>
            <Route path='/:name' component = {Pagination} />
            
        </div>
    )
}

export default Phimhoathinh
