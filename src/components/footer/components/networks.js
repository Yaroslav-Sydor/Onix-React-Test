import '../../../styles/footer/networks.css'
import facebook from '../../../assets/img/footer/facebook.svg'
import twitter from '../../../assets/img/footer/twitter.svg'
import linkedin from '../../../assets/img/footer/linkedin.svg'
import instagram from '../../../assets/img/footer/instagram.svg'
import youtube from '../../../assets/img/footer/youtube.svg'



function Networks() {
    return (
        <div className={'networks__container'}>
            <div className={'network__img__container'}>
                <img className={'network__img'} src={facebook} alt={'facebook'}/>
            </div>
            <div className={'network__img__container'}>
                <img className={'network__img'} src={twitter} alt={'twitter'}/>

            </div>
            <div className={'network__img__container'}>
                <img className={'network__img'} src={linkedin} alt={'linkedin'}/>
            </div>
            <div className={'network__img__container'}>
                <img className={'network__img'} src={instagram} alt={'instagram'}/>

            </div>
            <div className={'network__img__container'}>
                <img className={'network__img'} src={youtube} alt={'youtube'}/>
            </div>

        </div>

    );
}

export default Networks;
