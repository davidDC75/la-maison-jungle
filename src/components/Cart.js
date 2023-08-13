let plantList = [
    {
        "name": "Monstera",
        "price": 8
    },
    {
        "name": "Lierre",
        "price": 10
    },
    {
        "name": "Bouquet de fleur",
        "price": 15
    }
];

function Cart() {
    let totalPrice = 0;
    for (let i=0; i < plantList.length; i++) totalPrice += plantList[i].price;
    return(
        <div>
            <ul>
                <li>{ plantList[0].name } - { plantList[0].price } €</li>
                <li>{ plantList[1].name } - { plantList[1].price } €</li>
                <li>{ plantList[2].name } - { plantList[2].price } €</li>
            </ul>
            <div>
                TOTAL : { totalPrice }
            </div>
        </div>
    );
}

export default Cart;