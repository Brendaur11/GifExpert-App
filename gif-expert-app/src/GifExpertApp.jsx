// import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCagory) => {
        setCategories([...categories, newCagory])
        console.log(newCagory);
        // console.log(typeof addText)

        // const addText = document.querySelector('#addCategory').value; //Agrega el texto del input al DOM
        // setCategories([...categories, addText]); //Agregar categoria mediante un input
    }

    return (
        <>
            {/* {titulo} */} 
            <h1>GifExpertApp</h1>

            {/* {input} */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = {(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            {/* <input type="text" id="addCategory" placeholder="Agregar nueva categoria"/><br /> */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                {/* <li></li> */}
            </ol>
                {/* {Gif Item} */}
        </>
    )
}