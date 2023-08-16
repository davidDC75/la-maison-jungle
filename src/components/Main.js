import { useState, useEffect } from 'react';
import '../styles/Main.css';

import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

// Vérifie si localStorage ou sessionStorage (selon type) est supporté
function storageAvailable(type) {
    try {
      var storage = window[type],
        x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
  }


function Main() {

        // On récupère le cart sauvegardé (return false si existe pas)
        const savedCart = localStorage.getItem('cart');
        const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
        // Lance le useEffect lorsque cart est modifié
        useEffect( () => {
            localStorage.setItem('cart', JSON.stringify(cart));
        }, [cart]);

    return(
        <main className='lmj-main'>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
        </main>
    );
}
export default Main;