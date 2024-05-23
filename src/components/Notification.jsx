import React from 'react';
import '../styles/notification.css';
import { TiDelete } from "react-icons/ti";

const Notification = (props) => {
    return (
        <div className="not-container">
            <div>
                <TiDelete className='not-del' onClick={props.onDelete} />
            </div>
            <div className='not-description'>
                <p>{props.descripcion}</p>
            </div>
            <div className='not-sender'>
                <p>From: {props.remitente}</p>
            </div>
        </div>
    );
}

export default Notification;

