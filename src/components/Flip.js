import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

export default function Flip() {
    const dispatch = useDispatch();
    const page = useSelector(state=>state.productPage);
    return (
        <div className="flip-menu">
            <img src="./images/mini/next1.svg" alt="Картинка ушла за хлебом" 
            className='flip-menu__arrow flip-menu__arrow_direction_left'
            onClick={()=>dispatch({type: 'changePage', payload: -1})}/>
            {page + "/3"}
            <img src="./images/mini/next2.svg" alt="Картинка ушла за хлебом" 
            className='flip-menu__arrow flip-menu__arrow_direction_right'
            onClick={()=>dispatch({type: 'changePage', payload: 1})}/>
        </div>
    )
}