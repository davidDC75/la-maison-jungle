import React from 'react';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';

import '../styles/Banner.css';
import logo from '../assets/logo.png';

const title = "La maison Jungle";

function App() {
  return (
    <React.Fragment>
    <Banner>
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{ title.toUpperCase() }</h1>
    </Banner>
    <QuestionForm />
    <Cart />
    <ShoppingList />
    </React.Fragment>
  );
}

export default App;
