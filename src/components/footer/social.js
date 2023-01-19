import '../../styles/footer/social.css'
import logo from "../../assets/img/logo.svg";



function Social() {
    return (
        <div className={'social__container'}>
            <div className={"social__logo__container"}>
                <img className={"social__logo__container__img"} src={logo} alt={'logo'}/>
            </div>
            <div className={'social__text__container'}>
                <p className={'social__text'}>Best information about the company gies here but now lorem ipsum is </p>
            </div>

        </div>

    );
}

export default Social;
