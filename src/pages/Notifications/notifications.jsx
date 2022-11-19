import React from 'react';
import cl from './notifications.module.css';
import {useNavigate} from "react-router-dom";

const Notifications = () => {
    const nav = useNavigate();
    function routToProfile(e){
        e.preventDefault();
        nav("/profile");
    };
    return (
        <div>
            <div className={cl.backTitle}>
                <div className={cl.backIcon} onClick={routToProfile}>
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 6.79289C-0.0976315 7.18342 -0.0976315 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292892 6.79289ZM25 6.5L1 6.5L1 8.5L25 8.5L25 6.5Z" fill="black"/>
                    </svg>
                </div>
                <div className={cl.backInfo}>Уведомления</div>
            </div>
            <div className={cl.notificationSection}>
                <div className={cl.notificationTitle}>Сегодня</div>
                <div className={cl.notificationList}>
                    <div className={cl.notificationElement}>
                        <div className={cl.notificationIcon}>
                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.49 0H3.38439C1.52298 0 0 1.4 0 3.11111V24.8889C0 26.6 1.52298 28 3.38439 28C5.2458 28 6.76878 26.6 6.76878 24.8889V18.6667H11.8454C17.8865 18.6667 22.7093 13.7978 21.9139 8.10444C21.254 3.40667 16.6512 0 11.49 0ZM12.1838 12.4444H6.76878V6.22222H12.1838C14.0452 6.22222 15.5682 7.62222 15.5682 9.33333C15.5682 11.0444 14.0452 12.4444 12.1838 12.4444Z" fill="#E52748"/>
                            </svg>
                        </div>
                        <div className={cl.notificationInfo}>
                            <div className={cl.notificationHeader}>Завершение стоянки</div>
                            <div className={cl.notificationDescr}>Вы покинули парковку в 19:39</div>
                        </div>
                    </div>
                    <div className={cl.notificationElement}>
                        <div className={cl.notificationIcon}>
                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.49 0H3.38439C1.52298 0 0 1.4 0 3.11111V24.8889C0 26.6 1.52298 28 3.38439 28C5.2458 28 6.76878 26.6 6.76878 24.8889V18.6667H11.8454C17.8865 18.6667 22.7093 13.7978 21.9139 8.10444C21.254 3.40667 16.6512 0 11.49 0ZM12.1838 12.4444H6.76878V6.22222H12.1838C14.0452 6.22222 15.5682 7.62222 15.5682 9.33333C15.5682 11.0444 14.0452 12.4444 12.1838 12.4444Z" fill="#97C15B"/>
                            </svg>
                        </div>
                        <div className={cl.notificationInfo}>
                            <div className={cl.notificationHeader}>Начало стоянки</div>
                            <div className={cl.notificationDescr}>Вы приехали на парковку в 16:07</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={cl.notificationSection}>
                <div className={cl.notificationTitle}>Позавчера</div>
                <div className={cl.notificationList}>
                    <div className={cl.notificationElement}>
                        <div className={cl.notificationIcon}>
                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.49 0H3.38439C1.52298 0 0 1.4 0 3.11111V24.8889C0 26.6 1.52298 28 3.38439 28C5.2458 28 6.76878 26.6 6.76878 24.8889V18.6667H11.8454C17.8865 18.6667 22.7093 13.7978 21.9139 8.10444C21.254 3.40667 16.6512 0 11.49 0ZM12.1838 12.4444H6.76878V6.22222H12.1838C14.0452 6.22222 15.5682 7.62222 15.5682 9.33333C15.5682 11.0444 14.0452 12.4444 12.1838 12.4444Z" fill="#E52748"/>
                            </svg>
                        </div>
                        <div className={cl.notificationInfo}>
                            <div className={cl.notificationHeader}>Завершение стоянки</div>
                            <div className={cl.notificationDescr}>Вы покинули парковку в 21:08</div>
                        </div>
                    </div>
                    <div className={cl.notificationElement}>
                        <div className={cl.notificationIcon}>
                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.49 0H3.38439C1.52298 0 0 1.4 0 3.11111V24.8889C0 26.6 1.52298 28 3.38439 28C5.2458 28 6.76878 26.6 6.76878 24.8889V18.6667H11.8454C17.8865 18.6667 22.7093 13.7978 21.9139 8.10444C21.254 3.40667 16.6512 0 11.49 0ZM12.1838 12.4444H6.76878V6.22222H12.1838C14.0452 6.22222 15.5682 7.62222 15.5682 9.33333C15.5682 11.0444 14.0452 12.4444 12.1838 12.4444Z" fill="#97C15B"/>
                            </svg>
                        </div>
                        <div className={cl.notificationInfo}>
                            <div className={cl.notificationHeader}>Начало стоянки</div>
                            <div className={cl.notificationDescr}>Вы приехали на парковку в 12:02</div>
                        </div>
                    </div>
                    <div className={cl.notificationElement}>
                        <div className={cl.notificationIcon}>
                            <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1762 16.5714L3.05695 9.08956L0 12.3027L10.1762 23L29 3.21316L25.943 0L10.1762 16.5714Z" fill="#97C15B"/>
                            </svg>
                        </div>
                        <div className={cl.notificationInfo}>
                            <div className={cl.notificationHeader}>Верификация</div>
                            <div className={cl.notificationDescr}>Подверждено ТС (Д102СП 01)</div>
                        </div>
                    </div>
                    <div className={cl.notificationElement}>
                        <div className={cl.notificationIcon}>
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 0C14.8411 0 11.2643 1.08501 8.22196 3.11781C5.17965 5.15062 2.80846 8.03992 1.40824 11.4204C0.00801575 14.8008 -0.358346 18.5205 0.355481 22.1092C1.06931 25.6978 2.83126 28.9942 5.41853 31.5815C8.0058 34.1687 11.3022 35.9307 14.8908 36.6445C18.4795 37.3583 22.1992 36.992 25.5796 35.5918C28.9601 34.1915 31.8494 31.8203 33.8822 28.778C35.915 25.7357 37 22.1589 37 18.5C37 16.0705 36.5215 13.6649 35.5918 11.4204C34.6621 9.17583 33.2994 7.13641 31.5815 5.41852C29.8636 3.70064 27.8242 2.33794 25.5796 1.40823C23.3351 0.478517 20.9295 0 18.5 0V0ZM18.5 33.3C15.5728 33.3 12.7114 32.432 10.2776 30.8057C7.84372 29.1795 5.94677 26.8681 4.82659 24.1637C3.70641 21.4594 3.41332 18.4836 3.98439 15.6127C4.55545 12.7417 5.96501 10.1046 8.03483 8.03482C10.1046 5.965 12.7418 4.55544 15.6127 3.98438C18.4836 3.41332 21.4594 3.70641 24.1637 4.82658C26.8681 5.94676 29.1795 7.84371 30.8058 10.2776C32.432 12.7114 33.3 15.5728 33.3 18.5C33.3 22.4252 31.7407 26.1896 28.9652 28.9652C26.1896 31.7407 22.4252 33.3 18.5 33.3V33.3ZM25.9 16.65H20.35V11.1C20.35 10.6093 20.1551 10.1388 19.8082 9.79185C19.4612 9.44491 18.9907 9.25 18.5 9.25C18.0094 9.25 17.5388 9.44491 17.1919 9.79185C16.8449 10.1388 16.65 10.6093 16.65 11.1V16.65H11.1C10.6094 16.65 10.1388 16.8449 9.79186 17.1918C9.44492 17.5388 9.25001 18.0093 9.25001 18.5C9.25001 18.9906 9.44492 19.4612 9.79186 19.8081C10.1388 20.1551 10.6094 20.35 11.1 20.35H16.65V25.9C16.65 26.3906 16.8449 26.8612 17.1919 27.2081C17.5388 27.5551 18.0094 27.75 18.5 27.75C18.9907 27.75 19.4612 27.5551 19.8082 27.2081C20.1551 26.8612 20.35 26.3906 20.35 25.9V20.35H25.9C26.3907 20.35 26.8612 20.1551 27.2082 19.8081C27.5551 19.4612 27.75 18.9906 27.75 18.5C27.75 18.0093 27.5551 17.5388 27.2082 17.1918C26.8612 16.8449 26.3907 16.65 25.9 16.65Z" fill="#97C15B"/>
                            </svg>
                        </div>
                        <div className={cl.notificationInfo}>
                            <div className={cl.notificationHeader}>Добавление в реестр</div>
                            <div className={cl.notificationDescr}>Отправлена заявка ТС (Д102СП 01)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;