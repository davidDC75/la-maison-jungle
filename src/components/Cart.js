import { useState } from 'react';

import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    return isOpen ?(
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2>Panier</h2>
                {cart.map( ({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                    </div>
                ))}
            <h3>Total : { total }€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-car-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    );
}

export default Cart;