import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import NoPage from "../NoPage";
import Comment from "../Post/Comment";
import CommentsUser from "../PostId/Comment";
import PostsContext from "components/Context/AppContext";

import './css.css'
import getPost from "components/services/getPost";
import setPost from "components/services/setPost";
import getUserMin from "components/services/getUserMin";

export default function CommentsPost() {
  const postId = useLocation().pathname.substr(10);

  const [data, setData] = useState(null);

  const {posts, setPosts} = useContext(PostsContext);

  const addComment = (comment, user, idPost) => {
    var _post = getPost(parseInt(idPost), posts);
    _post.comments.push({
        user,
        comment,
        time: new Date()
    });
    setPost(_post, posts, setPosts);
}

  useEffect(() => {
    var post = getPost(parseInt(postId), posts);
    if (post !== null) {
      const usermin = getUserMin(post.user);
      post.verify = usermin.verify;
      post.picture_user = usermin.picture;
      setData(post);
    }
  }, [postId, posts]);


  const [commentsUser, setCommentsUser] = useState([]);
  const handleChangeCommentsUser = (c) => {
    addComment(c, "default", postId);
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
          var userComment = getUserMin(c.user);
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
      <div className="cont-comment-user"><Comment send={handleChangeCommentsUser} focus /></div>
    </div>
  );
}
