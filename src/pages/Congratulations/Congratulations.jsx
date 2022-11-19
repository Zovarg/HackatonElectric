import React from 'react';
import cl from './Congratulations.module.css'
import congrat from '../../images/congratulations.svg'
import {useNavigate} from "react-router-dom";
const Congratulations = () => {
    const nav = useNavigate();
    function routToCarList(e){
        e.preventDefault();
        nav("/cars-list");
    };
    return (
        <div className={cl.container}>
            <div className={cl.title}>
                Данные отравлены на&nbsp;верификацию!
            </div>
            <div className={cl.picture}>
                <img src={congrat} alt=""/>
            </div>
            <div className={cl.bottom}>
                <div className={cl.description}>
                    После подтверждения ведомством, ваше ТС будет в реесте. Бесплатный паркинг возле зарядных станций для этого авто доступен уже сейчас.
                </div>
                <div className={cl.btnUpdate__wrapper}>
                    <div className={cl.btnUpdate} onClick={routToCarList}>
                        Закрыть
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Congratulations;