import React, {useState} from 'react';
import Menu from "../../component/UI/Menu/Menu";
import cl from "./parking.module.css";
import logo from "../../images/LogoIcon.svg";
import park_1 from '../../images/parking_1.png'
import park_3 from '../../images/parking_3.png'

const Parking = () => {
    const [page,setPage]=useState(1)
    return (
        <div>
            <Menu/>
            <div className={cl.logoTitle}>
                <div><img src={logo} alt="logo"/></div>
                <div>Парковки</div>
            </div>
            {page===1?
                <>
                <div className={cl.NavBar}>
                    <div onClick={()=>{setPage(1)}}  className={cl.navigate_active}>
                        Текущая стоянка
                    </div>
                    <div onClick={()=>{setPage(2)}} className={cl.navigate_inactive}>
                        История паркинга
                    </div>
                </div>
                <div className={cl.listParking}>
                    <div className={cl.elemParking}>
                        <div className={cl.elemParking__img}>
                            <img src={park_1} alt=""/>
                        </div>
                        <div className={cl.elemParking__info}>
                            <div className={cl.elemParking__name}>Парковка ИЦ Аквариум</div>
                            <div className={cl.elemParking__address}>Краснодар, Северная, 405</div>
                            <div className={cl.elemParking__active}>Активно</div>
                        </div>
                    </div>
                </div>
                </>
                :
                <>
                <div className={cl.NavBar}>
                    <div onClick={()=>{setPage(1)}}  className={cl.navigate_inactive}>
                        Текущая стоянка
                    </div>
                    <div onClick={()=>{setPage(2)}}  className={cl.navigate_active}>
                        История паркинга
                    </div>
                </div>
                    <div className={cl.listParking}>
                        <div className={cl.elemParking}>
                            <div className={cl.elemParking__img}>
                                <img src={park_1} alt=""/>
                            </div>
                            <div className={cl.elemParking__info}>
                                <div className={cl.elemParking__name}>Парковка ИЦ Аквариум</div>
                                <div className={cl.elemParking__address}>Краснодар, Северная, 405</div>
                                <div className={cl.elemParking__inactive}>Завершено 19.11. в 19:39</div>
                            </div>
                        </div>
                        <div className={cl.elemParking}>
                            <div className={cl.elemParking__img}>
                                <img src={park_1} alt=""/>
                            </div>
                            <div className={cl.elemParking__info}>
                                <div className={cl.elemParking__name}>Парковка ИЦ Аквариум</div>
                                <div className={cl.elemParking__address}>Краснодар, Северная, 405</div>
                                <div className={cl.elemParking__inactive}>Завершено 17.11. в 21:08</div>
                            </div>
                        </div>
                        <div className={cl.elemParking}>
                            <div className={cl.elemParking__img}>
                                <img src={park_3} alt=""/>
                            </div>
                            <div className={cl.elemParking__info}>
                                <div className={cl.elemParking__name}>Парковка Crowne Plaza</div>
                                <div className={cl.elemParking__address}>Краснодар, Красная, 109</div>
                                <div className={cl.elemParking__inactive}>Завершено 15.11. в 18:06</div>
                            </div>
                        </div>
                    </div>
                    </>
            }
        </div>
    );
};

export default Parking;