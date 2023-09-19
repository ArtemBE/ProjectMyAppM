import React, { useRef } from 'react'
import Filter from './Filter'
import phone from '../data/product/Phone'
import { useDispatch, useSelector } from 'react-redux';

export default function Filters() {
    let cat = useSelector(state=>state.currentCategory);
    let keys = Object.keys(cat[0]);
    const dispatch = useDispatch();
    const inp1 = (e) => {
        dispatch({type: 'changePriceCeiling', payload: Number(e.currentTarget.value)})
    }
    const inp2 = (e) => {
        dispatch({type: 'changePriceFloor', payload: Number(e.currentTarget.value)})
    }
    return (
                <div className="filters">
                    <span className="filters-header">Фильтры</span>
                        <div className="filters-item filters-item_price">
                            <span>Цена</span>
                            <div className="filters-price-slider">
                                <div className="filters-price-slider__way"/>
                                <div className="filters-price-slider__left-handler filters-price-slider__handler"/>
                                <div className="filters-price-slider__right-handler filters-price-slider__handler"/>
                            </div>
                            <div className="filters-price-input" data-min={3990} data-max={139990}>
                                <input onChange={inp1} className="filters-price-input__left-input" defaultValue={3990} placeholder="min" type="text"/>
                                <input onChange={inp2} className="filters-price-input__right-input" defaultValue={139990} placeholder="max" type="text"/>
                            </div>
                        </div>

                        {keys.map(key=>(['name', 'img', 'price', 'key', 'category'].includes(key))?
                                  null:<Filter char={key}/>)}
                    </div>
    )
}
