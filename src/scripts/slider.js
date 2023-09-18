import React, {useRef} from "react";

export let polz; //document.body.querySelector('.filters-price-slider');
export let left; //polz.querySelector('.filters-price-slider__left-handler');
export let right; //polz.querySelector('.filters-price-slider__right-handler');
export let way; //polz.querySelector('.filters-price-slider__way');

//const minPrice = document.body.querySelector('.price-input');
export let input1; //document.body.querySelector('.filters-price-input__left-input');
export let input2; //document.body.querySelector('.filters-price-input__right-input');

const minPrice = 3990;
const maxPrice = 139990;

const valid = input => !isNaN(Number(input.current.value)) && 
                              Number(input.current.value)>=3990 &&
                              Number(input.current.value)<=139990;


let clampedLeft = false;
let clampedRight = false;
let lastX;


const move = e => {
    let r = parseInt(getComputedStyle(right.current).right);  //позиция правого handler
    let l = parseInt(getComputedStyle(left.current).left);    //позиция левого handler
    const invalidRelPos = () => {           //проверка находится ли правый ползунок левее левого
        r = parseInt(getComputedStyle(right.current).right);
        l = parseInt(getComputedStyle(left.current).left);
        return l+r > box.width-22;
    }
    //проверка идет ли правый ползунок вправо, а левый влево
    const invalidDir = () => (clampedLeft && (e.clientX>lastX)) || (clampedRight && (e.clientX<lastX))  

    const box = polz.current.getBoundingClientRect();
    if(e.clientX<box.left-8) return null;   //если левый ползунок выходит за рамки
    if(e.clientX>box.left+box.width-8) return null;     //если правый ползунок выходит за рамки
    if(invalidRelPos() && invalidDir()) return null;    //если правый ползунок пытается перескачить за левый или наоборот
    if(clampedLeft){    //если зажат левый
        //console.log(getComputedStyle(left).left+getComputedStyle(right).right);
        left.current.style.left = Number(e.clientX - box.left)+'px';
        //если левый перескачил через правый - возвращаем обратно
        if(invalidRelPos()) left.current.style.left = Number(box.current.width-22-r)+'px';
        r = parseInt(getComputedStyle(right.current).right);
        l = parseInt(getComputedStyle(left.current).left);
        input1.current.value = minPrice + Math.round((maxPrice-minPrice)/box.width*(l+8));
    }
    if(clampedRight){   //если зажат правый
        //console.log(getComputedStyle(left).left+getComputedStyle(right).right);
        right.current.style.right = Number(box.left + box.width - e.clientX-17)+'px';
        //если правый перескачил через левый - возвращаем обратно
        if(invalidRelPos()) right.current.style.right = Number(box.width-22-l)+'px';
        r = parseInt(getComputedStyle(right.current).right);
        l = parseInt(getComputedStyle(left.current).left);
        input2.current.value = maxPrice - Math.round((maxPrice-minPrice)/box.width*(r+8));
    }
    lastX=e.clientX;    //предыдущее положение
}

left.current.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    clampedRight=false;
    clampedLeft=true;
});
right.current.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    clampedLeft=false;
    clampedRight=true;
});

document.addEventListener('mousemove', move);
document.addEventListener('mouseup', ()=>{clampedLeft=clampedRight=false;});