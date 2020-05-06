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
                    <p className="user-account">{props.user}</p>
                </div>
                <div className="points" onClick={props.openOptions}>
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
            </div>
            <div className="content-img-post">
                <img className={likeImg ? "like-img-post animation-like" :"like-img-post"} src={heart} alt="corazon" />
                <img onDoubleClick={handleClickLikeImg} className="img-post" src={props.img} alt="postimg"/>
            </div>
            <div className="center-post actions-post">
                <Like />
                <img className="action" src={comment} alt="comment"/>
            </div>
            <p className="center-post likes-post">{props.likes} Me gusta</p>
            <div className="center-post description-post">
                <p><a href="www.google.com" className="user-account">{props.user}</a><span className="text-post">{" "} {props.desc}</span> </p>
            </div>
            <p className="center-post time-post">HACE {props.time} MINUTOS</p>
            <Comment />
        </div>
    )
}
