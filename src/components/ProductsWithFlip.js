import React from 'react'
import ProductCard from './ProductCard'
import phone from '../data/product/Phone'
import tablet from '../data/product/Tablet'
import laptop from '../data/product/Laptop'
import audio from '../data/product/Audio'
import access from '../data/product/Access'
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
    let choise = useSelector(state=>state.choise);
    /* function matchCheckbox(item){
        let m = true;
        for(let k in item){
            if(['name', 'img', 'price', 'key', 'category'].includes(k)) continue;
            if(choise[k].length===0) continue;
            if(choise[k].includes(item[k])) continue;
            m = false;
        }
        return m;
    }
    function matchFilter(item){
        //console.log(price.ceiling);
        return (item.price>=state.floor) && 
        (item.price<=state.ceiling) &&
        matchCheckbox(item);
    }; */
    return (
        <div className="products-with-flip">
            <div className="products">
                {phone.filter(item=>(item.key<6)&&(matchFilter(item, choise, state))).map(item=>
                <ProductCard img={item.img} price={item.price} name={item.name} key={item.key}/>)}
            </div>
            <Flip/>
        </div>
    )
}
