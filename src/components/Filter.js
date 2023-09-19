import React from 'react'
import Variant from './Variant'
import variants from '../scripts/Variants'
import { useSelector } from 'react-redux';

export default function Filter({char}) {
    let cat = useSelector(state=>state.currentCategory);
    let vars = variants(char, cat); 
    return (
        <div className={"filters-item filters-item_" + char}>
            <span>{char}</span>
            {/* <div className="filters-item__variant filters-item__variant_producer_apple">
                <input type="checkbox" name="producer" id="filters-item__variant_producer_apple" />
                <label htmlFor="filters-item__variant_producer_apple">Apple</label>
            </div>
            <div className="filters-item__variant filters-item__variant_producer_Realme">
                <input type="checkbox" name="producer" id="filters-item__variant_producer_Realme" />
                <label htmlFor="filters-item__variant_producer_Realme">Realme</label>
            </div>
            <div className="filters-item__variant filters-item__variant_producer_Samsung">
                <input type="checkbox" name="producer" id="filters-item__variant_producer_Samsung" />
                <label htmlFor="filters-item__variant_producer_Samsung">Samsung</label>
            </div>
            <div className="filters-item__variant filters-item__variant_producer_Xiaomi">
                <input type="checkbox" name="producer" id="filters-item__variant_producer_Xiaomi" />
                <label htmlFor="filters-item__variant_producer_Xiaomi">Xiaomi</label>
            </div> */}
            {vars.map(item=><Variant char={char} variant={item}/>)}
            {/* <Variant char='producer' variant='apple'/>
            <Variant char='producer' variant='Realme'/>
            <Variant char='producer' variant='Samsung'/>
            <Variant char='producer' variant='Xiaomi'/>
            <Variant char='producer' variant='Huawei'/> */}
            {/* <div className="filters-item__variant filters-item__variant_producer_Huawei">
                <input type="checkbox" name="producer" id="filters-item__variant_producer_Huawei" />
                <label htmlFor="filters-item__variant_producer_Huawei">Huawei</label>
            </div> */}
        </div>
    )
}
