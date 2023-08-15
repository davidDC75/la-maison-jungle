import { useState } from 'react';
import '../styles/Main.css';

import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function Main() {
    const [cart, updateCart] = useState([]);
    return(
        <main className='lmj-main'>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
        </main>
    );
}
export default Main;