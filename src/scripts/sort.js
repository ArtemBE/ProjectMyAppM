export default function sort(arr){
    return (typeof(arr[0])==='number')? 
    arr.sort((a, b)=>a-b):arr.sort();
}