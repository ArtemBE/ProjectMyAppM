export const maxPrice = cat => cat.reduce((max, item)=>item.price>max?item.price:max, -1);
export const minPrice = cat => {
    console.log(cat.reduce((min, item)=>item.price<min?item.price:min, 9999999));
    return cat.reduce((min, item)=>item.price<min?item.price:min, 9999999);
}
