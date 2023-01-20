import '../../../styles/footer/apps.css'
import store from '../../../assets/img/footer/app__store.png'
import play from '../../../assets/img/footer/google__play.png'




function Apps() {
    return (
        <div className={'apps__container'}>
                <p className={'apps__text'}>Get app</p>
            <div className={'apps__container__img'}>
                <img className={'apps__img'} src={store} alt={"store"}/>
                <img className={'apps__img'} src={play} alt={"play"}/>
            </div>

        </div>

    );
}

export default Apps;
