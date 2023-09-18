export default function format(a){
    a=String(a);
    let b='';
    for(let i=1; i<=a.length; i++){
        b=a[a.length-i]+''+b;
        if(i%3===0) b=' '+b;
    }
    return b+' ₽';
}