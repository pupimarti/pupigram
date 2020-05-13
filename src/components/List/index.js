import React, {useState, useEffect} from 'react';
import Post from 'components/Post';
import getPosts from 'components/services/getPosts';
import './css.css';
import getUserMin from 'components/services/getUserMin';

export default function List() {

    const [data, setData] = useState(null);

    useEffect(() => {
        if(data === null)
            setData(getPosts());
    }, [setData, data])
    
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
                    />
                )
                })}
        </React.Fragment>
    )
}
