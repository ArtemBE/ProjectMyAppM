import React, { useEffect, useRef } from 'react'
import slider2 from '../scripts/slider2';
import Category from './category';
import categoties from '../data/categoties';
import Filters from './Filters';
import ProductsWithFlip from './ProductsWithFlip';

export default function Content_categories({doc}) {
    useEffect(()=>{
        slider2(doc);
    }, []);
    return (
        <main>
            <div className="container">
                <div className="categories">
                    {categoties.map(item=><Category name={item.name} img={item.img} key={item.key}/>)}
                </div>
                <span className="current-category">Планшеты</span>
                <div className="products-and-filters">
                    <Filters/>
                    <ProductsWithFlip/>
                </div>
            </div>
            <script src="./../scripts/slider2.js"></script>
        </main>
    )
}
