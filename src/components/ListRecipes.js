import React, {useContext} from 'react';
import { ContextRecipes } from '../context/ContextRecipes';
import Recipe from './Recipe';

const ListRecipes = () => {

    // extraer recetas
    const { recipes } = useContext(ContextRecipes);

    return (
        <div className="row mt-5">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    );
}

export default ListRecipes;