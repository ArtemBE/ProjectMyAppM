function matchCheckbox(item, choise){
    let m = true;
    for(let k in item){
        if(['name', 'img', 'price', 'key', 'category'].includes(k)) continue;
        if(choise[k].length===0) continue;
        if(choise[k].includes(item[k])) continue;
        m = false;
    }
    return m;
}
export default function matchFilter(item, choise, state){
    //console.log(price.ceiling);
    return (item.price>=state.floor) && 
    (item.price<=state.ceiling) &&
    matchCheckbox(item, choise);
};