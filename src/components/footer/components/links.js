import '../../../styles/footer/links.css'



function Links() {
    return (
        <div className={'links__container'}>
            <div className={'links__navigation__container'}>
                <div className={'links__navigation'}>
                    <p className={'links__title'}>About</p>
                    <div className={'links__link__container'}>
                        <p className={'links__link'}>About Us</p>
                        <p className={'links__link'}>Find store</p>
                        <p className={'links__link'}>Categories</p>
                        <p className={'links__link'}>Blogs</p>
                    </div>
                </div>
                <div className={'links__navigation'}>
                    <p className={'links__title'}>Partnership</p>
                    <div className={'links__link__container'}>
                        <p className={'links__link'}>About Us</p>
                        <p className={'links__link'}>Find store</p>
                        <p className={'links__link'}>Categories</p>
                        <p className={'links__link'}>Blogs</p>
                    </div>


                </div>
                <div className={'links__navigation'}>
                    <p className={'links__title'}>Information</p>
                    <div className={'links__link__container'}>
                        <p className={'links__link'}>Help Center</p>
                        <p className={'links__link'}>Money Refund</p>
                        <p className={'links__link'}>Shipping</p>
                        <p className={'links__link'}>Contact us</p>
                    </div>
                </div>

            </div>
            <div className={'links__user__container'}>
                <p className={'links__title'}>For users</p>
                <div className={'links__link__container'}>
                    <p className={'links__link'}>Login</p>
                    <p className={'links__link'}>Register</p>
                    <p className={'links__link'}>Settings</p>
                    <p className={'links__link'}>My Orders</p>
                </div>


            </div>

        </div>

    );
}

export default Links;
