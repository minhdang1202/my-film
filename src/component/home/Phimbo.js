import React from 'react'
import { Route } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
const Phimbo = () => {
    return (
        <div>
            <Route path='{process.env.PUBLIC_URL}/:name' component = {Pagination} />
        </div>
    )
}

export default Phimbo
