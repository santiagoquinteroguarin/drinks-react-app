import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear context, siempre que se crea un context se necesita un provider
export const ContextRecipes = createContext();

// provider --> de donde van a salir los datos(state) y las funciones.
const ProviderRecipes = (props) => {

    // crear el state del context
    const [recipes, setSavedRecipes] = useState([]);
    const [search, setSearchRecipes] = useState({
        name: '',
        category: '',
    });

    // useEffect(() => {
    //     const getRecipes = async () => {
    //         const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    //         const  data = await axios.get(url);

    //         setSavedRecipes();
    //     }
    //     getRecipes();
    // }, []);

    return (
        <ContextRecipes.Provider
            value={{
                setSearchRecipes
            }}
        >
            {props.children}
        </ContextRecipes.Provider>
    );
}

export default ProviderRecipes;