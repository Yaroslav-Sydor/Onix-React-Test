import '../../../styles/main/inquire/form.css'
function Form() {
    return (
        <div className="inquire__form__container">
            <p className="inquire__form__title">
                Send quote to suppliers
            </p>
            <input type={"text"} className="inquire__form__input" placeholder={'What item you need?'}/>
            <textarea className="inquire__form__textarea" placeholder={'Type more details'}/>
            <div  className="inquire__form__wrapper" >
            <input type={"text"} className="inquire__wrapper__form__input" placeholder={'Quantity'}/>
                <select className={'inquire__form__select'}/>
        </div>
            <button className={'inquire__form__select'}>
                Send inquiry
            </button>



        </div>
    );
}

export default Form;
