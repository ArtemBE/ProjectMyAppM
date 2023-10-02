import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function CardFull() {
    const dispatch = useDispatch();
    let scroll = useSelector(state=>state.scroll);
    let item = useSelector(state=>state.fullCard);
    let has = useSelector(state=>state.basket.has(JSON.stringify(item)));
    let count = useSelector(state=>state.basket.get(JSON.stringify(item)));
    const card = useRef();
    const onclose = () => {
        dispatch({type: 'closeCard'});
        //console.log('scroll2 ' + scroll);
        window.scrollTo(0, scroll);
    }
    useEffect(()=>{ /* console.log(window.pageYOffset); */ window.scrollTo(0, 0);}, []);
    return (
<div ref={card} className="cardAndBack" onClick={onclose}>
    <div className="card" onClick={(e)=>{
        //alert('frontClick');
        e.stopPropagation();
    }}>
        <img onClick={onclose} 
            src='./images/mini/plus.svg' 
            alt='Картинка ушла за хлебом' 
            className='close-img'></img>
        <div className="head">
            <div className="head__label">
                {item.name}
            </div>
            <div className="head__free">
                Бесплатная доставка
            </div>
        </div>
        <div className="image-and-info">
            <div className="image">
                <img src={item.img} alt="Картинка ушла за хлебом" />
            </div>
            <div className="info">
                <div className="info__price">
                {item.price + ' ₽'} 
                </div>
                {has?
                    <div class="info__basket info__basket_not-empty">
                        <img onClick={()=>dispatch({type: 'removeProduct', payload: item})} 
                            src="./images/mini/MinusBB.svg" 
                            alt="Картинка ушла за хлебом"
                        />
                        <span>{count}</span>
                        <img onClick={()=>dispatch({type: 'addProduct', payload: item})}
                            src="./images/mini/PlusBB.svg" 
                            alt="Картинка ушла за хлебом"
                        />
                    </div>:
                    <div onClick={()=>dispatch({type: 'addProduct', payload: item})}
                        className="info__basket"
                    >
                        В корзину
                    </div>
                }
                
                <div className="info__colors">
                    <div className="info__color-label">
                        Цвет
                    </div>
                    <img className="info__color" 
                        src={"./images/colors/color_" + 
                        item.color+".svg"} 
                        alt="Картинка ушла за хлебом" 
                    />
                </div>
            </div>
        </div>
        <div className="description">
            <div className="description__head">
                Описание
            </div>
            <p className="description__content">
                ⚠️<b>Описание не имеет ничего общего с текущим
                    товаром, как и с реальными товарами</b>⚠️<br/>
                Xiaomi Redmi 12 — смартфон для хранения 
                большого объема информации, запуска 
                стандартных программ и веб-серфинга. 
                Протокол IP53 обеспечивает надежную 
                защиту оборудования в различных 
                погодных условиях. <br />
                Вместительный и высококачественный<br />
                Лоток для двух SIM-карт.<br />
                Поддержка SD-карт.<br />
                Отпечаток пальца и Face ID.<br />
                Wi-Fi 5 и Bluetooth 5.3.<br />
                Беспроводной модуль NFC.<br />
                Безрамочный IPS-экран разрешением 
                2400х1080 с частотой 90 Гц.<br />
                Основная камера на 50 Мп.<br />
                8 Мп фронтальная камера.<br />
                Восьмиядерный чипсет MediaTek 
                Helio G88 до 2,2 ГГц.<br />
                8 Гб оперативной памяти.<br />
                256 Гб внутренней памяти.<br />
                Батарея 5000 мАч с быстрой зарядкой.<br />
                Большое внутреннее хранилище<br />
                Телефон оснащен диском объемом на 256 
                гигабайт для хранения большого объема данных. 
                Дополнительно смартфон поддерживает установку 
                SD-карт и расширение памяти до 1 терабайта.<br />
                Беспроводные адаптеры<br />
                Модуль Wi-Fi 5 понадобится для установки 
                высокоскоростного подключения к интернету 
                с минимальными задержками. Адаптер Bluetooth 5.3 
                нужен для подключения дополнительных гаджетов 
                или обмена информацией по защищенному каналу.<br />
                Высокий уровень надежности<br />
                Сканер отпечатка пальца защищает 
                устройство от злоумышленников в случае 
                кражи. Функция разблокировки по лицу 
                понадобится для входа в систему 
                без использования пароля.
            </p>
        </div>
    </div>
</div>

    )
}
