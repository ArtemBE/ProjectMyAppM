import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function BasketItem({item}) {
    let count = useSelector(state=>state.basket.get(JSON.stringify(item)));
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("Корзина изменилась");
    }, [count]);
    return (
        <div className="basket-item">
            <img src={item.img} alt="Failed to load" className="basket-item__img" />
            <div className="basket-item__name">{item.name}</div>
            <div className="basket-item__counter">
                <img src="./images/mini/minus.svg"
                    alt="Failed to load"
                    className="basket-item__minus"
                    onClick={()=>{dispatch({type: "removeProduct", payload: item}); console.log('Это g='+count)}} 
                />
                <span className="basket-item__count">{count}</span>
                <img className="basket-item__plus" 
                    alt="Failed to load" 
                    src="./images/mini/plus.svg" 
                    onClick={()=>dispatch({type: "addProduct", payload: item})}
                />
            </div>
            <div className="basket-item__price">{count*item.price + ' ₽'}</div>
        </div>
    )
}
