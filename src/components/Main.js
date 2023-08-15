import '../styles/Main.css';

import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function Main() {
    return(
        <main className='lmj-main'>
            <Cart />
            <ShoppingList />
        </main>
    );
}
export default Main;