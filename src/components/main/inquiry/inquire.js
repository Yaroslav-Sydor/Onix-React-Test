import '../../../styles/main/inquire/inquire.css';
import FormInquire from "./formInquire";
function Inquire() {
    return (
        <div className="inquire__container">
                <div className="inquire__text__wrapper">
                    <p className={"inquire__title"}>An easy way to send <br/> requests to all suppliers</p>
                    <p className={"inquire__text"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing <br/> elit, sed do eiusmod tempor incididunt.
                    </p>
            </div>
            <div className="inquire__form__wrapper">
                <FormInquire/>
            </div>
        </div>
    );
}

export default Inquire;
