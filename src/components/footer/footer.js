import '../../styles/footer/footer.css'
import Subscribe from "./components/subscribe";
import Basic from "./components/basic";
import Ecommerce from "./components/ecommerce";


function Footer() {
    return (
        <div className={'footer__container'}>
            <Subscribe/>
            <Basic/>
            <Ecommerce/>
        </div>

    );
}

export default Footer;
