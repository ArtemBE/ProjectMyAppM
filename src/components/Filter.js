import React from 'react'
import Variant from './Variant'
import variants from '../scripts/Variants'
import { useSelector } from 'react-redux';
import form from '../scripts/format';

export default function Filter({char}) {
    let cat = useSelector(state=>state.currentCategory);
    let vars = variants(char, cat); 
    return (
        <div className={"filters-item filters-item_" + char}>
            <span>{form(char)}</span>
            {vars.map(item=><Variant char={char} variant={item}/>)}
        </div>
    )
}
