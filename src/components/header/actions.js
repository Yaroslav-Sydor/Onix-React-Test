import '../../styles/header/actions.css'
import person from '../../assets/img/header/actions/person.svg'
import chat from '../../assets/img/header/actions/chat.svg'
import favorite from '../../assets/img/header/actions/favorite.svg'
import shopping from '../../assets/img/header/actions/shopping-cart.svg'


function Actions() {
    return (
        <div className="actions__container">
            <div className={'container__img'}>
                <img className={"img"} src={person} alt={'person'}/>
                <p className={'text'}>Profile</p>
            </div>
            <div className={'container__img'}>
                <img className={"img"} src={chat} alt={'chat'}/>
                <p className={'text'}>Message</p>
            </div>

            <div className={'container__img'}>
                <img className={"img"} src={favorite} alt={'favorite'}/>
                <p className={'text'}>Orders</p>
            </div>
            <div className={'container__img'}>
                <img className={"img"} src={shopping} alt={'shopping'}/>
                <p className={'text'}>My Cart</p>
            </div>

        </div>
    );
}

export default Actions;
