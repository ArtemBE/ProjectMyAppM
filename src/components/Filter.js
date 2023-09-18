import React from 'react'
import Variant from './Variant'

export default function Filter({arr, char}) {
    return (
        <div className="filters-item filters-item_producer">
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
            <Variant char='producer' variant='apple'/>
            <Variant char='producer' variant='Realme'/>
            <Variant char='producer' variant='Samsung'/>
            <Variant char='producer' variant='Xiaomi'/>
            <Variant char='producer' variant='Huawei'/>
            {/* <div className="filters-item__variant filters-item__variant_producer_Huawei">
                <input type="checkbox" name="producer" id="filters-item__variant_producer_Huawei" />
                <label htmlFor="filters-item__variant_producer_Huawei">Huawei</label>
            </div> */}
        </div>
    )
}
