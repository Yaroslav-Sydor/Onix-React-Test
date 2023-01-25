import "../../../styles/main/offer/offerDate.css"

function OfferDate() {
    return (
        <div className="offer__date__container">
       <p className={"offer__date__title"}>Deals and offers</p>
            <p className={"offer__date__subtitle"}>Hygiene equipments</p>
            <div className={"offer__date__wrapper"}>
                <div className={"offer__date__counter"}>
                    <p className={"offer__date__number"}>04</p>
                    <p className={"offer__date__static"}>Days</p>
                </div>
                <div className={"offer__date__counter"}>
                    <p className={"offer__date__number"}>04</p>
                    <p className={"offer__date__static"}>Days</p>
                </div>
                <div className={"offer__date__counter"}>
                    <p className={"offer__date__number"}>04</p>
                    <p className={"offer__date__static"}>Days</p>
                </div>
                <div className={"offer__date__counter"}>
                    <p className={"offer__date__number"}>04</p>
                    <p className={"offer__date__static"}>Days</p>
                </div>
            </div>

        </div>
    );
}

export default OfferDate;