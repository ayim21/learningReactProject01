import '../styles/Cart.css';
import {useState} from 'react';

function Cart({cart, updateCart}) {
    const monsteraPrice = 8;
    //Créer un state Cart, et déclarer une fonction pour mettre à jour ce state, et lui attribuer une valeur initiale de 0
    //Décomposition, et non destructuration car il s'agit d'un tableau et non d'un objet
    /*  
        const cartState = useState(false)
        const isOPen = cartState[0]
        const setIsOpen = cartState[1]    
    */
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? ( 
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )
}

export default Cart;