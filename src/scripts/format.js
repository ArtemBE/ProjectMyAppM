export default function form(a){
    switch(a){
        case 'color': return 'Цвет';
        case 'type': return 'Тип';
        case 'price': return 'Цена';
        case 'memory': return 'Память';
        case 'producer': return 'Производитель';
        case 'phone': return 'Смартфоны';
        case 'tablet': return 'Планшеты';
        case 'audio': return 'Аудио';
        case 'access': return 'Аксессуары';
        case 'laptop': return 'Ноутбуки';
        default: return a+' ГБ';
    }
}