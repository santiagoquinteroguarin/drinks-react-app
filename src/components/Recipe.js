import React, { useContext, useState } from 'react';
import { ContextModal } from '../context/ContextModal';
import uuid from 'react-uuid';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        height: 'auto',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {

    // config modal del material ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const { information, setSavedIdRecipe, setSavedRecipe } = useContext(ContextModal);

    // muestra y formatea los ingredientes
    const showIngredients = information => {
        let ingredients = [];
        for(let i = 1; i < 16; i++) {
            if(information[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={uuid()}>
                        {information[`strIngredient${i}`]} {information[`strMeasure${i}`]}
                    </li>
                )
            }
        }

        return ingredients;
    }

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
                            setSavedIdRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setSavedIdRecipe(null);
                            setSavedRecipe({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{information.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {information.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={information.strDrinkThumb} alt={information.strDrinkThumb}/>

                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {showIngredients(information)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;