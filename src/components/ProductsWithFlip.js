import React, { useState } from 'react'
import ProductCard from './ProductCard'
/* import phone from '../data/product/Phone'
import tablet from '../data/product/Tablet'
import laptop from '../data/product/Laptop'
import audio from '../data/product/Audio'
import access from '../data/product/Access' */
import Flip from './Flip'
import matchFilter from '../scripts/match'

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

export default function ProductsWithFlip() {
    const dispatch = useDispatch();
    let state = useSelector(state=>({
        floor: state.priceFloor,
        ceiling: state.priceCeiling,
    }));
    let cat = useSelector(state=>state.currentCategory);
    let choise = useSelector(state=>state.choise);
    let page=useSelector(state=>state.productPage);
    return (
        <div className="products-with-flip">
            <div className="products">
                {cat
                .filter(item=>(matchFilter(item, choise, state)))
                .slice((page-1)*6, page*6)
                .map(item=>
                <ProductCard item={item} key={item.key}/>)}
            </div>
            <Flip/>
        </div>
    )
}
