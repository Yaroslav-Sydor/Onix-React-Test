import "../../../styles/main/buner/buner.css"


function Buner() {
    return (
        <div className={'buner__container'}>
            <div className={"buner__wrapper buner__wrapper__list "}>

            </div>
            <div className={"buner__wrapper buner__wrapper__learn "}>
                <p className={"buner__learn__title"}>Latest trending</p>
                <p className={"buner__learn__text"}>Electronic items</p>

                <button className={"buner__learn__button"}>

                    <a href="''">Learn more</a>

                </button>
            </div>
            <div className={"buner__wrapper buner__wrapper__login "}>
                <div className={"buner__login__block"}>
                    <div className={"buner__login__wrapper"}>
                        <div className={"buner__login__img"}>
                            <img src={"''"} alt={"''"}/>
                        </div>
                        <p>Hi, user<br/> let’s get stated</p>
                    </div>
                    <button className={"buner__login__button buner__login__button__blue"}>Join now</button>
                    <button className={"buner__login__button "}>Log in</button>
                </div>
                <div className={"buner__login__block__buner"}></div>
                <div className={"buner__login__block__buner"}></div>
            </div>

        </div>

    );
}

export default Buner;
