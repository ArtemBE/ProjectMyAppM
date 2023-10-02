import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src="./images/навигация/checked-laptop.svg" className="header-logo__img"/>
                    <span>SND</span>
                </div>
                <nav className="header-navigation">
                    <NavLink to="/">
                        <div className="header-navigation__item header-navigation__item_catalog">
                            <img src="./images/навигация/diagram_list.svg" alt="Картинка ушла за хлебом"/>
                            <span>КАТАЛОГ ТОВАРОВ</span>
                        </div>
                    </NavLink>
                    <NavLink to="/about">
                        <div className="header-navigation__item header-navigation__item_about">
                            <img src="./images/навигация/person_question.svg" alt="Картинка ушла за хлебом"/>
                            <span>О НАС</span>
                        </div>
                    </NavLink>
                    
                    <a href="#contacts__anchor">
                        <div className="header-navigation__item header-navigation__item_contacts">
                            <img src="./images/навигация/phone-symbol.svg" alt="Картинка ушла за хлебом"/>
                            <span>КОНТАКТЫ</span>
                        </div>
                    </a>
                    <NavLink to="/basket">
                        <div className="header-navigation__item header-navigation__item_basket">
                            <img src="./images/навигация/shoppingcart_80945.svg" alt="Картинка ушла за хлебом"/>
                            <span>КОРЗИНА</span>
                        </div>

                    </NavLink>
                    
                </nav>
            </div>
        </header>
    )
}
