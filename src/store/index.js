import { createStore } from "redux";
/* import access from '../data/product/Access';
import audio from '../data/product/Audio';
import laptop from '../data/product/Laptop'; */
import phone from '../data/product/Phone';
/* import tablet from '../data/product/Tablet';
import variants from "../scripts/Variants"; */
import { composeWithDevTools } from 'redux-devtools-extension';
import matchFilter from "../scripts/match";


const defaultStateProducts = {
    priceFloor: 3990,
    priceCeiling: 139990,
    characteristics: ['color', 'memory', 'producer'],
    currentCategory: phone,
    choise: {
        memory: [],
        producer: [],
        color: [],
        type: [],
    },
    productPage: 1,
}

const defaultState = {
    ...defaultStateProducts,
    doc: document,
    basket: new Map(),
    fullCard: false,
    scroll: 0,
}
for(let i=0; i<localStorage.length;i++){
    defaultState.basket.set(localStorage.key(i), Number(localStorage.getItem(localStorage.key(i))));
}

console.log(defaultState.basket);
const reducer = function(state = defaultState, {type, payload}){
    let obj;
    switch(type){
        case 'changePriceFloor':
            //console.log('change f'); 
            return {...state, priceFloor: payload, productPage: 1}
        case 'changePriceСeiling':
            //console.log('change c'); 
            return {...state, priceCeiling: payload, productPage: 1}
        case 'addVariant':
            let c = payload.char;
            let v = payload.variant;
            if(state.choise[c].includes(v)) return state;
            let res = {...state, choise: {...state.choise, [c]: state.choise[c].concat(v)}, productPage: 1}
            //console.log(res.choise.color);
            return res;
        case 'removeVariant':
            let c1 = payload.char;
            let v1 = payload.variant;
            return  {...state, choise: {...state.choise, [c1]: state.choise[c1].filter(item=>item!==v1)}, productPage: 1}
        case 'changeCurrentCategory':
            return {...state, currentCategory: payload, choise: {
                memory: [],
                producer: [],
                color: [],
                type: [],
            },}
        case 'changePage':
            if(state.productPage<2 && payload<0) return state;
            if(state.productPage>=
                Math.ceil(state
                    .currentCategory
                    .filter(item=>matchFilter(item, state.choise, {
                        floor: state.priceFloor,
                        ceiling: state.priceCeiling,
                    }))
                    .length/6)
                &&payload>0) return state; 
            return {...state, productPage: state.productPage + payload}
        case 'to1stPage':
            return {...state, productPage: 1}
        case 'setDefaultState':
            return {...state, ...defaultStateProducts};
        case 'addProduct':
            obj=JSON.stringify(payload);
            localStorage.setItem(obj, 
                localStorage.getItem(obj)-(-1))
            return (
                state.basket.has(obj)?
                {...state, basket: state.basket.set(obj, state.basket.get(obj)+1)}:
                {...state, basket: state.basket.set(obj, 1)}
            )
        case 'removeProduct':
            //console.log(state.basket.get(payload));
            obj=JSON.stringify(payload);
            localStorage.getItem(obj)>1?
            localStorage.setItem(obj, 
                localStorage.getItem(obj)-1):
            localStorage.removeItem(obj);
            if(state.basket.get(obj)===1) state.basket.delete(obj);
            return (
                state.basket.get(obj)>1?
                {...state, basket: state.basket.set(obj, state.basket.get(obj)-1)}:
                {...state, basket: state.basket}
            ) 
        case 'openCard':
            //console.log('scr1 ' + window.pageYOffset);
            return {...state, fullCard: payload, scroll: window.pageYOffset};
        case 'closeCard':
            return {...state, fullCard: false};
        default:
            //console.log('default'); 
            return state;
    }
}
const store = createStore(reducer, composeWithDevTools());
export default store;