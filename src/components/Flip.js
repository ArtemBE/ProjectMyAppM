import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import matchFilter from "../scripts/match";

export default function Flip() {
    const dispatch = useDispatch();
    const page = useSelector(state=>state.productPage);
    const cat = useSelector(state=>state.currentCategory);
    let state = useSelector(state=>({
        floor: state.priceFloor,
        ceiling: state.priceCeiling,
    }));
    let choise = useSelector(state=>state.choise);
    return (
        <div className="flip-menu">
            <img src="./images/mini/next1.svg" alt="Failed to load" 
            className='flip-menu__arrow flip-menu__arrow_direction_left'
            onClick={()=>dispatch({type: 'changePage', payload: -1})}
            hidden={page===1}/>
            {page + "/" + Math.ceil(cat.filter(item=>matchFilter(item, choise, state)).length/6)}
            <img src="./images/mini/next2.svg" alt="Failed to load" 
            className='flip-menu__arrow flip-menu__arrow_direction_right'
            onClick={()=>dispatch({type: 'changePage', payload: 1})}
            hidden={page===Math.ceil(cat.filter(item=>matchFilter(item, choise, state)).length/6)}/>
        </div>
    )
}