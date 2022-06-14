import '../styles/Cart.css';
import {useState} from 'react';

function Cart({cart, updateCart}) {
    //Créer un state Cart, et déclarer une fonction pour mettre à jour ce state, et lui attribuer une valeur initiale de 0
    //Décomposition, et non destructuration car il s'agit d'un tableau et non d'un objet
    /*  
        const cartState = useState(false)
        const isOPen = cartState[0]
        const setIsOpen = cartState[1]    
    */
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart;