import React, { useState, useEffect } from "react";
import verify from "../../img/verify.svg";
import posts_icon from "./posts.svg";
import users from '../users.json';
import posts from '../posts.json';
import {useLocation, Link} from 'react-router-dom';
import NoPage from '../NoPage';
import "./css.css";

export default function User() {
  const userPath = useLocation().pathname.substr(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    for(var u of users){
      if(u.user === userPath)
        setData(u);
    }
  }, [userPath])

  if(data === null)
    return <NoPage />
  return (
    <div>
      <header className="header-user">
        <div className="content-perfil-img">
          <img
            className="perfil-img"
            src={data.picture}
            alt="perfil_picture"
          />
        </div>
        <div className="content-info-user">
          <div className="info-user">
            <h2 className="username-user">{data.user}</h2>
            {data.verify && 
              <img className="verify" src={verify} alt="verify" />
            }
            <div className="points">
              <div className="point"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
          <div className="info-user stats pc">
            <p className="stats-user">
              <b>{data.posts.length}</b> publicaciones
            </p>
            <p className="stats-user">
              <b>{data.followers.length}</b> seguidores
            </p>
            <p className="stats-user">
              <b>{data.follows.length}</b> seguidos
            </p>
          </div>
          <div className="pc">
            <h4 className="username-name">{data.name}</h4>
            <p className="description-user">
              {data.desc}
            </p>
            <a className="web-user" href={"https://" + data.web} target="_blank" rel="noopener noreferrer">
              {data.web}
            </a>
          </div>
        </div>
      </header>
      <div className="content-user-description mobile">
            <h4 className="username-name">{data.name}</h4>
            <p className="description-user">
              {data.desc}
            </p>
            <a className="web-user" href={data.web} target="_blank" rel="noopener noreferrer">
              {data.web}
            </a>
          </div>
      <div className="info-user stats mobile">
            <p className="stats-user">
              <b>{data.posts.length}</b><br/>publicaciones
            </p>
            <p className="stats-user">
              <b>{data.followers.length}</b><br/>seguidores
            </p>
            <p className="stats-user">
              <b>{data.follows.length}</b><br/>seguidos
            </p>
      </div>
      <section className="posts-user">
        <div className="posts-user-public">
          <div className="content-public">
            <img className="icon" src={posts_icon} alt="Publicaciones" />
            <p className="pc">PUBLICACIONES</p>
          </div>
        </div>
        {data.posts && data.posts.map((post) => (
          <Link 
          key={post} 
          to={"/posts/"+posts[post].id}
          className="post-user">
            <img
            src={posts[post].img}
            alt="post"
          />
          </Link>
        ))}
      </section>
      
      {data.posts && data.posts.length === 0 &&
        <p className="text-center">Aún no hay publicaciones subidas.</p>}
    </div>
  );
}
