import React from "react";
import '../../../styles/main/extra/extra.css';
import Card from "./card";
/*
import logo from '../../../assets/img/logo.svg'
*/



function Extra() {
    return (
        <div className="extra__container">
            <div className={'extra__title'}>
                <h2 className={'extra__title__text'}>Our extra services</h2>
            </div>
            <div className={'extra__cards__container'}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
    );
}

export default Extra;
