import React, { useContext, useState } from 'react';
import ContextModal from '../context/ContextModal';

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
        width: 600,
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
                            setSavedIdRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        opem={open}
                        onClose={() => {
                            setSavedIdRecipe(null);
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}></div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;