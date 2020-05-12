import React, { useState, useEffect } from "react";
import posts from "../posts.json";
import users from "../users-min.json";
import { useLocation } from "react-router-dom";
import NoPage from "../NoPage";
import Comment from "../Post/Comment";
import CommentsUser from "../PostId/Comment";

import './css.css'

export default function CommentsPost() {
  const postId = useLocation().pathname.substr(10);

  const [data, setData] = useState(null);

  useEffect(() => {
    var post = null;
    for (var p of posts)
      if (p.id === parseInt(postId)) {
        post = p;
      }
    if (post !== null) {
      for (var u of users)
        if (u.user === post.user) {
          post.picture_user = u.picture;
          post.verify = u.verify;
        }
      setData(post);
    }
  }, [postId]);

  const getUser = (name) => {
    for (var u of users) if (u.user === name) return u;
    return null;
  };

  const [commentsUser, setCommentsUser] = useState([]);
  const handleChangeCommentsUser = (c) => {
    setCommentsUser([...commentsUser, c]);
  };

  if (data === null) return <NoPage />;
  return (
    <div className="content-comments-user">
      <CommentsUser
        user={data.user}
        picture_user={data.picture_user}
        comment={data.desc}
        time={data.time}
        verify={data.verify}
      />
      {data.comments &&
        data.comments.map((c, i) => {
          var userComment = getUser(c.user);
          if (userComment !== null)
            return (
              <CommentsUser
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
      {commentsUser.map((c, i) => (
        <CommentsUser
          key={i}
          user={"anónimo"}
          comment={c}
          picture_user={""}
          time={new Date()}
          verify={false}
        />
      ))}
      <div className="cont-comment-user"><Comment send={handleChangeCommentsUser} focus /></div>
    </div>
  );
}
