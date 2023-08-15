import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');

    // Exécutée quand on écrit dans le input
    function handleInput(e) {
        setInputValue(e.target.value)
    }

    // Déclenchée quand on click en dehors de l'input
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionnés de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre email :</div>
            <input
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer;