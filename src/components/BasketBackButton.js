import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BasketBackButton() {
    return (
        <NavLink to="/">
            <div className="back">
                <img src="./images/mini/leftarrow.svg" alt="Failed to load" className="back__arrow" />
                <span className="back__label">Вернуться к покупкам</span>
            </div>
        </NavLink>
    )
}
