import React, { useEffect, useRef } from 'react'
import Slider from '../scripts/slider';
import Category from './category';
import categoties from '../data/categoties';
import Filters from './Filters';
import ProductsWithFlip from './ProductsWithFlip';
/* import phone from '../data/product/Phone';
import tablet from '../data/product/Tablet'; */
import {minPrice, maxPrice} from '../scripts/MaxMin'
import { useDispatch, useSelector } from 'react-redux';

export default function Content_categories({doc}) {
    const dispatch = useDispatch();
    const cat=useSelector(state=>state.currentCategory);
    let floor = minPrice(cat); 
    let ceiling = maxPrice(cat); 
    useEffect(()=>{
        Slider(doc, dispatch, floor, ceiling);
    }, [floor, ceiling]);
    return (
        <main>
            <div className="container">
                <div className="categories">
                    {categoties.map(item=><Category doc={doc} name={item.name} img={item.img} key={item.key}/>)}
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
