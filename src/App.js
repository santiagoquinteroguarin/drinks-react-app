import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ContextCategories from './context/ContextCategories';

function App() {
  return (
    <ContextCategories>
      <Header/>

      <div className="container mt-5">
        <div className="row">
          <Form/>
        </div>
      </div>
    </ContextCategories>
  );
}

export default App;
