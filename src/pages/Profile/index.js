import React from "react";
import cl from "./Profile.module.css"
import logo from "../../images/profile-icon.svg"
import photo from "../../images/profilePhoto.png"
import {useNavigate} from "react-router-dom";
import Menu from "../../component/UI/Menu/Menu";
import Notifications from "../Notifications/notifications";

function Profile() {
  const nav = useNavigate();

  function onLogOut(e){
    e.preventDefault();
    nav("/");
  };
  function editProfile(){
    nav("/editor-profile");
  };
  function myCars(){
    nav("/cars-list");
  };
  function myNotifications(){
    nav("/notifications");
  };
  function mySettings(){
    nav("/settings");
  };


  return (
    <div>
      <Menu/>
      <div className={cl.logoTitle}>
        <div><img src={logo} alt="logo"/></div>
        <div>Профиль</div>
      </div>

      <div className={cl.image}>
        <div className={cl.imageContainer}>
          <img src={photo} alt="image"/>
          <div className={cl.editIcon}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="10" fill="#97C15B"/>
              <path d="M8 18.8754V22H11.1246L20.34 12.7846L17.2154 9.66005L8 18.8754ZM22.7563 10.3683C23.0812 10.0433 23.0812 9.5184 22.7563 9.19345L20.8066 7.24372C20.4816 6.91876 19.9567 6.91876 19.6317 7.24372L18.1069 8.7685L21.2315 11.8931L22.7563 10.3683Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={cl.fio}>
        Василий Бородач
      </div>
      <div className={cl.mail}>
        vasiliy_borodach@yandex.ru
      </div>
      <div className={cl.options}>
        <div className={cl.option} onClick={editProfile}>
          <div>
            <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.579 10.4446C11.2178 10.4446 13.357 8.30546 13.357 5.66664C13.357 3.02782 11.2178 0.888641 8.579 0.888641C5.94019 0.888641 3.801 3.02782 3.801 5.66664C3.801 8.30546 5.94019 10.4446 8.579 10.4446Z" stroke="#200E32" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 17.09C0.998733 16.7541 1.07385 16.4223 1.2197 16.1198C1.67736 15.2044 2.96798 14.7193 4.03892 14.4996C4.81128 14.3348 5.59431 14.2247 6.38217 14.1701C7.84084 14.042 9.30794 14.042 10.7666 14.1701C11.5544 14.2253 12.3374 14.3354 13.1099 14.4996C14.1808 14.7193 15.4714 15.1587 15.9291 16.1198C16.2224 16.7366 16.2224 17.4526 15.9291 18.0694C15.4714 19.0305 14.1808 19.4699 13.1099 19.6804C12.3384 19.852 11.5551 19.9653 10.7666 20.0191C9.57937 20.1197 8.38659 20.1381 7.19681 20.074C6.92221 20.074 6.65677 20.074 6.38217 20.0191C5.59663 19.9659 4.81632 19.8527 4.04807 19.6804C2.96798 19.4699 1.68652 19.0305 1.2197 18.0694C1.0746 17.7633 0.999553 17.4287 1 17.09Z" stroke="#200E32" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>Редактировать профиль</div>
        </div>
        <div className={cl.option} onClick={myCars}>
          <div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.42809 12.572L9.99809 13.998L10.4981 13.498L13.5001 16.5H14.5001V17H16.0001V18.5H16.5001V19.5L17.0001 20H20.0001V17L13.4981 10.498L13.9981 9.99799L12.5721 9.42799" stroke="#303C42" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.00009 1C9.64009 1 10.2541 1.254 10.7071 1.707L13.7931 4.793C14.0173 5.01716 14.1951 5.28329 14.3164 5.57617C14.4377 5.86906 14.5002 6.18298 14.5002 6.5C14.5002 6.81702 14.4377 7.13094 14.3164 7.42383C14.1951 7.71672 14.0173 7.98284 13.7931 8.207L8.20709 13.793C7.98293 14.0172 7.7168 14.195 7.42392 14.3163C7.13103 14.4376 6.81711 14.5001 6.50009 14.5001C6.18307 14.5001 5.86915 14.4376 5.57626 14.3163C5.28337 14.195 5.01725 14.0172 4.79309 13.793L1.70709 10.707C1.48291 10.4828 1.30509 10.2167 1.18377 9.92383C1.06244 9.63094 1 9.31702 1 9C1 8.68298 1.06244 8.36906 1.18377 8.07617C1.30509 7.78328 1.48291 7.51716 1.70709 7.293L7.29309 1.707C7.51726 1.48284 7.78338 1.30503 8.07627 1.18373C8.36916 1.06242 8.68307 0.999988 9.00009 1V1Z" stroke="#303C42" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.75009 9.75001C4.84854 9.84858 4.96545 9.92677 5.09414 9.98013C5.22283 10.0335 5.36078 10.0609 5.50009 10.0609C5.6394 10.0609 5.77735 10.0335 5.90604 9.98013C6.03473 9.92677 6.15164 9.84858 6.25009 9.75001L9.75009 6.25001C9.84858 6.15152 9.92671 6.03459 9.98001 5.9059C10.0333 5.77722 10.0608 5.63929 10.0608 5.50001C10.0608 5.36072 10.0333 5.22279 9.98001 5.09411C9.92671 4.96542 9.84858 4.8485 9.75009 4.75001C9.6516 4.65152 9.53467 4.57339 9.40599 4.52008C9.2773 4.46678 9.13938 4.43935 9.00009 4.43935C8.8608 4.43935 8.72288 4.46678 8.59419 4.52008C8.46551 4.57339 8.34858 4.65152 8.25009 4.75001L4.75009 8.25001C4.65152 8.34845 4.57332 8.46537 4.51997 8.59406C4.46662 8.72275 4.43916 8.86069 4.43916 9.00001C4.43916 9.13932 4.46662 9.27727 4.51997 9.40596C4.57332 9.53465 4.65152 9.65156 4.75009 9.75001V9.75001Z" stroke="#303C42" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>Мои авто</div>
        </div>
        <div className={cl.option} onClick={myNotifications}>
        <div>
          <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.55398 3.69096C9.9363 3.69096 10.8446 3.91599 10.8446 3.91599C13.3054 4.44085 15.0375 6.55054 15.0375 8.93249V15.3438L15.5406 15.8142L15.961 16.2072H3.03903L3.4594 15.8142L3.96253 15.3438V8.93249C3.96253 6.55059 5.6946 4.44085 8.15537 3.91599C8.15537 3.91599 9.12928 3.69096 9.44602 3.69096M9.5 0.0499878C8.54989 0.0499878 7.82352 0.729137 7.82352 1.61749V2.34894C4.63805 3.02834 2.23525 5.74524 2.23525 8.93249V14.68L0 16.77V17.815H19V16.77L16.7647 14.68V8.93249C16.7647 5.74524 14.3619 3.02834 11.1765 2.34894V1.61749C11.1765 0.729137 10.4501 0.0499878 9.5 0.0499878ZM11.7353 18.86H7.26469C7.26469 20.0095 8.27045 20.95 9.5 20.95C10.7295 20.95 11.7353 20.0095 11.7353 18.86Z" fill="black"/>
          </svg>
        </div>
        <div>Уведомления</div>
      </div>
        <div className={cl.option} onClick={mySettings}>
        <div>
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 14.2273C12.5062 14.2273 13.7273 13.0062 13.7273 11.5C13.7273 9.99375 12.5062 8.77271 11 8.77271C9.49378 8.77271 8.27274 9.99375 8.27274 11.5C8.27274 13.0062 9.49378 14.2273 11 14.2273Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7273 14.2273C17.6063 14.5015 17.5702 14.8056 17.6236 15.1005C17.6771 15.3954 17.8177 15.6676 18.0273 15.8818L18.0818 15.9364C18.423 16.2775 18.6146 16.7402 18.6146 17.2227C18.6146 17.7052 18.423 18.1679 18.0818 18.5091C17.7407 18.8503 17.2779 19.0419 16.7955 19.0419C16.313 19.0419 15.8503 18.8503 15.5091 18.5091L15.4545 18.4545C15.2403 18.245 14.9682 18.1044 14.6733 18.0509C14.3784 17.9974 14.0742 18.0335 13.8 18.1545C13.5311 18.2698 13.3018 18.4611 13.1403 18.705C12.9788 18.9489 12.8921 19.2347 12.8909 19.5273V19.6818C12.8909 20.164 12.6994 20.6265 12.3584 20.9675C12.0174 21.3084 11.5549 21.5 11.0727 21.5C10.5905 21.5 10.1281 21.3084 9.78708 20.9675C9.4461 20.6265 9.25455 20.164 9.25455 19.6818V19.6C9.24751 19.2991 9.15011 19.0073 8.97501 18.7625C8.79991 18.5176 8.55521 18.3312 8.27273 18.2273C7.99853 18.1063 7.69437 18.0702 7.39946 18.1236C7.10456 18.1771 6.83244 18.3177 6.61818 18.5273L6.56364 18.5818C6.22247 18.923 5.75975 19.1146 5.27727 19.1146C4.79479 19.1146 4.33207 18.923 3.99091 18.5818C3.64974 18.2407 3.45808 17.7779 3.45808 17.2955C3.45808 16.813 3.64974 16.3503 3.99091 16.0091L4.04545 15.9545C4.25503 15.7403 4.39562 15.4682 4.4491 15.1733C4.50257 14.8784 4.46647 14.5742 4.34545 14.3C4.23022 14.0311 4.03887 13.8018 3.79497 13.6403C3.55107 13.4788 3.26526 13.3921 2.97273 13.3909H2.81818C2.33597 13.3909 1.87351 13.1994 1.53253 12.8584C1.19156 12.5174 1 12.0549 1 11.5727C1 11.0905 1.19156 10.6281 1.53253 10.2871C1.87351 9.9461 2.33597 9.75455 2.81818 9.75455H2.9C3.2009 9.74751 3.49273 9.65011 3.73754 9.47501C3.98236 9.29991 4.16883 9.05521 4.27273 8.77273C4.39374 8.49853 4.42984 8.19437 4.37637 7.89946C4.3229 7.60456 4.18231 7.33244 3.97273 7.11818L3.91818 7.06364C3.57702 6.72247 3.38535 6.25975 3.38535 5.77727C3.38535 5.29479 3.57702 4.83207 3.91818 4.49091C4.25935 4.14974 4.72207 3.95808 5.20455 3.95808C5.68703 3.95808 6.14974 4.14974 6.49091 4.49091L6.54545 4.54545C6.75971 4.75503 7.03183 4.89562 7.32674 4.9491C7.62164 5.00257 7.9258 4.96647 8.2 4.84545H8.27273C8.54161 4.73022 8.77092 4.53887 8.93245 4.29497C9.09397 4.05107 9.18065 3.76526 9.18182 3.47273V3.31818C9.18182 2.83597 9.37338 2.37351 9.71435 2.03253C10.0553 1.69156 10.5178 1.5 11 1.5C11.4822 1.5 11.9447 1.69156 12.2856 2.03253C12.6266 2.37351 12.8182 2.83597 12.8182 3.31818V3.4C12.8193 3.69253 12.906 3.97834 13.0676 4.22224C13.2291 4.46614 13.4584 4.65749 13.7273 4.77273C14.0015 4.89374 14.3056 4.92984 14.6005 4.87637C14.8954 4.8229 15.1676 4.68231 15.3818 4.47273L15.4364 4.41818C15.7775 4.07702 16.2402 3.88535 16.7227 3.88535C17.2052 3.88535 17.6679 4.07702 18.0091 4.41818C18.3503 4.75935 18.5419 5.22207 18.5419 5.70455C18.5419 6.18703 18.3503 6.64974 18.0091 6.99091L17.9545 7.04545C17.745 7.25971 17.6044 7.53183 17.5509 7.82674C17.4974 8.12164 17.5335 8.4258 17.6545 8.7V8.77273C17.8909 9.32182 18.4291 9.67909 19.0273 9.68182H19.1818C19.664 9.68182 20.1265 9.87338 20.4675 10.2144C20.8084 10.5553 21 11.0178 21 11.5C21 11.9822 20.8084 12.4447 20.4675 12.7856C20.1265 13.1266 19.664 13.3182 19.1818 13.3182H19.1C18.8075 13.3193 18.5217 13.406 18.2778 13.5676C18.0339 13.7291 17.8425 13.9584 17.7273 14.2273V14.2273Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>Настройки</div>
      </div><div className={cl.option} style={{justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
          <div>
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9165 8.1C17.8972 3.41 14.0986 0.5 10 0.5C5.90143 0.5 2.10275 3.41 0.0834557 8.1C0.0284116 8.22617 0 8.36234 0 8.5C0 8.63766 0.0284116 8.77383 0.0834557 8.9C2.10275 13.59 5.90143 16.5 10 16.5C14.0986 16.5 17.8972 13.59 19.9165 8.9C19.9716 8.77383 20 8.63766 20 8.5C20 8.36234 19.9716 8.22617 19.9165 8.1V8.1ZM10 14.5C6.8311 14.5 3.83215 12.21 2.10275 8.5C3.83215 4.79 6.8311 2.5 10 2.5C13.1689 2.5 16.1679 4.79 17.8972 8.5C16.1679 12.21 13.1689 14.5 10 14.5ZM10 4.5C9.20915 4.5 8.43606 4.7346 7.77849 5.17412C7.12093 5.61365 6.60841 6.23836 6.30577 6.96927C6.00312 7.70017 5.92394 8.50444 6.07823 9.28036C6.23251 10.0563 6.61334 10.769 7.17256 11.3284C7.73177 11.8878 8.44426 12.2688 9.21991 12.4231C9.99556 12.5775 10.7996 12.4983 11.5302 12.1955C12.2609 11.8928 12.8853 11.3801 13.3247 10.7223C13.7641 10.0645 13.9986 9.29113 13.9986 8.5C13.9986 7.43913 13.5773 6.42172 12.8274 5.67157C12.0776 4.92143 11.0605 4.5 10 4.5V4.5ZM10 10.5C9.60458 10.5 9.21803 10.3827 8.88925 10.1629C8.56046 9.94318 8.30421 9.63082 8.15288 9.26537C8.00156 8.89991 7.96197 8.49778 8.03911 8.10982C8.11626 7.72186 8.30667 7.36549 8.58628 7.08579C8.86589 6.80608 9.22213 6.6156 9.60996 6.53843C9.99778 6.46126 10.3998 6.50087 10.7651 6.65224C11.1304 6.80362 11.4427 7.05996 11.6624 7.38886C11.882 7.71776 11.9993 8.10444 11.9993 8.5C11.9993 9.03043 11.7887 9.53914 11.4137 9.91421C11.0388 10.2893 10.5302 10.5 10 10.5Z" fill="black"/>
            </svg>
          </div>
          <div>Темная тема</div>
        </div>
        <div>
          <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0.600037H10C4.48625 0.600037 0 5.04142 0 10.5C0 15.9586 4.48625 20.4 10 20.4H20C25.5138 20.4 30 15.9586 30 10.5C30 5.04142 25.5138 0.600037 20 0.600037Z" fill="#F1F1F1"/>
            <path d="M20 0.600006H10C4.48625 0.600006 0 4.99698 0 10.401C0 15.805 4.48625 20.202 10 20.202H20C25.5138 20.202 30 15.805 30 10.401C30 4.99698 25.5138 0.600006 20 0.600006Z" fill="#E6E6E6"/>
            <path d="M9.8999 17.628C14.042 17.628 17.3999 14.3037 17.3999 10.203C17.3999 6.1023 14.042 2.77802 9.8999 2.77802C5.75777 2.77802 2.3999 6.1023 2.3999 10.203C2.3999 14.3037 5.75777 17.628 9.8999 17.628Z" fill="white"/>
          </svg>
        </div>
      </div>
        <div className={cl.option} onClick={onLogOut}>
        <div>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 4.5L12.231 5.91L14.553 8.5H5.4V10.5H14.553L12.231 13.08L13.5 14.5L18 9.5L13.5 4.5ZM1.8 2.5H9V0.5H1.8C0.81 0.5 0 1.4 0 2.5V16.5C0 17.6 0.81 18.5 1.8 18.5H9V16.5H1.8V2.5Z" fill="#E52748"/>
          </svg>
        </div>
        <div className={cl.exit}>Выйти</div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
