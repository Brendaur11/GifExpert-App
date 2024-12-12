// import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['The Simpsons']);

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
    }

    return (
        <>
            <h1 className="title-app">Gif Expert App</h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
            />

            {
                categories.map(category =>  (
                    <GifGrid key={category} category={category}/>
                ))   
            }
        </>
    )
}



// ---- EXPLICACION DEL CODIGO ----

    /* categories: Es una lista que contiene las categorías activas en la aplicación. Inicialmente tiene un elemento, ['One Punch'].
    setCategories: Es la función para actualizar el estado de categories.
    useState: Es un hook de React que gestiona el estado local dentro del componente. */

   /* const onAddCategory = (newCategory): 
    Verificación: Usa some para comprobar si la categoría ya existe (independientemente de las mayúsculas).
    Agregar nueva categoría: Si no existe, la agrega al estado actual usando:
    setCategories([...categories, newCategory]);
    Esto crea un nuevo arreglo con las categorías existentes más la nueva. */

    /* AddCategory: Es un componente hijo que probablemente contiene un formulario o entrada de texto para que el usuario agregue nuevas categorías.
    Prop onNewCategory: Se pasa una referencia a la función onAddCategory para manejar las nuevas categorías desde el componente hijo.
    */

    /* categories.map: Recorre todas las categorías en el estado y renderiza un componente GifGrid para cada una.
    GifGrid: Es otro componente hijo que probablemente muestra los GIFs relacionados con una categoría. */