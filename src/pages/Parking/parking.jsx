import React from 'react';
import Menu from "../../component/UI/Menu/Menu";
import cl from "./parking.module.css";
import logo from "../../images/LogoIcon.svg";

const Parking = () => {
    return (
        <div>
            <Menu/>
            <div className={cl.logoTitle}>
                <div><img src={logo} alt="logo"/></div>
                <div>Парковки</div>
            </div>
        </div>
    );
};

export default Parking;