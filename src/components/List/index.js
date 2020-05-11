import React from 'react';
import Post from '../Post';
import data from '../posts.json';
import './css.css';

export default function List() {
    return (
        <React.Fragment>
            {data && data.map((post) => (
                <Post 
                key={post.id}
                user={post.user}
                user_img={post.picture_user}
                img={post.img}
                desc={post.desc}
                likes={post.likes}
                time={post.time}
                verify={post.verify}
                comments={post.comments}
                />
            ))}
        </React.Fragment>
    )
}
