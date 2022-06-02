import '../styles/Cart.css';

function Cart() {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 15;
    return <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>Montera : {monsteraPrice}€</li>
            <li>Lierre : {lierrePrice}€</li>
            <li>Bouquet de fleurs : {bouquetPrice}€</li>
        </ul>
        <p>Total : {monsteraPrice + lierrePrice + bouquetPrice}€</p>
    </div>
}

export default Cart