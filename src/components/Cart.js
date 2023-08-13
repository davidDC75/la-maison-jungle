import '../styles/Cart.css';

let plantList = [
    {
        "id": 1,
        "name": "Monstera",
        "price": 8
    },
    {
        "id": 2,
        "name": "Lierre",
        "price": 10
    },
    {
        "id": 3,
        "name": "Bouquet de fleur",
        "price": 15
    }
];

function Cart() {
    let totalPrice = 0;
    for (let i=0; i < plantList.length; i++) totalPrice += plantList[i].price;
    return(
        <div className='lmj-cart'>
            <ul>
                {plantList.map( (plant, index) => (
                    <li key={plant.id}>{plant.name} - {plant.price} €</li>
                ))}
            </ul>
            <div>
                TOTAL : { totalPrice }
            </div>
        </div>
    );
}

export default Cart;