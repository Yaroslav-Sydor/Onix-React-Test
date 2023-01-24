import '../../../styles/main/inquire/form.css'
import {Formik, Field, Form} from 'formik';

function FormInquire() {
    return (

        <div className="inquire__form__container">
            <p className="inquire__form__title">
                Send quote to suppliers
            </p>
            <Formik
                initialValues={{
                    needs: '',
                    type: '',
                    quantity: '',
                    select:'',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className={'inquire__form'}>

                    <Field id="needs" type={"text"} className="inquire__form__input" placeholder={'What item you need?'}/>
                    <Field id="type" as="textarea" className="inquire__form__textarea" placeholder={'Type more details'}/>
                    <div  className="inquire__form__wrapper" >
                        <Field id="quantity" type={"text"} className="inquire__wrapper__form__input" placeholder={'Quantity'}/>
                        <Field id="select" as="select" className={'inquire__form__select'}>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                    </div>
                    <button type="submit" className={'inquire__form__select'}>
                        Send inquiry
                    </button>
                </Form>
            </Formik>

        </div>
    );
}

export default FormInquire;
