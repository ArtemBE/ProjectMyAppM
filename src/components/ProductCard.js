import React from 'react'
import format from '../scripts/FormatPrice';
export default function ProductCard(props) {
    return (
        <div className="product-cart">
            <img className="product-cart__img" src={props.img} alt="Картинка ушла за хлебом" />
            <div className="product-cart__not-img">
                <div className="product-cart__price">{format(props.price)}</div>
                <div className="product-cart__name">{props.name}</div>
                <div className="product-cart__button">В корзину</div>
            </div>
        </div>
    )
}
