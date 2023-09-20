import React from 'react'

export default function PriceFilter() {
    return (
        <div className="filters-item filters-item_price">
            <span>Цена</span>
            <div className="filters-price-slider">
                <div className="filters-price-slider__way"/>
                <div className="filters-price-slider__left-handler filters-price-slider__handler"/>
                <div className="filters-price-slider__right-handler filters-price-slider__handler"/>
            </div>
            <div className="filters-price-input">
                <input className="filters-price-input__left-input" placeholder="min" type="text"/>
                <input className="filters-price-input__right-input" placeholder="max" type="text"/>
            </div>
        </div>
    )
}
