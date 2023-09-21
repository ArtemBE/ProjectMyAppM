import React from 'react'
import format from '../scripts/FormatPrice';
import ProductCardButton from './ProductCardButton';
export default function ProductCard({item}) {
    return (
        <div className="product-cart">
            <img className="product-cart__img" src={item.img} alt="Картинка ушла за хлебом" />
            <div className="product-cart__not-img">
                <div className="product-cart__price">{format(item.price)}</div>
                <div className="product-cart__name">{item.name}</div>
                <ProductCardButton item={item}/>
            </div>
        </div>
    )
}
