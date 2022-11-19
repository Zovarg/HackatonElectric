import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.module.css'
import cl from './home.module.css'
import logo from '../../images/Preview.svg'
import {useNavigate} from "react-router-dom";

function Home() {
    const nav = useNavigate();

    function next(e){
        e.preventDefault();
        nav("/map");
    };
  return (
          <div className={cl.container}>
              <div className={cl.title}>
                  <div className={cl.welcomeTitle__top}>Добро пожаловать</div>
                  <div className={cl.welcomeTitle__bottom}>в <span>PARK</span>TRONIC!</div>
              </div>
              <div className={cl.welcomeLogo}>
                  <img src={logo} alt="logo"/>
              </div>
              <div className={cl.welcomeButton} onClick={next}>
                  Войти через <span className={cl.gospart}> гос</span><span className={cl.servicespart}>услуги</span>
              </div>
          </div>

  );
}

export default Home;
