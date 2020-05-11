import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import comment from "../../img/chat.svg";
import heart from "../../img/heart-selected.svg";
import Comment from '../Post/Comment';
import Like from '../Post/Like';
import NoPage from '../NoPage';

import "./css.css";

import posts from "../posts.json";
import users from '../users-min.json';

export default function PostId() {
  const postId = useLocation().pathname.substr(7);

  const [data, setData] = useState(null);

  useEffect(() => {
    var post = null;
    for (var p of posts)
      if (p.id === parseInt(postId)){
        post = p;
      }
    if(post !== null){
      for(var u of users)
        if(u.user === post.user){
          post.picture_user=u.picture
          post.verify=u.verify
        }
        setData(post);
        setLikes(post.likes);
    }
    
  }, [postId]);

  const [likes, setLikes] = useState(0);
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

  if (data === null)
    return <NoPage />
    
  return (
    <div className="content-post-id">
      <div className="content-user-post-id center-post-id mobile">
          <Link to={"/" + data.user} className="content-img-username">
            <img
              className="img-account"
              src={data.picture_user}
              alt="profile_picture"
            />
            <p className="user-account">{data.user}</p>
          </Link>
          <div className="points">
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>
      <div className="content-img-post-id">
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
          className="img-post-id"
          src={data.img}
          alt="postimg"
        />
      </div>
      <div className="content-info-post-id">
        <div className="content-user-post-id center-post-id pc">
          <Link to={"/" + data.user} className="content-img-username">
            <img
              className="img-account"
              src={data.picture_user}
              alt="profile_picture"
            />
            <p className="user-account">{data.user}</p>
          </Link>
          <div className="points">
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>
        <div className="content-comments-post-id">
        <div className="content-comment-post-id center-post-id">
            <div className="content-user-post-id cpi">
              <Link to={"/" + data.user} className="content-img-username">
                <img
                  className="img-account"
                  src={data.picture_user}
                  alt="profile_picture"
                />
              </Link>
              <p className="user-account">
                <Link to={"/" + data.user}>{data.user}</Link>&nbsp;
                <span>{data.desc}</span>
              </p>
            </div>
              <p className="time-post">
                <ReactTimeAgo date={new Date(data.time)} locale="es" />
              </p>
          </div>
          <div className="content-comment-post-id center-post-id">
            <div className="content-user-post-id cpi">
              <Link to={"/" + data.user} className="content-img-username">
                <img
                  className="img-account"
                  src={data.picture_user}
                  alt="profile_picture"
                />
              </Link>
              <p className="user-account">
                <Link to={"/" + data.user}>{data.user}</Link>&nbsp;
                <span>{data.desc}</span>
              </p>
            </div>
              <p className="time-post">
                <ReactTimeAgo date={new Date(data.time)} locale="es" />
              </p>
          </div>
        </div>
        <div className="content-likes-comment-post-id">
          <div className="center-post-id actions-post">
            <Like like={like} setlike={handleLikeImg} />
            <img className="action" src={comment} alt="comment" />
          </div>
          <p className="center-post-id mb8 likes-post-id">
            Les gusta a <b>{new Intl.NumberFormat().format(data.likes)} personas</b>
          </p>
          <p className="time-post mb8 center-post-id">
                <ReactTimeAgo date={new Date(data.time)} locale="es" />
          </p>
          <Comment />
        </div>
      </div>
    </div>
  );
}
