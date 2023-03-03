import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setinputValue] = useState('')

    const onIputChange = (evt) => {
        setinputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory(inputValue);
        setinputValue('')
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <h1 class="titulo-input"> El Input </h1>    

            <input class= "input"
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={(event) => onIputChange(event)}
                
            />
            
        </form>
    )
}