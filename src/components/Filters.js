import React from 'react'
import Filter from './Filter'

export default function Filters({arr}) {
    return (
                <div className="filters">
                    <span className="filters-header">Фильтры</span>
                        <div className="filters-item filters-item_price">
                            <span>Цена</span>
                            <div className="filters-price-slider">
                                <div className="filters-price-slider__way"/>
                                <div className="filters-price-slider__left-handler filters-price-slider__handler"/>
                                <div className="filters-price-slider__right-handler filters-price-slider__handler"/>
                            </div>
                            <div className="filters-price-input" data-min={3990} data-max={139990}>
                                <input className="filters-price-input__left-input" defaultValue={3990} placeholder="min" type="text"/>
                                <input className="filters-price-input__right-input" defaultValue={139990} placeholder="max" type="text"/>
                            </div>
                        </div>
                        <Filter char='producer'/>
                        {/* <div className="filters-item filters-item_producer">
                            <span>Производитель</span>
                            <div className="filters-item__variant filters-item__variant_producer_apple">
                                <input type="checkbox" name="producer" id="filters-item__variant_producer_apple" />
                                <label htmlFor="filters-item__variant_producer_apple">Apple</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_producer_Realme">
                                <input type="checkbox" name="producer" id="filters-item__variant_producer_Realme" />
                                <label htmlFor="filters-item__variant_producer_Realme">Realme</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_producer_Samsung">
                                <input type="checkbox" name="producer" id="filters-item__variant_producer_Samsung" />
                                <label htmlFor="filters-item__variant_producer_Samsung">Samsung</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_producer_Xiaomi">
                                <input type="checkbox" name="producer" id="filters-item__variant_producer_Xiaomi" />
                                <label htmlFor="filters-item__variant_producer_Xiaomi">Xiaomi</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_producer_Huawei">
                                <input type="checkbox" name="producer" id="filters-item__variant_producer_Huawei" />
                                <label htmlFor="filters-item__variant_producer_Huawei">Huawei</label>
                            </div>
                        </div> */}
                        <div className="filters-item filters-item_memory">
                            <span>Объем встроенной памяти</span>
                            <div className="filters-item__variant filters-item__variant_memory_16">
                                <input type="checkbox" name="memory" id="filters-item__variant_memory_16" />
                                <label htmlFor="filters-item__variant_memory_16">16 ГБ</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_memory_32">
                                <input type="checkbox" name="memory" id="filters-item__variant_memory_32" />
                                <label htmlFor="filters-item__variant_memory_32">32 ГБ</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_memory_64">
                                <input type="checkbox" name="memory" id="filters-item__variant_memory_64" />
                                <label htmlFor="filters-item__variant_memory_64">64 ГБ</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_memory_128">
                                <input type="checkbox" name="memory" id="filters-item__variant_memory_128" />
                                <label htmlFor="filters-item__variant_memory_128">128 ГБ</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_memory_256">
                                <input type="checkbox" name="memory" id="filters-item__variant_memory_256" />
                                <label htmlFor="filters-item__variant_memory_256">256 ГБ</label>
                            </div>
                        </div>
                        <div className="filters-item filters-item_color">
                            <span>Цвет</span>
                            <div className="filters-item__variant filters-item__variant_color_black">
                                <input type="checkbox" name="color" id="filters-item__variant_color_black" />
                                <img src="./images/colors/black.svg" alt="Картинка ушла за хлебом" />
                                <label htmlFor="filters-item__variant_color_black">Черный</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_color_gold">
                                <input type="checkbox" name="color" id="filters-item__variant_color_gold" />
                                <img src="./images/colors/gold.svg" alt="Картинка ушла за хлебом" />
                                <label htmlFor="filters-item__variant_color_gold">Золотой</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_color_grey">
                                <input type="checkbox" name="color" id="filters-item__variant_color_grey" />
                                <img src="./images/colors/grey.svg" alt="Картинка ушла за хлебом" />
                                <label htmlFor="filters-item__variant_color_grey">Серый</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_color_blue">
                                <input type="checkbox" name="color" id="filters-item__variant_color_blue" />
                                <img src="./images/colors/blue.svg" alt="Картинка ушла за хлебом" />
                                <label htmlFor="filters-item__variant_color_blue">Синий</label>
                            </div>
                            <div className="filters-item__variant filters-item__variant_color_beige">
                                <input type="checkbox" name="color" id="filters-item__variant_color_beige" />
                                <img src="./images/colors/begie.svg" alt="Картинка ушла за хлебом" />
                                <label htmlFor="filters-item__variant_color_beige">Бежевый</label>
                            </div>
                        </div>
                    </div>
    )
}
