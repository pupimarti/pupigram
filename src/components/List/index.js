import React from 'react';
import Post from '../Post';
import data from '../posts.json';
import users from '../users-min.json';
import './css.css';

export default function List() {
    
    return (
        <React.Fragment>
            {data && data.map((post) => {
                var picture_user = "";
                var verify = false;
                for(var u of users)
                    if(u.user === post.user){
                        picture_user = u.picture;
                        verify = u.verify;
                    }
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
