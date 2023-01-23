import '../../../styles/footer/input.css';

function Email() {
    return (
        <div className="subscribe__input__container">
            <input type={"email"} className={'subscribe__input'} placeholder={"Email"}>
            </input>
            <button className={'subscribe__button'}>
                Subscribe
            </button>
        </div>
    );
}

export default Email;
