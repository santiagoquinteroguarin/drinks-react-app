import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ContextCategories from './context/ContextCategories';
import ContextRecipes from './context/ContextRecipes';
import ListRecipes from './components/ListRecipes';

function App() {
  return (
    <ContextCategories>
      <ContextRecipes>
        <Header/>

        <div className="container mt-5">
          <div className="row">
            <Form/>
          </div>
          <ListRecipes/>
        </div>
      </ContextRecipes>
    </ContextCategories>
  );
}

export default App;
