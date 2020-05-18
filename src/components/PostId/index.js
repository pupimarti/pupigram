import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import comment from "img/chat.svg";
import heart from "img/heart-selected.svg";
import Comment from "components/Post/Comment";
import Like from "components/Post/Like";
import NoPage from "components/NoPage";
import verify from "img/verify.svg";
import CommentUser from "./Comment";
import Options from "components/Post/Options";
import Post from "components/Post";

import "./css.css";

import getPost from "components/services/getPost";
import getUserMin from "components/services/getUserMin";
import Loading from "components/Loading";
import PostsContext from "components/Context/AppContext";
import setPost from "components/services/setPost";

export default function PostId() {
  const postId = useLocation().pathname.substr(7);

  const [data, setData] = useState("loading");

  const { posts, setPosts } = useContext(PostsContext);

  const [likes, setLikes] = useState(0);
  const [likeImg, setlikeImg] = useState(null);
  const [like, setLike] = useState(null);

  const addComment = (comment, user, idPost) => {
    var _post = getPost(parseInt(idPost), posts);
    if (_post !== null) {
      _post.comments.push({
        user,
        comment,
        time: new Date(),
      });
    }
    setPost(_post, posts, setPosts);
  };

  const setLike_context = (user, value, idPost) => {
    var _post = getPost(parseInt(idPost), posts);
    if (_post !== null) {
      var i = _post.likes.indexOf(user);
      if (!value) {
        if (i !== -1) _post.likes.splice(i, 1);
      } else if (i === -1) _post.likes.push(user);
      setPost(_post, posts, setPosts);
    }
  };

  useEffect(() => {
    const post = getPost(parseInt(postId), posts);

    if (post !== null) {
      const u = getUserMin(post.user);
      if (u != null) {
        post.picture_user = u.picture;
        post.verify = u.verify;
      }
      setData(post);
      setLike(post.likes.indexOf("default") !== -1 ? 'true' : 'false');
      setLikes(post.likes.length);
    }
  }, [postId, posts, setLike]);

  const handleClickLikeImg = () => {
    if (likeImg === null) setlikeImg(true);
    else setlikeImg(!likeImg);
    handleLikeImg(true);
  };

  const handleLikeImg = (val) => {
    if (val && (!like || like === 'false')) setLikes(likes + 1);
    if (!val && (like || like === 'true')) setLikes(likes - 1);
    setLike_context("default", val, postId);
    setLike(val);
  };
  
  const [commentsUser, setCommentsUser] = useState([]);
  const handleChangeCommentsUser = (c) => {
    addComment(c, "default", postId);
    setCommentsUser([...commentsUser, c]);
  };

  //lo guardo en un state para que no cambie en cada renderizado
  const [isMobile] = useState(window.innerWidth <= 800);

  if (data === "loading") return <Loading />;

  if (data === null) return <NoPage />;

  if (isMobile)
    return (
      <Post
        id={data.id}
        user_img={data.picture_user}
        user={data.user}
        verify={data.verify}
        img={data.img}
        desc={data.desc}
        likes={data.likes}
        time={data.time}
        comments={data.comments}
        addComment={addComment}
        setLike={setLike_context}
      />
    );
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
          {data.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
        </Link>
        <Options id={data.id} />
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
            {data.verify && (
              <img className="verify" src={verify} alt="Verificado" />
            )}
          </Link>
          <Options id={data.id} />
        </div>
        <div className="content-comments-post-id">
          <CommentUser
            user={data.user}
            picture_user={data.picture_user}
            comment={data.desc}
            time={data.time}
            verify={data.verify}
          />
          {data.comments &&
            data.comments.map((c, i) => {
              var userComment = getUserMin(c.user);
              if (userComment !== null)
                return (
                  <CommentUser
                    key={i}
                    user={userComment.user}
                    comment={c.comment}
                    picture_user={userComment.picture}
                    time={c.time}
                    verify={userComment.verify}
                  />
                );
              return null;
            })}
        </div>
        <div className="content-likes-comment-post-id">
          <div className="center-post-id actions-post">
            <Like like={like} setlike={handleLikeImg} />
            <img className="action" src={comment} alt="comment" />
          </div>
          <Link
            to={"/likes/" + data.id}
            className="center-post-id mb8 likes-post-id"
          >
            Le{likes !== 1 && "s"} gusta a{" "}
            <b>
              {new Intl.NumberFormat().format(likes)} persona
              {likes !== 1 && "s"}
            </b>
          </Link>
          <p className="time-post mb8 center-post-id">
            <ReactTimeAgo date={new Date(data.time)} locale="es" />
          </p>
          <Comment send={handleChangeCommentsUser} />
        </div>
      </div>
    </div>
  );
}
