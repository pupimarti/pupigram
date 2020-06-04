import React, { useState, useEffect } from "react";
import "./css.css";
import account from "img/account.svg";
import comment from "img/chat.svg";
import Comment from "./Comment";
import Like from "./Like";
import verify from "img/verify.svg";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import Options from "./Options";
import Img from './Img';
import getImgUser from "components/services/getImgUser";
import likePost from "components/services/likePost";

export default function Post(props) {
  const [likes, setLikes] = useState(props.likes.length);
  const [likeImg, setlikeImg] = useState(null);
  const [like, setlike] = useState(
    props.likes.indexOf(props.profile.user) !== -1 ? "true" : "false"
  );



  const handleClickLikeImg = () => {
    if (likeImg === null) setlikeImg(true);
    else setlikeImg(!likeImg);
    handleLikeImg(true);
  };

  const handleLikeImg = async (val) => {
    if (val && (!like || like === "false")) {
      setLikes(likes + 1);
    }
    if (!val && (like || like === "true")) {
      setLikes(likes - 1);
    }
    setlike(val);
    if(!await likePost(props.profile.user, props.id, val)){
      console.log('no se pudo realizar el mg')
    }
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [commentsUser, setCommentsUser] = useState([]);
  const handleChangeCommentsUser = (c) => {
    setCommentsUser([...commentsUser, c]);
    props.addComment(c, "default", props.id);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!user){
      const get_user = async () => {
        const u = await getImgUser(props.user);
        setUser({picture: u, verify: false, user: props.user});
      }
      get_user();
    }
  }, [props.user, user, setUser]);

  return (
    <div className="content-post">
      <div className="center-post header-post">
        <Link to={"/" + props.user} className="user-post">
          {(user && user.picture) ? (
            <img className="img-account" src={user.picture} alt="account" />
          ) : (
            <img className="default-img" src={account} alt="account" />
          )}
          <p className="user-account">{props.user}</p>
          {user && user.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
        </Link>
        <Options id={props.id} />
      </div>
      <Img likeImg={likeImg} post={props.id} handleClickLikeImg={handleClickLikeImg}/>
      <div className="center-post actions-post">
        <Like like={like} setlike={handleLikeImg} />
        <Link className="action pc" to={"/posts/" + props.id}>
          <img className="action-c" src={comment} alt="comment" />
        </Link>
        <Link className="action mobile" to={"/comments/" + props.id}>
          <img className="action-c" src={comment} alt="comment" />
        </Link>
      </div>
      <Link to={"/likes/" + props.id} className="center-post likes-post">
        {new Intl.NumberFormat().format(likes)} Me gusta
      </Link>
      <div className="center-post description-post">
        <p>
          <Link to={"/" + props.user} className="user-account">
            {props.user}
          </Link>
          {props.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}{" "}
          <span className="text-post">
            {props.desc.length > 100 ? (
              showMore ? (
                <span>{props.desc}</span>
              ) : (
                <span>
                  {props.desc.substring(0, 100)}...{" "}
                  <span className="show-more" onClick={handleShowMore}>
                    más
                  </span>
                </span>
              )
            ) : (
              props.desc
            )}
          </span>
        </p>
      </div>
      {props.comments && props.comments.length > 0 && (
        <div className="center-post">
          <Link to={"/posts/" + props.id} className="show-comments-post pc">
            {props.comments.length === 1
              ? "Ver " + props.comments.length + " comentario"
              : "Ver los " + props.comments.length + "  comentarios"}
          </Link>
          <Link
            to={"/comments/" + props.id}
            className="show-comments-post mobile"
          >
            {props.comments.length === 1
              ? "Ver " + props.comments.length + " comentario"
              : "Ver los " + props.comments.length + "  comentarios"}
          </Link>
        </div>
      )}
      <div className="description-post center-post">
        {commentsUser.map((c, i) => (
          <p key={i} className="comment-user-post">
            <Link to="/default" className="user-account">
              default
            </Link>{" "}
            <span className="text-post">{c}</span>
          </p>
        ))}
      </div>
      <p className="center-post time-post ">
        <ReactTimeAgo date={new Date(props.time)} locale="es" />
      </p>
      <div className="pc">
        <Comment send={handleChangeCommentsUser} />
      </div>
    </div>
  );
}
