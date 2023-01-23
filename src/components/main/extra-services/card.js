import '../../../styles/main/extra/card.css';
import Icon from "./icon";




function Card(props) {
    return (
        <div className="extra__card__container">
            <div className={'extra__card__img__wrapper'}>
                <img className={'extra__card__img'} src={props.img} alt=""/>
            </div>

            <Icon className={'extra__icon'}/>

            <div className={'extra__card__text__wrapper'}>
                <p className={'extra__card__text'}>{props.text}</p>
            </div>

            {/*<div className={"logo__container"}>

                <img className={"logo__container__img"} src={logo} alt={'logo'}/>

            </div>*/}

        </div>
    );
}

export default Card;
