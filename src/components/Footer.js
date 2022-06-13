import {useState} from 'react';
import '../styles/Footer.css';

function Footer() {
    //Créer un state Footer, et déclarer une fonction pour manipuler la valeur
    const [inputValue, setInputValue] = useState('')

    function handleBlur() {
        const isEmail = inputValue.includes('@');
        if (!isEmail) alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }

    return (
        <footer className='lmj-footer'>
            <div>Pour les passioné-e-s de plantes 🌿🌱🌵</div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail:</div>
            <input 
                placeholder='Entrer votre email'
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer;