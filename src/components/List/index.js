import React, {useState, useEffect, useContext} from 'react';
import Post from 'components/Post';
import getPosts from 'components/services/getPosts';
import getUserMin from 'components/services/getUserMin';
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

    useEffect(() => {
        if(data === 'loading')
            setData(getPosts(posts));
    }, [setData, data, posts])
    
    if(data === 'loading') return <Loading />
    return (
        <React.Fragment>
            {data && data.map((post) => {
                var picture_user = "";
                var verify = false;
                const user = getUserMin(post.user);
                picture_user = user.picture;
                verify = user.verify;
                return(
                    <Post 
                    key={post.id}
                    id={post.id}
                    user_img={picture_user}
                    user={post.user}
                    verify={verify}
                    img={post.img}
                    desc={post.desc}
                    likes={post.likes}
                    time={post.time}
                    comments={post.comments}
                    addComment={addComment}
                    />
                )
                })}
        </React.Fragment>
    )
}
