import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function PlantItem({ id, isSpecialOffer, cover, name, water, light, price}) {

    const isSpecialOfferDiv = isSpecialOffer === true ? (
        <div className="lmj-sales">Promo</div>
    ) : null;

    return (
        <li key={id} className="lmj-plant-item">
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {isSpecialOfferDiv}
            {name} - {price}€
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;