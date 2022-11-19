import React, {useState} from 'react';
import cl from './editProfile.module.css';
import {useNavigate} from "react-router-dom";
const EditProfile = () => {
    const nav = useNavigate();

    const [person, setPerson]=useState({
        city:'',
        fio:'Бородач Иван Иванович',
        nick:'Borodach',
        date:'12.10.1989',
        gender:'Мужской',
        email:'borodach@mail.ru',
        telephone:'+79181174098',
    })


    function routToProfile(e){
        e.preventDefault();
        nav("/profile");
    };
    const updatePerson = (e)=>{
        e.preventDefault();
        nav("/profile");
    }

    return (
        <div>
           <div className={cl.backTitle}>
               <div className={cl.backIcon} onClick={routToProfile}>
                   <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0.292892 6.79289C-0.0976315 7.18342 -0.0976315 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292892 6.79289ZM25 6.5L1 6.5L1 8.5L25 8.5L25 6.5Z" fill="black"/>
                   </svg>
               </div>
               <div className={cl.backInfo}>Изменить профиль</div>
           </div>
            <div className={cl.formList}>
                <div className={cl.formInputCity}>
                    <input value={person.city} onChange={e=>setPerson({...person, city:e.target.value})} type="text" placeholder="Город"/>
                </div>
                <div className={cl.formInputNick}>
                    <input value={person.nick} onChange={e=>setPerson({...person, nick:e.target.value})} type="text" placeholder="Никнэйм"/>
                </div>
                <div className={cl.formInputFio}>
                    <input disabled value={person.fio} onChange={e=>setPerson({...person, fio:e.target.value})} type="text" placeholder="ФИО"/>
                </div>
                <div className={cl.formInputDate}>
                    <input disabled value={person.date} onChange={e=>setPerson({...person, date:e.target.value})} type="text" placeholder="Дата рождения"/>
                </div>
                <div className={cl.formInputGender}>
                    <input disabled value={person.gender} onChange={e=>setPerson({...person, gender:e.target.value})} type="text" placeholder="Пол"/>
                </div>
                <div className={cl.formInputEmail}>
                    <input disabled value={person.email} onChange={e=>setPerson({...person, email:e.target.value})} type="email" placeholder="Почта"/>
                </div>
                <div className={cl.formInputTelephone}>
                    <input disabled value={person.telephone} onChange={e=>setPerson({...person, telephone:e.target.value})} type="text" placeholder="Телефон"/>
                </div>
            </div>
            <div className={cl.btnUpdate__wrapper}>
                <div id="savebtn" className={cl.btnUpdate} onClick={updatePerson}>
                    Сохранить
                </div>
            </div>
        </div>
    );
};

export default EditProfile;