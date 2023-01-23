import '../../styles/main/suppliers/country.css'
import emirates from '../../assets/img/supplies/emirates.png'



function Country() {
    return (
        <div className={'country__container'}>
            <div className={'container__img'}>
                <img src={emirates} alt="usa"/>
            </div>
            <div className={'container__text'}>
                <p className={'country__location'}>Arabic Emirates</p>
                <p className={'country__domain'}>shopname.ae</p>
            </div>
        </div>

    );
}

export default Country;
