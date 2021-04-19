import React from 'react';

import ProductCategoryROw from '../product-catagory-row/product-category-row.comp';


import ProductROw from '../product-row/product-row.comp';

import './product-table.style.css';

const ProductTable = () => {
    return(
        <div className="product-table-container">
          Name &nbsp; &nbsp; &nbsp;  Price 
          <ProductCategoryROw />
          <ProductROw />
          
        
        </div>
    )
}

export default ProductTable;