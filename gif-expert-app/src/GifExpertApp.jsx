// import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        // Normalizar a minúsculas para comparación
        const normalizedNewCategory = newCategory.toLowerCase();

        // Verificar si la categoría ya existe (insensible a mayúsculas/minúsculas)
        if (categories.some(category => category.toLowerCase() === normalizedNewCategory)) {
            console.error(`La categoría "${newCategory}" ya existe.`);
            return;
        }

        // Agregar la nueva categoría si no existe
        setCategories([...categories, newCategory]);
        console.log(`Categoría "${newCategory}" agregada.`);    
        // console.log(typeof addText)

        // const addText = document.querySelector('#addCategory').value; //Agrega el texto del input al DOM
        // setCategories([...categories, addText]); //Agregar categoria mediante un input
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = {(value) => onAddCategory(value)}
            />

            {/* Boton input */}
            {/* <input type="text" id="addCategory" placeholder="Agregar nueva categoria"/><br /> */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map(category =>  (
                    <GifGrid key={category} category={category}/>
                ))   
            }
        </>
    )
}




