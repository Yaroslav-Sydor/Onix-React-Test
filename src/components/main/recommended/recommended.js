import '../../../styles/main/recommended/recommended.css';
import Item from "./item";
/*
import logo from '../../../assets/img/logo.svg'
*/



function Recommended() {
    return (
        <div className="recommended__container">
            <div className={'recommended__title'}>
                <h2 className={'recommended__title__text'}>Our extra services</h2>
            </div>
            <div className={'recommended__wrapper'}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>


            </div>
            {/*<img className={"extra__icon__background"} src={''} alt={''}/>
            <img className={"extra__icon__absolute"} src={''} alt=""/>*/}
        </div>
    );
}

export default Recommended;