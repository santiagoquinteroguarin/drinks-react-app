import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear context, siempre que se crea un context se necesita un provider
export const ContextCategories = createContext();

// provider --> de donde van a salir los datos(state) y las funciones.
const ProviderCategories = (props) => {

    // crear el state del context
    const [categories, setSavedCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const dataCategories = await axios.get(url);

            setSavedCategories(dataCategories.data.drinks);
        }
        getCategories();
    }, []);

    return (
        <ContextCategories.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </ContextCategories.Provider>
    );
}

export default ProviderCategories;