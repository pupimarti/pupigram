import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

import "./css.css";

import posts from "../posts.json";

export default function PostId() {
  const postId = useLocation().pathname.substr(7);

  const [data, setData] = useState(null);

  useEffect(() => {
    for (var p of posts) {
      if (p.id === parseInt(postId)) setData(p);
    }
  }, [postId]);

  if (data === null)
    return (
      <div>
        <p className="nouser">Esta página no está disponible.</p>
        <p className="nouser-desc">
          Es posible que el enlace que has seguido sea incorrecto o que se haya
          eliminado la página. <Link to="/">Volver a Pupigram.</Link>
        </p>
      </div>
    );
  return (
    <div className="content-post-id">
      <img className="img-post-id" src={data.img} alt="post-img" />
      <div className="content-info-post-id">
        <div className="content-user-post-id">
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
            <p className="time-post">
              <ReactTimeAgo date={new Date(data.time)} locale="es" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
