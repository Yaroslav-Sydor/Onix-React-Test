import '../../../styles/footer/subscribe.css'
import Email from "./email";



function Subscribe() {
    return (
        <div className={'subscribe__container'}>
            <p className={'subscribe__title'}>Subscribe on our newsletter</p>
            <p className={'subscribe__text'}>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className={'subscribe__wrapper'}>
                <Email/>

            </div>


        </div>

    );
}

export default Subscribe;
