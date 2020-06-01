import React, { useState, useEffect, useContext } from "react";
import verify from "img/verify.svg";
import posts_icon from "./posts.svg";
import { useLocation, Link } from "react-router-dom";
import NoPage from "../NoPage";
import "./css.css";
import getUser from "components/services/getUser";
import Loading from "components/Loading";
import UserContext from 'components/Context/AppContext';
import ButtonFollow from 'components/ButtonFollow';
import getPosts from "components/services/getPosts";

export default function User(props) {

  const {posts, profile} = useContext(UserContext);

  const userPath = useLocation().pathname.substr(1);
  const [data, setData] = useState('loading');

  const [sumFollowers, setSumFollowers] = useState(0);
  const handleSetFollowers = (value) => {
      const prevState = sumFollowers;
      if(value)
        setSumFollowers(prevState + 1);
      else  
        setSumFollowers(prevState + -1);
  }

  useEffect(() => {
        const getData = async () => {
          var user = null 
          if(userPath === profile.user)
          user = profile;
          else
          user = await getUser(userPath);
          if(user !== null){
            const postsUser = getPosts(posts, user.user);
            user.posts = postsUser.reverse();
            setData(user);
          }else{
            setData(null);
          }
        }

      if(data && data.user !== userPath)
        setData('loading');

      if(data === 'loading')
        getData();
      
  }, [userPath, posts, data, profile]);

  

  if (data === null) return <NoPage />;
  const stats = () => {
    if (data.posts) {
      return (
        <React.Fragment>
          <p className="stats-user no-select">
            <b>{data.posts.length}</b> publicacion
            {data.posts.length !== 1 && "es"}
          </p>
          <Link to={"/followers/"+data.user} className="stats-user no-select">
            <b>{data.followers.length + sumFollowers}</b> seguidor
            {(data.followers.length + sumFollowers) !== 1 && "es"}
          </Link>
          <Link to={"/follows/"+data.user} className="stats-user no-select">
            <b>{data.follows.length}</b> seguido
            {data.follows.length !== 1 && "s"}
          </Link>
        </React.Fragment>
      );
    }
  };

  if (data === 'loading') return <Loading />;
  return (
    <div>
      <header className="header-user">
        <div className="content-perfil-img">
          <img className="perfil-img" src={data.picture} alt="perfil_picture" />
        </div>
        <div className="content-info-user">
          <div className="info-user">
            <h2 className="username-user">{data.user}</h2>
            {data.verify && (
              <img className="verify" src={verify} alt="verify" />
            )}
            <div className="points">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
              </div>
            <div className="content-follow-points">
            {profile && profile.user === userPath &&
            <button className="button follow" onClick={() => props.handleLogoutUser()}>Cerrar sesión</button>
            }
            <ButtonFollow user={profile.user} user_follow={data.user} setFollowers={handleSetFollowers}/>

          </div>
            </div>
          <div className="info-user stats pc">{stats()}</div>
          <div className="pc">
            <h4 className="username-name">{data.name}</h4>
            <p className="description-user">{data.desc}</p>
            <a
              className="web-user"
              href={"https://" + data.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.web}
            </a>
          </div>
        </div>
      </header>
      <div className="content-user-description mobile">
        <h4 className="username-name">{data.name}</h4>
        <p className="description-user">{data.desc}</p>
        <a
          className="web-user"
          href={data.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.web}
        </a>
      </div>
      <div className="info-user stats mobile">{stats()}
      </div>
      <section className="posts-user">
        <div className="posts-user-public">
          <div className="content-public">
            <img className="icon" src={posts_icon} alt="Publicaciones" />
            <p className="pc">PUBLICACIONES</p>
          </div>
        </div>
        {data.posts &&
          data.posts.map((post) => {
            return (
            <Link
              key={post.id}
              to={"/posts/" + post.id}
              className="post-user"
            >
              <img src={post.img[0]} alt="post" />
            </Link>
          )})}
      </section>

      {data.posts && data.posts.length === 0 && (
        <p className="text-center">Aún no hay publicaciones subidas.</p>
      )}
    </div>
  );
}
