import React, {useState, useEffect, useContext} from 'react';
import Post from 'components/Post';
import getPosts from 'components/services/getPosts';
import Loading from 'components/Loading';
import PostsContext from 'components/Context/AppContext';

import './css.css';
import getPost from 'components/services/getPost';
import setPost from 'components/services/setPost';

export default function List() {

    const [data, setData] = useState('loading');

    const {posts, setPosts} = useContext(PostsContext);

    const addComment = (comment, user, idPost) => {
        var _post = getPost(idPost, posts);
        _post.comments.push({
            user,
            comment,
            time: new Date()
        });
        setPost(_post, posts, setPosts);
    }

    const setLike = (user, value, idPost) => {
        var _post = getPost(parseInt(idPost), posts);
        if (_post !== null) {
          var i = _post.likes.indexOf(user);
          if (!value) {
            if (i !== -1) _post.likes.splice(i, 1);
          } else if (i === -1) _post.likes.push(user);
          setPost(_post, posts, setPosts);
        }
    }

    useEffect(() => {
        const get_posts = async () => {
            var list_posts = await getPosts(posts);
            if(list_posts){
                const p = list_posts.reverse();
                setData(p);
            }
        }
        if(data === 'loading')
            get_posts();

    }, [setData, data, posts])
    
    if(data === 'loading') return <Loading />
    return (
        <React.Fragment>
            {data && data.map((post) => {
                return(
                    <Post 
                    key={post.id}
                    id={post.id}
                    user={post.user}
                    img={post.img}
                    desc={post.desc}
                    likes={post.likes}
                    time={post.time}
                    comments={post.comments}
                    addComment={addComment}
                    setLike={setLike}
                    />
                )
                })}
        </React.Fragment>
    )
}
