import React from 'react';

import './seach-bar.style.css';

const SearchBar = () => {
    return(
        <div className="seach-bar-container">
            <div>
                <div className="seach-input">
                    <input type="text" placeholder="seach..." />
                </div>
                <div>
                   <input type="checkbox"/>Only show products in stock 
                </div>
                 <br/>
                
            </div>
        </div>
    )
}

export default SearchBar;