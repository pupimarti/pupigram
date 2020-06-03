import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import NoPage from "../NoPage";
import Comment from "../Post/Comment";
import CommentsUser from "../PostId/Comment";
import PostsContext from "components/Context/AppContext";

import './css.css'
import getPost from "components/services/getPost";
import setPost from "components/services/setPost";
import Loading from "components/Loading";
import getImgUser from "components/services/getImgUser";

export default function CommentsPost() {
  const postId = useLocation().pathname.substr(10);

  const [data, setData] = useState('loading');

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

    const get_stats_post = async (post) => {
      if (post !== null) {
        const u = await getImgUser(post.user);
        if (u != null) {
          post.picture_user = u;
          post.verify = false;
        }
        setData(post);
      }
    }
    
    if(!post.picture_user)
      get_stats_post(post);
  }, [postId, posts]);


  const [commentsUser, setCommentsUser] = useState([]);
  const handleChangeCommentsUser = (c) => {
    addComment(c, "default", postId);
    setCommentsUser([...commentsUser, c]);
  };

  if(data === 'loading') return <Loading />
  if (data === null) return <NoPage />;
  return (
    <div className="content-comments-user">
      <CommentsUser
        user={data.user}
        comment={data.desc}
        time={data.time}
      />
      {data.comments &&
        data.comments.map((c, i) => {
            return (
              <CommentsUser
                key={i}
                user={c.user}
                comment={c.comment}
                time={c.time}
              />
            );
        })}
      <div className="cont-comment-user"><Comment send={handleChangeCommentsUser} focus /></div>
    </div>
  );
}
