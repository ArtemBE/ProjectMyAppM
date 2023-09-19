import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Variant({char, variant}) {
    const dispatch = useDispatch();
    const ar = useSelector(state=>state.choise.color);
    function change(e){
        if (e.currentTarget.checked) dispatch({type: 'addVariant', payload: {char, variant}});
        else dispatch({type: 'removeVariant', payload: {char, variant}});
        //console.log(ar);
    }
    return (
        <div className={"filters-item__variant filters-item__variant_" + 
        char + "_" + variant}>
            <input onChange={change} type="checkbox" name={char} 
                id={"filters-item__variant_" + 
                char + "_" + variant} />
            {char==='color' && 
            <img src={"./images/colors/" + variant + ".svg"} alt="Картинка ушла за хлебом" />}
            <label htmlFor={"filters-item__variant_" + 
            char + "_" + variant}>{variant}</label>
        </div>
    )
}
