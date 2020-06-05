import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import NoPage from "../NoPage";
import Comment from "../Post/Comment";
import CommentsUser from "../PostId/Comment";
import PostsContext from "components/Context/AppContext";

import './css.css'
import getPost from "components/services/getPost";
import Loading from "components/Loading";
import getImgUser from "components/services/getImgUser";
import commentPost from "components/services/commentPost";

export default function CommentsPost() {
  const postId = useLocation().pathname.substr(10);

  const [data, setData] = useState('loading');

  const {profile} = useContext(PostsContext);

  const addComment = async (comment) => {
    await commentPost(profile.user, data.id, comment);
  };

  useEffect(() => {
    const get_stats_post = async () => {
      let post = await getPost(postId);
      if (post !== null) {
        const u = await getImgUser(post.user);
        if (u != null) {
          post.picture_user = u;
          post.verify = false;
        }
        setData(post);
      }
    }
    
    if(data === 'loading')
      get_stats_post();
  }, [postId, data]);


  const [commentsUser, setCommentsUser] = useState([]);
  const handleChangeCommentsUser = (c) => {
    addComment(c);
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
                time={c.time.toDate()}
              />
            );
        })}
        {commentsUser &&
        commentsUser.map((c, i) => {
            return (
              <CommentsUser
                key={i}
                user={profile.user}
                comment={c}
                time={new Date()}
              />
            );
        })}
      <div className="cont-comment-user"><Comment send={handleChangeCommentsUser} focus /></div>
    </div>
  );
}
