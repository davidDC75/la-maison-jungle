import { useState, useEffect } from 'react';

import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    function deleteFromCart(name) {
        updateCart( cart.filter( (plant) => plant.name!==name));
    }

    function addOneToCart(name, price) {
        const currentNameToAdd = cart.filter( (plant) => plant.name===name );
        const cartWithoutName = cart.filter( (plant) => plant.name!==name );
        updateCart([
            ...cartWithoutName, { price, name, amount: currentNameToAdd[0].amount + 1 }
        ])
    }

    function delOneToCart(name,price) {
        const currentNameToAdd = cart.filter( (plant) => plant.name===name );
        const cartWithoutName = cart.filter( (plant) => plant.name!==name );
        if (currentNameToAdd[0].amount===0) {
            deleteFromCart(name);
        } else {
            updateCart([
                ...cartWithoutName, { price, name, amount: currentNameToAdd[0].amount - 1 }
            ])
        }
    }

    // Changement du titre de la page quand le total est mis à jour
    useEffect( () => {
        document.title = `LMJ : ${total}€ d'achats`;
    }, [total]);

    return isOpen ?(
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2>Panier</h2>
                {cart.map( ({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                        <a href="#" className='lmj-cursor-pointer' onClick={ () => deleteFromCart(name) }>❌</a>
                        <a href="#" className='lmj-cursor-pointer' onClick={ () => addOneToCart(name, price)}>🔼</a>
                        <a href="#" className='lmj-cursor-pointer' onClick={ () => delOneToCart(name, price)}>🔽</a>
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