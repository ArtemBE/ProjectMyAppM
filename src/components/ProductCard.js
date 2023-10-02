import React from 'react'
import format from '../scripts/FormatPrice';
import ProductCardButton from './ProductCardButton';
import { useDispatch } from 'react-redux';
export default function ProductCard({item}) {
    const dispatch = useDispatch();
    const oncl = e => dispatch({type: 'openCard', payload: item});
    return (
        <div className="product-cart" onClick={oncl}>
            <img className="product-cart__img" src={item.img} alt="Failed to load" />
            <div className="product-cart__not-img">
                <div className="product-cart__price">{format(item.price)}</div>
                <div className="product-cart__name">{item.name}</div>
                <ProductCardButton item={item}/>
            </div>
        </div>
    )
}
