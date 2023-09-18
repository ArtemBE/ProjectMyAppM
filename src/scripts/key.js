export default function addKey(arr){
    arr.reduce((acm, item)=>{
        item.key=acm;
        return acm+1;
    }, 0)
}
