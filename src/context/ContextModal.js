import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear context, siempre que se crea un context se necesita un provider
export const ContextModal = createContext();

// provider --> de donde van a salir los datos(state) y las funciones.
const ProviderModal = (props) => {

    // crear el state del context
    const [idrecipe, setSavedIdRecipe] = useState(null);

    // useEffect(() => {
    //     const getRecipe = async () => {
    //         const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    //         const dataRecipe = await axios.get(url);

    //         setSavedRecipe(dataRecipe.data.drinks);
    //     }
    //     getRecipe();
    // }, []);

    return (
        <ContextModal.Provider
            value={{
                setSavedIdRecipe
            }}
        >
            {props.children}
        </ContextModal.Provider>
    );
}

export default ProviderModal;