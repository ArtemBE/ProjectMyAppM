import React, { useRef } from 'react'
import Filter from './Filter'
import phone from '../data/product/Phone'
import { useDispatch, useSelector } from 'react-redux';
import PriceFilter from './PriceFilter';

export default function Filters() {
    let cat = useSelector(state=>state.currentCategory);
    let keys = Object.keys(cat[0]);
    /* const dispatch = useDispatch();
    const inp1 = (e) => {
        dispatch({type: 'changePriceCeiling', payload: Number(e.currentTarget.value)})
    }
    const inp2 = (e) => {
        dispatch({type: 'changePriceFloor', payload: Number(e.currentTarget.value)})
    } */
    return (
        <div className="filters">
            <span className="filters-header">Фильтры</span>
            <PriceFilter/>
            {keys.map(key=>(['name', 'img', 'price', 'key', 'category'].includes(key))?
            null:<Filter char={key}/>)}
        </div>
    )
}
