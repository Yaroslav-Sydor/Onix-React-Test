import '../../styles/footer/footer.css'
import Subscribe from "./subscribe";
import Basic from "./basic";
import Ecommerce from "./ecommerce";


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
