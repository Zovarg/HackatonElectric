import React from 'react';
import cl from './favorites.module.css'
import logo from '../../images/LogoIcon.svg'
import Menu from "../../component/UI/Menu/Menu";
import icon1 from '../../images/FavouritePark_1.png'
import icon2 from '../../images/FavouritePark_2.png'
import icon3 from '../../images/FavouritePark_3.png'
import photo from "../../images/profilePhoto.png";

const Favorites = () => {
    return (
        <div>
            <Menu/>
            <div className={cl.logoTitle}>
                <div><img src={logo} alt="logo"/></div>
                <div>Избранное</div>
            </div>
            <div className={cl.listFavorites}>
                <div className={cl.elementFavorites}>
                    <div className={cl.leftPart}>
                        <div className={cl.leftPart__img}>
                            <img src={icon1} alt=""/>
                        </div>
                        <div className={cl.leftPart__info}>
                            <div className={cl.leftPart__info_name}>Парковка ИЦ Аквариум</div>
                            <div className={cl.leftPart__info_adress}>Краснодар, Северная, 405</div>
                        </div>
                    </div>
                    <div>
                        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2695 20.7065L8.76953 15.2461L1.26953 20.7065V3.23327C1.26953 2.65399 1.4953 2.09845 1.89716 1.68884C2.29902 1.27923 2.84407 1.04911 3.41239 1.04911H14.1267C14.695 1.04911 15.24 1.27923 15.6419 1.68884C16.0438 2.09845 16.2695 2.65399 16.2695 3.23327V20.7065Z" fill="#97C15B" stroke="#97C15B" stroke-width="1.376" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={cl.elementFavorites}>
                    <div className={cl.leftPart}>
                        <div className={cl.leftPart__img}>
                            <img src={icon2} alt=""/>
                        </div>
                        <div className={cl.leftPart__info}>
                            <div className={cl.leftPart__info_name}>Парковка Crowne Plaza</div>
                            <div className={cl.leftPart__info_adress}>Краснодар, Красная, 109</div>
                        </div>
                    </div>
                    <div>
                        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2695 20.7065L8.76953 15.2461L1.26953 20.7065V3.23327C1.26953 2.65399 1.4953 2.09845 1.89716 1.68884C2.29902 1.27923 2.84407 1.04911 3.41239 1.04911H14.1267C14.695 1.04911 15.24 1.27923 15.6419 1.68884C16.0438 2.09845 16.2695 2.65399 16.2695 3.23327V20.7065Z" fill="#97C15B" stroke="#97C15B" stroke-width="1.376" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={cl.elementFavorites}>
                    <div className={cl.leftPart}>
                        <div className={cl.leftPart__img}>
                            <img src={icon3} alt=""/>
                        </div>
                        <div className={cl.leftPart__info}>
                            <div className={cl.leftPart__info_name}>Парковка ул.Кухаренко</div>
                            <div className={cl.leftPart__info_adress}>Краснодар, Кухаренко, 28</div>
                        </div>
                    </div>
                    <div>
                        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2695 20.7065L8.76953 15.2461L1.26953 20.7065V3.23327C1.26953 2.65399 1.4953 2.09845 1.89716 1.68884C2.29902 1.27923 2.84407 1.04911 3.41239 1.04911H14.1267C14.695 1.04911 15.24 1.27923 15.6419 1.68884C16.0438 2.09845 16.2695 2.65399 16.2695 3.23327V20.7065Z" fill="#97C15B" stroke="#97C15B" stroke-width="1.376" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;