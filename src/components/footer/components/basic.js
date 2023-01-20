import '../../../styles/footer/basic.css'
import Social from "./social";
import Apps from "./apps";
import Links from "./links";



function Basic() {
    return (
        <div className={'basic__container'}>
            <Social/>
            <Links/>
            <Apps/>
        </div>

    );
}

export default Basic;
