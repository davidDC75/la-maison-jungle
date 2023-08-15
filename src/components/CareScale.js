import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
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

    return (<div
                onClick={ () =>
                    alert(
                        `Cette plante requiert ${quantityLabel[scaleValue]} ${
                                careType === 'light' ? 'de lumière' : "d'arrosage"
                        }`
                    )

                }
            >
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
            </div>);
}

export default CareScale;