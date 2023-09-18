import React from 'react'

export default function Variant({char, variant}) {
    return (
        <div className={"filters-item__variant filters-item__variant_" + 
        char + "_" + variant}>
            <input type="checkbox" name={char} 
                id={"filters-item__variant_" + 
                char + "_" + variant} />
            {char==='color' && 
            <img src={"./images/colors/" + variant + ".svg"} alt="Картинка ушла за хлебом" />}
            <label htmlFor={"filters-item__variant_" + 
            char + "_" + variant}>{variant}</label>
        </div>
    )
}
