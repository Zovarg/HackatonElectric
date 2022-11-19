import React from 'react';
import cl from './carInfo.module.css'
import {useNavigate} from "react-router-dom";

const CarInfo = () => {
    const nav = useNavigate();
    function routToCarList(e){
        e.preventDefault();
        nav("/cars-list");
    };
    return (
        <div>
            <div className={cl.backTitle}>
                <div className={cl.backIcon} onClick={routToCarList}>
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 6.79289C-0.0976315 7.18342 -0.0976315 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292892 6.79289ZM25 6.5L1 6.5L1 8.5L25 8.5L25 6.5Z" fill="black"/>
                    </svg>
                </div>
                <div className={cl.backInfo}>Tesla Modal S</div>
            </div>
            <div className={cl.inputsList}>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="Госномер:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="Марка:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="Тип двигателя:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="ПТС:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="СТС:"/>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;