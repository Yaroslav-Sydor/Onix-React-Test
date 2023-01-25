import "../../../styles/main/offer/offer.css"
import OfferDate from "./offerDate";
import OfferItem from "./offerItem";

function Offer() {
    return (
        <div className="offer__container">
            <OfferDate/>

            <OfferItem></OfferItem>
            <OfferItem></OfferItem>
            <OfferItem></OfferItem>
            <OfferItem></OfferItem>
            <OfferItem></OfferItem>
        </div>
    );
}

export default Offer;
