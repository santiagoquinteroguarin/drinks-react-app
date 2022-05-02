import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListRecipes from './components/ListRecipes';
import CategoriesProvider from './context/ContextCategories';
import RecipesProvider from './context/ContextRecipes';
import ModalProvider from './context/ContextModal';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header/>

          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <ListRecipes/>
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
