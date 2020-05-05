import React from 'react';
import './css.css';
import account from './account.svg';
import comment from './chat.svg';
import heart from '../../img/heart.svg';

export default function Post() {
    return (
        <div className="content-post">
            <div className="center-post header-post">
                <div className="user-post">
                    <img className="img-account" src={account} alt="account" />
                    <p className="user-account">the_user</p>
                </div>
            </div>
            <img className="img-post" src="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/95615122_966637037124037_4366785655835378528_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=7wCkPKic1usAX87Sxeh&oh=e10c99d035e92a059c539ea455622efd&oe=5EDB7EAA" alt="postimg"/>
            <div className="center-post actions-post">
                <img className="icon action" src={heart} alt="heart"/>
                <img className="icon action" src={comment} alt="comment"/>
            </div>
            <p className="center-post likes-post">90 Me gusta</p>
            <div className="center-post description-post">
                <p><a href="www.google.com" className="user-account">the_user</a><span className="text-post">{" "} Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</span> </p>
            </div>
            <p className="center-post time-post">HACE 2 HORAS</p>
        </div>
    )
}
