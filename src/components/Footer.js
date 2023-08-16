import { useState, useEffect } from 'react';
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');
    const [isFooterShown, updateIsFooterShown] = useState(false);

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

    // useEffect( () => {
    //     console.log("Cette alert s\'affiche à chaque rendu du composant");
    // });

    useEffect( () => {
        console.log("Cette alert s'affiche quand isFooterShown est mis à jour");
    }, [isFooterShown]);

    return isFooterShown ? (
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
            <button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher le footer</button>
        </footer>
    ) : (
        <footer className="lmj-footer">
            <button onClick={() => updateIsFooterShown(!isFooterShown)}>Montrer le footer</button>
        </footer>
    );
}

export default Footer;