import React, {useState, useEffect, useContext} from 'react';
import UsersContext from 'components/Context/AppContext';
import './css.css';
import { useLocation } from 'react-router-dom';
import getUser from 'components/services/getUser';
import Notification from 'components/Notification';
import getPost from 'components/services/getPost';

export default function ViewFollows(props) {

    const {posts} = useContext(UsersContext);

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
        const get_user_follows = async () => {
            const user = await getUser(userPath);
                if(props.follows)
                    return user.follows;
                else
                    return user.followers;
        }
        
        const get_users = async () => {
            var users_follws = [];
            if(props.likes){
                const post = await getPost(userPath);
                users_follws = post.likes;
            }else
                users_follws = await get_user_follows();
            
            var arr_followers = [];
            for(var u of users_follws){
                arr_followers.push(u);
            };
            setFollowers(arr_followers);
        }

        if(followers === 'loading')
            get_users();

    }, [followers, userPath, setFollowers, props, posts])
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
