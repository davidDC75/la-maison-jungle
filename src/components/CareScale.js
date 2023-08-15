import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function handleClick(careType, scaleValue) {
    const quantityText = quantityLabel[scaleValue];
    let text='';
    if (careType==='light') {
        text='Cette plante requiert '+quantityText+' de soleil';
    } else {
        text='Cette plante requiert '+quantityText+" d'eau";
    }

    alert(text);
}
// On peut passer les paramètres aussi de cette manière
// function CareScale({scaleValue, careType}) {
function CareScale(props) {

    const {scaleValue, careType} = props;

    const range = [1, 2, 3];

    const scaleType =
            careType === 'light' ? (
                <img src={Sun} alt='sun-icon' />
            ) : (
                <img src={Water} alt='water-icon' />
            );

    return (<div onClick={ () => handleClick(careType,scaleValue)}>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
            </div>);
}

export default CareScale;