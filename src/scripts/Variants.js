export default function variants(prop, arr){
    const vars = new Set();
    arr.forEach(item=>vars.add(item[prop]));
    return Array.from(vars).sort();
}