import React from 'react'

import '../Styles/Searchbar.css'

const Searchbar = ({input:keyword, onChange:setKeyword}) => {

    return (
        <div className='search-bar'>
            <input 
                id='input' 
                type='text' 
                placeholder={'Search student by name'} 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    )
}

export default Searchbar