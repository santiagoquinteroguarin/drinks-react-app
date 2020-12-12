import React, { createContext, useState } from 'react';

// crear context, siempre que se crea un context se necesita un provider
export const ContextCategories = createContext();

// provider --> de donde van a salir los datos(state) y las funciones.
const ProviderCategories = (props) => {

    // crear el state del context
    const [hola, guardarHola] = useState('hola');

    return (
        <ContextCategories.Provider
            value={{hola}}
        >
            {props.children}
        </ContextCategories.Provider>
    );
}

export default ProviderCategories;