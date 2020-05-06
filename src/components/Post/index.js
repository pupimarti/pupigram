import React, {useState} from 'react';
import './css.css';
import account from './account.svg';
import comment from './chat.svg';
import Comment from './Comment';
import Like from './Like';
import heart from './Like/heart-selected.svg';

export default function Post(props) {

    const [likeImg, setlikeImg] = useState(false)
    const handleClickLikeImg = () => {
        setlikeImg(!likeImg);
    }

    return (
        <div className="content-post">
            <div className="center-post header-post">
                <div className="user-post">
                    <img className="img-account" src={account} alt="account" />
                    <p className="user-account">the_user</p>
                </div>
                <div className="points" onClick={props.openOptions}>
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
            </div>
            <div className="content-img-post">
                <img className={likeImg ? "like-img-post animation-like" :"like-img-post"} src={heart} alt="corazon" />
                <img onDoubleClick={handleClickLikeImg} className="img-post" src="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/85167617_661877847898209_1139547952866115949_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=T5rDv6fOedIAX87rTx7&oh=3fc18a7535d6ce74e93619e0c5d39667&oe=5EDB30BA" alt="postimg"/>
            </div>
            <div className="center-post actions-post">
                <Like />
                <img className="action" src={comment} alt="comment"/>
            </div>
            <p className="center-post likes-post">90 Me gusta</p>
            <div className="center-post description-post">
                <p><a href="www.google.com" className="user-account">the_user</a><span className="text-post">{" "} Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</span> </p>
            </div>
            <p className="center-post time-post">HACE 2 HORAS</p>
            <Comment />
        </div>
    )
}
