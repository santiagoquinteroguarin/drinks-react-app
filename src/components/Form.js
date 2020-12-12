import React, { useContext } from 'react';
import { ContextCategories } from '../context/ContextCategories';

const Form = () => {

    const { categories } = useContext(ContextCategories);

    return (
        <form
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
                    />
                </div>

                <div className="col-md-4 mt-2">
                    <select 
                        className="form-control"
                        name="category"
                    >
                        <option value="">-- Selecciona Categoria --</option>
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