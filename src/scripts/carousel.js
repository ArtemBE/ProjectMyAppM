export default function carousel(doc){
    const rect=doc.body.querySelector('.about-carousel');
    const img = doc.body.querySelectorAll('.about-carousel img');
    const ring = doc.body.querySelectorAll('.about-carousel-arrows__ring');
    const next = c => c===2?0:c+1;
    const prev = c => c===0?2:c-1;
    let current = 0;
    function makeActive(i){
        img[i].style.zIndex=2;
        img[prev(i)].style.zIndex=1;
        img[next(i)].style.zIndex=0;
    }
    function rollTimeout(){
        makeActive(current);
        img[current].style.opacity='1';
        ring[prev(current)].style.backgroundColor='rgba(0, 0, 0, 0)';
        ring[current].style.backgroundColor='rgba(0, 0, 0, 1)';
        console.log(current);
    }
    function roll(){
        current=next(current);
        img[current].style.opacity='0';
        setTimeout(rollTimeout, 1000);
    }
    makeActive(0);
    ring[current].style.backgroundColor='rgba(0, 0, 0, 1)';
    setInterval(roll ,9000);
}
