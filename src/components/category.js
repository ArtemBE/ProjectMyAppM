import React from 'react'

export default function Category({name, img}) {
    return (
        <div className="categories__item categories__item_phone">
            <img src={img} alt="Картинка ушла за хлебом" />
            <span>{name}</span>
        </div>
    )
}
