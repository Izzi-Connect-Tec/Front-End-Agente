// Author: Karla Cruz
// Individual component of notification, cards are showed in the notification bar

import React from 'react';
import '../styles/notificationCard.css';
import { TiDelete } from "react-icons/ti";

const NotificationCard = (props) => {
    return (
        <div className="notiContainer">
            <div>
                <TiDelete className='notiDel' onClick={props.onDelete} />
            </div>
            <div className='notiTitle'>
                <h1>{props.title}</h1>
            </div>
            <div className='notiDescription'>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default NotificationCard;