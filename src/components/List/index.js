import React, {useState, useEffect, useContext} from 'react';
import Post from 'components/Post';
import getPosts from 'components/services/getPosts';
import Loading from 'components/Loading';
import PostsContext from 'components/Context/AppContext';

import './css.css';

export default function List() {

    const [data, setData] = useState('loading');

    const {profile} = useContext(PostsContext);

    useEffect(() => {
        const get_posts = async () => {
            var list_posts = await getPosts();
            if(list_posts){
                const p = list_posts.reverse();
                setData(p);
            }
        }
        if(data === 'loading')
            get_posts();

    }, [setData, data])
    
    if(data === 'loading') return <Loading />
    return (
        <React.Fragment>
            {data && data.map((post) => {
                return(
                    <Post 
                    profile={profile}
                    key={post.id}
                    id={post.id}
                    user={post.user}
                    img={post.img}
                    desc={post.desc}
                    likes={post.likes}
                    time={post.time}
                    comments={post.comments}
                    verify={post.verify}
                    />
                )
                })}
        </React.Fragment>
    )
}
