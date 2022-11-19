import React, {useState} from 'react';
import cl from "./listCars.module.css";
import {useNavigate} from "react-router-dom";
import tesl from '../../images/TeslaS.svg'
const ListCars = () => {
    const [cars, setCars]=useState([
        {model:'Tesla Model S', options:'к 319 рп 93', image:''},
        {model:'Rimac Nevera', options:'Д 102 СП 123', image:''}
    ])
    const nav = useNavigate();
    function routToProfile(e){
        e.preventDefault();
        nav("/profile");
    };
    function routeToForm(e){
        e.preventDefault();
        nav("/form-car");
    };
    function routeToCarInfo(e){
        e.preventDefault();
        nav("/info-car");
    };
    return (
        <div>
            <div className={cl.backTitle}>
                <div className={cl.backIcon} onClick={routToProfile}>
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 6.79289C-0.0976315 7.18342 -0.0976315 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292892 6.79289ZM25 6.5L1 6.5L1 8.5L25 8.5L25 6.5Z" fill="black"/>
                    </svg>
                </div>
                <div className={cl.backInfo}>Мои авто</div>
            </div>
            <div className={cl.carsList}>
                {
                    cars.map(car=>
                        <div onClick={routeToCarInfo} className={cl.carElement}>
                            <div className={cl.carLeft}>
                                <div className={cl.tesla}>
                                    <img src={tesl} alt=""/>
                                </div>
                                <div className={cl.description}>
                                    <div className={cl.model}>{car.model}</div>
                                    <div className={cl.characters}>{car.options}</div>
                                </div>
                            </div>
                            <div>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.53998 6.29L1.87998 0.639998C1.78702 0.54627 1.67642 0.471876 1.55456 0.421107C1.4327 0.370339 1.30199 0.3442 1.16998 0.3442C1.03797 0.3442 0.907264 0.370339 0.785405 0.421107C0.663546 0.471876 0.552945 0.54627 0.459982 0.639998C0.273731 0.827361 0.169189 1.08081 0.169189 1.345C0.169189 1.60918 0.273731 1.86264 0.459982 2.05L5.40998 7.05L0.459982 12C0.273731 12.1874 0.169189 12.4408 0.169189 12.705C0.169189 12.9692 0.273731 13.2226 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6826 1.03767 13.7094 1.16998 13.71C1.30229 13.7094 1.43317 13.6826 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76C7.64149 7.66636 7.7225 7.5527 7.7779 7.42621C7.83331 7.29971 7.86191 7.1631 7.86191 7.025C7.86191 6.8869 7.83331 6.75029 7.7779 6.62379C7.7225 6.49729 7.64149 6.38364 7.53998 6.29Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={cl.btnUpdate__wrapper}>
                <div className={cl.btnUpdate} onClick={routeToForm}>
                    + Добавить авто
                </div>
            </div>
        </div>
    );
};

export default ListCars;