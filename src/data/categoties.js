import addKey from "../scripts/key";
const categories = [
{
    key: 0,
    name: 'phone',
    ruName: 'Смартфоны',
    characteristics: ['color', 'producer', 'memory'],
    img: './images/категории/smartphone_smart.svg',
},
{
    key: 1,
    name: 'tablet',
    ruName: 'Планшеты',
    characteristics: ['color', 'producer', 'memory'],
    img: './images/категории/tabletchart_118080.svg'
},
{
    key: 2,
    name: 'audio',
    ruName: 'Аудио',
    characteristics: ['color', 'producer', 'type'],
    img: './images/категории/Speaker_icon.svg'
},
{
    key: 3,
    name: 'access',
    ruName: 'Аксессуары',
    characteristics: ['color', 'type'],
    img: './images/категории/Office_-22.svg'
},
{
    key: 4,
    name: 'laptop',
    ruName: 'Ноутбуки',
    characteristics: ['color', 'producer', 'memory'],
    img: './images/категории/32officeicons.svg'
},
];
addKey(categories);
export default categories;