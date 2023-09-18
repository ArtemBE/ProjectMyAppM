import React from 'react'
import ProductCard from './ProductCard'
import phone from '../data/product/Phone'

export default function ProductsWithFlip() {
  return (
    <div className="products-with-flip">
        <div className="products">
            {phone.filter(item=>item.key<6).map(item=>
            <ProductCard img={item.img} price={item.price} name={item.name} key={item.key}/>)}
        </div>
        <div className="flip-menu">
            <a href="https://www.youtube.com/"><img src="./images/mini/next1.svg" alt="Картинка ушла за хлебом" /></a>
            2/3
            <a href="https://www.youtube.com/"><img src="./images/mini/next2.svg" alt="Картинка ушла за хлебом" /></a>
        </div>
    </div>
  )
}
