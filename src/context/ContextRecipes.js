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
    const [consult, setSavedConsult] = useState(false);
    const { name, category } = search;

    useEffect(() => {
        if(consult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const response = await axios.get(url);

                setSavedRecipes(response.data.drinks);
            }
            getRecipes();
        }
    }, [search, name, category, consult]);

    return (
        <ContextRecipes.Provider
            value={{
                recipes,
                setSearchRecipes,
                setSavedConsult
            }}
        >
            {props.children}
        </ContextRecipes.Provider>
    );
}

export default ProviderRecipes;