import React, {useState, useEffect, useContext} from 'react';
import UsersContext from 'components/Context/AppContext';
import './css.css';
import { useLocation } from 'react-router-dom';
import getUser from 'components/services/getUser';
import Notification from 'components/Notification';
import getPost from 'components/services/getPost';

export default function ViewFollows(props) {

    const {users, posts} = useContext(UsersContext);

    const [followers, setFollowers] = useState('loading');

    const path = useLocation().pathname;

    var userPath = path;

    if(props.follows)
        userPath = path.substr(9);
    else if(props.followers)
        userPath = path.substr(11);
    else 
        userPath = path.substr(7) //likes post
    

    useEffect(() => {
        if(followers === 'loading'){
            var users_follws = [];
            if(props.likes){
                const post = getPost(parseInt(userPath), posts);
                users_follws = post.likes;
            }else{
                const user = getUser(userPath, users);
                if(props.follows)
                    users_follws = user.follows;
                else
                    users_follws = user.followers;
            }
            var arr_followers = [];
            for(var u of users_follws){
                arr_followers.push(u);
            };
            setFollowers(arr_followers);
        }
    }, [followers, userPath, users, setFollowers, props, posts])
    return(
    <div className="content-viewfollows">
        <h5 className="title-viewfollows">
            {props.follows && "Seguidos"}
            {props.followers && "Seguidores"}
            {props.likes && "Me gusta"}
        </h5>
        {followers && Array.isArray(followers) 
        && followers.map((f, i) => (
            <Notification  
                key={i}
                type="name"
                user={f}
            />)
        )}
    </div>)
}
