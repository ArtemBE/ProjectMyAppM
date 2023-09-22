import React from 'react'
import { useSelector } from 'react-redux';

export default function BasketDetails() {
    let basket = useSelector(state=>state.basket);
    return (
        <div className="basket-details">
            <div className="basket-details__head">Детали заказа</div>
            <div className="basket-details__count">
                Количество товара: 
                <span>{' '+Array.from(basket.keys())
                                .reduce((acm, item)=>acm+basket
                                .get(item), 0)}
                </span>
            </div>
            <div className="basket-details__total">
                Итого: 
                <span>{' '+Array.from(basket.keys())
                                .reduce((acm, item)=>acm+basket
                                .get(item)*item.price, 0)}
                </span>
                ₽
            </div>
        </div>
    )
}
