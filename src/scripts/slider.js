/* const polz = document.body.querySelector('.filters-price-slider');
const left = polz.querySelector('.filters-price-slider__left-handler');
const right = polz.querySelector('.filters-price-slider__right-handler');
const way = polz.querySelector('.filters-price-slider__way');

//const minPrice = document.body.querySelector('.price-input');
const input1 = document.body.querySelector('.filters-price-input__left-input');
const input2 = document.body.querySelector('.filters-price-input__right-input'); */

/* const valid = input => !isNaN(Number(input.value)) && 
                              Number(input.value)>=3990 &&
                              Number(input.value)<=139990;
 */

export default function Slider(doc, dispatch, minPrice, maxPrice){
    const polz = doc.body.querySelector('.filters-price-slider');
    const left = polz.querySelector('.filters-price-slider__left-handler');
    const right = polz.querySelector('.filters-price-slider__right-handler');
    //const way = polz.querySelector('.filters-price-slider__way');

    //const minPrice = document.body.querySelector('.price-input');
    const input1 = doc.body.querySelector('.filters-price-input__left-input');
    const input2 = doc.body.querySelector('.filters-price-input__right-input');

    let clampedLeft = false;
    let clampedRight = false;
    let lastX;/* 
    minPrice = 3990;
    maxPrice = 139990; */
    input1.value = minPrice;
    input2.value = maxPrice;
    left.style.left=0;
    right.style.right=0;

    function move(e){
        let r = parseInt(getComputedStyle(right).right);  //позиция правого handler
        let l = parseInt(getComputedStyle(left).left);    //позиция левого handler
        const invalidRelPos = () => {           //проверка находится ли правый ползунок левее левого
            r = parseInt(getComputedStyle(right).right);
            l = parseInt(getComputedStyle(left).left);
            return l+r > box.width-22;
        }
        //проверка идет ли правый ползунок вправо, а левый влево
        const invalidDir = () => (clampedLeft && (e.clientX>lastX)) || (clampedRight && (e.clientX<lastX))  

        const box = polz.getBoundingClientRect();
        if(e.clientX<box.left-8) return null;   //если левый ползунок выходит за рамки
        if(e.clientX>box.left+box.width-8) return null;     //если правый ползунок выходит за рамки
        if(invalidRelPos() && invalidDir()) return null;    //если правый ползунок пытается перескачить за левый или наоборот
        if(clampedLeft){    //если зажат левый
            //console.log(getComputedStyle(left).left+getComputedStyle(right).right);
            left.style.left = Number(e.clientX - box.left)+'px';
            //если левый перескачил через правый - возвращаем обратно
            if(invalidRelPos()) left.style.left = Number(box.width-22-r)+'px';
            r = parseInt(getComputedStyle(right).right);
            l = parseInt(getComputedStyle(left).left);
            input1.value = minPrice + Math.round((maxPrice-minPrice)/box.width*(l+8));
            dispatch({type: 'changePriceFloor', payload: Number(input1.value)});
        }
        if(clampedRight){   //если зажат правый
            //console.log(getComputedStyle(left).left+getComputedStyle(right).right);
            right.style.right = Number(box.left + box.width - e.clientX-17)+'px';
            //если правый перескачил через левый - возвращаем обратно
            if(invalidRelPos()) right.style.right = Number(box.width-22-l)+'px';
            r = parseInt(getComputedStyle(right).right);
            l = parseInt(getComputedStyle(left).left);
            input2.value = maxPrice - Math.round((maxPrice-minPrice)/box.width*(r+8));
            dispatch({type: 'changePriceСeiling', payload: Number(input2.value)});
        }
        lastX=e.clientX;    //предыдущее положение
    }/* 
    function up(){
        clampedLeft=clampedRight=false;
    } */
    left.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        clampedRight=false;
        clampedLeft=true;
    });
    right.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        clampedLeft=false;
        clampedRight=true;
    });

    doc.addEventListener('mousemove', move);
    doc.addEventListener('mouseup', ()=>{clampedLeft=clampedRight=false;});
}