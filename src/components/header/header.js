import '../../styles/header/header.css';
import logo from '../../assets/img/logo.svg'
import Actions from "./actions";
import Search from "./search";


function Header() {
    return (
        <div className="header__container">
            <div className={"logo__container"}>
                <img className={"logo__container__img"} src={logo} alt={'logo'}/>
            </div>
            <Search/>
            <Actions/>

        </div>
    );
}

export default Header;
