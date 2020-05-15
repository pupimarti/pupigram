import React, {useState, useEffect, useContext} from 'react';
import UsersContext from 'components/Context/AppContext';
import './css.css';
import { useLocation } from 'react-router-dom';
import getUser from 'components/services/getUser';
import Notification from 'components/Notification';
import getUserMin from 'components/services/getUserMin';

export default function ViewFollows(props) {

    const {users} = useContext(UsersContext);

    const [followers, setFollowers] = useState('loading');

    const path = useLocation().pathname;

    var userPath = path;

    if(props.follows)
        userPath = path.substr(9);
    else
        userPath = path.substr(11);
    

    useEffect(() => {
        if(followers === 'loading'){
            const user = getUser(userPath, users);
            var users_follws = [];
            if(props.follows)
                users_follws = user.follows;
            else
                users_follws = user.followers;
            var arr_followers = [];
            for(var u of users_follws){
                var user_u = getUserMin(u);
                arr_followers.push(user_u);
            };
            setFollowers(arr_followers);
        }
    }, [followers, userPath, users, setFollowers, props])
    return(
    <div className="content-viewfollows">
        <h5 className="title-viewfollows">
            {props.follows
            ?"Siguiendo"
            :"Seguidores"}
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
