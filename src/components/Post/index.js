import React, { useState } from "react";
import "./css.css";
import account from "./account.svg";
import comment from "../../img/chat.svg";
import Comment from "./Comment";
import Like from "./Like";
import verify from "../../img/verify.svg";
import heart from "../../img/heart-selected.svg";
import { Link } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago';

export default function Post(props) {
  const [likes, setLikes] = useState(props.likes);
  const [likeImg, setlikeImg] = useState(null);
  const [like, setlike] = useState(null);
  const handleClickLikeImg = () => {
    if (likeImg === null) setlikeImg(true);
    else setlikeImg(!likeImg);
    handleLikeImg(true);
  };

  const handleLikeImg = (val) => {
    if (val && !like) setLikes(likes + 1);
    if (!val && like) setLikes(likes - 1);
    setlike(val);
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="content-post">
      <div className="center-post header-post">
        <Link to={"/" + props.user} className="user-post">
          {props.user_img ? (
            <img className="img-account" src={props.user_img} alt="account" />
          ) : (
            <img className="default-img" src={account} alt="account" />
          )}
          <p className="user-account">{props.user}</p>
          {props.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
        </Link>
        <div className="points" onClick={props.openOptions}>
          <div className="point"></div>
          <div className="point"></div>
          <div className="point"></div>
        </div>
      </div>
      <div className="content-img-post">
        {likeImg !== null &&
          (likeImg ? (
            <img
              className="like-img-post animation-like"
              src={heart}
              alt="corazon"
            />
          ) : (
            <img
              className="like-img-post animation-like1"
              src={heart}
              alt="corazon"
            />
          ))}
        <img
          onDoubleClick={handleClickLikeImg}
          className="img-post"
          src={props.img}
          alt="postimg"
        />
      </div>
      <div className="center-post actions-post">
        <Like like={like} setlike={handleLikeImg} />
        <img className="action" src={comment} alt="comment" />
      </div>
      <p className="center-post likes-post">
        {new Intl.NumberFormat().format(likes)} Me gusta
      </p>
      <div className="center-post description-post">
        <p>
          <a href="www.google.com" className="user-account">
            {props.user}
          </a>
          {props.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}{" "}
          <span className="text-post"> 
          {props.desc.length > 100
          ?showMore
            ?<span>{props.desc}</span>
            :
            <span>{props.desc.substring(0, 100)}... <span className="show-more" onClick={handleShowMore}>más</span></span>
          :props.desc} 
          </span>
        </p>
      </div>
      {props.comments && props.comments.length > 0 &&
        <div className="center-post">
          <Link to={"/posts/"+props.id} className="show-comments-post">
            {props.comments.length === 1 
            ?"Ver "+props.comments.length+" comentario"
            :"Ver los "+props.comments.length+"  comentarios"
            }
          </Link>
        </div>
      }
      <p className="center-post time-post"><ReactTimeAgo date={new Date(props.time)} locale="es"/></p>
      <Comment />
    </div>
  );
}
