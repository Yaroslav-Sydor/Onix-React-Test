import  "../../../styles/main/offer/offerItem.css"
function OfferItem() {
    return (
        <div className="offer__item__container">
            <div className={"offer__item__img__wrapper"}>
                <img src="''" alt="''"/>
            </div>
                <div className={"offer__item__information"}>
                        <p className={"offer__item__text"}>
                            Laptops
                        </p>
                    <div className={"offer__item__discount"}>-25%</div>
                </div>

        </div>
    );
}

export default OfferItem;