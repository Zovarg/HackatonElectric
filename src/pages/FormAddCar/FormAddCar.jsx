import React, {useState} from 'react';
import cl from './formAddCar.module.css'
import {useNavigate} from "react-router-dom";
import pts from "../../images/PTS.jpg";
import sts from "../../images/STS.jpg";
import MyAddModal from "../../component/UI/MyAddModal/MyAddModal";

const FormAddCar = () => {
    const nav = useNavigate();
    const [modalPts,setModalPts]=useState(false)
    const [modalSts,setModalSts]=useState(false)
    function routToCarList(e){
        e.preventDefault();
        nav("/cars-list");
    };
    function routToCongratulations(e){
        e.preventDefault();
        nav("/congratulations");
    };
    return (
        <div>
            <MyAddModal visible={modalPts} setVisible={setModalPts} info={'ПТС'} description={'Сфотографируйте или отсканируйте паспорт транспортного средства и загрузите в поле ниже'}>

            </MyAddModal>
            <MyAddModal visible={modalSts} setVisible={setModalSts} info={'СТС'} description={'Сфотографируйте или отсканируйте свидтельство о регистрации транспортного средства и загрузите в поле ниже'}>

            </MyAddModal>
            <div className={cl.backTitle}>
                <div className={cl.backIcon} onClick={routToCarList}>
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 6.79289C-0.0976315 7.18342 -0.0976315 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292892 6.79289ZM25 6.5L1 6.5L1 8.5L25 8.5L25 6.5Z" fill="black"/>
                    </svg>
                </div>
                <div className={cl.backInfo}>Добавить авто</div>
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
                    <div className={cl.iconInput} onClick={()=>setModalPts(true)}>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_109_212)">
                                <rect x="0.25" y="0.75" width="24.5" height="24.5" rx="9.75" fill="white" stroke="#97C15B" stroke-width="0.5"/>
                                <path d="M16.8664 10.6314C16.4995 9.75315 15.8662 9.02447 15.0635 8.55699C14.2609 8.0895 13.3333 7.90901 12.4228 8.04317C11.5123 8.17733 10.6691 8.61874 10.0225 9.29976C9.37586 9.98078 8.96147 10.8638 8.84281 11.8136C8.27022 11.9564 7.76792 12.3133 7.43131 12.8164C7.0947 13.3196 6.94722 13.934 7.01688 14.5429C7.08653 15.1518 7.36847 15.7129 7.80915 16.1196C8.24983 16.5263 8.81856 16.7503 9.40734 16.749C9.56662 16.749 9.71938 16.6831 9.83201 16.5658C9.94464 16.4484 10.0079 16.2893 10.0079 16.1234C10.0079 15.9575 9.94464 15.7984 9.83201 15.6811C9.71938 15.5638 9.56662 15.4979 9.40734 15.4979C9.08878 15.4979 8.78327 15.3661 8.55801 15.1315C8.33275 14.8969 8.2062 14.5787 8.2062 14.2469C8.2062 13.9151 8.33275 13.5969 8.55801 13.3623C8.78327 13.1276 9.08878 12.9958 9.40734 12.9958C9.56662 12.9958 9.71938 12.9299 9.83201 12.8126C9.94464 12.6953 10.0079 12.5362 10.0079 12.3703C10.0094 11.6305 10.2627 10.9152 10.7227 10.3515C11.1828 9.78781 11.8198 9.41221 12.5205 9.29144C13.2213 9.17066 13.9405 9.31254 14.5504 9.69186C15.1602 10.0712 15.6212 10.6634 15.8514 11.3632C15.8858 11.4707 15.9475 11.5665 16.03 11.6403C16.1125 11.7141 16.2127 11.7632 16.3199 11.7823C16.7199 11.8611 17.0825 12.0786 17.3487 12.3994C17.6148 12.7203 17.7688 13.1256 17.7855 13.5492C17.8022 13.9729 17.6807 14.3899 17.4407 14.7324C17.2008 15.0749 16.8565 15.3227 16.464 15.4354C16.3095 15.4768 16.1772 15.5805 16.0961 15.7237C16.015 15.8668 15.9918 16.0376 16.0316 16.1985C16.0714 16.3594 16.171 16.4973 16.3084 16.5817C16.4458 16.6662 16.6098 16.6904 16.7643 16.6489C17.3963 16.4749 17.9566 16.0909 18.36 15.5551C18.7634 15.0194 18.988 14.3611 18.9995 13.6803C19.0111 12.9996 18.809 12.3334 18.424 11.7832C18.039 11.2329 17.4921 10.8285 16.8664 10.6314ZM13.4372 11.9262C13.38 11.8693 13.3127 11.8246 13.239 11.7948C13.0928 11.7323 12.9288 11.7323 12.7825 11.7948C12.7088 11.8246 12.6415 11.8693 12.5844 11.9262L10.7826 13.8028C10.6696 13.9206 10.606 14.0803 10.606 14.2469C10.606 14.4135 10.6696 14.5732 10.7826 14.691C10.8957 14.8088 11.0491 14.875 11.209 14.875C11.369 14.875 11.5224 14.8088 11.6355 14.691L12.4102 13.8778V17.3745C12.4102 17.5404 12.4735 17.6995 12.5861 17.8168C12.6987 17.9341 12.8515 18 13.0108 18C13.17 18 13.3228 17.9341 13.4354 17.8168C13.5481 17.6995 13.6113 17.5404 13.6113 17.3745V13.8778L14.3861 14.691C14.4419 14.7496 14.5083 14.7962 14.5815 14.8279C14.6547 14.8597 14.7332 14.876 14.8125 14.876C14.8917 14.876 14.9702 14.8597 15.0434 14.8279C15.1166 14.7962 15.183 14.7496 15.2389 14.691C15.2952 14.6329 15.3398 14.5637 15.3703 14.4874C15.4008 14.4112 15.4165 14.3295 15.4165 14.2469C15.4165 14.1643 15.4008 14.0825 15.3703 14.0063C15.3398 13.9301 15.2952 13.8609 15.2389 13.8028L13.4372 11.9262Z" fill="#97C15B"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_109_212">
                                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={cl.inputElement}>
                    <input type="text" placeholder="СТС:"/>
                    <div className={cl.iconInput} onClick={()=>setModalSts(true)}>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_109_212)">
                                <rect x="0.25" y="0.75" width="24.5" height="24.5" rx="9.75" fill="white" stroke="#97C15B" stroke-width="0.5"/>
                                <path d="M16.8664 10.6314C16.4995 9.75315 15.8662 9.02447 15.0635 8.55699C14.2609 8.0895 13.3333 7.90901 12.4228 8.04317C11.5123 8.17733 10.6691 8.61874 10.0225 9.29976C9.37586 9.98078 8.96147 10.8638 8.84281 11.8136C8.27022 11.9564 7.76792 12.3133 7.43131 12.8164C7.0947 13.3196 6.94722 13.934 7.01688 14.5429C7.08653 15.1518 7.36847 15.7129 7.80915 16.1196C8.24983 16.5263 8.81856 16.7503 9.40734 16.749C9.56662 16.749 9.71938 16.6831 9.83201 16.5658C9.94464 16.4484 10.0079 16.2893 10.0079 16.1234C10.0079 15.9575 9.94464 15.7984 9.83201 15.6811C9.71938 15.5638 9.56662 15.4979 9.40734 15.4979C9.08878 15.4979 8.78327 15.3661 8.55801 15.1315C8.33275 14.8969 8.2062 14.5787 8.2062 14.2469C8.2062 13.9151 8.33275 13.5969 8.55801 13.3623C8.78327 13.1276 9.08878 12.9958 9.40734 12.9958C9.56662 12.9958 9.71938 12.9299 9.83201 12.8126C9.94464 12.6953 10.0079 12.5362 10.0079 12.3703C10.0094 11.6305 10.2627 10.9152 10.7227 10.3515C11.1828 9.78781 11.8198 9.41221 12.5205 9.29144C13.2213 9.17066 13.9405 9.31254 14.5504 9.69186C15.1602 10.0712 15.6212 10.6634 15.8514 11.3632C15.8858 11.4707 15.9475 11.5665 16.03 11.6403C16.1125 11.7141 16.2127 11.7632 16.3199 11.7823C16.7199 11.8611 17.0825 12.0786 17.3487 12.3994C17.6148 12.7203 17.7688 13.1256 17.7855 13.5492C17.8022 13.9729 17.6807 14.3899 17.4407 14.7324C17.2008 15.0749 16.8565 15.3227 16.464 15.4354C16.3095 15.4768 16.1772 15.5805 16.0961 15.7237C16.015 15.8668 15.9918 16.0376 16.0316 16.1985C16.0714 16.3594 16.171 16.4973 16.3084 16.5817C16.4458 16.6662 16.6098 16.6904 16.7643 16.6489C17.3963 16.4749 17.9566 16.0909 18.36 15.5551C18.7634 15.0194 18.988 14.3611 18.9995 13.6803C19.0111 12.9996 18.809 12.3334 18.424 11.7832C18.039 11.2329 17.4921 10.8285 16.8664 10.6314ZM13.4372 11.9262C13.38 11.8693 13.3127 11.8246 13.239 11.7948C13.0928 11.7323 12.9288 11.7323 12.7825 11.7948C12.7088 11.8246 12.6415 11.8693 12.5844 11.9262L10.7826 13.8028C10.6696 13.9206 10.606 14.0803 10.606 14.2469C10.606 14.4135 10.6696 14.5732 10.7826 14.691C10.8957 14.8088 11.0491 14.875 11.209 14.875C11.369 14.875 11.5224 14.8088 11.6355 14.691L12.4102 13.8778V17.3745C12.4102 17.5404 12.4735 17.6995 12.5861 17.8168C12.6987 17.9341 12.8515 18 13.0108 18C13.17 18 13.3228 17.9341 13.4354 17.8168C13.5481 17.6995 13.6113 17.5404 13.6113 17.3745V13.8778L14.3861 14.691C14.4419 14.7496 14.5083 14.7962 14.5815 14.8279C14.6547 14.8597 14.7332 14.876 14.8125 14.876C14.8917 14.876 14.9702 14.8597 15.0434 14.8279C15.1166 14.7962 15.183 14.7496 15.2389 14.691C15.2952 14.6329 15.3398 14.5637 15.3703 14.4874C15.4008 14.4112 15.4165 14.3295 15.4165 14.2469C15.4165 14.1643 15.4008 14.0825 15.3703 14.0063C15.3398 13.9301 15.2952 13.8609 15.2389 13.8028L13.4372 11.9262Z" fill="#97C15B"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_109_212">
                                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={cl.btnUpdate__wrapper}>
                <div className={cl.btnUpdate} onClick={routToCongratulations}>
                    Сохранить
                </div>
            </div>
        </div>
    );
};

export default FormAddCar;