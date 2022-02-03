import React from 'react'
import {useState} from 'react'

import '../Styles/Searchbar.css'

const Searchbar = () => {
    return (
        <div className='search-bar'>
            <input id='input' type='text' placeholder={'Search student by name'}></input>
        </div>
    )
}

export default Searchbar