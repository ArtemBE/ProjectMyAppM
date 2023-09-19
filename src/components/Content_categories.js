import React, { useEffect, useRef } from 'react'
import Slider from '../scripts/slider';
import Category from './category';
import categoties from '../data/categoties';
import Filters from './Filters';
import ProductsWithFlip from './ProductsWithFlip';
import phone from '../data/product/Phone';
import tablet from '../data/product/Tablet';
import { useDispatch } from 'react-redux';

export default function Content_categories({doc}) {
    const dispatch = useDispatch();
    useEffect(()=>{
        Slider(doc, dispatch);
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
            {/* <script src="./../scripts/slider2.js"></script> */}
        </main>
    )
}
