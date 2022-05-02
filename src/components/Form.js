import React, { useContext, useState } from 'react';
import { ContextCategories } from '../context/ContextCategories';
import { ContextRecipes } from '../context/ContextRecipes';

const Form = () => {

    const [search, setSavedSearch] = useState({
        name: '',
        category: ''
    });
    const { categories } = useContext(ContextCategories);
    const { setSearchRecipes, setSavedConsult } = useContext(ContextRecipes);

    // funcion para obtener datos del form
    const getDataRecipe = e => {
        setSavedSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setSearchRecipes(search);
                setSavedConsult(true);
            }}
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4 mt-2">
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Buscar por Ingredientes"
                        onChange={getDataRecipe}
                    />
                </div>

                <div className="col-md-4 mt-2">
                    <select 
                        className="form-control"
                        name="category"
                        onChange={getDataRecipe}
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {categories.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4 mt-2">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;