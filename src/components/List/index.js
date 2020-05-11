import React from 'react';
import Post from '../Post';
import data from '../posts.json';
import users from '../users.json';
import './css.css';

export default function List() {
    return (
        <React.Fragment>
            {data && data.map((post) => (
                <Post 
                key={post.id}
                user={users[post.user_id].user}
                user_img={users[post.user_id].picture}
                img={post.img}
                desc={post.desc}
                likes={post.likes}
                time={post.time}
                verify={users[post.user_id].verify}
                />
            ))}
        </React.Fragment>
    )
}
