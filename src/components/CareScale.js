// On peut passer les paramètres aussi de cette manière
// function CareScale({scaleValue, careType}) {
function CareScale(props) {
    // const scaleValue = props.scaleValue;
    const {scaleValue, careType} = props;

    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧';

    return (<div>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
            </div>);
}

export default CareScale;