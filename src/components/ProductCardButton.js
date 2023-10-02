import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCardButton({item}) {
    let basket = useSelector(state=>state.basket);
    let JSONitem = JSON.stringify(item);
    let g = basket.get(JSONitem);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("Корзина изменилась");
    }, [g]);
    return (
        basket.has(JSONitem) ? 
        <div className="product-cart__button  product-cart__button_not-empty">
            <img src="./images/mini/MinusBB.svg" 
                onClick={(e)=>{
                    dispatch({type: "removeProduct", payload: item});
                    e.stopPropagation();
                }}
            />
            <span className="product-cart__count">
                {basket.get(JSONitem)}
            </span>
            <img src="./images/mini/PlusBB.svg" 
                onClick={(e)=>{
                    dispatch({type: "addProduct", payload: item});
                    e.stopPropagation();
                }}
            />
        </div> : 
        <div onClick={(e)=>{
            dispatch({type: "addProduct", payload: item});
            e.stopPropagation();
        }} 
            className="product-cart__button"
        >
            В корзину
        </div>
    )
}

