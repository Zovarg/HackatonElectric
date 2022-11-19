import React from 'react';
import cl from './MyModal.module.css'
import close from '../../../images/closeModal.svg'

const MyModal = ({children, visible, setVisible, info}) => {

    const rootClass=[cl.myModal]

    if (visible){
        rootClass.push(cl.active)
    }

    return (
        <div className={rootClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.myModalContent} onClick={event => event.stopPropagation()}>
                <div className={cl.title}>
                    <div>{info}</div>
                    <div onClick={()=>setVisible(false)}>
                        <img src={close} alt=""/>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MyModal;