import React from 'react'
import BasketBackButton from './BasketBackButton'

export default function Basket() {
    return (
        <main className="basket-main">
            <div className="basket-container">
                <BasketBackButton/>
                <div className="basket-main-label">Корзина пуста</div>
                <div className="basket-with-no-items">
                Чтобы добавить товары в корзину, вернитесь к покупкам
                </div>
            </div>
        </main>
    )
}
