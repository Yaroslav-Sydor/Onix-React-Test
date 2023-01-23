import '../../styles/main/suppliers/suppliers.css'
import Country from "./country";


function Suppliers() {
    return (
        <div className={'suppliers__container'}>
            <div className={'suppliers__title__container'}>
                <p className={'suppliers__title'}>Suppliers by region</p>
            </div>
            <div className={'suppliers__country__container'}>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
                <Country></Country>
            </div>
        </div>

    );
}

export default Suppliers;
