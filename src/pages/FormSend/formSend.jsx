import React, {useState} from 'react';
import cl from './formSend.module.css'
import {useNavigate} from "react-router-dom";

const FormSend = () => {
    const [drag,setDrag]=useState(false)
    const nav = useNavigate();
    function goToCongrat(e){
        e.preventDefault();
        nav("/congratulations-first");
    };
    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }
    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }
    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        setDrag(false)
    }
    return (
        <div>
            {drag
                ?<div
                    className={cl.dropArea}
                    onDragStart={e=>dragStartHandler(e)}
                    onDragLeave={e=>dragLeaveHandler(e)}
                    onDragOver={e=> dragStartHandler(e)}
                    onDrop={e=>onDropHandler(e)}
                >Отпустите файлы, чтобы  загрузить
            </div>

                :<div
                onDragStart={e=>dragStartHandler(e)}
                onDragLeave={e=>dragLeaveHandler(e)}
                onDragOver={e=> dragStartHandler(e)}
                onDrop={e=>onDropHandler(e)}
                >Перетащите файлы, чтобы  загрузить</div>}
            <div className={cl.titleLogo}>
                <div>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.344191" y="0.344191" width="42.3116" height="42.3116" rx="9.65581" fill="#97C15B"/>
                    <path d="M31.2431 23H24.1631V30H19.8831V23H12.8031V19H19.8831V12H24.1631V19H31.2431V23Z" fill="#FDFDFD"/>
                    <rect x="0.344191" y="0.344191" width="42.3116" height="42.3116" rx="9.65581" stroke="#97C15B" stroke-width="0.688381"/>
                </svg>
                </div>
                <div className={cl.titleLogo__text}>Внесение авто в реестр</div>
            </div>
            <div className={cl.description}>

            </div>
            <div className={cl.inputsList}>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="Город:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="Модель:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="Госномер:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="ПТС:"/>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="СТС:"/>
                </div>
            </div>
            <div className={cl.btnUpdate__wrapper}>
                <div className={cl.btnUpdate} onClick={goToCongrat}>
                    Сохранить
                </div>
            </div>
        </div>
    );
};

export default FormSend;