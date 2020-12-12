import React, { useContext } from 'react';
import ContextModal from '../context/ContextModal';

const Recipe = ({recipe}) => {

    const { setSavedIdRecipe } = useContext(ContextModal);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>

                <img src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`} className="card-img-top"/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setSavedIdRecipe(recipe.idDrink)
                        }}
                    >
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recipe;