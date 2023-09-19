import sort from './sort';
export default function variants(char, arr){
    const vars = new Set();
    arr.forEach(item=>vars.add(item[char]));
    return sort(Array.from(vars));
}