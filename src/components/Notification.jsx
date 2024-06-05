// Autor: Karla Cruz
// Componente individual de notificación, se muestra en la barra de notificaciones

import React from 'react';
import '../styles/notification.css';
import { TiDelete } from "react-icons/ti";

const Notification = (props) => {
    return (
        <div className="not-container">
            <div>
                <TiDelete className='not-del' onClick={props.onDelete} />
            </div>
            <div className='not-title'>
                <h1>{props.titulo}</h1>
            </div>
            <div className='not-description'>
                <p>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Notification;

