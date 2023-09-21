import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCardButton({item}) {
    let basket = useSelector(state=>state.basket);
    const dispatch = useDispatch();
    return (
        basket.has(item) ? 
        <div className="product-cart__button  product-cart__button_not-empty">
            <img src="./images/mini/MinusBB.svg" 
                onClick={()=>dispatch({type: "removeProduct", payload: item})}
            />
            <span className="product-cart__count">
                {basket.get(item)}
            </span>
            <img src="./images/mini/PlusBB.svg" 
                onClick={()=>dispatch({type: "addProduct", payload: item})}
            />
        </div> : 
        <div onClick={()=>dispatch({type: "addProduct", payload: item})} 
            className="product-cart__button"
        >
            В корзину
        </div>
    )
}
