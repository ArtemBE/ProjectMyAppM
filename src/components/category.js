import React from 'react'
import { useDispatch } from 'react-redux'
import access from '../data/product/Access';
import audio from '../data/product/Audio';
import laptop from '../data/product/Laptop';
import phone from '../data/product/Phone';
import tablet from '../data/product/Tablet';
import Slider from '../scripts/slider'
import { maxPrice, minPrice } from '../scripts/MaxMin';
import form from '../scripts/format';
const cats = [access, audio, laptop, phone, tablet];

export default function Category({name, img}) {
    const dispatch = useDispatch();
    function oncl(){
        dispatch({
            type: 'changePriceFloor', 
            payload: minPrice(cats.find(item=>item[0].category===name)),
        })
        dispatch({
            type: 'changePriceСeiling', 
            payload: maxPrice(cats.find(item=>item[0].category===name)),
        })
        dispatch({
            type: 'to1stPage',
        })
        dispatch({
            type: 'changeCurrentCategory', 
            payload: cats.find(item=>item[0].category===name),
        })
    }
    return (
        <div 
            onClick={oncl} 
            className={"categories__item categories__item_" + name}
        >
            <img src={img} alt="Failed to load" />
            <span>{form(name)}</span>
        </div>
    )
}
