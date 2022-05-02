import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear context, siempre que se crea un context se necesita un provider
export const ContextModal = createContext();

// provider --> de donde van a salir los datos(state) y las funciones.
const ProviderModal = (props) => {

    // crear el state del context
    const [idrecipe, setSavedIdRecipe] = useState(null);
    const [information, setSavedRecipe] = useState({});
    

    useEffect(() => {
        const getRecipe = async () => {
            if(!idrecipe) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
            const response = await axios.get(url);

            setSavedRecipe(response.data.drinks[0]);
        }
        getRecipe();
    }, [idrecipe]);

    return (
        <ContextModal.Provider
            value={{
                information,
                setSavedIdRecipe,
                setSavedRecipe
            }}
        >
            {props.children}
        </ContextModal.Provider>
    );
}

export default ProviderModal;