import React, { useState } from 'react'
import BasketBackButton from './BasketBackButton'
import { useSelector } from 'react-redux'
import BasketDetails from './BasketDetails';
import BasketItem from './BasketItem';

export default function Basket() {
    let basketSize = useSelector(state=>state.basket.size);
    let basketKeys = useSelector(state=>state.basket.keys());
    return (
        <main className="basket-main">
            <div className="basket-container">
                <BasketBackButton/>
                <div className="basket-main-label">Корзина {(basketSize===0) && " Пуста"}</div>
                {(basketSize===0)?
                <div className="basket-with-no-items">
                    Чтобы добавить товары в корзину, вернитесь к покупкам
                </div>:
                <div className="basket-items-and-details">
                    <div className="basket-items">
                        {Array.from(basketKeys).map(item=><BasketItem key={item.key} item={item}/>)}
                    </div>
                    <BasketDetails/>
                </div>
                }
            </div>
        </main>
    )
}
